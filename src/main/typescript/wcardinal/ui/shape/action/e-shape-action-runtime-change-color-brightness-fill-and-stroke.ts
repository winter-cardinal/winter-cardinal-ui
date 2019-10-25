/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toBaseFill, toBaseStroke } from "./e-shape-action-color";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";

export class EShapeActionRuntimeChangeColorBrightnessFillAndStroke extends EShapeActionRuntimeChangeColorBrightness {
	constructor( value: EShapeActionValueChangeColorBrightness ) {
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
