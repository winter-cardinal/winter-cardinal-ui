/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const TOP = 1;
const RIGHT = 2;
const BOTTOM = 4;
const LEFT = 8;

export const EShapeStrokeSide = {
	NONE: 0,
	TOP,
	RIGHT,
	BOTTOM,
	LEFT,
	TOP_OR_LEFT: TOP | LEFT,
	TOP_OR_RIGHT: TOP | RIGHT,
	BOTTOM_OR_LEFT: BOTTOM | LEFT,
	BOTTOM_OR_RIGHT: BOTTOM | RIGHT,
	ALL: TOP | RIGHT | BOTTOM | LEFT
} as const;

export type EShapeStrokeSide = typeof EShapeStrokeSide[keyof typeof EShapeStrokeSide];
