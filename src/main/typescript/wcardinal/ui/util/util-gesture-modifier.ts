/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const CTRL = 1;
const SHIFT = 2;
const ALT = 4;

const AND = 8;
const OR = 16;

export const UtilGestureModifier = {
	NONE: 0,
	CTRL,
	SHIFT,
	ALT,

	AND,
	OR,

	NOT_NONE: CTRL | SHIFT | ALT | OR
} as const;

export type UtilGestureModifier = number;
