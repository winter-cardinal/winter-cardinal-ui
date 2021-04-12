/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeGroupShadowed } from "./e-shape-group-shadowed";

export const deserializeGroupShadowed = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeGroupShadowed> | EShapeGroupShadowed => {
	const shape = new EShapeGroupShadowed(manager.isEditMode);
	const result = EShapeDeserializer.deserialize(item, manager, shape);
	shape.size.init();
	return result;
};
