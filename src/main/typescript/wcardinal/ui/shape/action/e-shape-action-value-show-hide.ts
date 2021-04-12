/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeShowHide } from "./e-shape-action-runtime-show-hide";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueShowHideSerialized = [
	EShapeActionValueType.SHOW_HIDE,
	number,
	EShapeActionValueShowHideType
];

export class EShapeActionValueShowHide extends EShapeActionValueSubtyped<EShapeActionValueShowHideType> {
	constructor(subtype: EShapeActionValueShowHideType, condition: string) {
		super(EShapeActionValueType.SHOW_HIDE, condition, subtype);
	}

	toRuntime(): EShapeActionRuntimeShowHide {
		return new EShapeActionRuntimeShowHide(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		return manager.addResource(`[${this.type},${conditionId},${this.subtype}]`);
	}

	static deserialize(
		serialized: EShapeActionValueShowHideSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueShowHide {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		return new EShapeActionValueShowHide(serialized[2], condition);
	}
}
