/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeTransformRotate } from "./e-shape-action-runtime-transform-rotate";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";

export class EShapeActionRuntimeTransformRotateAbsolute extends EShapeActionRuntimeTransformRotate {
	constructor(value: EShapeActionValueTransformRotate) {
		super(value, EShapeRuntimeReset.ROTATION | EShapeRuntimeReset.POSITION);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const amount = this.amount(shape, time, EShapeActionEnvironment);
			const transform = shape.transform;
			const writtenRotation = !!(runtime.written & EShapeRuntimeReset.ROTATION);
			const oldRotation = writtenRotation ? transform.rotation : runtime.rotation;
			transform.rotation = amount;
			runtime.written |= EShapeRuntimeReset.ROTATION;
			this.adjustPosition(shape, runtime, oldRotation, amount, this.originX, this.originY);
		}
	}
}
