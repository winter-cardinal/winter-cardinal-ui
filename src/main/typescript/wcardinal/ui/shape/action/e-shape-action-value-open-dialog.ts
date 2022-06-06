/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeOpenDialogBoolean } from "./e-shape-action-runtime-open-dialog-boolean";
import { EShapeActionRuntimeOpenDialogInteger } from "./e-shape-action-runtime-open-dialog-integer";
import { EShapeActionRuntimeOpenDialogReal } from "./e-shape-action-runtime-open-dialog-real";
import { EShapeActionRuntimeOpenDialogText } from "./e-shape-action-runtime-open-dialog-text";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
import { EShapeActionRuntimeOpenDialogDatetime } from "./e-shape-action-runtime-open-dialog-datetime";
import { EShapeActionRuntimeOpenDialogTime } from "./e-shape-action-runtime-open-dialog-time";
import { EShapeActionRuntimeOpenDialogDate } from "./e-shape-action-runtime-open-dialog-date";
import { EShapeActionValueOpenDialogType } from "./e-shape-action-value-open-dialog-type";
import { EShapeActionRuntime } from "./e-shape-action-runtime";

export type EShapeActionValueOpenDialogSerializedLegacy = [
	typeof EShapeActionValueType.OPEN,
	number,
	(
		| typeof EShapeActionValueOpenType.DIALOG_TEXT
		| typeof EShapeActionValueOpenType.DIALOG_INTEGER
		| typeof EShapeActionValueOpenType.DIALOG_REAL
		| typeof EShapeActionValueOpenType.DIALOG_BOOLEAN
		| typeof EShapeActionValueOpenType.DIALOG_DATE
		| typeof EShapeActionValueOpenType.DIALOG_TIME
		| typeof EShapeActionValueOpenType.DIALOG_DATETIME
	),
	number,
	EShapeActionValueOnInputAction,
	number
];

export type EShapeActionValueOpenDialogSerializedNew = [
	typeof EShapeActionValueType.OPEN,
	number,
	typeof EShapeActionValueOpenType.DIALOG,
	number,
	EShapeActionValueOnInputAction,
	number,
	EShapeActionValueOpenDialogType
];

export type EShapeActionValueOpenDialogSerialized =
	| EShapeActionValueOpenDialogSerializedLegacy
	| EShapeActionValueOpenDialogSerializedNew;

export class EShapeActionValueOpenDialog extends EShapeActionValueSubtyped<
	typeof EShapeActionValueOpenType.DIALOG
> {
	readonly target: string;
	readonly onInputAction: EShapeActionValueOnInputAction;
	readonly initial: string;
	readonly dialogType: EShapeActionValueOpenDialogType;

	constructor(
		condition: string,
		target: string,
		onInputAction: EShapeActionValueOnInputAction,
		initial: string,
		dialogType: EShapeActionValueOpenDialogType
	) {
		super(EShapeActionValueType.OPEN, condition, EShapeActionValueOpenType.DIALOG);
		this.target = target;
		this.onInputAction = onInputAction;
		this.initial = initial;
		this.dialogType = dialogType;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueOpenDialog &&
			this.target === value.target &&
			this.dialogType === value.dialogType &&
			this.onInputAction === value.onInputAction &&
			this.initial === value.initial
		);
	}

	toRuntime(): EShapeActionRuntime {
		switch (this.dialogType) {
			case EShapeActionValueOpenDialogType.TEXT:
				return new EShapeActionRuntimeOpenDialogText(this);
			case EShapeActionValueOpenDialogType.INTEGER:
				return new EShapeActionRuntimeOpenDialogInteger(this);
			case EShapeActionValueOpenDialogType.REAL:
				return new EShapeActionRuntimeOpenDialogReal(this);
			case EShapeActionValueOpenDialogType.BOOLEAN:
				return new EShapeActionRuntimeOpenDialogBoolean(this);
			case EShapeActionValueOpenDialogType.DATE:
				return new EShapeActionRuntimeOpenDialogDate(this);
			case EShapeActionValueOpenDialogType.TIME:
				return new EShapeActionRuntimeOpenDialogTime(this);
			case EShapeActionValueOpenDialogType.DATETIME:
				return new EShapeActionRuntimeOpenDialogDatetime(this);
		}
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		const initialId = manager.addResource(this.initial);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},${this.onInputAction},${initialId},${this.dialogType}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueOpenDialogSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpenDialog {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const target = EShapeActionValues.toResource(3, serialized, manager.resources);
		const initial = EShapeActionValues.toResource(5, serialized, manager.resources);
		return new EShapeActionValueOpenDialog(
			condition,
			target,
			serialized[4],
			initial,
			this.toDialogType(serialized)
		);
	}

	protected static toDialogType(
		serialized: EShapeActionValueOpenDialogSerialized
	): EShapeActionValueOpenDialogType {
		if (serialized[2] === EShapeActionValueOpenType.DIALOG) {
			return serialized[6];
		} else {
			switch (serialized[2]) {
				case EShapeActionValueOpenType.DIALOG_TEXT:
					return EShapeActionValueOpenDialogType.TEXT;
				case EShapeActionValueOpenType.DIALOG_INTEGER:
					return EShapeActionValueOpenDialogType.INTEGER;
				case EShapeActionValueOpenType.DIALOG_REAL:
					return EShapeActionValueOpenDialogType.REAL;
				case EShapeActionValueOpenType.DIALOG_BOOLEAN:
					return EShapeActionValueOpenDialogType.BOOLEAN;
				case EShapeActionValueOpenType.DIALOG_DATE:
					return EShapeActionValueOpenDialogType.DATE;
				case EShapeActionValueOpenType.DIALOG_TIME:
					return EShapeActionValueOpenDialogType.TIME;
				case EShapeActionValueOpenType.DIALOG_DATETIME:
					return EShapeActionValueOpenDialogType.DATETIME;
			}
		}
	}
}
