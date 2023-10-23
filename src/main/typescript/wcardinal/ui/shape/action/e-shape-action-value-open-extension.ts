/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionOpenExtensions } from "./e-shape-action-open-extensions";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionRuntimeOpenExtension } from "./e-shape-action-runtime-open-extension";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueAlignmentType } from "./e-shape-action-value-alignment-type";
import { EShapeActionValueOpenSerializedNew } from "./e-shape-action-value-open";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueOpenExtensionSerialized= [
	typeof EShapeActionValueType.OPEN,
	number,
	number,
	number,
	0 | 1,
	EShapeActionValueAlignmentType
];
export class EShapeActionValueOpenExtension extends EShapeActionValueSubtyped<number> {
	readonly target: string;
	readonly alignment: EShapeActionValueAlignmentType;
	readonly inNewWindow: boolean;

	constructor(
		subtype: number,
		condition: string,
		target: string,
		alignment: EShapeActionValueAlignmentType,
		inNewWindow: boolean
	) {
		super(EShapeActionValueType.OPEN, condition, subtype);
		this.target = target;
		this.alignment = alignment;
		this.inNewWindow = inNewWindow;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueOpenExtension &&
			this.target === value.target &&
			this.alignment === value.alignment &&
			this.inNewWindow === value.inNewWindow
		);
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeOpenExtension(this, this.subtype);
	}

	toLabel(): string {
		const typeLabel = this.getTheme().toTypeLabel(this.type);
		const datum = EShapeActionOpenExtensions.get(this.subtype);
		return `${typeLabel}: ${datum != null ? datum.label : "Unknown"}`;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		const inNewWindow = this.inNewWindow ? 1 : 0;
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},${inNewWindow},${this.alignment}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueOpenExtensionSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpenExtension {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const target = EShapeActionValues.toResource(3, serialized, manager.resources);
		return new EShapeActionValueOpenExtension(
			serialized[2],
			condition,
			target,
			serialized[5],
			!!serialized[4]
		);
	}
}
