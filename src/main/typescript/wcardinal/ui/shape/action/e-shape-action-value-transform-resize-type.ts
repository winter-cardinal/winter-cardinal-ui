/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueTransformResizeType = {
	RELATIVE_SIZE: 0,
	RELATIVE_HEIGHT: 1,
	RELATIVE_WIDTH: 2,
	ABSOLUTE_SIZE: 3,
	ABSOLUTE_HEIGHT: 4,
	ABSOLUTE_WIDTH: 5
} as const;

export type EShapeActionValueTransformResizeType =
	typeof EShapeActionValueTransformResizeType[keyof typeof EShapeActionValueTransformResizeType];
