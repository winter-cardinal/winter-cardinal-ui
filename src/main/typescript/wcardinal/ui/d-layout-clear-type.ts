/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const BEFORE = 1;
const AFTER = 2;

export const DLayoutClearType = {
	NONE: 0,
	BEFORE,
	AFTER,
	BOTH: BEFORE | AFTER
} as const;

export type DLayoutClearType = number;
