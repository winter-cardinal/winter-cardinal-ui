/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeStrokeSide } from "./e-shape-stroke-side";
import { EShapeStrokeStyle } from "./e-shape-stroke-style";

export interface EShapeStrokeLike {
	enable: boolean;
	color: number;
	alpha: number;
	width: number;
	align: number;
	side: EShapeStrokeSide;
	style: EShapeStrokeStyle;
}

export interface EShapeStroke extends EShapeStrokeLike {
	copy(target?: Partial<EShapeStrokeLike>): void;
	set(
		enable?: boolean,
		color?: number,
		alpha?: number,
		width?: number,
		align?: number,
		side?: EShapeStrokeSide,
		style?: EShapeStrokeStyle
	): void;
	clone(): EShapeStroke;
	toObject(): EShapeStrokeLike;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
