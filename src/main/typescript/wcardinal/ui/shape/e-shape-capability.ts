/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable prettier/prettier */

const NONE			= 0x0;

const ID			= 0x1;
const POSITION		= 0x2;
const WIDTH			= 0x4;
const HEIGHT		= 0x8;
const ROTATION		= 0x10;
const SKEW			= 0x20;

const REPLACING		= 0x40;
const GROUPING		= 0x80;
const UNGROUPING	= 0x100;

const FILL			= 0x200;
const STROKE		= 0x400;
const STROKE_SIDE	= 0x800;
const STROKE_STYLE_SCALING = 0x1000;
const STROKE_STYLE_COSMETIC = 0x2000;
const STROKE_STYLE = STROKE_STYLE_SCALING | STROKE_STYLE_COSMETIC;
const BORDER_RADIUS	= 0x4000;

const TEXT			= 0x8000;
const TEXTURE		= 0x10000;
const DATA			= 0x20000;
const ACTION		= 0x40000;
const CURSOR		= 0x80000;
const ORDER_IN_LAYER= 0x100000;

const CHILDREN		= 0x200000;

const DATA_MAPPING	= 0x400000;

const LINE			= 0x800000;
const LINE_TAIL		= 0x1000000;
const LINE_HEAD		= 0x2000000;

const COORDINATE	= POSITION | WIDTH | HEIGHT | ROTATION | SKEW;
const SHAPE			= REPLACING | GROUPING | FILL | STROKE | STROKE_STYLE | LINE | LINE_TAIL | LINE_HEAD;
const LAYER			= ORDER_IN_LAYER;
const PRIMITIVE		= ID | COORDINATE | SHAPE | TEXT | TEXTURE | DATA | ACTION | CURSOR | LAYER | CHILDREN;
const GROUP			= PRIMITIVE | UNGROUPING;
const EMBEDDED		= ID | COORDINATE | REPLACING | GROUPING | TEXT | DATA | ACTION | LAYER | DATA_MAPPING;
const EMBEDDED_ACCEPTOR_EDGE = ID | COORDINATE | REPLACING | FILL | STROKE | STROKE_STYLE_SCALING | TEXT | TEXTURE | DATA | ACTION | CURSOR | LAYER;
const CONNECTOR		= ID | SHAPE | TEXT | TEXTURE | DATA | ACTION | CURSOR | LAYER | CHILDREN;
const ALL			= PRIMITIVE | STROKE_SIDE | BORDER_RADIUS | DATA_MAPPING | UNGROUPING;

export const EShapeCapability = {
	NONE,

	/**
	 * Allows shape IDs to be modified.
	 */
	ID,

	/**
	 * Allows shape positions to be modified.
	 */
	POSITION,

	/**
	 * Allows shape widths to be modified.
	 */
	WIDTH,

	/**
	 * Allows shape heights to be modified.
	 */
	HEIGHT,

	/**
	 * Allows shape rotations to be modified.
	 */
	ROTATION,

	/**
	 * Allows shape skews to be modified.
	 */
	SKEW,

	/** @deprecated */
	ALIGN: NONE,

	/**
	 * Allows shapes to be replaced with other shapes.
	 */
	REPLACING,

	/**
	 * Allows shapes to be grouped.
	 */
	GROUPING,

	/**
	 * Allows grouped shapes to be ungrouped.
	 */
	UNGROUPING,

	/**
	 * Allows shape fills to be modified.
	 */
	FILL,

	/**
	 * Allows shape strokes to be modified.
	 */
	STROKE,

	/**
	 * Allows shape stroke sides to be modified.
	 */
	STROKE_SIDE,

	/**
	 * Allows shape stroke scaling style to be modified.
	 */
	STROKE_STYLE_SCALING,

	/**
	 * Allows shape stroke cosmetic style to be modified.
	 */
	STROKE_STYLE_COSMETIC,

	/**
	 * Allows shape stroke style to be modified.
	 */
	STROKE_STYLE,

	/**
	 * Allows shape border radiuses to be modified.
	 */
	BORDER_RADIUS,

	/**
	 * Allows shape texts to be modified.
	 */
	TEXT,

	/**
	 * Allows shape textures to be modified.
	 */
	TEXTURE,

	/** @deprecated in favor of {@link DATA} */
	TAG: DATA,

	/**
	 * Allows shape data to be modified.
	 */
	DATA,

	/**
	 * Allows shape data mapping to be modified.
	 */
	DATA_MAPPING,

	/**
	 * Allows shape actions to be modified.
	 */
	ACTION,

	/**
	 * Allows shape cursors to be modified.
	 */
	CURSOR,

	/**
	 * Allows shape orders in layer to be modified.
	 */
	ORDER_IN_LAYER,

	/**
	 * Allows shape children to be modified.
	 */
	CHILDREN,

	/**
	 * Allows shape line to be modified.
	 */
	LINE,

	/**
	 * Allows shape line tail to be modified.
	 */
	LINE_TAIL,

	/**
	 * Allows shape line head to be modified.
	 */
	LINE_HEAD,

	COORDINATE,
	SHAPE,
	LAYER,
	PRIMITIVE,
	GROUP,
	EMBEDDED,
	EMBEDDED_ACCEPTOR_EDGE,
	CONNECTOR,
	ALL
} as const;

export type EShapeCapability = typeof EShapeCapability[keyof typeof EShapeCapability];
