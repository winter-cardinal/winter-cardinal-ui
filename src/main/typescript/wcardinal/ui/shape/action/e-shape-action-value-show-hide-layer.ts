/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeShowHideLayer } from "./e-shape-action-runtime-show-hide-layer";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueShowHideLayerSerialized = [
	typeof EShapeActionValueType.SHOW_HIDE,
	number,
	typeof EShapeActionValueShowHideType.LAYER,
	number,
	number
];

export class EShapeActionValueShowHideLayer extends EShapeActionValueSubtyped<
	typeof EShapeActionValueShowHideType.LAYER
> {
	readonly layers: number[];
	readonly bringToFront: boolean;

	constructor(condition: string, layers: number[], bringToFront: boolean) {
		super(EShapeActionValueType.SHOW_HIDE, condition, EShapeActionValueShowHideType.LAYER);
		this.layers = layers;
		this.bringToFront = bringToFront;
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeShowHideLayer(this);
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
		serialized: EShapeActionValueShowHideLayerSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueShowHideLayer {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const layers = this.deserializeLayers(serialized[3], manager);
		const bringToFront = !!serialized[4];
		return new EShapeActionValueShowHideLayer(condition, layers, bringToFront);
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
