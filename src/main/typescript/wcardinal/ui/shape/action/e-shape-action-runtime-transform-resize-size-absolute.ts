/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";

export class EShapeActionRuntimeTransformResizeSizeAbsolute extends EShapeActionRuntimeTransformResize {
	protected originX: number;
	protected originY: number;

	constructor( value: EShapeActionValueTransformResize ) {
		super( value, EShapeRuntimeReset.SIZE );
		this.originX = value.originX;
		this.originY = value.originY;
		this.reset |= EShapeRuntimeReset.POSITION;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			const sizeAbsolute = EShapeSizes.toNormalized( this.size( shape, time ) );
			const size = shape.size;
			const writtenWidth = ( (runtime.written & EShapeRuntimeReset.WIDTH) !== 0 );
			const writtenHeight = ( (runtime.written & EShapeRuntimeReset.HEIGHT) !== 0 );
			const oldSizeX = (writtenWidth ? size.x : runtime.size.x);
			const oldSizeY = (writtenHeight ? size.y : runtime.size.y);
			size.set( sizeAbsolute, sizeAbsolute );
			runtime.written |= EShapeRuntimeReset.SIZE;
			this.adjustPosition(
				shape, runtime,
				oldSizeX - size.x, oldSizeY - size.y,
				this.originX, this.originY
			);
		}
	}
}
