/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { toSizeNormalized } from "../variant/to-size-normalized";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";

export class EShapeActionRuntimeTransformResizeSizeAbsolute extends EShapeActionRuntimeTransformResize {
	protected originX: number;
	protected originY: number;

	constructor(value: EShapeActionValueTransformResize) {
		super(value, EShapeRuntimeReset.SIZE | EShapeRuntimeReset.POSITION);
		this.originX = value.originX;
		this.originY = value.originY;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const sizeAbsolute = toSizeNormalized(this.size(shape, time, EShapeActionEnvironment));
			const size = shape.size;
			const writtenWidth = !!(runtime.written & EShapeRuntimeReset.WIDTH);
			const writtenHeight = !!(runtime.written & EShapeRuntimeReset.HEIGHT);
			const oldSizeX = writtenWidth ? size.x : runtime.sizeX;
			const oldSizeY = writtenHeight ? size.y : runtime.sizeY;
			size.set(sizeAbsolute, sizeAbsolute);
			runtime.written |= EShapeRuntimeReset.SIZE;
			this.adjustPosition(
				shape,
				runtime,
				oldSizeX - size.x,
				oldSizeY - size.y,
				this.originX,
				this.originY
			);
		}
	}
}
