/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeBar } from "./e-shape-bar";

export const deserializeBar = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeBar
): Promise<EShapeBar> | EShapeBar => {
	shape = shape || new EShapeBar();
	const result = deserializeBase(item, manager, shape);
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
	return result;
};
