/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeConnectorEdge {
	shape: EShape | null;
	x: number;
	y: number;

	set(shape?: EShape | null, x?: number, y?: number): this;
	copy(source: EShapeConnectorEdge): this;
	isEqual(other: EShapeConnectorEdge): boolean;
	serialize(manager: EShapeResourceManagerSerialization): number;
}
