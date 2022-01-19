/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeLineOfRectangles } from "./e-shape-line-of-rectangles";

export const deserializeLineOfRectangles = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeLineOfRectangles
): Promise<EShapeLineOfRectangles> | EShapeLineOfRectangles => {
	return deserializeBase(item, manager, shape || new EShapeLineOfRectangles());
};
