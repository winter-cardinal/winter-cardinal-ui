/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";

export class EShapeActionRuntimeChangeColorBrightnessAll extends EShapeActionRuntimeChangeColorBrightness {
	constructor( value: EShapeActionValueChangeColorBrightness ) {
		super( value, EShapeRuntimeReset.COLOR );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			this.setAll(
				shape, runtime, time,
				shape.fill,
				shape.stroke,
				shape.text,
				shape.text.outline,
				EShapeActionBases.toBaseFill( shape, runtime ),
				EShapeActionBases.toBaseStroke( shape, runtime ),
				EShapeActionBases.toBaseText( shape, runtime ),
				EShapeActionBases.toBaseTextOutline( shape, runtime )
			);
		}
	}
}
