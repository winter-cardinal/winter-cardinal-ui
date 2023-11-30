/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DLayoutDirection = {
	VERTICAL: 0,
	HORIZONTAL: 1
} as const;

export type DLayoutDirection = (typeof DLayoutDirection)[keyof typeof DLayoutDirection];
