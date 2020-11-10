/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueChangeColorType {
	NONE = 0,
	FILL = 1,
	STROKE = 2,
	TEXT = 4,
	TEXT_OUTLINE = 8,
	FILL_AND_STROKE = FILL | STROKE,
	ALL = FILL | STROKE | TEXT | TEXT_OUTLINE
}
