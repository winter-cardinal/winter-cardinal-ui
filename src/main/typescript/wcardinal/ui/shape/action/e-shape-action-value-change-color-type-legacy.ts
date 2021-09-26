/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueChangeColorTypeLegacy = {
	FILL: 0,
	STROKE: 1,
	FILL_AND_STROKE: 2,
	TEXT: 3,
	TEXT_OUTLINE: 4,
	ALL: 5
} as const;

export type EShapeActionValueChangeColorTypeLegacy = typeof EShapeActionValueChangeColorTypeLegacy[keyof typeof EShapeActionValueChangeColorTypeLegacy];
