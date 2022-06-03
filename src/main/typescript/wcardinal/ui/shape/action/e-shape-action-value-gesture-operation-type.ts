/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const DRAG = 1;
const PINCH = 2;

export const EShapeActionValueGestureOperationType = {
	NONE: 0,
	DRAG,
	PINCH,
	ALL: DRAG | PINCH
} as const;

export type EShapeActionValueGestureOperationType = number;
