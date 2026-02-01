/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapePolygon } from "./e-shape-polygon";

export const deserializePolygon = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapePolygon
): Promise<EShapePolygon> | EShapePolygon => {
	shape = shape || new EShapePolygon();
	deserializeBase(item, manager, shape);
	shape.deserialize(item[15], manager);
	return shape;
};
