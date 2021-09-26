/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DAlignVertical = {
	TOP: 0,
	MIDDLE: 1,
	BOTTOM: 2
} as const;

export type DAlignVertical = typeof DAlignVertical[keyof typeof DAlignVertical];
