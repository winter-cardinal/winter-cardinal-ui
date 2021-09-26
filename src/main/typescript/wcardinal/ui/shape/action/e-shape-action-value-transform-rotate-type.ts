/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueTransformRotateType = {
	RELATIVE: 0,
	ABSOLUTE: 1
} as const;

export type EShapeActionValueTransformRotateType = typeof EShapeActionValueTransformRotateType[keyof typeof EShapeActionValueTransformRotateType];
