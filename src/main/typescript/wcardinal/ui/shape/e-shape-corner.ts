/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const TOP_LEFT = 1;
const TOP_RIGHT = 2;
const BOTTOM_LEFT = 4;
const BOTTOM_RIGHT = 8;

export const EShapeCorner = {
	NONE: 0,
	TOP_LEFT,
	TOP_RIGHT,
	BOTTOM_LEFT,
	BOTTOM_RIGHT,
	TOP: TOP_LEFT | TOP_RIGHT,
	BOTTOM: BOTTOM_LEFT | BOTTOM_RIGHT,
	LEFT: TOP_LEFT | BOTTOM_LEFT,
	RIGHT: TOP_RIGHT | BOTTOM_RIGHT,
	ALL: TOP_LEFT | TOP_RIGHT | BOTTOM_LEFT | BOTTOM_RIGHT
} as const;

export type EShapeCorner = number;
