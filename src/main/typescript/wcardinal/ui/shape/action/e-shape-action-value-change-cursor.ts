/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeCursor } from "./e-shape-action-runtime-change-cursor";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeCursorSerialized = [
	typeof EShapeActionValueType.CHANGE_CURSOR,
	number,
	number
];

export class EShapeActionValueChangeCursor extends EShapeActionValueBase {
	readonly name: string;

	constructor(condition: string, name: string) {
		super(EShapeActionValueType.CHANGE_CURSOR, condition);
		this.name = name;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueChangeCursor &&
			this.name === value.name
		);
	}

	toRuntime(): EShapeActionRuntimeChangeCursor {
		return new EShapeActionRuntimeChangeCursor(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const nameId = manager.addResource(this.name);
		return manager.addResource(`[${this.type},${conditionId},${nameId}]`);
	}

	static deserialize(
		serialized: EShapeActionValueChangeCursorSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeCursor {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const name = EShapeActionValues.toResource(2, serialized, manager.resources);
		return new EShapeActionValueChangeCursor(condition, name);
	}
}
