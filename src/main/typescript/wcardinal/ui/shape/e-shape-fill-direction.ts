/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeFillDirection = {
	TOP: 0,
	RIGHT: 1,
	BOTTOM: 2,
	LEFT: 3
} as const;

export type EShapeFillDirection = (typeof EShapeFillDirection)[keyof typeof EShapeFillDirection];
