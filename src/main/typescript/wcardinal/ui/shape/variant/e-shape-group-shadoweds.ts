/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeGroupShadowed } from "./e-shape-group-shadowed";

export class EShapeGroupShadoweds {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeGroupShadowed> | EShapeGroupShadowed {
		const shape = EShapeGroupShadoweds.create();
		const result = EShapes.deserialize( item, manager, shape );
		shape.size.init();
		return result;
	}

	static create(): EShapeGroupShadowed {
		return new EShapeGroupShadowed();
	}
}
