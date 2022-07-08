/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramLayers, DDiagramLayersLayer } from "../../d-diagram-layers";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueShowHideLayer } from "./e-shape-action-value-show-hide-layer";

export interface EShapeActionRuntimeShowHideLayerData {
	layers: DDiagramLayersLayer[];
	bringToFront: boolean;
	condition: boolean | null;
}

export class EShapeActionRuntimeShowHideLayer extends EShapeActionRuntimeConditional {
	protected _data: Map<EShape, EShapeActionRuntimeShowHideLayerData>;
	protected _layers: number[];
	protected _bringToFront: boolean;

	constructor(value: EShapeActionValueShowHideLayer) {
		super(value, EShapeRuntimeReset.NONE);
		this._data = new Map<EShape, EShapeActionRuntimeShowHideLayerData>();
		this._layers = value.layers;
		this._bringToFront = value.bringToFront;
	}

	initialize(shape: EShape, runtime: EShapeRuntime): void {
		super.initialize(shape, runtime);
		let data = this._data.get(shape);
		if (data == null) {
			data = this.newData(shape);
			if (data != null) {
				this._data.set(shape, data);
			}
		}
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		const data = this._data.get(shape);
		if (data) {
			const newCondition = this.condition(shape, time, EShapeActionEnvironment);
			if (data.condition !== newCondition) {
				data.condition = newCondition;
				const layers = data.layers;
				if (newCondition) {
					if (data.bringToFront) {
						DDiagramLayers.bringAllToFront(layers);
						DDiagramLayers.showAll(layers);
					} else {
						DDiagramLayers.showAll(layers);
					}
				} else {
					DDiagramLayers.hideAll(layers);
				}
			}
		}
	}

	protected newData(shape: EShape): EShapeActionRuntimeShowHideLayerData | undefined {
		const layers = DDiagramLayers.toLayers(shape, this._layers);
		if (0 < layers.length) {
			return {
				layers: layers,
				bringToFront: this._bringToFront,
				condition: null
			};
		}
	}
}
