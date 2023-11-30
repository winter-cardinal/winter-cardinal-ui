/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DDialogGestureMode = {
	DIRTY: 0,
	CLEAN: 1
} as const;

export type DDialogGestureMode = (typeof DDialogGestureMode)[keyof typeof DDialogGestureMode];
