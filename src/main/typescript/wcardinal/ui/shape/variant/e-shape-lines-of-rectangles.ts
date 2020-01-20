/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfRectangles } from "./e-shape-line-of-rectangles";

export class EShapeLinesOfRectangles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeLineOfRectangles> | EShapeLineOfRectangles {
		return EShapeDeserializer.deserialize( item, manager, new EShapeLineOfRectangles() );
	}
}
