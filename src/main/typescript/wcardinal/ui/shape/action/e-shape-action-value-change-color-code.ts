/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
import { EShapeActionRuntimeChangeColorCodeAll } from "./e-shape-action-runtime-change-color-code-all";
import { EShapeActionRuntimeChangeColorCodeFill } from "./e-shape-action-runtime-change-color-code-fill";
import {
	EShapeActionRuntimeChangeColorCodeFillAndStroke
} from "./e-shape-action-runtime-change-color-code-fill-and-stroke";
import { EShapeActionRuntimeChangeColorCodeStroke } from "./e-shape-action-runtime-change-color-code-stroke";
import { EShapeActionRuntimeChangeColorCodeText } from "./e-shape-action-runtime-change-color-code-text";
import { EShapeActionRuntimeChangeColorCodeTextOutline } from "./e-shape-action-runtime-change-color-code-text-outline";
import { EShapeActionValue } from "./e-shape-action-value";
import {
	EShapeActionValueChangeColorTarget, EShapeActionValueChangeColorType, toShapeActionValueChangeColorLabel
} from "./e-shape-action-value-change-color-type";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeColorCodeSerialized = [
	EShapeActionValueType.CHANGE_COLOR, number, EShapeActionValueChangeColorType,
	EShapeActionValueChangeColorTarget.CODE, number, number, number
];

export class EShapeActionValueChangeColorCode implements EShapeActionValue {
	readonly type: EShapeActionValueType.CHANGE_COLOR;
	readonly subtype: EShapeActionValueChangeColorType;
	readonly condition: string;
	readonly color: string;
	readonly alpha: string;
	readonly blend: string;

	constructor(
		subtype: EShapeActionValueChangeColorType, condition: string,
		color: string, alpha: string, blend: string
	) {
		this.type = EShapeActionValueType.CHANGE_COLOR;
		this.subtype = subtype;
		this.condition = condition;
		this.color = color;
		this.alpha = alpha;
		this.blend = blend;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueChangeColorCode) &&
			this.subtype === value.subtype &&
			this.condition === value.condition &&
			this.color === value.color &&
			this.alpha === value.alpha &&
			this.blend === value.blend
		);
	}

	toRuntime(): EShapeActionRuntimeChangeColorCode {
		switch( this.subtype ) {
		case EShapeActionValueChangeColorType.FILL:
			return new EShapeActionRuntimeChangeColorCodeFill( this );
		case EShapeActionValueChangeColorType.STROKE:
			return new EShapeActionRuntimeChangeColorCodeStroke( this );
		case EShapeActionValueChangeColorType.FILL_AND_STROKE:
			return new EShapeActionRuntimeChangeColorCodeFillAndStroke( this );
		case EShapeActionValueChangeColorType.TEXT:
			return new EShapeActionRuntimeChangeColorCodeText( this );
		case EShapeActionValueChangeColorType.TEXT_OUTLINE:
			return new EShapeActionRuntimeChangeColorCodeTextOutline( this );
		case EShapeActionValueChangeColorType.ALL:
			return new EShapeActionRuntimeChangeColorCodeAll( this );
		}
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${toShapeActionValueChangeColorLabel( this.subtype )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		const target = EShapeActionValueChangeColorTarget.CODE;
		const colorId = manager.add(this.color);
		const alphaId = manager.add(this.alpha);
		const blendId = manager.add(this.blend);
		return manager.add(
			`[${this.type},${conditionId},${this.subtype},${target},${colorId},${alphaId},${blendId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueChangeColorCodeSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeColorCode {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const color = EShapeActionValues.toResource( 4, serialized, manager.resources );
		const alpha = EShapeActionValues.toResource( 5, serialized, manager.resources );
		const blend = EShapeActionValues.toResource( 6, serialized, manager.resources );
		return new EShapeActionValueChangeColorCode(
			serialized[ 2 ], condition, color, alpha, blend
		);
	}
}
