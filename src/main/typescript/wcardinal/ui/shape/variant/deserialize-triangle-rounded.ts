/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeTriangleRounded } from "./e-shape-triangle-rounded";

export const deserializeTriangleRounded = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeTriangleRounded
): Promise<EShapeTriangleRounded> | EShapeTriangleRounded => {
	return deserializeBase(item, manager, shape || new EShapeTriangleRounded());
};
