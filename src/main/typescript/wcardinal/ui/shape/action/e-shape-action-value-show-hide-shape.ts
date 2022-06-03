/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeShowHideShape } from "./e-shape-action-runtime-show-hide-shape";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueShowHideShapeSerialized = [
	typeof EShapeActionValueType.SHOW_HIDE,
	number,
	typeof EShapeActionValueShowHideType.SHAPE
];

export class EShapeActionValueShowHideShape extends EShapeActionValueSubtyped<
	typeof EShapeActionValueShowHideType.SHAPE
> {
	constructor(condition: string) {
		super(EShapeActionValueType.SHOW_HIDE, condition, EShapeActionValueShowHideType.SHAPE);
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeShowHideShape(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		return manager.addResource(`[${this.type},${conditionId},${this.subtype}]`);
	}

	static deserialize(
		serialized: EShapeActionValueShowHideShapeSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueShowHideShape {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		return new EShapeActionValueShowHideShape(condition);
	}
}
