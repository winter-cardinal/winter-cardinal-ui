/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionRuntimeTransformMoveAbsoluteX } from "./e-shape-action-runtime-transform-move-absolute-x";
import { EShapeActionRuntimeTransformMoveAbsoluteY } from "./e-shape-action-runtime-transform-move-absolute-y";
import {
	EShapeActionRuntimeTransformMoveForwardOrBackward
} from "./e-shape-action-runtime-transform-move-forward-or-backward";
import { EShapeActionRuntimeTransformMoveLeftOrRight } from "./e-shape-action-runtime-transform-move-left-or-right";
import { EShapeActionRuntimeTransformMoveRelativeX } from "./e-shape-action-runtime-transform-move-relative-x";
import { EShapeActionRuntimeTransformMoveRelativeY } from "./e-shape-action-runtime-transform-move-relative-y";
import { EShapeActionValue } from "./e-shape-action-value";
import {
	EShapeActionValueTransformMoveType, toShapeActionValueTransformMoveLabel
} from "./e-shape-action-value-transform-move-type";
import {
	EShapeActionValueTransformType, toShapeActionValueTransformLabel
} from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueTransformMoveSerialized = [
	EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.MOVE,
	EShapeActionValueTransformMoveType, number
];

export class EShapeActionValueTransformMove implements EShapeActionValue {
	readonly type: EShapeActionValueType.TRANSFORM;
	readonly subtype: EShapeActionValueTransformType.MOVE;
	readonly opetype: EShapeActionValueTransformMoveType;
	readonly condition: string;
	readonly amount: string;

	constructor( type: EShapeActionValueTransformMoveType, condition: string, amount: string ) {
		this.type = EShapeActionValueType.TRANSFORM;
		this.subtype = EShapeActionValueTransformType.MOVE;
		this.opetype = type;
		this.condition = condition;
		this.amount = amount;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueTransformMove) &&
			this.opetype === value.opetype &&
			this.condition === value.condition &&
			this.amount === value.amount
		);
	}

	toRuntime(): EShapeActionRuntimeTransformMove {
		switch( this.opetype ) {
		case EShapeActionValueTransformMoveType.ABSOLUTE_X:
			return new EShapeActionRuntimeTransformMoveAbsoluteX( this );
		case EShapeActionValueTransformMoveType.ABSOLUTE_Y:
			return new EShapeActionRuntimeTransformMoveAbsoluteY( this );
		case EShapeActionValueTransformMoveType.FORWARD_OR_BACKWARD:
			return new EShapeActionRuntimeTransformMoveForwardOrBackward( this );
		case EShapeActionValueTransformMoveType.LEFT_OR_RIGHT:
			return new EShapeActionRuntimeTransformMoveLeftOrRight( this );
		case EShapeActionValueTransformMoveType.RELATIVE_X:
			return new EShapeActionRuntimeTransformMoveRelativeX( this );
		case EShapeActionValueTransformMoveType.RELATIVE_Y:
			return new EShapeActionRuntimeTransformMoveRelativeY( this );
		}
	}

	toLabel(): string {
		const transformLabel = toShapeActionValueTransformLabel( this.subtype );
		const moveLabel = toShapeActionValueTransformMoveLabel( this.opetype );
		return `${transformLabel}: ${moveLabel}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		const amountId = manager.add(this.amount);
		return manager.add(
			`[${this.type},${conditionId},${this.subtype},${this.opetype},${amountId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueTransformMoveSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueTransformMove {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const amount = EShapeActionValues.toResource( 4, serialized, manager.resources );
		return new EShapeActionValueTransformMove( serialized[ 3 ], condition, amount );
	}
}
