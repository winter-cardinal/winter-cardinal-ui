/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscExtension } from "./e-shape-action-runtime-misc-extension";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscExtensionSubtype = number;

export type EShapeActionValueMiscExtensionSerialized = [
	typeof EShapeActionValueType.MISC,
	number,
	EShapeActionValueMiscExtensionSubtype,
	number
];

export class EShapeActionValueMiscExtension extends EShapeActionValueSubtyped<EShapeActionValueMiscExtensionSubtype> {
	readonly argument: string;

	constructor(
		subtype: EShapeActionValueMiscExtensionSubtype,
		condition: string,
		argument: string
	) {
		super(EShapeActionValueType.MISC, condition, subtype);
		this.argument = argument;
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeMiscExtension(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const argumentId = manager.addResource(this.argument);
		return manager.addResource(`[${this.type},${conditionId},${this.subtype},${argumentId}]`);
	}

	static deserialize(
		serialized: EShapeActionValueMiscExtensionSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMiscExtension {
		const resources = manager.resources;
		const condition = EShapeActionValues.toResource(1, serialized, resources);
		const argument = EShapeActionValues.toResource(3, serialized, resources);
		return new EShapeActionValueMiscExtension(serialized[2], condition, argument);
	}
}
