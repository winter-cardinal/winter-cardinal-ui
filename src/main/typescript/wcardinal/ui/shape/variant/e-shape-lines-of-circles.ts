/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeLineOfCircles } from "./e-shape-line-of-circles";

export class EShapeLinesOfCircles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeLineOfCircles> | EShapeLineOfCircles {
		return EShapeDeserializer.deserialize( item, manager, EShapeLinesOfCircles.create() );
	}

	static create(): EShapeLineOfCircles {
		return new EShapeLineOfCircles( [] );
	}
}
