/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueTransformType = {
	RESIZE: 0,
	MOVE: 1,
	ROTATE: 2
} as const;

export type EShapeActionValueTransformType = typeof EShapeActionValueTransformType[keyof typeof EShapeActionValueTransformType];
