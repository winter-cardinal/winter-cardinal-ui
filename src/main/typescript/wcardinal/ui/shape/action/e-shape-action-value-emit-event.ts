/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeEmitEvent } from "./e-shape-action-runtime-emit-event";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueEmitEventSerialized = [
	EShapeActionValueType.EMIT_EVENT, number, number
];

export class EShapeActionValueEmitEvent implements EShapeActionValue {
	readonly type: EShapeActionValueType.EMIT_EVENT;
	readonly condition: string;
	readonly name: string;

	constructor( condition: string, name: string ) {
		this.type = EShapeActionValueType.EMIT_EVENT;
		this.condition = condition;
		this.name = name;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueEmitEvent) &&
			this.condition === value.condition &&
			this.name === value.name
		);
	}

	toRuntime(): EShapeActionRuntimeEmitEvent {
		return new EShapeActionRuntimeEmitEvent( this );
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${EShapeActionValues.toConditionLabel( this.condition )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		const nameId = manager.add(this.name);
		return manager.add( `[${this.type},${conditionId},${nameId}]` );
	}

	static deserialize(
		serialized: EShapeActionValueEmitEventSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueEmitEvent {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const name = EShapeActionValues.toResource( 2, serialized, manager.resources );
		return new EShapeActionValueEmitEvent( condition, name );
	}
}
