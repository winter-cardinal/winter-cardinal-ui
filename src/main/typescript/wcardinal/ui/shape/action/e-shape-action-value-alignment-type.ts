/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueAlignmentType = {
	LEFT: 0,
	RIGHT: 1
} as const;

export type EShapeActionValueAlignmentType =
	typeof EShapeActionValueAlignmentType[keyof typeof EShapeActionValueAlignmentType];
