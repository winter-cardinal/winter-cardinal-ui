/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShapePointsParent } from "./e-shape-points-parent";
import { EShapePointsStyle } from "./e-shape-points-style";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

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
