/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseControllerOpenType } from "../../d-diagram-base-controller";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueOpenSerializedLegacy = [
	typeof EShapeActionValueType.OPEN,
	number,
	(
		| typeof EShapeActionValueOpenType.DIAGRAM_LEGACY
		| typeof EShapeActionValueOpenType.PAGE_LEGACY
		| typeof EShapeActionValueOpenType.PAGE_INPLACE_LEGACY
	),
	number,
	EShapeActionValueOnInputAction,
	number
];

export type EShapeActionValueOpenSerializedNew = [
	typeof EShapeActionValueType.OPEN,
	number,
	typeof EShapeActionValueOpenType.DIAGRAM | typeof EShapeActionValueOpenType.PAGE,
	number,
	0 | 1
];

export type EShapeActionValueOpenSerialized =
	| EShapeActionValueOpenSerializedNew
	| EShapeActionValueOpenSerializedLegacy;

export class EShapeActionValueOpen extends EShapeActionValueSubtyped<
	typeof EShapeActionValueOpenType.DIAGRAM | typeof EShapeActionValueOpenType.PAGE
> {
	readonly target: string;
	readonly inNewWindow: boolean;

	constructor(
		subtype: typeof EShapeActionValueOpenType.DIAGRAM | typeof EShapeActionValueOpenType.PAGE,
		condition: string,
		target: string,
		inNewWindow: boolean
	) {
		super(EShapeActionValueType.OPEN, condition, subtype);
		this.target = target;
		this.inNewWindow = inNewWindow;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueOpen &&
			this.target === value.target &&
			this.inNewWindow === value.inNewWindow
		);
	}

	toRuntime(): EShapeActionRuntimeOpen {
		switch (this.subtype) {
			case EShapeActionValueOpenType.DIAGRAM:
				return new EShapeActionRuntimeOpen(this, DDiagramBaseControllerOpenType.DIAGRAM);
			case EShapeActionValueOpenType.PAGE:
				return new EShapeActionRuntimeOpen(this, DDiagramBaseControllerOpenType.PAGE);
		}
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
		serialized: EShapeActionValueOpenSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpen {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const target = EShapeActionValues.toResource(3, serialized, manager.resources);
		return new EShapeActionValueOpen(
			this.toSubType(serialized),
			condition,
			target,
			this.inNewWindow(serialized)
		);
	}

	protected static toSubType(
		serialized: EShapeActionValueOpenSerialized
	): typeof EShapeActionValueOpenType.DIAGRAM | typeof EShapeActionValueOpenType.PAGE {
		if (serialized.length === 6) {
			switch (serialized[2]) {
				case EShapeActionValueOpenType.DIAGRAM_LEGACY:
					return EShapeActionValueOpenType.DIAGRAM;
				case EShapeActionValueOpenType.PAGE_LEGACY:
					return EShapeActionValueOpenType.PAGE;
				case EShapeActionValueOpenType.PAGE_INPLACE_LEGACY:
					return EShapeActionValueOpenType.PAGE;
			}
		} else {
			return serialized[2];
		}
	}

	protected static inNewWindow(serialized: EShapeActionValueOpenSerialized): boolean {
		if (serialized.length === 6) {
			switch (serialized[2]) {
				case EShapeActionValueOpenType.DIAGRAM_LEGACY:
					return false;
				case EShapeActionValueOpenType.PAGE_LEGACY:
					return true;
				case EShapeActionValueOpenType.PAGE_INPLACE_LEGACY:
					return false;
			}
		} else {
			return !!serialized[4];
		}
	}
}
