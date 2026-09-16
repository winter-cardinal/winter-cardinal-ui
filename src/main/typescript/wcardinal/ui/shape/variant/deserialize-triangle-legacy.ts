/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeTriangleLegacy } from "./e-shape-triangle-legacy";

export const deserializeTriangleLegacy = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeTriangleLegacy
): Promise<EShapeTriangleLegacy> | EShapeTriangleLegacy => {
	return deserializeBase(item, manager, shape || new EShapeTriangleLegacy());
};
