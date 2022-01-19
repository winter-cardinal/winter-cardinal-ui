/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";

export const deserializeRectangleRounded = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeRectangleRounded
): Promise<EShapeRectangleRounded> | EShapeRectangleRounded => {
	return deserializeBase(item, manager, shape || new EShapeRectangleRounded());
};
