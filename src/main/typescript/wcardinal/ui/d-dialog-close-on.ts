/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DDialogCloseOn = {
	NONE: 0,
	ESC: 1,
	CLICK_OUTSIDE: 2
} as const;

export type DDialogCloseOn = number;
