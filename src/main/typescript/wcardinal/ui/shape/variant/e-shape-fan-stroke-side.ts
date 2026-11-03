/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeFanStrokeSide = {
	NONE: 0,
	TOP: 1,
	BOTTOM: 2,
	ALL: 3
} as const;

export type EShapeFanStrokeSide = (typeof EShapeFanStrokeSide)[keyof typeof EShapeFanStrokeSide];
