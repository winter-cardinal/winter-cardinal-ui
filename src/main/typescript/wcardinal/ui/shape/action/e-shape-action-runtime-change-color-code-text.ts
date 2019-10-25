/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toBaseText } from "./e-shape-action-color";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";

export class EShapeActionRuntimeChangeColorCodeText extends EShapeActionRuntimeChangeColorCode {
	constructor( value: EShapeActionValueChangeColorCode ) {
		super( value, EShapeRuntimeReset.COLOR_TEXT );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			this.set( shape, runtime, time, shape.text, toBaseText( shape, runtime ) );
		}
	}
}
