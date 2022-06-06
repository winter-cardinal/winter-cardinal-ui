/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueOpenDialogType = {
	TEXT: 0,
	INTEGER: 1,
	REAL: 2,
	BOOLEAN: 3,
	DATE: 4,
	TIME: 5,
	DATETIME: 6
} as const;

export type EShapeActionValueOpenDialogType =
	typeof EShapeActionValueOpenDialogType[keyof typeof EShapeActionValueOpenDialogType];
