/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DColorType = {
	CUSTOM: 0,
	STANDARD: 1
} as const;

export type DColorType = typeof DColorType[keyof typeof DColorType];
