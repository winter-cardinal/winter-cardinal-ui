/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";

const amountDefault = (): number => 0;

export class EShapeActionRuntimeTransformRotate extends EShapeActionRuntimeConditional {
	protected originY: number;
	protected originX: number;
	protected readonly amount: EShapeActionExpression<number>;

	constructor( value: EShapeActionValueTransformRotate, reset: EShapeRuntimeReset ) {
		super( value, reset );
		this.originX = value.originX;
		this.originY = value.originY;
		this.amount = EShapeActionExpressions.from( `(${value.amount}) * (Math.PI / 180)`, amountDefault, "0" );
	}

	protected adjustPosition(
		shape: EShape, runtime: EShapeRuntime,
		oldRotation: number, newRotation: number,
		originX: number, originY: number
	): void {
		const writtenWidth = ( (runtime.written & EShapeRuntimeReset.WIDTH) !== 0 );
		const writtenHeight = ( (runtime.written & EShapeRuntimeReset.HEIGHT) !== 0 );
		const dx = (-0.5 + originX) * (writtenWidth ? shape.size.x : runtime.size.x);
		const dy = (-0.5 + originY) * (writtenHeight ? shape.size.y : runtime.size.y);
		const s = Math.sin( oldRotation ) - Math.sin( newRotation );
		const c = Math.cos( oldRotation ) - Math.cos( newRotation );
		const position = shape.transform.position;
		const writtenPositionX = ( (runtime.written & EShapeRuntimeReset.POSITION_X) !== 0 );
		const writtenPositionY = ( (runtime.written & EShapeRuntimeReset.POSITION_Y) !== 0 );
		const oldPositionX = ( writtenPositionX ? position.x : runtime.x );
		const oldPositionY = ( writtenPositionY ? position.y : runtime.y );
		runtime.written |= EShapeRuntimeReset.POSITION;
		position.set(
			oldPositionX + dx * c - dy * s,
			oldPositionY + dx * s + dy * c
		);
	}
}
