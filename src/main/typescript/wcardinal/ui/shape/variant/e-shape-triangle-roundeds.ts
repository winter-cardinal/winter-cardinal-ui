/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeTriangleRounded } from "./e-shape-triangle-rounded";

export class EShapeTriangleRoundeds {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeTriangleRounded> | EShapeTriangleRounded {
		return EShapes.deserialize( item, manager, EShapeTriangleRoundeds.create() );
	}

	static create(): EShapeTriangleRounded {
		return new EShapeTriangleRounded();
	}
}
