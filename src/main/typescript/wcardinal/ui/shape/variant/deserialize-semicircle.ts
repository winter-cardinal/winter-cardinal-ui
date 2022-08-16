/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeSemicircle } from "./e-shape-semicircle";

export const deserializeSemicircle = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeSemicircle
): Promise<EShapeSemicircle> | EShapeSemicircle => {
	return deserializeBase(item, manager, shape || new EShapeSemicircle());
};
