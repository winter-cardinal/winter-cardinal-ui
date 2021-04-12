/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeGroup } from "./e-shape-group";

export const deserializeGroup = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeGroup> | EShapeGroup => {
	const shape = new EShapeGroup(manager.isEditMode);
	const result = EShapeDeserializer.deserialize(item, manager, shape);
	shape.size.init();
	return result;
};
