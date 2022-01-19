/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeTriangle } from "./e-shape-triangle";

export const deserializeTriangle = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeTriangle
): Promise<EShapeTriangle> | EShapeTriangle => {
	return deserializeBase(item, manager, shape || new EShapeTriangle());
};
