/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeDataValueType = {
	NUMBER: 0,
	NUMBER_ARRAY: 1,
	STRING: 2,
	STRING_ARRAY: 3,
	OBJECT: 4,
	OBJECT_ARRAY: 5,

	TICKER: 6,

	BOOLEAN: 7,
	BOOLEAN_ARRAY: 8,

	EXTENSION: 1000
} as const;

export type EShapeDataValueType = number;
