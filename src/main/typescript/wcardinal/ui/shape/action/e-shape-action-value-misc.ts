/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueMiscType, toShapeActionValueMiscLabel } from "./e-shape-action-value-misc-type";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscSerialized = [
	EShapeActionValueType.MISC, number, EShapeActionValueMiscType
];

export class EShapeActionValueMisc implements EShapeActionValue {
	type: EShapeActionValueType;
	condition: string;
	subtype: EShapeActionValueMiscType;

	constructor( subtype: EShapeActionValueMiscType, condition: string ) {
		this.type = EShapeActionValueType.MISC;
		this.condition = condition;
		this.subtype = subtype;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueMisc) &&
			this.subtype === value.subtype &&
			this.condition === value.condition
		);
	}

	toRuntime( shape: EShape ): EShapeActionRuntime {
		switch( this.subtype ) {
		case EShapeActionValueMiscType.INPUT:
			return new EShapeActionRuntimeMiscInput();
		}
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${toShapeActionValueMiscLabel( this.subtype )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		return manager.add( `[${this.type},${conditionId},${this.subtype}]` );
	}

	static deserialize(
		serialized: EShapeActionValueMiscSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMisc {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		return new EShapeActionValueMisc( serialized[ 2 ], condition );
	}
}
