/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";

export class EShapeActionRuntimeTransformResizeHeightRelative extends EShapeActionRuntimeTransformResize {
	protected origin: number;

	constructor(value: EShapeActionValueTransformResize) {
		super(value, EShapeRuntimeReset.HEIGHT);
		this.origin = value.originY;
		this.reset |= EShapeRuntimeReset.POSITION;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time)) {
			const sizeRelative = this.size(shape, time);
			const size = shape.size;
			const writtenHeight = !!(runtime.written & EShapeRuntimeReset.HEIGHT);
			const oldSizeY = writtenHeight ? size.y : runtime.size.y;
			size.y = EShapeSizes.toNormalized(oldSizeY * sizeRelative);
			runtime.written |= EShapeRuntimeReset.HEIGHT;
			this.adjustPosition(shape, runtime, 0, oldSizeY - size.y, 0.5, this.origin);
		}
	}
}
