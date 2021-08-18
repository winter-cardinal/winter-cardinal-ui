/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLine } from "./e-shape-line";

export const deserializeLine = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeLine> | EShapeLine | null => {
	const shape = new EShapeLine();
	EShapeDeserializer.deserialize(item, manager, shape);
	shape.points.deserialize(item[15], manager);
	const style = shape.points.style;
	const mask =
		EShapePointsStyle.NON_SCALING_MASK |
		EShapePointsStyle.DOTTED_MASK |
		EShapePointsStyle.DASHED_MASK;
	const deprecated = style & mask;
	if (deprecated) {
		shape.points.style &= ~mask;
		shape.stroke.style |= deprecated;
	}
	return shape;
};
