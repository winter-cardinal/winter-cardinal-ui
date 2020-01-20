/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfTriangles } from "./e-shape-line-of-triangles";

export class EShapeLinesOfTriangles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeLineOfTriangles> | EShapeLineOfTriangles {
		return EShapeDeserializer.deserialize( item, manager, new EShapeLineOfTriangles() );
	}
}
