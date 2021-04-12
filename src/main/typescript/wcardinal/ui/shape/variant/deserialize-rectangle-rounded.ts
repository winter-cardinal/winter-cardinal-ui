/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";

export const deserializeRectangleRounded = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeRectangleRounded> | EShapeRectangleRounded => {
	return EShapeDeserializer.deserialize(item, manager, new EShapeRectangleRounded());
};
