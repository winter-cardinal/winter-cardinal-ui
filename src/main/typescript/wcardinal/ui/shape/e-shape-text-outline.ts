/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeTextOutlineLike {
	enable: boolean;
	color: number;
	alpha: number;
	width: number;
}

export interface EShapeTextOutline extends EShapeTextOutlineLike {
	copy( target?: Partial<EShapeTextOutlineLike> ): void;
	set( enable?: boolean, color?: number, alpha?: number, width?: number ): void;
	clone(): EShapeTextOutline;
	toObject(): EShapeTextOutlineLike;
	serialize( manager: EShapeResourceManagerSerialization ): number;
	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void;
}
