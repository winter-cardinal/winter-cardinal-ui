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

export type EShapeActionValueOpenDialogTypeNew =
	| typeof EShapeActionValueOpenDialogType.TEXT
	| typeof EShapeActionValueOpenDialogType.INTEGER
	| typeof EShapeActionValueOpenDialogType.REAL
	| typeof EShapeActionValueOpenDialogType.BOOLEAN
	| typeof EShapeActionValueOpenDialogType.DATE
	| typeof EShapeActionValueOpenDialogType.TIME
	| typeof EShapeActionValueOpenDialogType.DATETIME;

export type EShapeActionValueOpenDialogSerializedNew = [
	typeof EShapeActionValueType.OPEN,
	number,
	typeof EShapeActionValueOpenType.DIALOG,
	number,
	EShapeActionValueOnInputAction,
	number,
	EShapeActionValueOpenDialogTypeNew
];

export type EShapeActionValueOpenDialogSerializedNewWithRange = [
	typeof EShapeActionValueType.OPEN,
	number,
	typeof EShapeActionValueOpenType.DIALOG,
	number,
	EShapeActionValueOnInputAction,
	number,
	EShapeActionValueOpenDialogTypeNew,
	number,
	number,
	number
];

export type EShapeActionValueOpenDialogSerialized =
	| EShapeActionValueOpenDialogSerializedLegacy
	| EShapeActionValueOpenDialogSerializedNew
	| EShapeActionValueOpenDialogSerializedNewWithRange;

export class EShapeActionValueOpenDialog extends EShapeActionValueSubtyped<
	typeof EShapeActionValueOpenType.DIALOG
> {
	readonly target: string;
	readonly onInputAction: EShapeActionValueOnInputAction;
	readonly initial: string;
	readonly step: string;
	readonly min: string;
	readonly max: string;
	readonly dialogType: EShapeActionValueOpenDialogTypeNew;

	constructor(
		condition: string,
		target: string,
		onInputAction: EShapeActionValueOnInputAction,
		initial: string,
		step: string,
		min: string,
		max: string,
		dialogType: EShapeActionValueOpenDialogTypeNew
	) {
		super(EShapeActionValueType.OPEN, condition, EShapeActionValueOpenType.DIALOG);
		this.target = target;
		this.onInputAction = onInputAction;
		this.initial = initial;
		this.step = step;
		this.min = min;
		this.max = max;
		this.dialogType = dialogType;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueOpenDialog &&
			this.target === value.target &&
			this.dialogType === value.dialogType &&
			this.onInputAction === value.onInputAction &&
			this.initial === value.initial &&
			this.step === value.step &&
			this.min === value.min &&
			this.max === value.max
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
		const stepId = manager.addResource(this.step);
		const minId = manager.addResource(this.min);
		const maxId = manager.addResource(this.max);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},${this.onInputAction},${initialId},${this.dialogType},${stepId},${minId},${maxId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueOpenDialogSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpenDialog {
		const resources = manager.resources;
		const condition = EShapeActionValues.toResource(1, serialized, resources);
		const target = EShapeActionValues.toResource(3, serialized, resources);
		const initial = EShapeActionValues.toResource(5, serialized, resources);
		const step = EShapeActionValues.toResource(7, serialized, resources);
		const min = EShapeActionValues.toResource(8, serialized, resources);
		const max = EShapeActionValues.toResource(9, serialized, resources);
		return new EShapeActionValueOpenDialog(
			condition,
			target,
			serialized[4],
			initial,
			step,
			min,
			max,
			this.toDialogType(serialized)
		);
	}

	protected static toDialogType(
		serialized: EShapeActionValueOpenDialogSerialized
	): EShapeActionValueOpenDialogTypeNew {
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
