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
import { EShapeActionValueBlinkType } from "./e-shape-action-value-blink-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueBlinkSerialized = [
	EShapeActionValueType.BLINK, number,
	EShapeActionValueBlinkType.COLOR_FILL | EShapeActionValueBlinkType.COLOR_STROKE,
	number, number, number
];

export class EShapeActionValueBlink extends EShapeActionValueSubtyped<EShapeActionValueBlinkType> {
	readonly interval: number;
	readonly color: number;
	readonly alpha: number;

	constructor( subtype: EShapeActionValueBlinkType, condition: string, interval: number, color: number, alpha: number ) {
		super( EShapeActionValueType.BLINK, condition, subtype );
		this.interval = interval;
		this.color = color;
		this.alpha = alpha;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			super.isEquals( value ) &&
			(value instanceof EShapeActionValueBlink) &&
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

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.addResources(this.condition);
		return manager.addResources(
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
