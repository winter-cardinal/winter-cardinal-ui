/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasTileMapping } from "./d-diagram-canvas-mapping";
import { EShapeCorner } from "./shape/e-shape-corner";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";
import { EShapeDataValueOrder } from "./shape/e-shape-data-value-order";
import { EShapeTextStyle, EShapeTextWeight } from "./shape/e-shape-text";
import { EShapeTextAlignHorizontal } from "./shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeType } from "./shape/e-shape-type";
import { ESnapperTargetValueType } from "./snapper/e-snapper-target-value";
import { EShapeDataValueRangeType } from "./shape/e-shape-data-value-range";
import { EShapeDataValueType } from "./shape/e-shape-data-value-type";
import { EShapeDataValueScope } from "./shape/e-shape-data-value-scope";

export const DDiagramSerializedVersion: number = 1;

/**
 * A serialized data range.
 */
export interface DDiagramSerializedDataRange {
	/** A type. */
	[0]: EShapeDataValueRangeType;

	/** A lower bound. */
	[1]: number;

	/** An upper bound. */
	[2]: number;
}

/**
 * A serialized data value.
 */
export interface DDiagramSerializedDataValue {
	/**
	 * A resource index number of an ID.
	 */
	[0]: number;

	/**
	 * A resource index number of an initial value expression.
	 */
	[1]: number;

	/**
	 * A resource index number of a format expression.
	 */
	[2]: number;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedDataRange).
	 */
	[3]: number;

	/**
	 * A capacity.
	 */
	[4]: number;

	/**
	 * A order.
	 */
	[5]: EShapeDataValueOrder;

	/**
	 * A type.
	 */
	[6]: EShapeDataValueType | undefined;

	/**
	 * A scope.
	 */
	[7]: EShapeDataValueScope | undefined;

	/**
	 * A resource index number of an alias.
	 */
	[8]: number | undefined;
}

/**
 * A serialized system data.
 */
export type DDiagramSerializedDataSystem = number[];

/**
 * A serialized data mapping.
 * Each number at the index 2N+0 is a resource index number of the N-th mapping source.
 * Each number at the index 2N+1 is a resource index number of the N-th mapping destination.
 */
export type DDiagramSerializedDataMapping = number[];

/**
 * A serialized data with a mapping data.
 */
export interface DDiagramSerializedDataWithMapping extends Array<unknown> {
	/**
	 * Each number is a resource index number of JSON.stringify(DDiagramSerializedDataValue).
	 * The last number is a resource index number of JSON.stringify(DDiagramSerializedDataMapping).
	 */
	[0]: number[];

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedDataSystem).
	 */
	[1]: number | undefined;
}

/**
 * A serialized data without a mapping data.
 * Each number is a resource index number of JSON.stringify(DDiagramSerializedDataValue).
 */
export type DDiagramSerializedDataWithoutMapping = number[];

/**
 * A serialized data.
 */
export type DDiagramSerializedData =
	| DDiagramSerializedDataWithoutMapping
	| DDiagramSerializedDataWithMapping;

/**
 * A serialized fill.
 */
export interface DDiagramSerializedFill {
	/** 0: Disabled, 1: Enabled */
	[0]: number;

	/** A color. */
	[1]: number;

	/** An alpha. */
	[2]: number;
}

/**
 * A serialized stroke.
 */
export interface DDiagramSerializedStroke {
	/** 0: Disabled, 1: Enabled */
	[0]: number;

	/** A color. */
	[1]: number;

	/** An alpha. */
	[2]: number;

	/** A width. */
	[3]: number;

	/** An align. */
	[4]: number;

	/** A side. */
	[5]: EShapeStrokeSide;

	/** A style */
	[6]: EShapeStrokeStyle | undefined;
}

/**
 * A serialized text outline.
 */
export interface DDiagramSerializedTextOutline {
	/** 0: Disabled, 1: Enabled */
	[0]: number;

	/** A color. */
	[1]: number;

	/** An alpha. */
	[2]: number;

	/** A width. */
	[3]: number;
}

/**
 * A serialized text align.
 */
export interface DDiagramSerializedTextAlign {
	/** A horizontal align. */
	[0]: EShapeTextAlignHorizontal;

	/** A vertical align. */
	[1]: EShapeTextAlignVertical;
}

/**
 * A serialized text offset.
 */
export interface DDiagramSerializedTextOffset {
	/** A horizontal offset. */
	[0]: number;

	/** A vertical offset. */
	[1]: number;
}

/**
 * A serialized text spacing.
 */
export interface DDiagramSerializedTextSpacing {
	/** A horizontal spacing. */
	[0]: number;

	/** A vertical spacing. */
	[1]: number;
}

/**
 * A serialized text padding.
 */
export interface DDiagramSerializedTextPadding {
	/** A horizontal padding. */
	[0]: number;

	/** A vertical padding. */
	[1]: number;
}

/**
 * A serialized text.
 */
export interface DDiagramSerializedText {
	/** A resource index number of a value. */
	[0]: number;

	/** A color. */
	[1]: number;

	/** An alpha. */
	[2]: number;

	/** A resource index number of a font family. */
	[3]: number;

	/** A size. */
	[4]: number;

	/** A weight. */
	[5]: EShapeTextWeight;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedTextAlign).
	 */
	[6]: number;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedTextOffset).
	 */
	[7]: number;

	/** A style. */
	[8]: EShapeTextStyle;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedTextOutline).
	 */
	[9]: number;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedTextSpacing).
	 */
	[10]: number;

	/** A direction. */
	[11]: EShapeTextDirection;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedTextPadding).
	 */
	[12]: number;

	/** A clipping. (0: Off, 1: On) */
	[13]: number;
}

/**
 * A serialized item.
 */
export interface DDiagramSerializedItem {
	/** A type. */
	[0]: EShapeType;

	/** A resource index number of a ID. */
	[1]: number;

	/** A X-coordinate position. */
	[2]: number;

	/** A Y-coordinate position. */
	[3]: number;

	/** A width. */
	[4]: number;

	/** A height. */
	[5]: number;

	/** A rotation. */
	[6]: number;

	/** A skew. */
	[7]: number;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedFill).
	 */
	[8]: number;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedStroke).
	 */
	[9]: number;

	/** A resource index number of a cursor. */
	[10]: number;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedText).
	 */
	[11]: number;

	/**
	 * A resource index number of JSON.stringify(DDiagramSerializedData).
	 */
	[12]: number;

	/** A radius. */
	[13]: number;

	/** A corner. */
	[14]: EShapeCorner;

	/** A resource index number of a shape-specific resource. */
	[15]: number;

	/** A layer index number. */
	[16]: number;

	/** Actions */
	[17]: number[];

	/** A resource index number of an image. */
	[18]: number;

	/**
	 * A resource index number of a stringified serialized gradient.
	 * A stringified serialized gradient is a stringified number array,
	 * JSON.stringify(number[]).
	 *
	 * * The first number in the array is a direction in degree.
	 * * Each number at the index 3N + 1 is a color of a N-th point.
	 * * Each number at the index 3N + 2 is a alpha of a N-th point.
	 * * Each number at the index 3N + 3 is a position of a N-th point whose range is [0, 1].
	 */
	[19]: number;

	/** Children. */
	[20]: DDiagramSerializedItem[];

	/** A X pivot. */
	[21]: number;

	/** A Y pivot. */
	[22]: number;

	/** (interactive ? 1 : 0) | (unfocusable ? 2 : 0) */
	[23]: number;

	/** A resource index number of a shortcut. */
	[24]: number;

	/** A resource index number of a title. */
	[25]: number;

	/** UUID */
	[26]: number;

	/** Added capabilities */
	[27]: number;

	/** Removed capabilities */
	[28]: number;
}

/**
 * A serialized layer.
 */
export interface DDiagramSerializedLayer {
	/** A name or a resource index number of a name*/
	[0]: string | number;

	/**
	 * A visibility.
	 *
	 * * 1st bit
	 *     * 0: Invisible when edit mode
	 *     * 1: Visible when edit mode
	 * * 2nd bit
	 *     * 0: Invisible when non-edit mode
	 *     * 1: Visible when non-edit mode
	 */
	[1]?: number;

	/** A X-coordinate position. */
	[2]?: number;

	/** A Y-coordinate position. */
	[3]?: number;

	/** A width. */
	[4]?: number;

	/** A height. */
	[5]?: number;

	/**
	 * A resource index number of a stringified serialized fill,
	 * JSON.stringify(DDiagramSerializedFill).
	 */
	[6]?: number;

	/**
	 * * 1st bit
	 *     * 0: Not interactive
	 *     * 1: Interactive
	 * * 2nd bit
	 *     * 0: Not draggable
	 *     * 1: Draggable
	 * * 3rd bit
	 *     * 0: Not pinchable
	 *     * 1: Pinchable
	 */
	[7]?: number;
}

/**
 * A serialized snap target.
 */
export interface DDiagramSerializedSnapTargetValue {
	/** A type. */
	[0]: ESnapperTargetValueType;

	/** A position. */
	[1]: number;
}

/**
 * Serialized snap on guide settings.
 */
export interface DDiagramSerializedSnapTarget {
	/** Snap on guide (0: Off, 1: On) */
	[0]: number;

	/** A visibility (0: Invisible, 1: Visible). */
	[1]: number;

	/** Snap targets. */
	[2]: DDiagramSerializedSnapTargetValue[];
}

/**
 * Serialized grid snap settings without a visibility option.
 */
export interface DDiagramSerializedSnapGridWithoutVisibility {
	/** Snap on grid (0: Off, 1: On) */
	[0]: number;

	/** A grid size. */
	[1]: number;
}

/**
 * Serialized grid snap settings with a visibility option.
 */
export interface DDiagramSerializedSnapGridWithVisibility {
	/** Snap on grid (0: Off, 1: On) */
	[0]: number;

	/** A visibility (0: Invisible, 1: Visible). */
	[1]: number;

	/** A grid size. */
	[2]: number;
}

/**
 * Serialized grid snap settings with a visibility.
 */
export type DDiagramSerializedSnapGrid =
	| DDiagramSerializedSnapGridWithoutVisibility
	| DDiagramSerializedSnapGridWithVisibility;

/**
 * Serialized snap settings.
 */
export interface DDiagramSerializedSnap {
	/** Snap (0: Off, 1: On). */
	[0]: number;

	/** Snap on targets */
	[1]: DDiagramSerializedSnapTarget;

	/** Snap on grid */
	[2]: DDiagramSerializedSnapGrid;
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
export interface DDiagramSerialized {
	version: number;
	id?: number;
	name: string;
	width: number;
	height: number;
	background?: DDiagramSerializedBackground;
	tile?: DDiagramSerializedTile;
	resources: string[];
	/** @deprecated in favor of {@link data} */
	tags?: string[];
	data?: string[];
	pieces?: string[];
	layers: DDiagramSerializedLayer[];
	items: DDiagramSerializedItem[];
	snap?: DDiagramSerializedSnap;
	thumbnail?: string;
}

export type DDiagramSerializedSimpleData = Omit<
	DDiagramSerialized,
	"version" | "id" | "name" | "thumbnail"
>;

/**
 * A simplified version of a serialized diagram.
 */
export interface DDiagramSerializedSimple {
	version: number;
	id: number | undefined;
	name: string;

	/**
	 * A stringified {@link DDiagramSerialized#data}.
	 *
	 * @deprecated in favor of {@link DDiagramSerializedSimpleData}.
	 */
	tags?: string;

	/**
	 * A stringified {@link DDiagramSerialized#pieces}.
	 *
	 * @deprecated in favor of {@link DDiagramSerializedSimpleData}.
	 */
	pieces?: string;

	/**
	 * Thumbnail data URL.
	 */
	thumbnail?: string;

	/**
	 * A stringified {@link DDiagramSerializedSimpleData}.
	 */
	data: string;
}

export interface DDiagramSerializedName {
	id: number;
	name: string;
}
