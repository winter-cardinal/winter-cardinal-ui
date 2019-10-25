/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import {
	EShapeActionRuntimeTransformResizeHeightAbsolute
} from "./e-shape-action-runtime-transform-resize-height-absolute";
import {
	EShapeActionRuntimeTransformResizeHeightRelative
} from "./e-shape-action-runtime-transform-resize-height-relative";
import {
	EShapeActionRuntimeTransformResizeSizeAbsolute
} from "./e-shape-action-runtime-transform-resize-size-absolute";
import {
	EShapeActionRuntimeTransformResizeSizeRelative
} from "./e-shape-action-runtime-transform-resize-size-relative";
import {
	EShapeActionRuntimeTransformResizeWidthAbsolute
} from "./e-shape-action-runtime-transform-resize-width-absolute";
import {
	EShapeActionRuntimeTransformResizeWidthRelative
} from "./e-shape-action-runtime-transform-resize-width-relative";
import { EShapeActionValue } from "./e-shape-action-value";
import {
	EShapeActionValueTransformResizeType, toShapeActionValueTransformResizeLabel
} from "./e-shape-action-value-transform-resize-type";
import {
	EShapeActionValueTransformType, toShapeActionValueTransformLabel
} from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueTransformResizeSerialized = [
	EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.RESIZE,
	EShapeActionValueTransformResizeType,
	number, number, number
];

export class EShapeActionValueTransformResize implements EShapeActionValue {
	readonly type: EShapeActionValueType.TRANSFORM;
	readonly subtype: EShapeActionValueTransformType.RESIZE;
	readonly opetype: EShapeActionValueTransformResizeType;
	readonly condition: string;
	readonly originX: number;
	readonly originY: number;
	readonly amount: string;

	constructor(
		type: EShapeActionValueTransformResizeType, condition: string,
		originX: number, originY: number, amount: string
	) {
		this.type = EShapeActionValueType.TRANSFORM;
		this.subtype = EShapeActionValueTransformType.RESIZE;
		this.opetype = type;
		this.condition = condition;
		this.originX = originX;
		this.originY = originY;
		this.amount = amount;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			(value instanceof EShapeActionValueTransformResize) &&
			this.opetype === value.opetype &&
			this.condition === value.condition &&
			this.originX === value.originX &&
			this.originY === value.originY &&
			this.amount === value.amount
		);
	}

	toRuntime(): EShapeActionRuntimeTransformResize {
		switch( this.opetype ) {
		case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
			return new EShapeActionRuntimeTransformResizeHeightAbsolute( this );
		case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
			return new EShapeActionRuntimeTransformResizeWidthAbsolute( this );
		case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
			return new EShapeActionRuntimeTransformResizeSizeAbsolute( this );
		case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
			return new EShapeActionRuntimeTransformResizeHeightRelative( this );
		case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
			return new EShapeActionRuntimeTransformResizeWidthRelative( this );
		case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
			return new EShapeActionRuntimeTransformResizeSizeRelative( this );
		}
	}

	toLabel(): string {
		const transformLabel = toShapeActionValueTransformLabel( this.subtype );
		const resizeLabel = toShapeActionValueTransformResizeLabel( this.opetype );
		return `${transformLabel}: ${resizeLabel}`;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const conditionId = manager.add( this.condition );
		const amountId = manager.add( this.amount );
		return manager.add(
			`[${this.type},${conditionId},${this.subtype},${this.opetype},${this.originX},${this.originY},${amountId}]`
		);
	}

	static deserialize(
		serialized: EShapeActionValueTransformResizeSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueTransformResize {
		const condition = EShapeActionValues.toResource( 1, serialized, manager.resources );
		const amount = EShapeActionValues.toResource( 6, serialized, manager.resources );
		return new EShapeActionValueTransformResize(
			serialized[ 3 ], condition,
			serialized[ 4 ], serialized[ 5 ], amount
		);
	}
}
