/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscLayerShowHide } from "./e-shape-action-runtime-misc-layer-show-hide";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscLayerShowHideSerialized = [
	EShapeActionValueType.MISC,
	number,
	EShapeActionValueMiscType.LAYER_SHOW_HIDE,
	number,
	number
];

export class EShapeActionValueMiscLayerShowHide extends EShapeActionValueSubtyped<EShapeActionValueMiscType.LAYER_SHOW_HIDE> {
	readonly layers: number[];
	readonly bringToFront: boolean;

	constructor(condition: string, layers: number[], bringToFront: boolean) {
		super(EShapeActionValueType.MISC, condition, EShapeActionValueMiscType.LAYER_SHOW_HIDE);
		this.layers = layers;
		this.bringToFront = bringToFront;
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeMiscLayerShowHide(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const conditionId = manager.addResource(this.condition);
		const layersId = this.serializeLayers(manager);
		const bringToFrontId = this.bringToFront ? 1 : 0;
		return manager.addResource(
			`[${this.type},${conditionId},${this.subtype},${layersId},${bringToFrontId}]`
		);
	}

	protected serializeLayers(manager: EShapeResourceManagerSerialization): number {
		const layers = this.layers;
		let result = "[";
		let delimiter = "";
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			result += delimiter + layers[i];
			delimiter = ",";
		}
		result += "]";
		return manager.addResource(result);
	}

	static deserialize(
		serialized: EShapeActionValueMiscLayerShowHideSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMiscLayerShowHide {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const layers = this.deserializeLayers(serialized[3], manager);
		const bringToFront = !!serialized[4];
		return new EShapeActionValueMiscLayerShowHide(condition, layers, bringToFront);
	}

	static deserializeLayers(
		target: number,
		manager: EShapeResourceManagerDeserialization
	): number[] {
		const resources = manager.resources;
		const resourcesLength = resources.length;
		if (0 <= target && target < resourcesLength) {
			return JSON.parse(resources[target]) as number[];
		}
		return [];
	}
}
