/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeTextDirection = {
	LEFT_TO_RIGHT: 0,
	TOP_TO_BOTTOM: 1,
	BOTTOM_TO_TOP: 2
} as const;

export type EShapeTextDirection = typeof EShapeTextDirection[keyof typeof EShapeTextDirection];
