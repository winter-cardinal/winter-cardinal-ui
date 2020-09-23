/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";

export class EShapeActionRuntimeTransformMoveRelativeX extends EShapeActionRuntimeTransformMove {
	constructor( value: EShapeActionValueTransformMove ) {
		super( value, EShapeRuntimeReset.POSITION_X );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			const amount = this.amount( shape, time );
			const writtenPositionX = ( (runtime.written & EShapeRuntimeReset.POSITION_X) !== 0 );
			const position = shape.transform.position;
			const oldPositionX = ( writtenPositionX ? position.x : runtime.x );
			position.x = oldPositionX + amount;
			runtime.written |= this.reset;
		}
	}
}
