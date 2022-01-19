/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toSizeNormalized } from "../variant/to-size-normalized";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";

export class EShapeActionRuntimeTransformResizeWidthAbsolute extends EShapeActionRuntimeTransformResize {
	protected origin: number;

	constructor(value: EShapeActionValueTransformResize) {
		super(value, EShapeRuntimeReset.WIDTH);
		this.origin = value.originX;
		this.reset |= EShapeRuntimeReset.POSITION;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time)) {
			const sizeAbsolute = this.size(shape, time);
			const size = shape.size;
			const writtenWidth = !!(runtime.written & EShapeRuntimeReset.WIDTH);
			const oldSizeX = writtenWidth ? size.x : runtime.size.x;
			size.x = toSizeNormalized(sizeAbsolute);
			runtime.written |= EShapeRuntimeReset.WIDTH;
			this.adjustPosition(shape, runtime, oldSizeX - size.x, 0, this.origin, 0.5);
		}
	}
}
