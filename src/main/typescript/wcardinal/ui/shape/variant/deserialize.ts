/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeType } from "../e-shape-type";

export const deserialize = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShape> | EShape => {
	const deserializer = EShapeDeserializers[item[0]] || EShapeDeserializers[EShapeType.NULL];
	if (deserializer != null) {
		const result = deserializer(item, manager);
		if (result != null) {
			return result;
		}
	}
	throw new Error("Missing shape deserializers");
};
