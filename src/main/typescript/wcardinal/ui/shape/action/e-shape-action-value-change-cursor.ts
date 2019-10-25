/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeCursor } from "./e-shape-action-runtime-change-cursor";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeCursorSerialized = [
	EShapeActionValueType.CHANGE_CURSOR, number, number
];

export class EShapeActionValueChangeCursor implements EShapeActionValue {
	readonly type: EShapeActionValueType.CHANGE_CURSOR;
	readonly condition: string;
	readonly name: string;

	constructor( condition: string, name: string ) {
		this.type = EShapeActionValueType.CHANGE_CURSOR;
		this.condition = condition;
		this.name = name;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueChangeCursor) &&
			this.condition === value.condition &&
			this.name === value.name
		);
	}

	toRuntime(): EShapeActionRuntimeChangeCursor {
		return new EShapeActionRuntimeChangeCursor( this );
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${EShapeActionValues.toConditionLabel( this.condition )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		const nameId = manager.add(this.name);
		return manager.add(
			`[${this.type},${conditionId},${nameId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueChangeCursorSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeCursor {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const name = EShapeActionValues.toResource( 2, serialized, manager.resources );
		return new EShapeActionValueChangeCursor( condition, name );
	}
}
