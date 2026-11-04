/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeFan } from "./e-shape-fan";

export const deserializeFan = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeFan
): Promise<EShapeFan> | EShapeFan => {
	shape = shape || new EShapeFan();
	shape.angle = item[15];
	return deserializeBase(item, manager, shape);
};
