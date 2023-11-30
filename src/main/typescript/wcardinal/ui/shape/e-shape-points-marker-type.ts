/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapePointsMarkerType = {
	NONE: 0,
	CIRCLE: 1,
	TRIANGLE: 2,
	RECTANGLE: 3
} as const;

export type EShapePointsMarkerType =
	(typeof EShapePointsMarkerType)[keyof typeof EShapePointsMarkerType];
