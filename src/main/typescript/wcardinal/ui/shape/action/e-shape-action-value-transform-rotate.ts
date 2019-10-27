/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeTransformRotate } from "./e-shape-action-runtime-transform-rotate";
import { EShapeActionRuntimeTransformRotateAbsolute } from "./e-shape-action-runtime-transform-rotate-absolute";
import { EShapeActionRuntimeTransformRotateRelative } from "./e-shape-action-runtime-transform-rotate-relative";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformRotateType } from "./e-shape-action-value-transform-rotate-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueTransformRotateSerialized = [
	EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.ROTATE,
	EShapeActionValueTransformRotateType,
	number, number, number
];

export class EShapeActionValueTransformRotate
	extends EShapeActionValueOpetyped<EShapeActionValueTransformType, EShapeActionValueTransformRotateType> {
	readonly originX: number;
	readonly originY: number;
	readonly amount: string;

	constructor(
		opetype: EShapeActionValueTransformRotateType, condition: string,
		originX: number, originY: number, amount: string
	) {
		super( EShapeActionValueType.TRANSFORM, condition, EShapeActionValueTransformType.ROTATE, opetype );
		this.originX = originX;
		this.originY = originY;
		this.amount = amount;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			super.isEquals( value ) &&
			(value instanceof EShapeActionValueTransformRotate) &&
			this.originX === value.originX &&
			this.originY === value.originY &&
			this.amount === value.amount
		);
	}

	toRuntime(): EShapeActionRuntimeTransformRotate {
		switch( this.opetype ) {
		case EShapeActionValueTransformRotateType.ABSOLUTE:
			return new EShapeActionRuntimeTransformRotateAbsolute( this );
		case EShapeActionValueTransformRotateType.RELATIVE:
			return new EShapeActionRuntimeTransformRotateRelative( this );
		}
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add( this.condition );
		const amountId = manager.add( this.amount );
		return manager.add(
			`[${this.type},${conditionId},${this.subtype},${this.opetype},${this.originX},${this.originY},${amountId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueTransformRotateSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueTransformRotate {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const amount = EShapeActionValues.toResource( 6, serialized, manager.resources );
		return new EShapeActionValueTransformRotate(
			serialized[ 3 ], condition,
			serialized[ 4 ], serialized[ 5 ], amount
		);
	}
}
