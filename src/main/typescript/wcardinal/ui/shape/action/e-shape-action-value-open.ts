/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionRuntimeOpenFlow } from "./e-shape-action-runtime-open-flow";
import { EShapeActionRuntimeOpenPage } from "./e-shape-action-runtime-open-page";
import { EShapeActionRuntimeOpenPageInplace } from "./e-shape-action-runtime-open-page-inplace";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueOpenSerialized = [
	EShapeActionValueType.OPEN, number, EShapeActionValueOpenType, number
];

export class EShapeActionValueOpen implements EShapeActionValue {
	readonly type: EShapeActionValueType.OPEN;
	readonly subtype: EShapeActionValueOpenType;
	readonly condition: string;
	readonly target: string;

	constructor( type: EShapeActionValueOpenType, condition: string, target: string ) {
		this.type = EShapeActionValueType.OPEN;
		this.subtype = type;
		this.condition = condition;
		this.target = target;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueOpen) &&
			this.subtype === value.subtype &&
			this.condition === value.condition &&
			this.target === value.target
		);
	}

	toRuntime(): EShapeActionRuntimeOpen {
		switch( this.subtype ) {
		case EShapeActionValueOpenType.FLOW:
			return new EShapeActionRuntimeOpenFlow( this );
		case EShapeActionValueOpenType.PAGE:
			return new EShapeActionRuntimeOpenPage( this );
		case EShapeActionValueOpenType.PAGE_INPLACE:
			return new EShapeActionRuntimeOpenPageInplace( this );
		}
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${EShapeActionValues.toConditionLabel( this.condition )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		const targetId = manager.add(this.target);
		return manager.add( `[${this.type},${conditionId},${this.subtype},${targetId}]` );
	}

	static deserialize(
		serialized: EShapeActionValueOpenSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueOpen {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const target = EShapeActionValues.toResource( 3, serialized, manager.resources );
		return new EShapeActionValueOpen( serialized[ 2 ], condition, target );
	}
}
