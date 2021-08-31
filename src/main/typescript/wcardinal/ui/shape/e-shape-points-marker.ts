/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Matrix } from "pixi.js";
import { EShapeFill } from "./e-shape-fill";
import { EShapePointsMarkerType } from "./e-shape-points-marker-type";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export type EShapePointsMarkerSerizlized = [EShapePointsMarkerType, number, number, number];

export interface EShapePointsMarker {
	type: EShapePointsMarkerType;
	readonly size: IPoint;
	readonly transform: Matrix;
	readonly fill: EShapeFill;

	lock(): this;
	unlock(): this;
	copy(source: EShapePointsMarker): this;
	set(type?: EShapePointsMarkerType, sizeX?: number, sizeY?: number): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void;
}
