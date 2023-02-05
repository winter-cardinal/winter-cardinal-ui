/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";

export class EShapeActionRuntimeTransformRotate extends EShapeActionRuntimeConditional {
	protected originY: number;
	protected originX: number;
	protected readonly amount: EShapeActionExpression<number>;

	constructor(value: EShapeActionValueTransformRotate, reset: EShapeRuntimeReset) {
		super(value, reset);
		this.originX = value.originX;
		this.originY = value.originY;
		this.amount = EShapeActionExpressions.ofNumber(`(${value.amount}) * (Math.PI / 180)`);
	}

	protected adjustPosition(
		shape: EShape,
		runtime: EShapeRuntime,
		oldRotation: number,
		newRotation: number,
		originX: number,
		originY: number
	): void {
		const writtenWidth = !!(runtime.written & EShapeRuntimeReset.WIDTH);
		const writtenHeight = !!(runtime.written & EShapeRuntimeReset.HEIGHT);
		const dx = (-0.5 + originX) * (writtenWidth ? shape.size.x : runtime.sizeX);
		const dy = (-0.5 + originY) * (writtenHeight ? shape.size.y : runtime.sizeY);
		const s = Math.sin(oldRotation) - Math.sin(newRotation);
		const c = Math.cos(oldRotation) - Math.cos(newRotation);
		const position = shape.transform.position;
		const writtenPositionX = !!(runtime.written & EShapeRuntimeReset.POSITION_X);
		const writtenPositionY = !!(runtime.written & EShapeRuntimeReset.POSITION_Y);
		const oldPositionX = writtenPositionX ? position.x : runtime.x;
		const oldPositionY = writtenPositionY ? position.y : runtime.y;
		runtime.written |= EShapeRuntimeReset.POSITION;
		position.set(oldPositionX + dx * c - dy * s, oldPositionY + dx * s + dy * c);
	}
}
