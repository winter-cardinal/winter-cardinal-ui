/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeCorner {
	NONE = 0,
	TOP_LEFT = 1,
	TOP_RIGHT = 2,
	BOTTOM_LEFT = 4,
	BOTTOM_RIGHT = 8,
	TOP = TOP_LEFT | TOP_RIGHT,
	BOTTOM = BOTTOM_LEFT | BOTTOM_RIGHT,
	LEFT = TOP_LEFT | BOTTOM_LEFT,
	RIGHT = TOP_RIGHT | BOTTOM_RIGHT,
	ALL = TOP | BOTTOM
}
