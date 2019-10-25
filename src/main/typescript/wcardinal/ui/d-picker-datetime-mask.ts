/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum DPickerDatetimeMask {
	NONE = 0,
	DATE = 1,
	HOURS = 2,
	MINUTES = 4,
	SECONDS = 8,
	ALL = DATE | HOURS | MINUTES | SECONDS
}
