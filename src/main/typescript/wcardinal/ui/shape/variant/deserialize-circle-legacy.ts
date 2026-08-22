/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeCircleLegacy } from "./e-shape-circle-legacy";

export const deserializeCircleLegacy = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeCircleLegacy
): Promise<EShapeCircleLegacy> | EShapeCircleLegacy => {
	return deserializeBase(item, manager, shape || new EShapeCircleLegacy());
};
