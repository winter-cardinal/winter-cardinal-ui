/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueBlinkType = {
	VISIBILITY: 0,
	BRIGHTEN: 1,
	DARKEN: 2,
	OPACITY: 3,
	COLOR_FILL: 4,
	COLOR_STROKE: 5
} as const;

export type EShapeActionValueBlinkType =
	(typeof EShapeActionValueBlinkType)[keyof typeof EShapeActionValueBlinkType];
