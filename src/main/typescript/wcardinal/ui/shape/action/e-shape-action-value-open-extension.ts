/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionOpenExtensions } from "./e-shape-action-open-extensions";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpenSerializedNew } from "./e-shape-action-value-open";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export class EShapeActionValueOpenExtension extends EShapeActionValueSubtyped<number> {
	readonly target: string;
	readonly inNewWindow: boolean;

	constructor(subtype: number, condition: string, target: string, inNewWindow: boolean) {
		super(EShapeActionValueType.OPEN, condition, subtype);
		this.target = target;
		this.inNewWindow = inNewWindow;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueOpenExtension &&
			this.target === value.target &&
			this.inNewWindow === value.inNewWindow
		);
	}

	toRuntime(): EShapeActionRuntimeOpen {
		return new EShapeActionRuntimeOpen(this, this.subtype);
	}

	toLabel(): string {
		const typeLabel = this.getTheme().toTypeLabel(this.type);
		const datum = EShapeActionOpenExtensions.get(this.subtype);
		return `${typeLabel}: ${datum != null ? datum : "Unknown"}`;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		const inNewWindow = this.inNewWindow ? 1 : 0;
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},${inNewWindow}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueOpenSerializedNew,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpenExtension {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const target = EShapeActionValues.toResource(3, serialized, manager.resources);
		return new EShapeActionValueOpenExtension(
			serialized[2],
			condition,
			target,
			!!serialized[4]
		);
	}
}
