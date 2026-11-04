/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeSemicircleLegacy } from "./e-shape-semicircle-legacy";

export const deserializeSemicircleLegacy = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeSemicircleLegacy
): Promise<EShapeSemicircleLegacy> | EShapeSemicircleLegacy => {
	return deserializeBase(item, manager, shape || new EShapeSemicircleLegacy());
};
