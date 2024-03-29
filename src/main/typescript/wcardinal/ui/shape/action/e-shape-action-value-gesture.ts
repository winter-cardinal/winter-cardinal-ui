/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeGestureLayer } from "./e-shape-action-runtime-gesture-layer";
import { EShapeActionRuntimeGestureShape } from "./e-shape-action-runtime-gesture-shape";
import { EShapeActionValueGestureOperationType } from "./e-shape-action-value-gesture-operation-type";
import { EShapeActionValueGestureType } from "./e-shape-action-value-gesture-type";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueGestureSerializedLegacy = [
	typeof EShapeActionValueType.MISC,
	number,
	typeof EShapeActionValueMiscType.GESTURE | typeof EShapeActionValueMiscType.GESTURE_LAYER,
	EShapeActionValueGestureOperationType,
	number, // Minimum scale
	number // Maximum scale
];

export type EShapeActionValueGestureSerializedNew = [
	typeof EShapeActionValueType.GESTURE,
	number,
	EShapeActionValueGestureType,
	EShapeActionValueGestureOperationType,
	number, // Minimum scale
	number // Maximum scale
];

export type EShapeActionValueGestureSerialized =
	| EShapeActionValueGestureSerializedLegacy
	| EShapeActionValueGestureSerializedNew;

export class EShapeActionValueGesture extends EShapeActionValueSubtyped<EShapeActionValueGestureType> {
	readonly operationType: EShapeActionValueGestureOperationType;
	readonly scaleMin: number;
	readonly scaleMax: number;

	constructor(
		condition: string = "",
		subtype: EShapeActionValueGestureType,
		operationType: EShapeActionValueGestureOperationType,
		scaleMin: number = 0.05,
		scaleMax: number = 20
	) {
		super(EShapeActionValueType.GESTURE, condition, subtype);
		this.operationType = operationType;
		this.scaleMin = scaleMin;
		this.scaleMax = scaleMax;
	}

	toRuntime(): EShapeActionRuntime {
		switch (this.subtype) {
			case EShapeActionValueGestureType.SHAPE:
				return new EShapeActionRuntimeGestureShape(this);
			case EShapeActionValueGestureType.LAYER:
				return new EShapeActionRuntimeGestureLayer(this);
		}
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${this.operationType},${this.scaleMin},${this.scaleMax}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueGestureSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueGesture {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const subtype = this.toSubType(serialized);
		const operationType = serialized[3];
		const scaleMin = serialized[4];
		const scaleMax = serialized[5];
		return new EShapeActionValueGesture(condition, subtype, operationType, scaleMin, scaleMax);
	}

	protected static toSubType(
		serialized: EShapeActionValueGestureSerialized
	): EShapeActionValueGestureType {
		if (serialized[0] === EShapeActionValueType.MISC) {
			switch (serialized[2]) {
				case EShapeActionValueMiscType.GESTURE:
					return EShapeActionValueGestureType.SHAPE;
				case EShapeActionValueMiscType.GESTURE_LAYER:
					return EShapeActionValueGestureType.LAYER;
			}
		} else {
			return serialized[2];
		}
	}
}
