/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";

export class EShapeActionRuntimeTransformMoveLeftOrRight extends EShapeActionRuntimeTransformMove {
	constructor(value: EShapeActionValueTransformMove) {
		super(value, EShapeRuntimeReset.POSITION);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const amount = this.amount(shape, time, EShapeActionEnvironment);
			const transform = shape.transform;
			const position = transform.position;
			const writtenPositionX = !!(runtime.written & EShapeRuntimeReset.POSITION_X);
			const writtenPositionY = !!(runtime.written & EShapeRuntimeReset.POSITION_Y);
			const oldPositionX = writtenPositionX ? position.x : runtime.x;
			const oldPositionY = writtenPositionY ? position.y : runtime.y;
			shape.updateTransform();
			const localTransform = transform.localTransform;
			position.set(
				oldPositionX + localTransform.a * amount,
				oldPositionY + localTransform.b * amount
			);
			runtime.written |= this.reset;
		}
	}
}
