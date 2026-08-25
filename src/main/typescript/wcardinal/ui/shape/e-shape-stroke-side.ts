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
	TOP_OR_BOTTOM: TOP | BOTTOM,
	BOTTOM_OR_LEFT: BOTTOM | LEFT,
	BOTTOM_OR_RIGHT: BOTTOM | RIGHT,
	LEFT_OR_RIGHT: LEFT | RIGHT,

	NOT_TOP: RIGHT | BOTTOM | LEFT,
	NOT_RIGHT: TOP | BOTTOM | LEFT,
	NOT_BOTTOM: TOP | RIGHT | LEFT,
	NOT_LEFT: TOP | RIGHT | BOTTOM,

	ALL: TOP | RIGHT | BOTTOM | LEFT
} as const;

export type EShapeStrokeSide = (typeof EShapeStrokeSide)[keyof typeof EShapeStrokeSide];
