/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueTransformMoveType = {
	RELATIVE_X: 0,
	RELATIVE_Y: 1,
	ABSOLUTE_X: 2,
	ABSOLUTE_Y: 3,
	FORWARD_OR_BACKWARD: 4,
	LEFT_OR_RIGHT: 5
} as const;

export type EShapeActionValueTransformMoveType =
	typeof EShapeActionValueTransformMoveType[keyof typeof EShapeActionValueTransformMoveType];
