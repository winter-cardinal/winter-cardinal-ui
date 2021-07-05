/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationTarget } from "../d-application-like";
import { DDiagramSerializedLayer } from "../d-diagram-serialized";
import { EShapeLayer } from "./e-shape-layer";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";

export interface EShapeLayerContainer extends DApplicationTarget {
	children: EShapeLayer[];
	deserialize(
		serializedLayers: DDiagramSerializedLayer[],
		manager: EShapeResourceManagerDeserialization
	): void;
}
