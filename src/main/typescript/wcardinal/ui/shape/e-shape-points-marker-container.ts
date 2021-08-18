/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsMarker } from "./e-shape-points-marker";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export type EShapePointsMarkerContainerSerialized = [number, number];

export interface EShapePointsMarkerContainer {
	head: EShapePointsMarker;
	tail: EShapePointsMarker;

	lock(): this;
	unlock(): this;
	copy(source: EShapePointsMarkerContainer): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void;
}
