/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeImageSdf } from "./e-shape-image-sdf";

export const deserializeImageSdf = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeImageSdf
): Promise<EShapeImageSdf> | EShapeImageSdf => {
	return deserializeBase(item, manager, shape || new EShapeImageSdf());
};
