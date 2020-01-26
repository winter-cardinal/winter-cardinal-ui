/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeRectangle } from "./e-shape-rectangle";

export const deserializeRectangle = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
): Promise<EShapeRectangle> | EShapeRectangle => {
	return EShapeDeserializer.deserialize( item, manager, new EShapeRectangle() );
};
