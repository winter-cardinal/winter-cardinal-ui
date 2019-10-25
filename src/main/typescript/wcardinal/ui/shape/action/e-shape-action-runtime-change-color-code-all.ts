/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toBaseFill, toBaseStroke, toBaseText, toBaseTextOutline } from "./e-shape-action-color";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";

export class EShapeActionRuntimeChangeColorCodeAll extends EShapeActionRuntimeChangeColorCode {
	constructor( value: EShapeActionValueChangeColorCode ) {
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
				toBaseFill( shape, runtime ),
				toBaseStroke( shape, runtime ),
				toBaseText( shape, runtime ),
				toBaseTextOutline( shape, runtime )
			);
		}
	}
}
