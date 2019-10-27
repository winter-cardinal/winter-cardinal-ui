/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeRectangle } from "./e-shape-rectangle";

export class EShapeRectangles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeRectangle> | EShapeRectangle {
		return EShapeDeserializer.deserialize( item, manager, EShapeRectangles.create() );
	}

	static create() {
		return new EShapeRectangle();
	}
}
