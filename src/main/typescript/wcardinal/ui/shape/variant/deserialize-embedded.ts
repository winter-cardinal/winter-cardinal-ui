/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeDataMapper } from "../e-shape-data-mapper";
import { EShapeDataValueScope } from "../e-shape-data-value-scope";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeEmbedded } from "./e-shape-embedded";
import { EShapeEmbeddedLayer } from "./e-shape-embedded-layer";
import { EShapeRectangle } from "./e-shape-rectangle";

const create = (
	name: string,
	width: number,
	height: number,
	container: EShapeLayerContainer,
	manager: EShapeResourceManagerDeserialization,
	item: DDiagramSerializedItem,
	shape?: EShapeEmbedded
): Promise<EShapeEmbedded> | EShapeEmbedded => {
	shape = shape || new EShapeEmbedded(name, manager.isEditMode);
	const result = deserializeBase(item, manager, shape);
	const shapeSize = shape.size;
	const sizeX = shapeSize.x;
	const sizeY = shapeSize.y;
	shape.size.set(width, height);
	container.copyTo(shape);
	shape.size.init();
	shape.size.set(sizeX, sizeY);
	applyDataMappings(shape, manager);
	return result;
};

const createMissing = (
	name: string,
	manager: EShapeResourceManagerDeserialization,
	item: DDiagramSerializedItem,
	shape?: EShapeEmbedded
): Promise<EShapeEmbedded> | EShapeEmbedded => {
	shape = shape || new EShapeEmbedded(name, manager.isEditMode);
	const result = deserializeBase(item, manager, shape);

	const size = shape.size;
	const sizeX = size.x;
	const sizeY = size.y;

	const children = shape.children;
	const layer = new EShapeEmbeddedLayer("missing", manager.isEditMode);
	const px = 0.5 * sizeX;
	const py = 0.5 * sizeX;
	layer.transform.position.set(-px, -py);
	layer.size.set(sizeX, sizeY);
	layer.parent = shape;

	const rectangle = new EShapeRectangle();
	rectangle.stroke.color = 0xff0000;
	rectangle.transform.position.set(px, py);
	rectangle.size.copyFrom(shape.size);
	rectangle.attach(layer);

	children.push(layer);
	shape.onChildTransformChange();
	shape.toDirty();
	shape.onAttach();

	shape.size.init();
	applyDataMappings(shape, manager);
	return result;
};

const applyDataMappings = (
	shape: EShapeEmbedded,
	manager: EShapeResourceManagerDeserialization
): void => {
	const mapping = shape.data.getMapping();
	if (mapping != null) {
		const values = mapping.values;
		for (let i = 0, imax = values.length; i < imax; ++i) {
			const value = values[i];
			const source = value[0];
			const mapper = manager.getDataMapper(source);
			if (mapper != null) {
				const children = shape.children;
				const destination = manager.getDataDestination(value[1]);
				const initial = value[2];
				applyDataMapping(children, mapper, destination, initial);
			}
		}
	}
};

const applyDataMapping = (
	targets: EShape[],
	mapper: EShapeDataMapper,
	destination: string[] | null,
	initial: string
): void => {
	for (let i = 0, imax = targets.length; i < imax; ++i) {
		const target = targets[i];

		const targetData = target.data;
		for (let j = 0, jmax = targetData.size(); j < jmax; ++j) {
			const targetDatum = targetData.get(j);
			if (targetDatum && targetDatum.scope !== EShapeDataValueScope.PRIVATE) {
				mapper.map(targetDatum, destination, initial);
			}
		}

		// Children
		const children = target.children;
		if (0 < children.length) {
			applyDataMapping(children, mapper, destination, initial);
		}
	}
};

export const deserializeEmbedded = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	creator?: (name: string, manager: EShapeResourceManagerDeserialization) => EShapeEmbedded
): Promise<EShapeEmbedded> | EShapeEmbedded | null => {
	const pieces = manager.pieces;
	const pieceId = item[15];
	if (pieces && 0 <= pieceId && pieceId < pieces.length) {
		const pieceData = manager.pieceData;
		if (pieceData) {
			const piece = pieces[pieceId];
			const pieceDatum = pieceData.get(piece);
			const shape = creator && creator(piece, manager);
			if (pieceDatum) {
				return create(
					piece,
					pieceDatum.width,
					pieceDatum.height,
					pieceDatum.layer,
					manager,
					item,
					shape
				);
			} else {
				return createMissing(piece, manager, item, shape);
			}
		}
	}
	return null;
};
