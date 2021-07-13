/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem, DDiagramSerializedLayer } from "../../d-diagram-serialized";
import { isString } from "../../util/is-string";
import { EShapeActionValueMiscGestureType } from "../action/e-shape-action-value-misc-gesture-type";
import { EShapeActionValueMiscLayerGesture } from "../action/e-shape-action-value-misc-layer-gesture";
import { EShapeFill } from "../e-shape-fill";
import { EShapeLayer } from "../e-shape-layer";
import { EShapeLayerState } from "../e-shape-layer-state";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeFillImpl } from "./e-shape-fill-impl";
import { EShapeGroupViewer } from "./e-shape-group-viewer";

export class EShapeEmbeddedLayer extends EShapeGroupViewer implements EShapeLayer {
	protected _name: string;

	constructor(name: string, isEditMode: boolean, type = EShapeType.EMBEDDED_LAYER) {
		super(isEditMode, type);
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	protected newGroupFill(): EShapeFill {
		return new EShapeFillImpl(this, false, 0xffffff, 1);
	}

	protected isGroupSizeFittable(): boolean {
		return false;
	}

	clone(): EShapeEmbeddedLayer {
		const result = this.newClone().copy(this);
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const clone = children[i].clone();
			clone.parent = result;
			result.children.push(clone);
		}
		result.onChildTransformChange();
		result.toDirty();
		result.size.init();
		return result;
	}

	protected newClone(): EShapeEmbeddedLayer {
		const constructor = this.constructor as typeof EShapeEmbeddedLayer;
		return new constructor(this._name, this._isEditMode, this.type);
	}

	serializeChildren(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem[] {
		return [];
	}

	serializeImage(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	serializeGradient(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	static deserialize(
		serialized: DDiagramSerializedLayer,
		manager: EShapeResourceManagerDeserialization,
		width: number,
		height: number
	): EShapeEmbeddedLayer {
		const result = new EShapeEmbeddedLayer(
			this.deserializeName(serialized[0], manager),
			manager.isEditMode
		);

		const visibility = serialized[1];
		const visible = visibility == null || !!(visibility & 0x2);
		if (!visible) {
			result.visible = false;
			result.state.add(EShapeLayerState.INVISIBLE);
		}

		const positionX = -0.5 * width + (serialized[2] || 0);
		const positionY = -0.5 * height + (serialized[3] || 0);
		result.transform.position.set(positionX, positionY);

		const sizeX = serialized[4] ?? width;
		const sizeY = serialized[5] ?? height;
		result.size.set(sizeX, sizeY);

		const fillId = serialized[6];
		if (fillId != null) {
			result.fill.deserialize(fillId, manager);
		}

		if (!manager.isEditMode) {
			const state = serialized[7] ?? 1;
			const isInteractive = state & 0x1;
			const isDraggable = state & 0x2;
			const isPinchable = state & 0x4;
			if (isDraggable || isPinchable) {
				const gestureType =
					(isDraggable
						? EShapeActionValueMiscGestureType.DRAG
						: EShapeActionValueMiscGestureType.NONE) |
					(isPinchable
						? EShapeActionValueMiscGestureType.PINCH
						: EShapeActionValueMiscGestureType.NONE);
				result.action.add(new EShapeActionValueMiscLayerGesture("", gestureType));
			}
			if (isInteractive || isDraggable || isPinchable) {
				result.interactive = true;
			}
		}
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
