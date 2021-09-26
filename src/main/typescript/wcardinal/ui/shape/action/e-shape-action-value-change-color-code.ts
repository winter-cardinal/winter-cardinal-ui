/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorTypeLegacy } from "./e-shape-action-value-change-color-type-legacy";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
import { EShapeActionValueChangeColorTypes } from "./e-shape-action-value-change-color-types";

export type EShapeActionValueChangeColorCodeSerialized = [
	typeof EShapeActionValueType.CHANGE_COLOR,
	number,
	EShapeActionValueChangeColorType,
	typeof EShapeActionValueChangeColorTarget.CODE,
	number,
	number,
	number
];

export type EShapeActionValueChangeColorCodeSerializedLegacy = [
	typeof EShapeActionValueType.CHANGE_COLOR_LEGACY,
	number,
	EShapeActionValueChangeColorTypeLegacy,
	typeof EShapeActionValueChangeColorTarget.CODE,
	number,
	number,
	number
];

export class EShapeActionValueChangeColorCode extends EShapeActionValueSubtyped<EShapeActionValueChangeColorType> {
	readonly color: string;
	readonly alpha: string;
	readonly blend: string;

	constructor(
		subtype: EShapeActionValueChangeColorType,
		condition: string,
		color: string,
		alpha: string,
		blend: string
	) {
		super(EShapeActionValueType.CHANGE_COLOR, condition, subtype);
		this.color = color;
		this.alpha = alpha;
		this.blend = blend;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueChangeColorCode &&
			this.color === value.color &&
			this.alpha === value.alpha &&
			this.blend === value.blend
		);
	}

	toRuntime(): EShapeActionRuntimeChangeColorCode {
		return new EShapeActionRuntimeChangeColorCode(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const target = EShapeActionValueChangeColorTarget.CODE;
		const colorId = manager.addResource(this.color);
		const alphaId = manager.addResource(this.alpha);
		const blendId = manager.addResource(this.blend);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${target},${colorId},${alphaId},${blendId}]`
		);
	}

	static deserialize(
		serialized:
			| EShapeActionValueChangeColorCodeSerialized
			| EShapeActionValueChangeColorCodeSerializedLegacy,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueChangeColorCode {
		const subtype = EShapeActionValueChangeColorTypes.from(serialized);
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const color = EShapeActionValues.toResource(4, serialized, manager.resources);
		const alpha = EShapeActionValues.toResource(5, serialized, manager.resources);
		const blend = EShapeActionValues.toResource(6, serialized, manager.resources);
		return new EShapeActionValueChangeColorCode(subtype, condition, color, alpha, blend);
	}
}
