/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DDiagramLayers, DDiagramLayersLayer } from "../../d-diagram-layers";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueMiscLayerGesture } from "./e-shape-action-value-misc-layer-gesture";
import { DApplications } from "../../d-applications";
import { UtilGesture } from "../../util/util-gesture";
import { EShapeActionValueMiscGestureType } from "./e-shape-action-value-misc-gesture-type";

export class EShapeActionRuntimeMiscLayerGesture extends EShapeActionRuntimeConditional {
	protected static GESTURE_UTIL?: UtilGesture<DDiagramLayersLayer>;
	protected _layers: Map<EShape, DDiagramLayersLayer>;
	protected _gestureType: EShapeActionValueMiscGestureType;
	protected _scaleMin: number;
	protected _scaleMax: number;

	constructor(value: EShapeActionValueMiscLayerGesture) {
		super(value, EShapeRuntimeReset.NONE);
		this._layers = new Map<EShape, DDiagramLayersLayer>();
		this._gestureType = value.gestureType;
		this._scaleMin = value.scaleMin;
		this._scaleMax = value.scaleMax;
	}

	initialize(shape: EShape, runtime: EShapeRuntime): void {
		super.initialize(shape, runtime);

		const layers = this._layers;
		const layer = layers.get(shape);
		if (layer == null) {
			const newLayer = DDiagramLayers.toLayer(shape);
			if (newLayer != null) {
				this._layers.set(shape, newLayer);
			}
		}
	}

	onDown(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		super.onDown(shape, runtime, e);

		if (e instanceof InteractionEvent) {
			const layer = this._layers.get(shape);
			if (layer && this.condition(shape, e.data.originalEvent.timeStamp)) {
				this.getGestureUtil().onDown(layer, e);
			}
		}
	}

	protected getGestureUtil(): UtilGesture<DDiagramLayersLayer> {
		return (EShapeActionRuntimeMiscLayerGesture.GESTURE_UTIL ??= this.newGestureUtil());
	}

	protected newGestureUtil(): UtilGesture<DDiagramLayersLayer> {
		const work = new Point();
		return new UtilGesture<DDiagramLayersLayer>({
			on: {
				move: (
					target: DDiagramLayersLayer,
					dx: number,
					dy: number,
					x: number,
					y: number,
					ds: number
				): void => {
					this.onGestureMove(target, dx, dy, x, y, ds, work);
				}
			}
		});
	}

	protected onGestureMove(
		layer: DDiagramLayersLayer,
		dx: number,
		dy: number,
		x: number,
		y: number,
		ds: number,
		work: Point
	): void {
		const parent = layer.parent;
		if (parent) {
			const transform = layer.transform;
			const gestureType = this._gestureType;
			let isChanged = false;

			// Scale
			let scaleRatio = 1;
			if (gestureType & EShapeActionValueMiscGestureType.PINCH) {
				const scale = transform.scale;
				const oldScale = scale.y;
				const newScale = Math.min(this._scaleMax, Math.max(this._scaleMin, oldScale * ds));
				scaleRatio = newScale / oldScale;
				scale.set(newScale, newScale);
				isChanged = true;
			}

			// Position
			if (gestureType & EShapeActionValueMiscGestureType.DRAG) {
				parent.toLocal(work.set(x, y), undefined, work);
				const lx = work.x;
				const ly = work.y;
				const cx = x - dx;
				const cy = y - dy;
				parent.toLocal(work.set(cx, cy), undefined, work);
				const lcx = work.x;
				const lcy = work.y;
				const position = transform.position;
				const newX = (position.x - lcx) * scaleRatio + lx;
				const newY = (position.y - lcy) * scaleRatio + ly;
				position.set(newX, newY);
				isChanged = true;
			}

			// Update
			if (isChanged) {
				DApplications.update(layer);
			}
		}
	}

	protected toSize(layer: DDiagramLayersLayer, result: Point): Point {
		if ("size" in layer) {
			result.copyFrom(layer.size);
		} else {
			result.set((layer as any).width, (layer as any).height);
		}
		return result;
	}
}
