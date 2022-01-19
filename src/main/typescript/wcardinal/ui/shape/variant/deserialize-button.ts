/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeButton } from "./e-shape-button";

export const deserializeButton = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeButton
): Promise<EShapeButton> | EShapeButton => {
	shape = shape || new EShapeButton();
	const resources = manager.resources;
	const resourceId = item[15];
	if (0 <= resourceId && resourceId < resources.length) {
		let parsed = manager.getExtension<[number]>(resourceId);
		if (parsed == null) {
			parsed = JSON.parse(resources[resourceId]) as [number];
			manager.setExtension(resourceId, parsed);
		}
		shape.isToggle = !!(parsed[0] & 1);
		shape.isGrouped = !!(parsed[0] & 2);
	}
	return deserializeBase(item, manager, shape);
};
