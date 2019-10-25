/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";

export class EShapeRectangleRoundeds {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeRectangleRounded> | EShapeRectangleRounded {
		return EShapes.deserialize( item, manager, EShapeRectangleRoundeds.create() );
	}

	static create(): EShapeRectangleRounded {
		return new EShapeRectangleRounded();
	}
}
