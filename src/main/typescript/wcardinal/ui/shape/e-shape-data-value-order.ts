/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeDataValueOrder = {
	ASCENDING: 0,
	DESCENDING: 1
} as const;

export type EShapeDataValueOrder = typeof EShapeDataValueOrder[keyof typeof EShapeDataValueOrder];
