/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
import { EShapeActionRuntimeChangeColorBrightnessAll } from "./e-shape-action-runtime-change-color-brightness-all";
import { EShapeActionRuntimeChangeColorBrightnessFill } from "./e-shape-action-runtime-change-color-brightness-fill";
import {
	EShapeActionRuntimeChangeColorBrightnessFillAndStroke
} from "./e-shape-action-runtime-change-color-brightness-fill-and-stroke";
import {
	EShapeActionRuntimeChangeColorBrightnessStroke
} from "./e-shape-action-runtime-change-color-brightness-stroke";
import { EShapeActionRuntimeChangeColorBrightnessText } from "./e-shape-action-runtime-change-color-brightness-text";
import {
	EShapeActionRuntimeChangeColorBrightnessTextOutline
} from "./e-shape-action-runtime-change-color-brightness-text-outline";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeColorBrightnessSerialized = [
	EShapeActionValueType.CHANGE_COLOR, number, EShapeActionValueChangeColorType,
	EShapeActionValueChangeColorTarget.BRIGHTNESS, number
];

export class EShapeActionValueChangeColorBrightness
	extends EShapeActionValueSubtyped<EShapeActionValueChangeColorType> {
	readonly brightness: string;

	constructor(
		subtype: EShapeActionValueChangeColorType, condition: string, brightness: string
	) {
		super( EShapeActionValueType.CHANGE_COLOR, condition, subtype );
		this.brightness = brightness;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			super.isEquals( value ) &&
			(value instanceof EShapeActionValueChangeColorBrightness) &&
			this.brightness === value.brightness
		);
	}

	toRuntime(): EShapeActionRuntimeChangeColorBrightness {
		switch( this.subtype ) {
		case EShapeActionValueChangeColorType.FILL:
			return new EShapeActionRuntimeChangeColorBrightnessFill( this );
		case EShapeActionValueChangeColorType.STROKE:
			return new EShapeActionRuntimeChangeColorBrightnessStroke( this );
		case EShapeActionValueChangeColorType.FILL_AND_STROKE:
			return new EShapeActionRuntimeChangeColorBrightnessFillAndStroke( this );
		case EShapeActionValueChangeColorType.TEXT:
			return new EShapeActionRuntimeChangeColorBrightnessText( this );
		case EShapeActionValueChangeColorType.TEXT_OUTLINE:
			return new EShapeActionRuntimeChangeColorBrightnessTextOutline( this );
		case EShapeActionValueChangeColorType.ALL:
			return new EShapeActionRuntimeChangeColorBrightnessAll( this );
		}
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.addResource(this.condition);
		const target = EShapeActionValueChangeColorTarget.BRIGHTNESS;
		const brightnessId = manager.addResource(this.brightness);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${target},${brightnessId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueChangeColorBrightnessSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeColorBrightness {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const brightness = EShapeActionValues.toResource( 4, serialized, manager.resources );
		return new EShapeActionValueChangeColorBrightness(
			serialized[ 2 ], condition, brightness
		);
	}
}
