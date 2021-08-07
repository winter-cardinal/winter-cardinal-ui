/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeConnectorEdgeContainer {
	left: EShapeConnectorEdge;
	right: EShapeConnectorEdge;
	copy(source: EShapeConnectorEdgeContainer): this;
	fit(forcibly?: boolean): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
}
