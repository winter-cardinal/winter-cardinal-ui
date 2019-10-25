/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toBaseFill, toBaseStroke } from "./e-shape-action-color";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";

export class EShapeActionRuntimeChangeColorCodeFillAndStroke extends EShapeActionRuntimeChangeColorCode {
	constructor( value: EShapeActionValueChangeColorCode ) {
		super( value, EShapeRuntimeReset.COLOR_FILL_AND_STROKE );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			this.sets(
				shape, runtime, time,
				shape.fill,
				shape.stroke,
				toBaseFill( shape, runtime ),
				toBaseStroke( shape, runtime )
			);
		}
	}
}
