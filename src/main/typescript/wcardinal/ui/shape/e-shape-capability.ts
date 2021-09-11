/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable prettier/prettier */

const NONE			= 0b0;

const ID			= 0x1;
const POSITION		= 0x2;
const WIDTH			= 0x4;
const HEIGHT		= 0x8;
const ROTATION		= 0x10;
const SKEW			= 0x20;
const ALIGN			= 0x40;

const REPLACING		= 0x80;
const GROUPING		= 0x100;
const FILL			= 0x200;
const STROKE		= 0x400;
const STROKE_SIDE	= 0x800;
const BORDER_RADIUS	= 0x1000;

const TEXT			= 0x2000;
const TEXTURE		= 0x4000;
const DATA			= 0x8000;
const ACTION		= 0x10000;
const CURSOR		= 0x20000;
const ORDER_IN_LAYER= 0x40000;

const CHILDREN		= 0x80000;

const COORDINATE	= ID | POSITION | WIDTH | HEIGHT | ROTATION | SKEW | ALIGN;
const SHAPE			= REPLACING | GROUPING | FILL | STROKE;
const LAYER			= ORDER_IN_LAYER;
const PRIMITIVE		= COORDINATE | SHAPE | TEXT | TEXTURE | DATA | ACTION | CURSOR | LAYER | CHILDREN;
const EMBEDDED		= COORDINATE | REPLACING | GROUPING | TEXT | DATA | ACTION | LAYER;
const CONNECTOR		= ID | REPLACING | FILL | STROKE | TEXT | TEXTURE | DATA | ACTION | CURSOR | LAYER | CHILDREN;
const ALL			= PRIMITIVE | STROKE_SIDE | BORDER_RADIUS;

export const EShapeCapability = {
	NONE,

	ID,
	POSITION,
	WIDTH,
	HEIGHT,
	ROTATION,
	SKEW,
	ALIGN,

	REPLACING,
	GROUPING,
	FILL,
	STROKE,
	STROKE_SIDE,
	BORDER_RADIUS,

	TEXT,
	TEXTURE,
	/** @deprecated in favor of {@link DATA} */
	TAG: DATA,
	DATA,
	ACTION,
	CURSOR,
	ORDER_IN_LAYER,

	CHILDREN,

	COORDINATE,
	SHAPE,
	LAYER,
	PRIMITIVE,
	EMBEDDED,
	CONNECTOR,
	ALL
} as const;

export type EShapeCapability = typeof EShapeCapability[keyof typeof EShapeCapability];
