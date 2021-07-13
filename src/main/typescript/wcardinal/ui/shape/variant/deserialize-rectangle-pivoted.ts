/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeRectanglePivoted } from "./e-shape-rectangle-pivoted";

export const deserializeRectanglePivoted = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeRectanglePivoted> | EShapeRectanglePivoted => {
	return EShapeDeserializer.deserialize(item, manager, new EShapeRectanglePivoted());
};
