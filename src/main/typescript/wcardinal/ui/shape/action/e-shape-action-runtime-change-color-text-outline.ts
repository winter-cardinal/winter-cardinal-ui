/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toBaseTextOutline } from "./e-shape-action-color";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
import { EShapeActionValueChangeColor } from "./e-shape-action-value-change-color";

export class EShapeActionRuntimeChangeColorTextOutline extends EShapeActionRuntimeChangeColor {
	constructor( value: EShapeActionValueChangeColor ) {
		super( value, EShapeRuntimeReset.COLOR_TEXT_OUTLINE );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			this.set( shape, runtime, time, shape.text.outline, toBaseTextOutline( shape, runtime ) );
		}
	}
}
