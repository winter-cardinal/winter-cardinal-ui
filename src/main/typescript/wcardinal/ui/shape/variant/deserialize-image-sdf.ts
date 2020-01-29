/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeImageSdf } from "./e-shape-image-sdf";

export const deserializeImageSdf = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
): Promise<EShapeImageSdf> | EShapeImageSdf => {
	return EShapeDeserializer.deserialize( item, manager, new EShapeImageSdf() );
};
