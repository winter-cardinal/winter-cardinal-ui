/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
import { EShapeActionValueOpenDialogType } from "./e-shape-action-value-open-dialog-type";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeOpenDialogExtension } from "./e-shape-action-runtime-open-dialog-extension";

export type EShapeActionValueOpenDialogExtensionSerialized1 = [
	typeof EShapeActionValueType.OPEN,
	number,
	typeof EShapeActionValueOpenType.DIALOG,
	number,
	0,
	-1,
	EShapeActionValueOpenDialogType
];

export type EShapeActionValueOpenDialogExtensionSerialized2 = [
	typeof EShapeActionValueType.OPEN,
	number,
	typeof EShapeActionValueOpenType.DIALOG,
	number,
	0,
	-1,
	EShapeActionValueOpenDialogType,
	number
];

export type EShapeActionValueOpenDialogExtensionSerialized =
	| EShapeActionValueOpenDialogExtensionSerialized1
	| EShapeActionValueOpenDialogExtensionSerialized2;

export class EShapeActionValueOpenDialogExtension extends EShapeActionValueSubtyped<
	typeof EShapeActionValueOpenType.DIALOG
> {
	readonly target: string;
	readonly argument: string;
	readonly dialogType: EShapeActionValueOpenDialogType;

	constructor(
		condition: string,
		target: string,
		argument: string,
		dialogType: EShapeActionValueOpenDialogType
	) {
		super(EShapeActionValueType.OPEN, condition, EShapeActionValueOpenType.DIALOG);
		this.target = target;
		this.argument = argument;
		this.dialogType = dialogType;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueOpenDialogExtension &&
			this.target === value.target &&
			this.argument === value.argument &&
			this.dialogType === value.dialogType
		);
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeOpenDialogExtension(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		const argumentId = manager.addResource(this.argument);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},0,-1,${this.dialogType},${argumentId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueOpenDialogExtensionSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpenDialogExtension {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const target = EShapeActionValues.toResource(3, serialized, manager.resources);
		const argument = EShapeActionValues.toResource(7, serialized, manager.resources);
		return new EShapeActionValueOpenDialogExtension(condition, target, argument, serialized[6]);
	}
}
