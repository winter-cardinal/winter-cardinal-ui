/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueOpenType = {
	DIAGRAM: 0,
	PAGE: 1,
	PAGE_INPLACE: 2,
	DIALOG_TEXT: 3,
	DIALOG_INTEGER: 4,
	DIALOG_REAL: 5,
	DIALOG_BOOLEAN: 6,
	DIALOG_DATE: 7,
	DIALOG_TIME: 8,
	DIALOG_DATETIME: 9
} as const;

export type EShapeActionValueOpenType = typeof EShapeActionValueOpenType[keyof typeof EShapeActionValueOpenType];
