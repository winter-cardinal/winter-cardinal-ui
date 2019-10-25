/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeGroup } from "./e-shape-group";

export class EShapeGroups {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeGroup> | EShapeGroup {
		const shape = EShapeGroups.create();
		const result = EShapes.deserialize( item, manager, shape );
		shape.size.init();
		return result;
	}

	static create(): EShapeGroup {
		return new EShapeGroup();
	}
}
