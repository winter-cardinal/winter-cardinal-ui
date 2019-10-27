/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";

export class EShapeActionRuntimeBlinkOpacity extends EShapeActionRuntimeBlink {
	constructor( value: EShapeActionValueBlink ) {
		super( value, EShapeRuntimeReset.COLOR_FILL_AND_STROKE );
	}

	protected toOn( shape: EShape, runtime: EShapeRuntime ): void {
		const fill = EShapeActionBases.toBaseFill( shape, runtime );
		shape.fill.set(
			undefined,
			fill.color,
			fill.alpha * 0.5
		);

		const stroke = EShapeActionBases.toBaseStroke( shape, runtime );
		shape.stroke.set(
			undefined,
			stroke.color,
			stroke.alpha * 0.5
		);

		runtime.written |= this.reset;
	}
}
