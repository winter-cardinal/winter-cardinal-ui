/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasTileMapping } from "./d-diagram-canvas-mapping";
import { EShapeCorner } from "./shape/e-shape-corner";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeTagValueOrder } from "./shape/e-shape-tag-value";
import { EShapeTextStyle, EShapeTextWeight } from "./shape/e-shape-text";
import { EShapeTextAlignHorizontal } from "./shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeType } from "./shape/e-shape-type";

export const DDiagramSerializedVersion: number = 1;

/**
 * A serialized tag range.
 */
export interface DDiagramSerializedTagRange {
	/** A type. */
	[ 0 ]: number;

	/** A lower bound. */
	[ 1 ]: number;

	/** An upper bound. */
	[ 2 ]: number;
}

/**
 * A serialized tag value.
 */
export interface DDiagramSerializedTagValue {
	/**
	 * A resource index number of an ID.
	 * Stored at DDiagramSerialized#resources.
	 */
	[ 0 ]: number;

	/**
	 * A resource index number of an initial value expression.
	 * Stored at DDiagramSerialized#resources.
	 */
	[ 1 ]: number;

	/**
	 * A resource index number of a format expression.
	 * Stored at DDiagramSerialized#resources.
	 */
	[ 2 ]: number;

	/**
	 * A resource index number of a serialized range, JSON.stringify(DDiagramSerializedTagRange).
	 * Stored at DDiagramSerialized#resources.
	 */
	[ 3 ]: number;

	/**
	 * A capacity.
	 */
	[ 4 ]: number;

	/**
	 * A order.
	 */
	[ 5 ]: EShapeTagValueOrder;
}

/**
 * A serialized fill.
 */
export interface DDiagramSerializedFill {
	/** 0: Enabled, 1: Disabled */
	[ 0 ]: number;

	/** A color. */
	[ 1 ]: number;

	/** An alpha. */
	[ 2 ]: number;
}

/**
 * A serialized stroke.
 */
export interface DDiagramSerializedStroke {
	/** 0: Enabled, 1: Disabled */
	[ 0 ]: number;

	/** A color. */
	[ 1 ]: number;

	/** An alpha. */
	[ 2 ]: number;

	/** A width. */
	[ 3 ]: number;

	/** An align. */
	[ 4 ]: number;

	/** A side. */
	[ 5 ]: EShapeStrokeSide;
}

/**
 * A serialized text outline.
 */
export interface DDiagramSerializedTextOutline {
	/** 0: Enabled, 1: Diabled */
	[ 0 ]: number;

	/** A color. */
	[ 1 ]: number;

	/** An alpha. */
	[ 2 ]: number;

	/** A width. */
	[ 3 ]: number;
}

/**
 * A serialized text align.
 */
export interface DDiagramSerializedTextAlign {
	/** A horizontal align. */
	[ 0 ]: EShapeTextAlignHorizontal;

	/** A vertical align. */
	[ 1 ]: EShapeTextAlignVertical;
}

/**
 * A serialized text offset.
 */
export interface DDiagramSerializedTextOffset {
	/** A horizontal offset. */
	[ 0 ]: number;

	/** A vertical offset. */
	[ 1 ]: number;
}

/**
 * A serialized text spacing.
 */
export interface DDiagramSerializedTextSpacing {
	/** A horizontal spacing. */
	[ 0 ]: number;

	/** A vertical spacing. */
	[ 1 ]: number;
}

/**
 * A serialized text padding.
 */
export interface DDiagramSerializedTextPadding {
	/** A horizontal padding. */
	[ 0 ]: number;

	/** A vertical padding. */
	[ 1 ]: number;
}

/**
 * A serialized text.
 */
export interface DDiagramSerializedText {
	/** A resource index number of a value. */
	[ 0 ]: number;

	/** A color. */
	[ 1 ]: number;

	/** An alpha. */
	[ 2 ]: number;

	/** A resource index number of a font family. */
	[ 3 ]: number;

	/** A size. */
	[ 4 ]: number;

	/** A weight. */
	[ 5 ]: EShapeTextWeight;

	/**
	 * A resource index number of a stringified serialized align,
	 * JSON.stringify(DDiagramSerializedTextAlign).
	 */
	[ 6 ]: number;

	/**
	 * A resource index number of a stringified serialized offset,
	 * JSON.stringify(DDiagramSerializedTextOffset).
	 */
	[ 7 ]: number;

	/** A style. */
	[ 8 ]: EShapeTextStyle;

	/**
	 * A resource index number of a stringified serialized outline,
	 * JSON.stringify(DDiagramSerializedTextOutline).
	 */
	[ 9 ]: number;

	/**
	 * A resource index number of a stringified serialized spacing,
	 * JSON.stringify(DDiagramSerializedTextSpacing).
	 */
	[ 10 ]: number;

	/** A direction. */
	[ 11 ]: EShapeTextDirection;

	/**
	 * A resource index number of a stringified serialized padding,
	 * JSON.stringify(DDiagramSerializedTextPadding).
	 */
	[ 12 ]: number;

	/** A clipping. (0: Off, 1: On) */
	[ 13 ]: number;
}

/**
 * A serialized item.
 */
export interface DDiagramSerializedItem {
	/** A type. */
	[ 0 ]: EShapeType;

	/** A resource index number of a ID. */
	[ 1 ]: number;

	/** A X-coordinate position. */
	[ 2 ]: number;

	/** A Y-coordinate position. */
	[ 3 ]: number;

	/** A width. */
	[ 4 ]: number;

	/** A height. */
	[ 5 ]: number;

	/** A rotation. */
	[ 6 ]: number;

	/** A skew. */
	[ 7 ]: number;

	/**
	 * A resource index number of a stringified serialized fill,
	 * JSON.stringify(DDiagramSerializedFill).
	 */
	[ 8 ]: number;

	/**
	 * A resource index number of a stringified serialized stroke,
	 * JSON.stringify(DDiagramSerializedStroke).
	 */
	[ 9 ]: number;

	/** A resource index number of a cursor. */
	[ 10 ]: number;

	/**
	 * A resource index number of a stringified serialized text,
	 * JSON.stringify(DDiagramSerializedText).
	 */
	[ 11 ]: number;

	/**
	 * A resource index number of stringified serialized tags,
	 * JSON.stringify(DDiagramSerializedTagValue[]).
	 */
	[ 12 ]: number;

	/** A radius. */
	[ 13 ]: number;

	/** A corner. */
	[ 14 ]: EShapeCorner;

	/** A resource index number of a shape-specific resource. */
	[ 15 ]: number;

	/** A layer index number. */
	[ 16 ]: number;

	/** Actions */
	[ 17 ]: number[];

	/** A resource index number of an image. */
	[ 18 ]: number;

	/**
	 * A resource index number of a stringified serialized gradient.
	 * A stringified serialized gradient is a stringified number array,
	 * JSON.stringify(number[]).
	 *
	 * * The first number in the array is a direction in degree.
	 * * The number at an index number 1 + 3 * n + 0 is a color of a n-th point.
	 * * The number at an index number 1 + 3 * n + 1 is a alpha of a n-th point.
	 * * The number at an index number 1 + 3 * n + 2 is a position of a n-th point whose range is [0, 1].
	 */
	[ 19 ]: number;

	/** A children. */
	[ 20 ]: DDiagramSerializedItem[];

	/** A X pivot. */
	[ 21 ]: number;

	/** A Y pivot. */
	[ 22 ]: number;

	/** (interactive ? 1 : 0) | (unfocusable ? 2 : 0) */
	[ 23 ]: number;

	/** A resource index number of a shortcut. */
	[ 24 ]: number;

	/** A resource index number of a title. */
	[ 25 ]: number;

	/** UUID */
	[ 26 ]: number;
}

/**
 * A serialized layer.
 */
export interface DDiagramSerializedLayer {
	/** A name. */
	[ 0 ]: string;
}

/**
 * A serialized snap target.
 */
export interface DDiagramSerializedSnapTargetValue {
	/** A type (0: Horizontal, 1: Vertical). */
	[ 0 ]: number;

	/** A position. */
	[ 1 ]: number;
}

/**
 * Serialized snap on guide settings.
 */
export interface DDiagramSerializedSnapTarget {
	/** Snap on guide (0: Off, 1: On) */
	[ 0 ]: number;

	/** A visibility (0: Invisible, 1: Visible). */
	[ 1 ]: number;

	/** Snap targets. */
	[ 2 ]: DDiagramSerializedSnapTargetValue[];
}

/**
 * Serialized grid snap settings.
 */
export interface DDiagramSerializedSnapGrid {
	/** Snap on grid (0: Off, 1: On) */
	[ 0 ]: number;

	/** A grid size. */
	[ 1 ]: number;
}

/**
 * Serialized snap settings.
 */
export interface DDiagramSerializedSnap {
	/** Snap (0: Off, 1: On). */
	[ 0 ]: number;

	/** Snap on targets */
	[ 1 ]: DDiagramSerializedSnapTarget;

	/** Snap on grid */
	[ 2 ]: DDiagramSerializedSnapGrid;
}

/**
 * Serialized background settings.
 */
export interface DDiagramSerializedBackground {
	color?: number | null;
	alpha?: number;
}

/**
 * Serialized tile settings.
 */
export interface DDiagramSerializedTile {
	mapping?: DDiagramCanvasTileMapping;
}

/**
 * A serialized diagram.
 */
export interface DDiagramSerialized  {
	version: number;
	id?: number;
	name: string;
	width: number;
	height: number;
	background?: DDiagramSerializedBackground;
	tile?: DDiagramSerializedTile;
	resources: string[];
	tags?: string[];
	pieces?: string[];
	layers: DDiagramSerializedLayer[];
	items: DDiagramSerializedItem[];
	snap?: DDiagramSerializedSnap;
}

/**
 * A simplified version of a serialized diagram.
 */
export interface DDiagramSerializedSimple {
	version: number;
	id: number | undefined;
	name: string;

	/**
	 * Stringified tags, JSON.stringify(DDiagramSerialized#tags).
	 */
	tags?: string;

	/**
	 * Stringified piece names, JSON.stringify(DDiagramSerialized#pieces).
	 */
	pieces?: string;

	/**
	 * Thumbnail data URL.
	 */
	thumbnail?: string;

	/**
	 * A stringified DDiagramSerialized.
	 * Please note that the following properties are not included:
	 *
	 * * DDiagramSerialized#version
	 * * DDiagramSerialized#id
	 * * DDiagramSerialized#name
	 * * DDiagramSerialized#tags
	 * * DDiagramSerialized#pieces
	 */
	data: string;
}

export interface DDiagramSerializedName {
	id: number;
	name: string;
}
