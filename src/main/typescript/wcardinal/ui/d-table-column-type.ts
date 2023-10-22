/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DTableColumnType = {
	INDEX: 0,
	TEXT: 1,
	INTEGER: 2,
	REAL: 3,
	CHECK: 4,
	CHECK_SINGLE: 5,
	COLOR: 6,
	BUTTON: 7,
	SELECT: 8,
	DATE: 9,
	DATETIME: 10,
	TIME: 11,
	ACTION: 12,
	LINK: 13,
	TREE: 14,
	TEXT_AREA: 15
} as const;

export type DTableColumnType = typeof DTableColumnType[keyof typeof DTableColumnType];
