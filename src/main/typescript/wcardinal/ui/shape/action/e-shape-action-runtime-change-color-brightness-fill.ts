/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";

export class EShapeActionRuntimeChangeColorBrightnessFill extends EShapeActionRuntimeChangeColorBrightness {
	constructor( value: EShapeActionValueChangeColorBrightness ) {
		super( value, EShapeRuntimeReset.COLOR_FILL );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			this.set( shape, runtime, time, shape.fill, EShapeActionBases.toBaseFill( shape, runtime ) );
		}
	}
}
