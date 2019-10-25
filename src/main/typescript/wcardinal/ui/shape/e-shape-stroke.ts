/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export enum EShapeStrokeSide {
	NONE = 0,
	TOP = 1,
	RIGHT = 2,
	BOTTOM = 4,
	LEFT = 8,
	TOP_OR_LEFT = TOP | LEFT,
	TOP_OR_RIGHT = TOP | RIGHT,
	BOTTOM_OR_LEFT = BOTTOM | LEFT,
	BOTTOM_OR_RIGHT = BOTTOM | RIGHT,
	ALL = TOP | RIGHT | BOTTOM | LEFT
}

export interface EShapeStrokeLike {
	enable: boolean;
	color: number;
	alpha: number;
	width: number;
	align: number;
	side: EShapeStrokeSide;
}

export interface EShapeStroke extends EShapeStrokeLike {
	copy( target?: Partial<EShapeStrokeLike> ): void;
	set( enable?: boolean, color?: number, alpha?: number, width?: number, align?: number, side?: EShapeStrokeSide ): void;
	clone(): EShapeStroke;
	toObject(): EShapeStrokeLike;
	serialize( manager: EShapeResourceManagerSerialization ): number;
	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void;
}
