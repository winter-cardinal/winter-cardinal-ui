/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeTextAlignHorizontal = {
	LEFT: 0,
	CENTER: 1,
	RIGHT: 2,
	OUTSIDE_LEFT: 3,
	OUTSIDE_RIGHT: 4
} as const;

export type EShapeTextAlignHorizontal =
	(typeof EShapeTextAlignHorizontal)[keyof typeof EShapeTextAlignHorizontal];
