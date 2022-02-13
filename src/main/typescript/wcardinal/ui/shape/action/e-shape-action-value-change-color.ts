/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueChangeColorTypeLegacy } from "./e-shape-action-value-change-color-type-legacy";
import { EShapeActionValueChangeColorTypes } from "./e-shape-action-value-change-color-types";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueChangeColorTargetColorOrAlpha =
	| typeof EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA
	| typeof EShapeActionValueChangeColorTarget.COLOR
	| typeof EShapeActionValueChangeColorTarget.ALPHA;

export type EShapeActionValueChangeColorSerialized = [
	typeof EShapeActionValueType.CHANGE_COLOR,
	number,
	EShapeActionValueChangeColorType,
	EShapeActionValueChangeColorTargetColorOrAlpha,
	number,
	number,
	number
];

export type EShapeActionValueChangeColorSerializedLegacy = [
	typeof EShapeActionValueType.CHANGE_COLOR_LEGACY,
	number,
	EShapeActionValueChangeColorTypeLegacy,
	EShapeActionValueChangeColorTargetColorOrAlpha,
	number,
	number,
	number
];

export class EShapeActionValueChangeColor extends EShapeActionValueSubtyped<EShapeActionValueChangeColorType> {
	readonly target: EShapeActionValueChangeColorTargetColorOrAlpha;
	readonly color: number;
	readonly alpha: number;
	readonly blend: string;

	constructor(
		subtype: EShapeActionValueChangeColorType,
		condition: string,
		target: EShapeActionValueChangeColorTargetColorOrAlpha,
		color: number,
		alpha: number,
		blend: string
	) {
		super(EShapeActionValueType.CHANGE_COLOR, condition, subtype);
		this.target = target;
		this.color = color;
		this.alpha = alpha;
		this.blend = blend;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueChangeColor &&
			this.target === value.target &&
			this.color === value.color &&
			this.alpha === value.alpha &&
			this.blend === value.blend
		);
	}

	toRuntime(): EShapeActionRuntimeChangeColor {
		return new EShapeActionRuntimeChangeColor(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const blendId = manager.addResource(this.blend);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${this.target},${this.color},${this.alpha},${blendId}]`
		);
	}

	static deserialize(
		serialized:
			| EShapeActionValueChangeColorSerialized
			| EShapeActionValueChangeColorSerializedLegacy,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeColor {
		const subtype = EShapeActionValueChangeColorTypes.from(serialized);
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const blend = EShapeActionValues.toResource(6, serialized, manager.resources);
		return new EShapeActionValueChangeColor(
			subtype,
			condition,
			serialized[3],
			serialized[4],
			serialized[5],
			blend
		);
	}
}
