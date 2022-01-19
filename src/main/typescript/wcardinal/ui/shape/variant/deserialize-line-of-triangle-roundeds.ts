/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeLineOfTriangleRoundeds } from "./e-shape-line-of-triangle-roundeds";

export const deserializeLineOfTriangleRoundeds = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeLineOfTriangleRoundeds
): Promise<EShapeLineOfTriangleRoundeds> | EShapeLineOfTriangleRoundeds => {
	return deserializeBase(item, manager, shape || new EShapeLineOfTriangleRoundeds());
};
