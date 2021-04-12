/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfCircles } from "./e-shape-line-of-circles";

export const deserializeLineOfCircles = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeLineOfCircles> | EShapeLineOfCircles => {
	return EShapeDeserializer.deserialize(item, manager, new EShapeLineOfCircles());
};
