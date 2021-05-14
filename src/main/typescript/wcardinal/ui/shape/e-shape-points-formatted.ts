/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "./e-shape-points-style";

export type EShapePointsFormatted =
	| EShapePointsFormattedWithBoundary
	| EShapePointsFormattedWithoutBoundary;

export type EShapePointsFormattedBoundary = [number, number, number, number];

export interface EShapePointsFormattedWithoutBoundary {
	length: number;
	values: number[];
	segments: number[];
	style: EShapePointsStyle;
}

export interface EShapePointsFormattedWithBoundary extends EShapePointsFormattedWithoutBoundary {
	boundary: EShapePointsFormattedBoundary;
}
