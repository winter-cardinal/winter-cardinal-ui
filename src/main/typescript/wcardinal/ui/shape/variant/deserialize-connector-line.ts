/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeConnector } from "../e-shape-connector";
import { EShapeConnectorEdge, EShapeConnectorEdgeSerialized } from "../e-shape-connector-edge";
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
			shape.points.style = parsed[1];
			onConnectorLineEdgeContainerDeserialized(shape, parsed[0], mapping, manager);
		}
	}
};

const onConnectorLineEdgeContainerDeserialized = (
	shape: EShapeConnectorLine,
	resourceId: number,
	mapping: EShapeUuidMapping,
	manager: EShapeResourceManagerDeserialization
): void => {
	const resources = manager.resources;
	if (0 <= resourceId && resourceId < resources.length) {
		let parsed = manager.getExtension<[number, number]>(resourceId);
		if (parsed == null) {
			parsed = JSON.parse(resources[resourceId]) as [number, number];
			manager.setExtension(resourceId, parsed);
		}
		const edge = shape.edge;
		onConnectorLineEdgeDeserialized(shape, edge.left, parsed[0], mapping, manager);
		onConnectorLineEdgeDeserialized(shape, edge.right, parsed[1], mapping, manager);
	}
};

const onConnectorLineEdgeDeserialized = (
	connector: EShapeConnector,
	edge: EShapeConnectorEdge,
	resourceId: number,
	mapping: EShapeUuidMapping,
	manager: EShapeResourceManagerDeserialization
): void => {
	const resources = manager.resources;
	if (0 <= resourceId && resourceId < resources.length) {
		let parsed = manager.getExtension<EShapeConnectorEdgeSerialized>(resourceId);
		if (parsed == null) {
			parsed = JSON.parse(resources[resourceId]) as EShapeConnectorEdgeSerialized;
			manager.setExtension(resourceId, parsed);
		}
		let shape: EShape | null = null;
		const shapeUuid = parsed[0];
		if (shapeUuid != null) {
			shape = mapping.find(shapeUuid) || null;
		}
		edge.lock();
		edge.shape = shape;
		edge.position.set(parsed[1], parsed[2]);
		edge.local.set(parsed[3], parsed[4]);
		edge.unlock();
		if (shape) {
			shape.connector.add(connector);
		}
	}
};
