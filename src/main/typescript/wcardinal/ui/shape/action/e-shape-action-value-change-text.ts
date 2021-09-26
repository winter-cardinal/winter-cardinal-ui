/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeTextNumber } from "./e-shape-action-runtime-change-text-number";
import { EShapeActionRuntimeChangeTextText } from "./e-shape-action-runtime-change-text-text";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeTextType } from "./e-shape-action-value-change-text-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeTextSerialized = [
	typeof EShapeActionValueType.CHANGE_TEXT,
	number,
	EShapeActionValueChangeTextType,
	number
];

export class EShapeActionValueChangeText extends EShapeActionValueSubtyped<EShapeActionValueChangeTextType> {
	readonly value: string;

	constructor(subtype: EShapeActionValueChangeTextType, condition: string, value: string) {
		super(EShapeActionValueType.CHANGE_TEXT, condition, subtype);
		this.value = value;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueChangeText &&
			this.value === value.value
		);
	}

	toRuntime(): EShapeActionRuntimeChangeTextText | EShapeActionRuntimeChangeTextNumber {
		switch (this.subtype) {
			case EShapeActionValueChangeTextType.TEXT:
				return new EShapeActionRuntimeChangeTextText(this);
			case EShapeActionValueChangeTextType.NUMBER:
				return new EShapeActionRuntimeChangeTextNumber(this);
		}
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const valueId = manager.addResource(this.value);
		return manager.addResource(`[${this.type},${conditionId},${this.subtype},${valueId}]`);
	}

	static deserialize(
		serialized: EShapeActionValueChangeTextSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeText {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const value = EShapeActionValues.toResource(3, serialized, manager.resources);
		return new EShapeActionValueChangeText(serialized[2], condition, value);
	}
}
