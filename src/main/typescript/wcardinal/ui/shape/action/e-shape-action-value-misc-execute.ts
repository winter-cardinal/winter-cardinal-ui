/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscExecute } from "./e-shape-action-runtime-misc-execute";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscExecuteSerialized = [
	typeof EShapeActionValueType.MISC,
	number,
	typeof EShapeActionValueMiscType.EXECUTE,
	number
];

export class EShapeActionValueMiscExecute extends EShapeActionValueSubtyped<
	typeof EShapeActionValueMiscType.EXECUTE
> {
	readonly target: string;

	constructor(condition: string, target: string) {
		super(EShapeActionValueType.MISC, condition, EShapeActionValueMiscType.EXECUTE);
		this.target = target;
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeMiscExecute(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		return manager.addResource(`[${this.type},${conditionId},${this.subtype},${targetId}]`);
	}

	static deserialize(
		serialized: EShapeActionValueMiscExecuteSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMiscExecute {
		const resources = manager.resources;
		const condition = EShapeActionValues.toResource(1, serialized, resources);
		const target = EShapeActionValues.toResource(3, serialized, resources);
		return new EShapeActionValueMiscExecute(condition, target);
	}
}
