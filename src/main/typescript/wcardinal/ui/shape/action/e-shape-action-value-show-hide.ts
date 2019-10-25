/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeShowHide } from "./e-shape-action-runtime-show-hide";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueShowHideSerialized = [
	EShapeActionValueType.SHOW_HIDE, number, EShapeActionValueShowHideType
];

export class EShapeActionValueShowHide implements EShapeActionValue {
	readonly type: EShapeActionValueType.SHOW_HIDE;
	readonly subtype: EShapeActionValueShowHideType;
	readonly condition: string;

	constructor( type: EShapeActionValueShowHideType, condition: string ) {
		this.type = EShapeActionValueType.SHOW_HIDE;
		this.subtype = type;
		this.condition = condition;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueShowHide) &&
			this.subtype === value.subtype &&
			this.condition === value.condition
		);
	}

	toRuntime(): EShapeActionRuntimeShowHide {
		return new EShapeActionRuntimeShowHide( this );
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${EShapeActionValues.toConditionLabel( this.condition )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		return manager.add( `[${this.type},${conditionId},${this.subtype}]` );
	}

	static deserialize(
		serialized: EShapeActionValueShowHideSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueShowHide {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		return new EShapeActionValueShowHide( serialized[ 2 ], condition );
	}
}
