/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeAngle } from "./e-shape-action-runtime-change-angle";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeAngleSerialized = [
	typeof EShapeActionValueType.CHANGE_ANGLE,
	number,
	number
];

export class EShapeActionValueChangeAngle extends EShapeActionValueBase {
	readonly value: string;

	constructor(condition: string, value: string) {
		super(EShapeActionValueType.CHANGE_ANGLE, condition);
		this.value = value;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueChangeAngle &&
			this.value === value.value
		);
	}

	toRuntime(): EShapeActionRuntimeChangeAngle {
		return new EShapeActionRuntimeChangeAngle(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const valueId = manager.addResource(this.value);
		return manager.addResource(`[${this.type},${conditionId},${valueId}]`);
	}

	static deserialize(
		serialized: EShapeActionValueChangeAngleSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeAngle {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const value = EShapeActionValues.toResource(2, serialized, manager.resources);
		return new EShapeActionValueChangeAngle(condition, value);
	}
}
