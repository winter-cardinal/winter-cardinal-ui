/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBaseStateSet } from "./d-base-state-set";
import { DDiagramCanvasIdMap } from "./d-diagram-canvas-id-map";
import { DDiagramCanvasTagMap } from "./d-diagram-canvas-tag-map";
import { DDiagramLayerBackground } from "./d-diagram-layer-background";
import { DDiagramSerializedItem, DDiagramSerializedLayer } from "./d-diagram-serialized";
import { EShapeActionValueMiscGestureType } from "./shape/action/e-shape-action-value-misc-gesture-type";
import { EShapeActionValueMiscLayerGesture } from "./shape/action/e-shape-action-value-misc-layer-gesture";
import { EShape } from "./shape/e-shape";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapeLayerState } from "./shape/e-shape-layer-state";
import { EShapeResourceManagerDeserialization } from "./shape/e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
import { EShapeRuntime } from "./shape/e-shape-runtime";
import { EShapeRectanglePivoted } from "./shape/variant/e-shape-rectangle-pivoted";
import { isString } from "./util/is-string";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export class DDiagramLayer extends EShapeContainer {
	reference: number;
	interactives: EShape[];
	protected declare _shape: EShape;

	constructor(name: string) {
		super();
		this.name = name;
		this.interactive = false;
		this.reference = 0;
		const shape = this.newShape();
		shape.parent = this;
		this._shape = shape;
		this.interactives = [];
	}

	get width(): number {
		return this._shape.size.x;
	}

	set width(width: number) {
		this._shape.size.x = width;
	}

	get height(): number {
		return this._shape.size.y;
	}

	set height(height: number) {
		this._shape.size.y = height;
	}

	get background(): DDiagramLayerBackground {
		return this._shape.fill;
	}

	get state(): DBaseStateSet {
		return this._shape.state;
	}

	protected newShape(): EShape {
		const result = new EShapeRectanglePivoted();
		result.fill.set(false, 0xffffff, 1);
		result.stroke.set(false);
		result.state.add(EShapeLayerState.INTERACTIVE);
		return result;
	}

	initialize(tags: DDiagramCanvasTagMap, ids: DDiagramCanvasIdMap, actionables: EShape[]): void {
		const interactives = this.interactives;
		const shape = this._shape;
		const isInteractive = shape.state.is(EShapeLayerState.INTERACTIVE);
		const isDraggable = shape.state.is(EShapeLayerState.DRAGGABLE);
		const isPinchable = shape.state.is(EShapeLayerState.PINCHABLE);
		if (isDraggable || isPinchable) {
			const runtime = new EShapeRuntime(shape);
			shape.runtime = runtime;
			const gestureType =
				(isDraggable
					? EShapeActionValueMiscGestureType.DRAG
					: EShapeActionValueMiscGestureType.NONE) |
				(isPinchable
					? EShapeActionValueMiscGestureType.PINCH
					: EShapeActionValueMiscGestureType.NONE);
			runtime.actions.push(
				new EShapeActionValueMiscLayerGesture("", gestureType).toRuntime()
			);
			actionables.push(shape);
			runtime.initialize(shape);
		}
		if (isInteractive || isDraggable || isPinchable) {
			shape.interactive = true;
			interactives.push(shape);
		}
		this.doInitialize(this.children, tags, interactives, actionables, ids);
	}

	protected doInitialize(
		shapes: EShape[],
		tags: DDiagramCanvasTagMap,
		interactives: EShape[],
		actionables: EShape[],
		ids: DDiagramCanvasIdMap
	): void {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];

			// Tag mappings
			const tag = shape.tag;
			for (let j = 0, jmax = tag.size(); j < jmax; ++j) {
				const value = tag.get(j);
				if (value) {
					const valueId = value.id;
					if (0 < valueId.length) {
						let values = tags[valueId];
						if (values == null) {
							values = [];
							tags[valueId] = values;
						}
						values.push(value);
					}
				}
			}

			// Id mappings
			const shapeId = shape.id;
			if (0 < shapeId.length) {
				const mapping: EShape[] | undefined = ids[shapeId];
				if (mapping == null) {
					ids[shapeId] = [shape];
				} else {
					mapping.push(shape);
				}
			}

			const runtime = shape.runtime;
			if (runtime) {
				// Interactives
				if (shape.interactive || 0 < shape.cursor.length || runtime.interactive) {
					interactives.push(shape);
				}

				// Actionables
				if (runtime.isActionable()) {
					actionables.push(shape);
				}

				// Shortcuts
				const shortcut = shape.shortcut;
				if (shortcut != null) {
					UtilKeyboardEvent.on(shape, shortcut, (e: KeyboardEvent): void => {
						runtime.onClick(shape, e);
					});
				}

				// Runtime
				runtime.initialize(shape);
			}

			// Children
			const children = shape.children;
			if (0 < children.length) {
				this.doInitialize(children, tags, interactives, actionables, ids);
			}
		}
	}

	hitTestInteractives(global: IPoint): EShape | null {
		const local = this._work;
		const interactives = this.interactives;
		for (let i = interactives.length - 1; 0 <= i; --i) {
			const interactive = interactives[i];
			if (interactive.visible) {
				interactive.toLocal(global, undefined, local);
				if (interactive.contains(local.x, local.y) != null) {
					return interactive;
				}
			}
		}

		return null;
	}

	addUuid(manager: EShapeResourceManagerSerialization): void {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].addUuid(manager);
		}
	}

	updateUuid(manager: EShapeResourceManagerSerialization): void {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].updateUuid(manager);
		}
	}

	destroy(): void {
		if (!this._destroyed) {
			const children = this.children;
			for (let i = children.length - 1; 0 <= i; --i) {
				children[i].destroy();
			}
			children.length = 0;
			super.destroy();
		}
	}

	serialize(
		layer: number,
		manager: EShapeResourceManagerSerialization,
		items: DDiagramSerializedItem[]
	): DDiagramSerializedLayer {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const shape = children[i];
			const item = shape.serialize(manager);
			item[16] = layer;
			items.push(item);
		}

		const shape = this._shape;
		const nameId = manager.addResource(this.name || "");
		const visible =
			(this.visible ? 1 : 0) | (shape.state.is(EShapeLayerState.INVISIBLE) ? 0 : 2);
		const position = this.position;
		const size = shape.size;
		const fill = shape.fill.serialize(manager);
		const isInteractive = shape.state.is(EShapeLayerState.INTERACTIVE) ? 1 : 0;
		const isDraggable = shape.state.is(EShapeLayerState.DRAGGABLE) ? 2 : 0;
		const isPinchable = shape.state.is(EShapeLayerState.PINCHABLE) ? 4 : 0;
		return [
			nameId,
			visible,
			position.x,
			position.y,
			size.x,
			size.y,
			fill,
			isInteractive | isDraggable | isPinchable
		];
	}

	static deserialize(
		serialized: DDiagramSerializedLayer,
		manager: EShapeResourceManagerDeserialization,
		width: number,
		height: number
	): DDiagramLayer {
		const result = new DDiagramLayer(this.deserializeName(serialized[0], manager));
		const shape = result._shape;

		const visibility = serialized[1];
		if (visibility != null) {
			if (manager.isEditMode && !(visibility & 0x1)) {
				result.visible = false;
			}
			if (!(visibility & 0x2)) {
				shape.state.add(EShapeLayerState.INVISIBLE);
				if (!manager.isEditMode) {
					result.visible = false;
				}
			}
		}

		const positionX = serialized[2];
		const positionY = serialized[3];
		result.position.set(positionX, positionY);

		const sizeX = serialized[4] ?? width;
		const sizeY = serialized[5] ?? height;
		shape.size.set(sizeX, sizeY);

		const fillId = serialized[6];
		if (fillId != null) {
			shape.fill.deserialize(fillId, manager);
		}

		const state = serialized[7] ?? 1;
		shape.state.set(EShapeLayerState.INTERACTIVE, !!(state & 0x1));
		shape.state.set(EShapeLayerState.DRAGGABLE, !!(state & 0x2));
		shape.state.set(EShapeLayerState.PINCHABLE, !!(state & 0x4));
		return result;
	}

	static deserializeName(
		target: string | number,
		manager: EShapeResourceManagerDeserialization
	): string {
		if (isString(target)) {
			return target;
		} else {
			const resources = manager.resources;
			if (0 <= target && target <= resources.length) {
				return resources[target];
			}
			return "";
		}
	}
}
