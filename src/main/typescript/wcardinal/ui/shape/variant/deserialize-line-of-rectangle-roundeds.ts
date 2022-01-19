/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeLineOfRectangleRoundeds } from "./e-shape-line-of-rectangle-roundeds";

export const deserializeLineOfRectangleRoundeds = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeLineOfRectangleRoundeds
): Promise<EShapeLineOfRectangleRoundeds> | EShapeLineOfRectangleRoundeds => {
	return deserializeBase(item, manager, shape || new EShapeLineOfRectangleRoundeds());
};
