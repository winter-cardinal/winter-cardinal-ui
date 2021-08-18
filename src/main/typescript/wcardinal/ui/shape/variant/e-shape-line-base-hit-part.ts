/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeLineBaseHitPart = {
	NONE: 0,
	LINE: 1,
	MARKER_TAIL: 2,
	MARKER_HEAD: 3,
	TEXT: 4,
	CHILDREN: 5
} as const;

export type EShapeLineBaseHitPart = typeof EShapeLineBaseHitPart[keyof typeof EShapeLineBaseHitPart];
