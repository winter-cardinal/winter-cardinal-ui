/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapePolygon, EShapePolygonExtensionSerialized } from "./e-shape-polygon";
import { EShapeRectangle } from "./e-shape-rectangle";

export const deserializePolygon = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapePolygon
): Promise<EShapeRectangle> | EShapeRectangle => {
	const resourceId = item[15];
	const resources = manager.resources;
	const resourcesLength = resources.length;
	let vertices: number[];
	let distances: number[];
	let clippings: number[];
	let indices: number[];
	if (0 <= resourceId && resourceId < resourcesLength) {
		let parsed = manager.getExtension<EShapePolygonExtensionSerialized>(resourceId);
		if (parsed == null) {
			parsed = JSON.parse(resources[resourceId]) as EShapePolygonExtensionSerialized;
			manager.setExtension(resourceId, parsed);
		}

		// Vertices
		const vertexId = parsed[0];
		if (0 <= vertexId && vertexId < resourcesLength) {
			const verticesLike = manager.getExtension<number[]>(vertexId);
			if (verticesLike != null) {
				vertices = verticesLike;
			} else {
				vertices = [];
			}
		} else {
			vertices = [];
		}

		// Distances
		const distanceId = parsed[1];
		if (0 <= distanceId && distanceId < resourcesLength) {
			const distancesLike = manager.getExtension<number[]>(distanceId);
			if (distancesLike != null) {
				distances = distancesLike;
			} else {
				distances = [];
			}
		} else {
			distances = [];
		}

		// Clippings
		const clippingId = parsed[2];
		if (0 <= clippingId && clippingId < resourcesLength) {
			const clippingsLike = manager.getExtension<number[]>(clippingId);
			if (clippingsLike != null) {
				clippings = clippingsLike;
			} else {
				clippings = [];
			}
		} else {
			clippings = [];
		}

		// Indices
		const indexId = parsed[3];
		if (0 <= indexId && indexId < resourcesLength) {
			const indicesLike = manager.getExtension<number[]>(indexId);
			if (indicesLike != null) {
				indices = indicesLike;
			} else {
				indices = [];
			}
		} else {
			indices = [];
		}
	} else {
		vertices = [];
		distances = [];
		clippings = [];
		indices = [];
	}
	if (shape != null) {
		shape.set(vertices, distances, clippings, indices);
	} else {
		shape = new EShapePolygon(undefined, vertices, distances, clippings, indices);
	}
	return deserializeBase(item, manager, shape);
};
