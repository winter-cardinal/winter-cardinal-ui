/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfRectangleRoundeds } from "./e-shape-line-of-rectangle-roundeds";

export class EShapeLinesOfRectangleRoundeds {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeLineOfRectangleRoundeds> | EShapeLineOfRectangleRoundeds {
		return EShapeDeserializer.deserialize( item, manager, EShapeLinesOfRectangleRoundeds.create() );
	}

	static create(): EShapeLineOfRectangleRoundeds {
		return new EShapeLineOfRectangleRoundeds();
	}
}
