/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DDynamicTextStyleWordWrap = {
	NONE: 0,
	NORMAL: 1,
	BREAK_ALL: 2
} as const;

export type DDynamicTextStyleWordWrap =
	typeof DDynamicTextStyleWordWrap[keyof typeof DDynamicTextStyleWordWrap];
