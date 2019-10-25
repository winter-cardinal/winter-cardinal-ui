/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeTriangle } from "./e-shape-triangle";

export class EShapeTriangles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeTriangle> | EShapeTriangle {
		return EShapes.deserialize( item, manager, EShapeTriangles.create() );
	}

	static create(): EShapeTriangle {
		return new EShapeTriangle();
	}
}
