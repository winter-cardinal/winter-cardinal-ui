/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toBaseText } from "./e-shape-action-color";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
import { EShapeActionValueChangeColor } from "./e-shape-action-value-change-color";

export class EShapeActionRuntimeChangeColorText extends EShapeActionRuntimeChangeColor {
	constructor( value: EShapeActionValueChangeColor ) {
		super( value, EShapeRuntimeReset.COLOR_TEXT );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			this.set( shape, runtime, time, shape.text, toBaseText( shape, runtime ) );
		}
	}
}
