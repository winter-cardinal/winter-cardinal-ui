/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "./e-shape-points-style";

export type EShapePointsFormatted =
	| EShapePointsFormattedWithBoundary
	| EShapePointsFormattedWithoutBoundary;

export interface EShapePointsFormattedWithBoundary {
	readonly length: number;
	readonly values: number[];
	readonly segments: number[];
	readonly boundary: [number, number, number, number];
	readonly style: EShapePointsStyle;
}

export interface EShapePointsFormattedWithoutBoundary {
	readonly length: number;
	readonly values: number[];
	readonly segments: number[];
	readonly style: EShapePointsStyle;
}
