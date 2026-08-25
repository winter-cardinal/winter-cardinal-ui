/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeRectangleLegacy } from "./e-shape-rectangle-legacy";

export const deserializeRectangleLegacy = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeRectangleLegacy
): Promise<EShapeRectangleLegacy> | EShapeRectangleLegacy => {
	return deserializeBase(item, manager, shape || new EShapeRectangleLegacy());
};
