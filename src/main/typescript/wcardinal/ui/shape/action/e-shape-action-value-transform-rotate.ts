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
import {
	EShapeActionValueTransformRotateType, toShapeActionValueTransformRotateLabel
} from "./e-shape-action-value-transform-rotate-type";
import {
	EShapeActionValueTransformType, toShapeActionValueTransformLabel
} from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueTransformRotateSerialized = [
	EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.ROTATE,
	EShapeActionValueTransformRotateType,
	number, number, number
];

export class EShapeActionValueTransformRotate implements EShapeActionValue {
	readonly type: EShapeActionValueType.TRANSFORM;
	readonly subtype: EShapeActionValueTransformType.ROTATE;
	readonly opetype: EShapeActionValueTransformRotateType;
	readonly condition: string;
	readonly originX: number;
	readonly originY: number;
	readonly amount: string;

	constructor(
		type: EShapeActionValueTransformRotateType, condition: string,
		originX: number, originY: number, amount: string
	) {
		this.type = EShapeActionValueType.TRANSFORM;
		this.subtype = EShapeActionValueTransformType.ROTATE;
		this.opetype = type;
		this.condition = condition;
		this.originX = originX;
		this.originY = originY;
		this.amount = amount;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueTransformRotate) &&
			this.opetype === value.opetype &&
			this.condition === value.condition &&
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

	toLabel(): string {
		const transformLabel = toShapeActionValueTransformLabel( this.subtype );
		const rotateLabel = toShapeActionValueTransformRotateLabel( this.opetype );
		return `${transformLabel}: ${rotateLabel}`;
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
