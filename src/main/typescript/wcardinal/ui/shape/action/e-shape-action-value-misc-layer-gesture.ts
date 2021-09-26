/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscLayerGesture } from "./e-shape-action-runtime-misc-layer-gesture";
import { EShapeActionValueMiscGestureType } from "./e-shape-action-value-misc-gesture-type";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscLayerGestureSerialized = [
	typeof EShapeActionValueType.MISC,
	number,
	typeof EShapeActionValueMiscType.LAYER_GESTURE,
	EShapeActionValueMiscGestureType,
	number, // Minimum scale
	number // Maximum scale
];

export class EShapeActionValueMiscLayerGesture extends EShapeActionValueSubtyped<
	typeof EShapeActionValueMiscType.LAYER_GESTURE
> {
	readonly gestureType: EShapeActionValueMiscGestureType;
	readonly scaleMin: number;
	readonly scaleMax: number;

	constructor(
		condition: string = "",
		gestureType: EShapeActionValueMiscGestureType = EShapeActionValueMiscGestureType.ALL,
		scaleMin: number = 0.05,
		scaleMax: number = 20
	) {
		super(EShapeActionValueType.MISC, condition, EShapeActionValueMiscType.LAYER_GESTURE);
		this.gestureType = gestureType;
		this.scaleMin = scaleMin;
		this.scaleMax = scaleMax;
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeMiscLayerGesture(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${this.gestureType},${this.scaleMin},${this.scaleMax}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueMiscLayerGestureSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMiscLayerGesture {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const gestureType = serialized[3];
		const scaleMin = serialized[4];
		const scaleMax = serialized[5];
		return new EShapeActionValueMiscLayerGesture(condition, gestureType, scaleMin, scaleMax);
	}
}
