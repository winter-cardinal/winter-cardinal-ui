/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeEmitEvent } from "./e-shape-action-runtime-emit-event";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueEmitEventSerialized = [
	typeof EShapeActionValueType.EMIT_EVENT,
	number,
	number
];

export class EShapeActionValueEmitEvent extends EShapeActionValueBase {
	readonly name: string;

	constructor(condition: string, name: string) {
		super(EShapeActionValueType.EMIT_EVENT, condition);
		this.name = name;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueEmitEvent &&
			this.name === value.name
		);
	}

	toRuntime(): EShapeActionRuntimeEmitEvent {
		return new EShapeActionRuntimeEmitEvent(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const nameId = manager.addResource(this.name);
		return manager.addResource(`[${this.type},${conditionId},${nameId}]`);
	}

	static deserialize(
		serialized: EShapeActionValueEmitEventSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueEmitEvent {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const name = EShapeActionValues.toResource(2, serialized, manager.resources);
		return new EShapeActionValueEmitEvent(condition, name);
	}
}
