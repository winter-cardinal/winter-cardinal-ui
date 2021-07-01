/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramLayerContainer } from "../../d-diagram-layer-container";
import { DDiagramLayers, DDiagramLayersLayer } from "../../d-diagram-layers";
import { EShape } from "../e-shape";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueMiscLayerBinding } from "./e-shape-action-value-misc-layer-binding";

export interface EShapeActionRuntimeMiscLayerBindingData {
	container: DDiagramLayerContainer | EShapeLayerContainer;
	layers: DDiagramLayersLayer[];
	bringToFront: boolean;
	condition: boolean | null;
}

export class EShapeActionRuntimeMiscLayerBinding extends EShapeActionRuntimeConditional {
	protected _data: Map<EShape, EShapeActionRuntimeMiscLayerBindingData>;
	protected _layers: number[];
	protected _bringToFront: boolean;

	constructor(value: EShapeActionValueMiscLayerBinding) {
		super(value, EShapeRuntimeReset.NONE);
		this._data = new Map<EShape, EShapeActionRuntimeMiscLayerBindingData>();
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
		if (data && data.container != null) {
			const newCondition = this.condition(shape, time);
			if (data.condition !== newCondition) {
				data.condition = newCondition;
				const container = data.container;
				const layers = data.layers;
				if (newCondition) {
					if (data.bringToFront) {
						DDiagramLayers.bringAllToFront(container, layers);
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

	protected toIsActive(data: EShapeActionRuntimeMiscLayerBindingData): boolean {
		if (data.container != null) {
			const layers = data.layers;
			for (let i = 0, imax = layers.length; i < imax; ++i) {
				if (layers[i].visible) {
					return true;
				}
			}
		}
		return false;
	}

	protected newData(shape: EShape): EShapeActionRuntimeMiscLayerBindingData | undefined {
		const container = DDiagramLayers.toContainer(shape);
		if (container != null) {
			const layers = DDiagramLayers.toLayers(container, this._layers);
			if (0 < layers.length) {
				return {
					container,
					layers: layers,
					bringToFront: this._bringToFront,
					condition: null
				};
			}
		}
		return undefined;
	}
}
