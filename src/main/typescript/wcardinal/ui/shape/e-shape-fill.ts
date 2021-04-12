/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeFillLike {
	enable: boolean;
	color: number;
	alpha: number;
}

export interface EShapeFill extends EShapeFillLike {
	copy(target?: Partial<EShapeFillLike>): void;
	set(enable?: boolean, color?: number, alpha?: number): void;
	clone(): EShapeFill;
	toObject(): EShapeFillLike;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
