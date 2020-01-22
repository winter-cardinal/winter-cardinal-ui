/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A border mask.
 * Borders on masked parts are not rendered.
 */
export enum DBorderMask {
	NONE = 0,

	TOP = 1,
	RIGHT = 2,
	BOTTOM = 4,
	LEFT = 8,

	TOP_RIGHT = TOP | RIGHT,
	TOP_BOTTOM = TOP | BOTTOM,
	TOP_LEFT = TOP | LEFT,

	RIGHT_BOTTOM = RIGHT | BOTTOM,
	RIGHT_LEFT = RIGHT | LEFT,

	BOTTOM_LEFT = BOTTOM | LEFT,

	NOT_TOP = RIGHT | BOTTOM | LEFT,
	NOT_RIGHT = TOP | BOTTOM | LEFT,
	NOT_BOTTOM = TOP | RIGHT | LEFT,
	NOT_LEFT = TOP | RIGHT | BOTTOM,

	ALL = TOP | RIGHT | BOTTOM | LEFT
}
