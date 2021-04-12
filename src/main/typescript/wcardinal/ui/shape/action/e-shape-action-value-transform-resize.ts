/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionRuntimeTransformResizeHeightAbsolute } from "./e-shape-action-runtime-transform-resize-height-absolute";
import { EShapeActionRuntimeTransformResizeHeightRelative } from "./e-shape-action-runtime-transform-resize-height-relative";
import { EShapeActionRuntimeTransformResizeSizeAbsolute } from "./e-shape-action-runtime-transform-resize-size-absolute";
import { EShapeActionRuntimeTransformResizeSizeRelative } from "./e-shape-action-runtime-transform-resize-size-relative";
import { EShapeActionRuntimeTransformResizeWidthAbsolute } from "./e-shape-action-runtime-transform-resize-width-absolute";
import { EShapeActionRuntimeTransformResizeWidthRelative } from "./e-shape-action-runtime-transform-resize-width-relative";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformResizeType } from "./e-shape-action-value-transform-resize-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueTransformResizeSerialized = [
	EShapeActionValueType.TRANSFORM,
	number,
	EShapeActionValueTransformType.RESIZE,
	EShapeActionValueTransformResizeType,
	number,
	number,
	number
];

export class EShapeActionValueTransformResize extends EShapeActionValueOpetyped<
	EShapeActionValueTransformType,
	EShapeActionValueTransformResizeType
> {
	readonly originX: number;
	readonly originY: number;
	readonly amount: string;

	constructor(
		opetype: EShapeActionValueTransformResizeType,
		condition: string,
		originX: number,
		originY: number,
		amount: string
	) {
		super(
			EShapeActionValueType.TRANSFORM,
			condition,
			EShapeActionValueTransformType.RESIZE,
			opetype
		);
		this.originX = originX;
		this.originY = originY;
		this.amount = amount;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueTransformResize &&
			this.originX === value.originX &&
			this.originY === value.originY &&
			this.amount === value.amount
		);
	}

	toRuntime(): EShapeActionRuntimeTransformResize {
		switch (this.opetype) {
			case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
				return new EShapeActionRuntimeTransformResizeHeightAbsolute(this);
			case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
				return new EShapeActionRuntimeTransformResizeWidthAbsolute(this);
			case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
				return new EShapeActionRuntimeTransformResizeSizeAbsolute(this);
			case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
				return new EShapeActionRuntimeTransformResizeHeightRelative(this);
			case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
				return new EShapeActionRuntimeTransformResizeWidthRelative(this);
			case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
				return new EShapeActionRuntimeTransformResizeSizeRelative(this);
		}
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const amountId = manager.addResource(this.amount);
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${this.opetype},${this.originX},${this.originY},${amountId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueTransformResizeSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueTransformResize {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const amount = EShapeActionValues.toResource(6, serialized, manager.resources);
		return new EShapeActionValueTransformResize(
			serialized[3],
			condition,
			serialized[4],
			serialized[5],
			amount
		);
	}
}
