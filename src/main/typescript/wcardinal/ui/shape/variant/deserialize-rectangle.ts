/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeRectangle } from "./e-shape-rectangle";

export const deserializeRectangle = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeRectangle
): Promise<EShapeRectangle> | EShapeRectangle => {
	return deserializeBase(item, manager, shape || new EShapeRectangle());
};
