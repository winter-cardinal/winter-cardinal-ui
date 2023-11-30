/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DAlignHorizontal = {
	LEFT: 0,
	CENTER: 1,
	RIGHT: 2
} as const;

export type DAlignHorizontal = (typeof DAlignHorizontal)[keyof typeof DAlignHorizontal];
