/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeFillDirection } from "./e-shape-fill-direction";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeFillLike {
	enable: boolean;
	color: number;
	alpha: number;
	direction: EShapeFillDirection;
	percent: number;
}

export interface EShapeFill extends EShapeFillLike {
	copy(target?: Partial<EShapeFillLike>): void;
	set(
		enable?: boolean,
		color?: number,
		alpha?: number,
		direction?: EShapeFillDirection,
		percent?: number
	): void;
	clone(): EShapeFill;
	toObject(): EShapeFillLike;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
