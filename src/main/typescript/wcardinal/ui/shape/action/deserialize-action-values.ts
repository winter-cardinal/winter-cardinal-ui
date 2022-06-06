/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isArray } from "../../util/is-array";
import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeActionValue } from "./deserialize-action-value";
import { EShapeActionValueDeserializers } from "./e-shape-action-value-deserializers";
import { EShapeActionValueType } from "./e-shape-action-value-type";

const toSerialized = (resource: string): number[] | null => {
	try {
		const parsed = JSON.parse(resource);
		if (isArray(parsed) && 2 <= parsed.length) {
			return parsed;
		}
		return null;
	} catch (e) {
		return null;
	}
};

export const deserializeActionValues = (
	indices: number[],
	manager: EShapeResourceManagerDeserialization,
	result: EShape
): void => {
	const action = result.action;
	const resources = manager.resources;
	for (let i = 0, imax = indices.length; i < imax; ++i) {
		const index = indices[i];
		const saved = manager.getAction(index);
		if (saved != null) {
			action.add(saved);
		} else {
			const resource = resources[index];
			if (resource != null) {
				const serialized = toSerialized(resource);
				if (serialized != null && 0 < serialized.length) {
					const type = serialized[0];
					const deserializer =
						EShapeActionValueType.EXTENSION <= type
							? EShapeActionValueDeserializers[type]
							: deserializeActionValue;
					if (deserializer != null) {
						const deserialized = deserializer(serialized, manager);
						if (deserialized != null) {
							manager.setAction(index, deserialized);
							action.add(deserialized);
						}
					}
				}
			}
		}
	}
};
