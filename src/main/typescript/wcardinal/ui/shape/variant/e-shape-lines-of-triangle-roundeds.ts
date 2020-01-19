/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfTriangleRoundeds } from "./e-shape-line-of-triangle-roundeds";

export class EShapeLinesOfTriangleRoundeds {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeLineOfTriangleRoundeds> | EShapeLineOfTriangleRoundeds {
		return EShapeDeserializer.deserialize( item, manager, EShapeLinesOfTriangleRoundeds.create() );
	}

	static create(): EShapeLineOfTriangleRoundeds {
		return new EShapeLineOfTriangleRoundeds();
	}
}
