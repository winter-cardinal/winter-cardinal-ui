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

export class EShapeActionRuntimeTransformResizeWidthRelative extends EShapeActionRuntimeTransformResize {
	protected origin: number;

	constructor(value: EShapeActionValueTransformResize) {
		super(value, EShapeRuntimeReset.WIDTH | EShapeRuntimeReset.POSITION);
		this.origin = value.originX;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const sizeRelative = this.size(shape, time, EShapeActionEnvironment);
			const size = shape.size;
			const writtenWidth = !!(runtime.written & EShapeRuntimeReset.WIDTH);
			const oldSizeX = writtenWidth ? size.x : runtime.sizeX;
			size.x = toSizeNormalized(oldSizeX * sizeRelative);
			runtime.written |= EShapeRuntimeReset.WIDTH;
			this.adjustPosition(shape, runtime, oldSizeX - size.x, 0, this.origin, 0.5);
		}
	}
}
