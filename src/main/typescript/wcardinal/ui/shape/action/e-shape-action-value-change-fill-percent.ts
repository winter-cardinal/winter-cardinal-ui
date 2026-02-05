/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeFillPercent } from "./e-shape-action-runtime-change-fill-percent";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeFillPercentSerialized = [
	typeof EShapeActionValueType.CHANGE_FILL_PERCENT,
	number,
	number
];

export class EShapeActionValueChangeFillPercent extends EShapeActionValueBase {
	readonly value: string;

	constructor(condition: string, value: string) {
		super(EShapeActionValueType.CHANGE_FILL_PERCENT, condition);
		this.value = value;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueChangeFillPercent &&
			this.value === value.value
		);
	}

	toRuntime(): EShapeActionRuntimeChangeFillPercent {
		return new EShapeActionRuntimeChangeFillPercent(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const valueId = manager.addResource(this.value);
		return manager.addResource(`[${this.type},${conditionId},${valueId}]`);
	}

	static deserialize(
		serialized: EShapeActionValueChangeFillPercentSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeFillPercent {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const value = EShapeActionValues.toResource(2, serialized, manager.resources);
		return new EShapeActionValueChangeFillPercent(condition, value);
	}
}
