/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionRuntimeBlinkBrighten } from "./e-shape-action-runtime-blink-brighten";
import { EShapeActionRuntimeBlinkColorFill } from "./e-shape-action-runtime-blink-color-fill";
import { EShapeActionRuntimeBlinkColorStroke } from "./e-shape-action-runtime-blink-color-stroke";
import { EShapeActionRuntimeBlinkDarken } from "./e-shape-action-runtime-blink-darken";
import { EShapeActionRuntimeBlinkOpacity } from "./e-shape-action-runtime-blink-opacity";
import { EShapeActionRuntimeBlinkVisibility } from "./e-shape-action-runtime-blink-visibility";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBlinkType, toShapeActionValueBlinkLabel } from "./e-shape-action-value-blink-type";
import { EShapeActionValueType, toShapeActionValueLabel } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueBlinkSerialized = [
	EShapeActionValueType.BLINK, number,
	EShapeActionValueBlinkType.COLOR_FILL | EShapeActionValueBlinkType.COLOR_STROKE,
	number, number, number
];

export class EShapeActionValueBlink implements EShapeActionValue {
	readonly type: EShapeActionValueType.BLINK;
	readonly subtype: EShapeActionValueBlinkType;
	readonly condition: string;
	readonly interval: number;
	readonly color: number;
	readonly alpha: number;

	constructor( subtype: EShapeActionValueBlinkType, condition: string, interval: number, color: number, alpha: number ) {
		this.type = EShapeActionValueType.BLINK;
		this.subtype = subtype;
		this.condition = condition;
		this.interval = interval;
		this.color = color;
		this.alpha = alpha;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueBlink) &&
			this.subtype === value.subtype &&
			this.condition === value.condition &&
			this.interval === value.interval &&
			this.color === value.color &&
			this.alpha === value.alpha
		);
	}

	toRuntime(): EShapeActionRuntimeBlink {
		switch( this.subtype ) {
		case EShapeActionValueBlinkType.BRIGHTEN:
			return new EShapeActionRuntimeBlinkBrighten( this );
		case EShapeActionValueBlinkType.COLOR_FILL:
			return new EShapeActionRuntimeBlinkColorFill( this );
		case EShapeActionValueBlinkType.COLOR_STROKE:
			return new EShapeActionRuntimeBlinkColorStroke( this );
		case EShapeActionValueBlinkType.DARKEN:
			return new EShapeActionRuntimeBlinkDarken( this );
		case EShapeActionValueBlinkType.OPACITY:
			return new EShapeActionRuntimeBlinkOpacity( this );
		case EShapeActionValueBlinkType.VISIBILITY:
			return new EShapeActionRuntimeBlinkVisibility( this );
		}
	}

	toLabel(): string {
		return `${toShapeActionValueLabel( this.type )}: ${toShapeActionValueBlinkLabel( this.subtype )}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add(this.condition);
		return manager.add(
			`[${this.type},${conditionId},${this.subtype},${this.interval},${this.color},${this.alpha}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueBlinkSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueBlink {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		return new EShapeActionValueBlink(
			serialized[ 2 ], condition, serialized[ 3 ],
			serialized[ 4 ], serialized[ 5 ]
		);
	}
}
