/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

export type EShapeConnectorEdgeSerialized = [number | null, number?, number?, number?, number?];

export interface EShapeConnectorEdge {
	shape: EShape | null;
	position: IPoint;
	local: IPoint;
	id: number;
	localId: number;

	lock(): void;
	unlock(): void;
	set(shape?: EShape | null, position?: IPoint, local?: IPoint): this;
	copy(source: EShapeConnectorEdge): this;
	isEqual(other: EShapeConnectorEdge): boolean;
	fit(forcibly?: boolean): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void;
	attach(): this;
	detach(): this;
}
