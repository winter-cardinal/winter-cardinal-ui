/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeGroupShadowed } from "./e-shape-group-shadowed";

export const deserializeGroupShadowed = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeGroupShadowed
): Promise<EShapeGroupShadowed> | EShapeGroupShadowed => {
	shape = shape || new EShapeGroupShadowed(manager.isEditMode);
	const result = deserializeBase(item, manager, shape);
	shape.size.init();
	return result;
};
