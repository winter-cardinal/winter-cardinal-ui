/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueGestureType = {
	SHAPE: 0,
	LAYER: 1
} as const;

export type EShapeActionValueGestureType =
	(typeof EShapeActionValueGestureType)[keyof typeof EShapeActionValueGestureType];
