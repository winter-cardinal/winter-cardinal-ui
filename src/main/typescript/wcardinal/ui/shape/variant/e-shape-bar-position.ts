/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeBarPosition = {
	TOP: 0,
	LEFT: 1,
	RIGHT: 2,
	BOTTOM: 3
} as const;

export type EShapeBarPosition = typeof EShapeBarPosition[keyof typeof EShapeBarPosition];
