/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLine } from "./e-shape-line";

export const deserializeLine = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeLine> | EShapeLine | null => {
	const resources = manager.resources;
	const resourceId = item[15];
	if (0 <= resourceId && resourceId < resources.length) {
		let parsed = manager.getExtension<[number[], number[], number]>(resourceId);
		if (parsed == null) {
			parsed = JSON.parse(resources[resourceId]) as [number[], number[], number];
			manager.setExtension(resourceId, parsed);
		}
		const style = parsed[2] ?? EShapePointsStyle.NONE;
		const mask =
			EShapePointsStyle.NON_SCALING_MASK |
			EShapePointsStyle.DOTTED_MASK |
			EShapePointsStyle.DASHED_MASK;
		const shape = new EShapeLine(
			parsed[0],
			parsed[1],
			EShapeDefaults.STROKE_WIDTH,
			style & ~mask
		);
		const deprecated = style & mask;
		if (deprecated) {
			shape.stroke.style |= deprecated;
		}
		return EShapeDeserializer.deserialize(item, manager, shape);
	}
	return null;
};
