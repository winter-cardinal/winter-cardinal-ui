/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramLayers, DDiagramLayersLayer } from "../../d-diagram-layers";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueMiscLayerShowHide } from "./e-shape-action-value-misc-layer-show-hide";

export interface EShapeActionRuntimeMiscLayerShowHideData {
	layers: DDiagramLayersLayer[];
	bringToFront: boolean;
	condition: boolean | null;
}

export class EShapeActionRuntimeMiscLayerShowHide extends EShapeActionRuntimeConditional {
	protected _data: Map<EShape, EShapeActionRuntimeMiscLayerShowHideData>;
	protected _layers: number[];
	protected _bringToFront: boolean;

	constructor(value: EShapeActionValueMiscLayerShowHide) {
		super(value, EShapeRuntimeReset.NONE);
		this._data = new Map<EShape, EShapeActionRuntimeMiscLayerShowHideData>();
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
			const newCondition = this.condition(shape, time);
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

	protected newData(shape: EShape): EShapeActionRuntimeMiscLayerShowHideData | undefined {
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
