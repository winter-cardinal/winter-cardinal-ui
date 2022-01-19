/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeLineOfCircles } from "./e-shape-line-of-circles";

export const deserializeLineOfCircles = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeLineOfCircles
): Promise<EShapeLineOfCircles> | EShapeLineOfCircles => {
	return deserializeBase(item, manager, shape || new EShapeLineOfCircles());
};
