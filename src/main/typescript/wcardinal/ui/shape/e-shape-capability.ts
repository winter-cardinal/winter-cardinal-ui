/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable prettier/prettier */

export enum EShapeCapability {
	NONE			= 0,

	ID				= 1 << 0,
	POSITION		= 1 << 1,
	WIDTH			= 1 << 2,
	HEIGHT			= 1 << 3,
	ROTATION		= 1 << 4,
	SKEW			= 1 << 5,
	ALIGN			= 1 << 6,

	REPLACING		= 1 << 7,
	GROUPING		= 1 << 8,
	FILL			= 1 << 9,
	STROKE			= 1 << 10,
	STROKE_SIDE		= 1 << 11,
	BORDER_RADIUS	= 1 << 12,

	TEXT			= 1 << 13,
	TEXTURE			= 1 << 14,
	TAG				= 1 << 15,
	ACTION			= 1 << 16,
	CURSOR			= 1 << 17,
	ORDER_IN_LAYER	= 1 << 18,

	CHILDREN		= 1 << 19,

	COORDINATE		= ID | POSITION | WIDTH | HEIGHT | ROTATION | SKEW | ALIGN,
	SHAPE			= REPLACING | GROUPING | FILL | STROKE,
	LAYER			= ORDER_IN_LAYER,
	PRIMITIVE		= COORDINATE | SHAPE | TEXT | TEXTURE | TAG | ACTION | CURSOR | LAYER | CHILDREN,
	EMBEDDED		= COORDINATE | REPLACING | GROUPING | TEXT | TAG | ACTION | LAYER,
	ALL				= PRIMITIVE | STROKE_SIDE | BORDER_RADIUS
}
