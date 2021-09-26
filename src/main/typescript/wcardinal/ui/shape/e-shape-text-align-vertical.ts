/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeTextAlignVertical = {
	TOP: 0,
	MIDDLE: 1,
	BOTTOM: 2,
	OUTSIDE_TOP: 3,
	OUTSIDE_BOTTOM: 4
} as const;

export type EShapeTextAlignVertical = typeof EShapeTextAlignVertical[keyof typeof EShapeTextAlignVertical];
