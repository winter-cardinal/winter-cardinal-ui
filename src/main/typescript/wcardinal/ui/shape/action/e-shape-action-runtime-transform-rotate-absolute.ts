/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformRotate } from "./e-shape-action-runtime-transform-rotate";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";

export class EShapeActionRuntimeTransformRotateAbsolute extends EShapeActionRuntimeTransformRotate {
	constructor( value: EShapeActionValueTransformRotate ) {
		super( value, EShapeRuntimeReset.ROTATION );
		this.reset |= EShapeRuntimeReset.POSITION;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			const amount = this.amount( shape, time );
			const transform = shape.transform;
			const writtenRotation = ( (runtime.written & EShapeRuntimeReset.ROTATION) !== 0 );
			const oldRotation = (writtenRotation ? transform.rotation : runtime.rotation);
			transform.rotation = amount;
			runtime.written |= EShapeRuntimeReset.ROTATION;
			this.adjustPosition(
				shape, runtime,
				oldRotation, amount,
				this.originX, this.originY
			);
		}
	}
}
