/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedLayer } from "../../d-diagram-serialized";
import { isString } from "../../util/is-string";
import { EShapeActionValueGesture } from "../action/e-shape-action-value-gesture";
import { EShapeActionValueGestureOperationType } from "../action/e-shape-action-value-gesture-operation-type";
import { EShapeActionValueGestureType } from "../action/e-shape-action-value-gesture-type";
import { EShapeLayerState } from "../e-shape-layer-state";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeEmbeddedLayer } from "./e-shape-embedded-layer";

const deserializeEmbeddedLayerName = (
	target: string | number,
	manager: EShapeResourceManagerDeserialization
): string => {
	if (isString(target)) {
		return target;
	} else {
		const resources = manager.resources;
		if (0 <= target && target <= resources.length) {
			return resources[target];
		}
		return "";
	}
};

export const deserializeEmbeddedLayer = (
	serialized: DDiagramSerializedLayer,
	manager: EShapeResourceManagerDeserialization,
	width: number,
	height: number,
	creator?: (name: string, manager: EShapeResourceManagerDeserialization) => EShapeEmbeddedLayer
): EShapeEmbeddedLayer => {
	const name = deserializeEmbeddedLayerName(serialized[0], manager);
	const result = creator
		? creator(name, manager)
		: new EShapeEmbeddedLayer(name, manager.isEditMode);

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
					? EShapeActionValueGestureOperationType.DRAG
					: EShapeActionValueGestureOperationType.NONE) |
				(isPinchable
					? EShapeActionValueGestureOperationType.PINCH
					: EShapeActionValueGestureOperationType.NONE);
			result.action.add(
				new EShapeActionValueGesture("", EShapeActionValueGestureType.LAYER, gestureType)
			);
		}
		if (isInteractive || isDraggable || isPinchable) {
			result.interactive = true;
		}
	}
	return result;
};
