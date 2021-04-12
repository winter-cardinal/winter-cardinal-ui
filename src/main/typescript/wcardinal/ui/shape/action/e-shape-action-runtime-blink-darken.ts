/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";

export class EShapeActionRuntimeBlinkDarken extends EShapeActionRuntimeBlink {
	constructor(value: EShapeActionValueBlink) {
		super(value, EShapeRuntimeReset.COLOR);
	}

	protected toOn(shape: EShape, runtime: EShapeRuntime): void {
		const fill = EShapeActionBases.toBaseFill(shape, runtime);
		shape.fill.set(undefined, UtilRgb.darken(fill.color, 0.5), fill.alpha);

		const stroke = EShapeActionBases.toBaseStroke(shape, runtime);
		shape.stroke.set(undefined, UtilRgb.darken(stroke.color, 0.5), stroke.alpha);

		const text = EShapeActionBases.toBaseText(shape, runtime);
		shape.text.set(undefined, UtilRgb.darken(text.color, 0.5), text.alpha);

		const outline = EShapeActionBases.toBaseTextOutline(shape, runtime);
		shape.text.outline.set(undefined, UtilRgb.darken(outline.color, 0.5), outline.alpha);

		runtime.written |= this.reset;
	}
}
