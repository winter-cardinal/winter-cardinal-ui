/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum UtilGestureModifier {
	NONE = 0,
	CTRL = 1,
	SHIFT = 2,
	ALT = 4,

	AND = 8,
	OR = 16,

	NOT_NONE = CTRL | SHIFT | ALT | OR
}
