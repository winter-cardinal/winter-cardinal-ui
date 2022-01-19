/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeOnDeserializeds } from "../e-shape-deserializers";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeUuidMapping } from "../e-shape-uuid-mapping";
import { EShapeUuidMappingImpl } from "../e-shape-uuid-mapping-impl";
import { deserialize } from "./deserialize";

export const deserializeAll = (
	serializeds: DDiagramSerializedItem[],
	manager: EShapeResourceManagerDeserialization
): Promise<EShape[]> | null => {
	const shapes: Array<Promise<EShape> | EShape> = [];
	for (let i = 0, imax = serializeds.length; i < imax; ++i) {
		shapes.push(deserialize(serializeds[i], manager));
	}
	if (0 < shapes.length) {
		return Promise.all(shapes).then((resolved: EShape[]): EShape[] => {
			callOnDeserialized(serializeds, resolved, new EShapeUuidMappingImpl(resolved), manager);
			return resolved;
		});
	}
	return null;
};

const callOnDeserialized = (
	serializeds: DDiagramSerializedItem[],
	shapes: EShape[],
	mapping: EShapeUuidMapping,
	manager: EShapeResourceManagerDeserialization
): void => {
	for (let i = 0, imax = serializeds.length; i < imax; ++i) {
		const serialized = serializeds[i];
		const shape = shapes[i];
		const onDeserialized = EShapeOnDeserializeds[serialized[0]];
		if (onDeserialized) {
			onDeserialized(serialized, shape, mapping, manager);
		}
		callOnDeserialized(serialized[20], shape.children, mapping, manager);
	}
};
