/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeLineOfTriangles } from "./e-shape-line-of-triangles";

export const deserializeLineOfTriangles = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeLineOfTriangles
): Promise<EShapeLineOfTriangles> | EShapeLineOfTriangles => {
	return deserializeBase(item, manager, shape || new EShapeLineOfTriangles());
};
