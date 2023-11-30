/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DDialog} mode options.
 */
export const DDialogMode = {
	MODAL: 0,
	MODELESS: 1,
	MENU: 2
} as const;

export type DDialogMode = (typeof DDialogMode)[keyof typeof DDialogMode];
