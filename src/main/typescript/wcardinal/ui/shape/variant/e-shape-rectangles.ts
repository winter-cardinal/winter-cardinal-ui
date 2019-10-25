/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeRectangle } from "./e-shape-rectangle";

export class EShapeRectangles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeRectangle> | EShapeRectangle {
		return EShapes.deserialize( item, manager, EShapeRectangles.create() );
	}

	static create() {
		return new EShapeRectangle();
	}
}
