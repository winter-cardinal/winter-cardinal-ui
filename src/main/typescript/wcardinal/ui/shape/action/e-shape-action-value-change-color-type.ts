/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const FILL = 1;
const STROKE = 2;
const TEXT = 4;
const TEXT_OUTLINE = 8;

export const EShapeActionValueChangeColorType = {
	NONE: 0,
	FILL,
	STROKE,
	TEXT,
	TEXT_OUTLINE,
	FILL_AND_STROKE: FILL | STROKE,
	ALL: FILL | STROKE | TEXT | TEXT_OUTLINE
} as const;

export type EShapeActionValueChangeColorType = number;
