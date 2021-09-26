/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DAlignWith = {
	TEXT: 0,
	PADDING: 1,
	BORDER: 2
} as const;

export type DAlignWith = typeof DAlignWith[keyof typeof DAlignWith];
