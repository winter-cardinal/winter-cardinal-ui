/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeTriangle } from "./e-shape-triangle";

export const deserializeTriangle = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeTriangle> | EShapeTriangle => {
	return EShapeDeserializer.deserialize(item, manager, new EShapeTriangle());
};
