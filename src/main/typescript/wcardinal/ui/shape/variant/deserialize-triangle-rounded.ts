/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeTriangleRounded } from "./e-shape-triangle-rounded";

export const deserializeTriangleRounded = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeTriangleRounded> | EShapeTriangleRounded => {
	return EShapeDeserializer.deserialize(item, manager, new EShapeTriangleRounded());
};
