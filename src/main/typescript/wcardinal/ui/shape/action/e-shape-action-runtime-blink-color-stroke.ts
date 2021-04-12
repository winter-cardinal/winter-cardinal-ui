/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";

export class EShapeActionRuntimeBlinkColorStroke extends EShapeActionRuntimeBlink {
	protected color: number;
	protected alpha: number;

	constructor(value: EShapeActionValueBlink) {
		super(value, EShapeRuntimeReset.COLOR_STROKE);
		this.color = value.color;
		this.alpha = value.alpha;
	}

	protected toOn(shape: EShape, runtime: EShapeRuntime): void {
		shape.stroke.set(undefined, this.color, this.alpha);
		runtime.written |= this.reset;
	}
}
