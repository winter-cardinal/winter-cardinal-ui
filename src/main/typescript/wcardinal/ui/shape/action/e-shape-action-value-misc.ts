/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscEmitEvent } from "./e-shape-action-runtime-misc-emit-event";
import { EShapeActionRuntimeMiscHtmlElement } from "./e-shape-action-runtime-misc-html-element";
import { EShapeActionRuntimeMiscInputInteger } from "./e-shape-action-runtime-misc-input-integer";
import { EShapeActionRuntimeMiscInputReal } from "./e-shape-action-runtime-misc-input-real";
import { EShapeActionRuntimeMiscInputText } from "./e-shape-action-runtime-misc-input-text";
import { EShapeActionRuntimeMiscWriteBoth } from "./e-shape-action-runtime-misc-write-both";
import { EShapeActionRuntimeMiscWriteLocal } from "./e-shape-action-runtime-misc-write-local";
import { EShapeActionRuntimeMiscWriteRemote } from "./e-shape-action-runtime-misc-write-remote";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscSubtype =
	| EShapeActionValueMiscType.INPUT_TEXT
	| EShapeActionValueMiscType.INPUT_INTEGER
	| EShapeActionValueMiscType.INPUT_REAL
	| EShapeActionValueMiscType.EMIT_EVENT
	| EShapeActionValueMiscType.WRITE_BOTH
	| EShapeActionValueMiscType.WRITE_LOCAL
	| EShapeActionValueMiscType.WRITE_REMOTE
	| EShapeActionValueMiscType.HTML_ELEMENT
	| EShapeActionValueMiscType.HTML_ELEMENT_WITHOUT_POINTER_EVENTS;

export type EShapeActionValueMiscSerialized = [
	EShapeActionValueType.MISC,
	number,
	EShapeActionValueMiscSubtype,
	number,
	EShapeActionValueOnInputAction,
	number
];

export class EShapeActionValueMisc extends EShapeActionValueSubtyped<EShapeActionValueMiscSubtype> {
	readonly target: string;
	readonly onInputAction: EShapeActionValueOnInputAction;
	readonly value: string;

	constructor(
		subtype: EShapeActionValueMiscSubtype,
		condition: string,
		target: string,
		onInputAction: EShapeActionValueOnInputAction,
		value: string
	) {
		super(EShapeActionValueType.MISC, condition, subtype);
		this.target = target;
		this.onInputAction = onInputAction;
		this.value = value;
	}

	toRuntime(): EShapeActionRuntime {
		switch (this.subtype) {
			case EShapeActionValueMiscType.INPUT_TEXT:
				return new EShapeActionRuntimeMiscInputText(this);
			case EShapeActionValueMiscType.INPUT_INTEGER:
				return new EShapeActionRuntimeMiscInputInteger(this);
			case EShapeActionValueMiscType.INPUT_REAL:
				return new EShapeActionRuntimeMiscInputReal(this);
			case EShapeActionValueMiscType.EMIT_EVENT:
				return new EShapeActionRuntimeMiscEmitEvent(this);
			case EShapeActionValueMiscType.WRITE_BOTH:
				return new EShapeActionRuntimeMiscWriteBoth(this);
			case EShapeActionValueMiscType.WRITE_LOCAL:
				return new EShapeActionRuntimeMiscWriteLocal(this);
			case EShapeActionValueMiscType.WRITE_REMOTE:
				return new EShapeActionRuntimeMiscWriteRemote(this);
			case EShapeActionValueMiscType.HTML_ELEMENT:
			case EShapeActionValueMiscType.HTML_ELEMENT_WITHOUT_POINTER_EVENTS:
				return new EShapeActionRuntimeMiscHtmlElement(this);
		}
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const targetId = manager.addResource(this.target);
		const valueId = manager.addResource(this.value);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${targetId},${this.onInputAction},${valueId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueMiscSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMisc {
		const resources = manager.resources;
		const condition = EShapeActionValues.toResource(1, serialized, resources);
		const target = EShapeActionValues.toResource(3, serialized, resources);
		const value = EShapeActionValues.toResource(5, serialized, resources);
		return new EShapeActionValueMisc(serialized[2], condition, target, serialized[4], value);
	}
}
