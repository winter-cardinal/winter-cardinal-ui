/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const UtilGestureMode = {
	OFF: 0,
	ON: 1,
	TOUCH: 2
} as const;

export type UtilGestureMode = typeof UtilGestureMode[keyof typeof UtilGestureMode];
