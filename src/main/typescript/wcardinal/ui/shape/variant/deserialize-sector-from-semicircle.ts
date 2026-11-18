/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { deserializeBase } from "./deserialize-base";
import { EShapeSector } from "./e-shape-sector";

export const deserializeSectorFromSemicircle = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeSector
): Promise<EShapeSector> | EShapeSector => {
	if (shape == null) {
		shape = new EShapeSector();
		shape.angle = Math.PI;
		shape.stroke.side &= ~EShapeStrokeSide.BOTTOM;
	}
	return deserializeBase(item, manager, shape);
};
