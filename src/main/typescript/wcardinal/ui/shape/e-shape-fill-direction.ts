/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Represents the fill direction of a shape.
 */
export const EShapeFillDirection = {
	/** Fill from top to bottom */
	TOP: 0,
	/** Fill from right to left */
	RIGHT: 1,
	/** Fill from bottom to top */
	BOTTOM: 2,
	/** Fill from left to right */
	LEFT: 3
} as const;

export type EShapeFillDirection = (typeof EShapeFillDirection)[keyof typeof EShapeFillDirection];
