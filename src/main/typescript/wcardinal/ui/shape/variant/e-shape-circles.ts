/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeCircle } from "./e-shape-circle";

export class EShapeCircles {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeCircle> | EShapeCircle {
		return EShapes.deserialize( item, manager, EShapeCircles.create() );
	}

	static create(): EShapeCircle {
		return new EShapeCircle();
	}
}
