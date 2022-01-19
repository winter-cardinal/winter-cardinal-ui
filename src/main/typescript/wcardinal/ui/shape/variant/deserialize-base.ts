/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { isString } from "../../util/is-string";
import { deserializeActionValue } from "../action/deserialize-action-value";
import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserialize } from "./deserialize";
import { deserializeGradient } from "./deserialize-gradient";
import { toImageElement } from "./to-image-element";
import { toSizeNormalized } from "./to-size-normalized";

export const deserializeBase = <SHAPE extends EShape>(
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	result: SHAPE
): Promise<SHAPE> | SHAPE => {
	result.id = manager.resources[item[1]] || "";
	const transform = result.transform;
	transform.position.set(item[2], item[3]);
	transform.rotation = item[6];
	transform.skew.set(item[7], item[7]);
	transform.pivot.set(item[21], item[22]);
	result.size.set(toSizeNormalized(item[4]), toSizeNormalized(item[5]));
	result.fill.deserialize(item[8], manager);
	result.stroke.deserialize(item[9], manager);
	result.cursor = manager.resources[item[10]] || "";
	result.text.deserialize(item[11], manager);
	result.data.deserialize(item[12], manager);
	result.radius = item[13];
	result.corner = item[14];
	const item23 = item[23];
	result.interactive = !!(item23 & 1);
	const state = result.state;
	state.isFocusable = !(item23 & 2);
	state.isActive = !!(item23 & 4);
	const item24 = item[24];
	result.shortcut = 0 <= item24 ? manager.resources[item24] : undefined;
	const item25 = item[25];
	result.title = 0 <= item25 ? manager.resources[item25] : undefined;
	const item26 = item[26];
	result.uuid = item26 != null ? item26 : 0;

	// Children
	let childrenPromise: Promise<SHAPE> | null = null;
	const childrenSerialized = item[20];
	if (0 < childrenSerialized.length) {
		const childrenOrPromises = [];
		for (let i = 0, imax = childrenSerialized.length; i < imax; ++i) {
			childrenOrPromises.push(deserialize(childrenSerialized[i], manager));
		}
		childrenPromise = Promise.all(childrenOrPromises).then((children: EShape[]) => {
			result.children = children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				children[i].parent = result;
			}
			result.onChildTransformChange();
			result.toDirty();
			return result;
		});
	}

	// Action
	const serializedActions = item[17];
	for (let i = 0, imax = serializedActions.length; i < imax; ++i) {
		result.action.add(deserializeActionValue(serializedActions[i], manager));
	}

	// Gradient
	const gradientId = item[19];
	if (0 <= gradientId && gradientId < manager.resources.length) {
		const gradient = manager.resources[gradientId];
		if (isString(gradient)) {
			result.gradient = deserializeGradient(gradient);
		}
	}

	// Image
	let imagePromise: Promise<SHAPE> | null = null;
	const imageId = item[18];
	if (0 <= imageId && imageId < manager.resources.length) {
		const imageSrc = manager.resources[imageId];
		if (isString(imageSrc)) {
			imagePromise = toImageElement(imageSrc).then((imageElement) => {
				result.image = imageElement;
				return result;
			});
		}
	}

	//
	if (childrenPromise != null) {
		if (imagePromise != null) {
			return Promise.all([childrenPromise, imagePromise]).then(() => {
				return result;
			});
		} else {
			return childrenPromise;
		}
	} else {
		if (imagePromise != null) {
			return imagePromise;
		} else {
			return result;
		}
	}
};
