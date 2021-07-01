/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscLayerBinding } from "./e-shape-action-runtime-misc-layer-binding";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";

export type EShapeActionValueMiscLayerBindingSerialized = [
	EShapeActionValueType.MISC,
	number,
	EShapeActionValueMiscType.LAYER_BINDING,
	number,
	number
];

export class EShapeActionValueMiscLayerBinding extends EShapeActionValueSubtyped<EShapeActionValueMiscType.LAYER_BINDING> {
	readonly layers: number[];
	readonly bringToFront: boolean;

	constructor(condition: string, layers: number[], bringToFront: boolean) {
		super(EShapeActionValueType.MISC, condition, EShapeActionValueMiscType.LAYER_BINDING);
		this.layers = layers;
		this.bringToFront = bringToFront;
	}

	toRuntime(): EShapeActionRuntime {
		return new EShapeActionRuntimeMiscLayerBinding(this);
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
		serialized: EShapeActionValueMiscLayerBindingSerialized,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValueMiscLayerBinding {
		const condition = EShapeActionValues.toResource(1, serialized, manager.resources);
		const layers = this.deserializeLayers(serialized[3], manager);
		const bringToFront = !!serialized[4];
		return new EShapeActionValueMiscLayerBinding(condition, layers, bringToFront);
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
