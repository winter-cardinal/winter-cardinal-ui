/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeTextNumber } from "./e-shape-action-runtime-change-text-number";
import { EShapeActionRuntimeChangeTextText } from "./e-shape-action-runtime-change-text-text";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeTextType } from "./e-shape-action-value-change-text-type";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeTextSerialized = [
	EShapeActionValueType.CHANGE_TEXT, number, EShapeActionValueChangeTextType, number
];

export class EShapeActionValueChangeText implements EShapeActionValue {
	readonly type: EShapeActionValueType.CHANGE_TEXT;
	readonly subtype: EShapeActionValueChangeTextType;
	readonly condition: string;
	readonly value: string;

	constructor( subtype: EShapeActionValueChangeTextType, condition: string, value: string ) {
		this.type = EShapeActionValueType.CHANGE_TEXT;
		this.subtype = subtype;
		this.condition = condition;
		this.value = value;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueChangeText) &&
			this.subtype === value.subtype &&
			this.condition === value.condition &&
			this.value === value.value
		);
	}

	toRuntime( shape: EShape ): EShapeActionRuntimeChangeTextText | EShapeActionRuntimeChangeTextNumber {
		switch( this.subtype ) {
		case EShapeActionValueChangeTextType.TEXT:
			return new EShapeActionRuntimeChangeTextText( this );
		case EShapeActionValueChangeTextType.NUMBER:
			return new EShapeActionRuntimeChangeTextNumber( this, shape.text.value );
		}
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${EShapeActionValues.toConditionLabel( this.condition )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		const valueId = manager.add(this.value);
		return manager.add(
			`[${this.type},${conditionId},${this.subtype},${valueId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueChangeTextSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeText {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const value = EShapeActionValues.toResource( 3, serialized, manager.resources );
		return new EShapeActionValueChangeText( serialized[ 2 ], condition, value );
	}
}
