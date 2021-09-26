/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const DATE = 1;
const HOURS = 2;
const MINUTES = 4;
const SECONDS = 8;

export const DPickerDatetimeMask = {
	NONE: 0,
	DATE,
	HOURS,
	MINUTES,
	SECONDS,
	TIME: HOURS | MINUTES | SECONDS,
	ALL: DATE | HOURS | MINUTES | SECONDS
} as const;

export type DPickerDatetimeMask = number;
