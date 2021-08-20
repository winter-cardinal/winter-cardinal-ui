/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeUuidMapping } from "../e-shape-uuid-mapping";
import { EShapeConnectorLine } from "./e-shape-connector-line";

export const deserializeConnectorLine = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeConnectorLine> | EShapeConnectorLine | null => {
	return EShapeDeserializer.deserialize(item, manager, new EShapeConnectorLine());
};

export const onConnectorLineDeserialized = (
	item: DDiagramSerializedItem,
	shape: EShape,
	mapping: EShapeUuidMapping,
	manager: EShapeResourceManagerDeserialization
): void => {
	if (shape instanceof EShapeConnectorLine) {
		const resources = manager.resources;
		const resourceId = item[15];
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<[number, number]>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as [number, number];
				manager.setExtension(resourceId, parsed);
			}
			shape.points.deserialize(parsed[1], manager);
			shape.edge.deserialize(parsed[0], mapping, manager);
		}
	}
};
