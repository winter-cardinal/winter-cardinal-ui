/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeRectangleRoundedLegacy } from "./e-shape-rectangle-rounded-legacy";

export const deserializeRectangleRoundedLegacy = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeRectangleRoundedLegacy
): Promise<EShapeRectangleRoundedLegacy> | EShapeRectangleRoundedLegacy => {
	return deserializeBase(item, manager, shape || new EShapeRectangleRoundedLegacy());
};
