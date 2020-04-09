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
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformMoveType } from "./e-shape-action-value-transform-move-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueTransformMoveSerialized = [
	EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.MOVE,
	EShapeActionValueTransformMoveType, number
];

export class EShapeActionValueTransformMove
	extends EShapeActionValueOpetyped<EShapeActionValueTransformType, EShapeActionValueTransformMoveType> {
	readonly amount: string;

	constructor( opetype: EShapeActionValueTransformMoveType, condition: string, amount: string ) {
		super( EShapeActionValueType.TRANSFORM, condition, EShapeActionValueTransformType.MOVE, opetype );
		this.amount = amount;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			super.isEquals( value ) &&
			(value instanceof EShapeActionValueTransformMove) &&
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

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.addResources(this.condition);
		const amountId = manager.addResources(this.amount);
		return manager.addResources(
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
