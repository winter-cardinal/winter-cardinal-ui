/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DButtonBase} option when to activate a button.
 */
export const DButtonBaseWhen = {
	/** Activates when clicked */
	CLICKED: 0,

	/** Activates when double clicked */
	DOUBLE_CLICKED: 1
} as const;

export type DButtonBaseWhen = typeof DButtonBaseWhen[keyof typeof DButtonBaseWhen];
