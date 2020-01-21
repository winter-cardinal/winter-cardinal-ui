/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeStrokeSide {
	NONE = 0,
	TOP = 1,
	RIGHT = 2,
	BOTTOM = 4,
	LEFT = 8,
	TOP_OR_LEFT = TOP | LEFT,
	TOP_OR_RIGHT = TOP | RIGHT,
	BOTTOM_OR_LEFT = BOTTOM | LEFT,
	BOTTOM_OR_RIGHT = BOTTOM | RIGHT,
	ALL = TOP | RIGHT | BOTTOM | LEFT
}
