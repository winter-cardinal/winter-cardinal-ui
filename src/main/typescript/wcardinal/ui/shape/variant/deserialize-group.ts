/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeGroup } from "./e-shape-group";

export const deserializeGroup = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeGroup
): Promise<EShapeGroup> | EShapeGroup => {
	shape = shape || new EShapeGroup(manager.isEditMode);
	const result = deserializeBase(item, manager, shape);
	shape.size.init();
	return result;
};
