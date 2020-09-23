/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";

export class EShapeActionRuntimeTransformMoveForwardOrBackward extends EShapeActionRuntimeTransformMove {
	constructor( value: EShapeActionValueTransformMove ) {
		super( value, EShapeRuntimeReset.POSITION );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			const amount = this.amount( shape, time );
			const transform = shape.transform;
			const position = transform.position;
			const writtenPositionX = ( (runtime.written & EShapeRuntimeReset.POSITION_X) !== 0 );
			const writtenPositionY = ( (runtime.written & EShapeRuntimeReset.POSITION_Y) !== 0 );
			const oldPositionX = ( writtenPositionX ? position.x : runtime.x );
			const oldPositionY = ( writtenPositionY ? position.y : runtime.y );
			shape.updateTransform();
			const localTransform = shape.transform.localTransform;
			position.set( oldPositionX - localTransform.c * amount, oldPositionY - localTransform.d * amount );
			runtime.written |= this.reset;
		}
	}
}
