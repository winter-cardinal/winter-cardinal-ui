/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { isString } from "../../util/is-string";
import { deserializeActionValues } from "../action/deserialize-action-values";
import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserialize } from "./deserialize";
import { deserializeGradient } from "./deserialize-gradient";
import { toImageElement } from "./to-image-element";
import { toSizeNormalized } from "./to-size-normalized";

const deserializeChildren = <SHAPE extends EShape>(
	serializeds: DDiagramSerializedItem[],
	manager: EShapeResourceManagerDeserialization,
	result: SHAPE
): Promise<SHAPE> | null => {
	if (0 < serializeds.length) {
		const deserializeds = [];
		for (let i = 0, imax = serializeds.length; i < imax; ++i) {
			deserializeds.push(deserialize(serializeds[i], manager));
		}
		return Promise.all(deserializeds).then((children: EShape[]): SHAPE => {
			result.children = children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				children[i].parent = result;
			}
			result.onChildTransformChange();
			result.toDirty();
			return result;
		});
	}
	return null;
};

const deserializeImage = <SHAPE extends EShape>(
	index: number,
	manager: EShapeResourceManagerDeserialization,
	result: SHAPE
): Promise<SHAPE> | null => {
	const resources = manager.resources;
	if (0 <= index && index < resources.length) {
		const imageSrc = resources[index];
		if (isString(imageSrc)) {
			return toImageElement(imageSrc).then((imageElement) => {
				result.image = imageElement;
				return result;
			});
		}
	}
	return null;
};

export const deserializeBase = <SHAPE extends EShape>(
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	result: SHAPE
): Promise<SHAPE> | SHAPE => {
	const resources = manager.resources;
	result.id = resources[item[1]] || "";
	const transform = result.transform;
	transform.position.set(item[2], item[3]);
	transform.rotation = item[6];
	transform.skew.set(item[7], item[7]);
	transform.pivot.set(item[21], item[22]);
	result.size.set(toSizeNormalized(item[4]), toSizeNormalized(item[5]));
	result.fill.deserialize(item[8], manager);
	result.stroke.deserialize(item[9], manager);
	const item10 = item[10];
	result.cursor = 0 <= item10 ? resources[item10] : undefined;
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
	result.shortcut = 0 <= item24 ? resources[item24] : undefined;
	const item25 = item[25];
	result.title = 0 <= item25 ? resources[item25] : undefined;
	const item26 = item[26];
	result.uuid = item26 != null ? item26 : 0;
	const item27 = item[27];
	if (item27 != null && 0 <= item27) {
		result.capability.deserialize(item27, manager);
	}

	const children = deserializeChildren(item[20], manager, result);
	deserializeActionValues(item[17], manager, result);
	deserializeGradient(item[19], manager, result);
	const image = deserializeImage(item[18], manager, result);

	if (children != null) {
		if (image != null) {
			return Promise.all([children, image]).then(() => {
				return result;
			});
		} else {
			return children;
		}
	} else {
		if (image != null) {
			return image;
		} else {
			return result;
		}
	}
};
