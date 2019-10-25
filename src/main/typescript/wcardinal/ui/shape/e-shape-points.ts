/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShapePointsParent } from "./e-shape-points-parent";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export enum EShapePointsStyle {
	NONE = 0,
	CLOSED = 1,
	NON_EXPANDING_WIDTH = 2,
	NON_SHRINKING_WIDTH = 4,
	NON_SCALING_DOT_AND_DASH = 8,
	DOTTED = 16,
	DOTTED_DENSELY = 32,
	DOTTED_LOOSELY = 64,
	DASHED = 128,
	DASHED_DENSELY = 256,
	DASHED_LOOSELY = 512,
	DOTTED_MASK = DOTTED | DOTTED_DENSELY | DOTTED_LOOSELY,
	DASHED_MASK = DASHED | DASHED_DENSELY | DASHED_LOOSELY,
	NON_SOLID_MASK = DOTTED_MASK | DASHED_MASK
}

export interface EShapePoints {
	readonly length: number;
	readonly id: number;
	values: number[];
	segments: number[];
	style: EShapePointsStyle;

	set( values?: number[], segments?: number[], style?: EShapePointsStyle ): this;
	copy( source: EShapePoints ): this;
	clone( parent: EShapePointsParent ): EShapePoints;
	toPoints( transform: Matrix ): Point[];
	serialize( manager: EShapeResourceManagerSerialization ): number;
}
