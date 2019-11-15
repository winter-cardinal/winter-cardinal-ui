/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasTileMapping } from "./d-diagram-canvas-mapping";

export const DDiagramSerializedVersion: number = 1;

export interface DDiagramSerializedTagRange {
	[ 0 ]: number; // type
	[ 1 ]: number; // from
	[ 2 ]: number; // to
}

export interface DDiagramSerializedTagValue {
	[ 0 ]: number; // id (Stored as a resouce)
	[ 1 ]: number; // initial value (Stored as a resource)
	[ 2 ]: number; // format (Stored as a resouce)
	[ 3 ]: number; // Range (Stored as a resource)
	[ 4 ]: number; // Capacity
	[ 5 ]: number; // Order
}

export interface DDiagramSerializedFill {
	[ 0 ]: number; // enable (0: false, 1: true)
	[ 1 ]: number; // color
	[ 2 ]: number; // alpha
}

export interface DDiagramSerializedStroke {
	[ 0 ]: number; // enable (0: false, 1: true)
	[ 1 ]: number; // color
	[ 2 ]: number; // alpha
	[ 3 ]: number; // width
	[ 4 ]: number; // align
	[ 5 ]: number; // side
}

export interface DDiagramSerializedTextOutline {
	[ 0 ]: number; // enable (0: false, 1: true)
	[ 1 ]: number; // color
	[ 2 ]: number; // alpha
	[ 3 ]: number; // width
}

export interface DDiagramSerializedText {
	[  0 ]: number; // value (Stored as a resouce)
	[  1 ]: number; // color
	[  2 ]: number; // alpha
	[  3 ]: number; // family (Stored as a resouce)
	[  4 ]: number; // size
	[  5 ]: number; // weight (0: normal, 1: bold)
	[  6 ]: number; // align (Stored as a resource)
	[  7 ]: number; // margin (Stored as a resource)
	[  8 ]: number; // style (0: normal, 1: italic)
	[  9 ]: number; // outline (Stored as a resource)
	[ 10 ]: number; // spacing (Stored as a resource)
	[ 11 ]: number; // direction
	[ 12 ]: number; // padding
	[ 13 ]: number; // clipping (0: false, 1: true)
}

export interface DDiagramSerializedItem {
	[  0 ]: number; // type
	[  1 ]: number; // id (Stored as resource)
	[  2 ]: number; // x
	[  3 ]: number; // y
	[  4 ]: number; // width
	[  5 ]: number; // height
	[  6 ]: number; // rotation
	[  7 ]: number; // skew
	[  8 ]: number; // fill (Stored as a resource)
	[  9 ]: number; // stroke (Stored as a resource)
	[ 10 ]: number; // cursor (Stored as a resource)
	[ 11 ]: number; // text (Stored as a resource)
	[ 12 ]: number; // tag (Stored as a resource)
	[ 13 ]: number; // radius
	[ 14 ]: number; // Corner
	[ 15 ]: number; // resource (Stored as a resouce)
	[ 16 ]: number; // layer
	[ 17 ]: number[]; // actions
	[ 18 ]: number; // Image (Stored as a resource)
	[ 19 ]: number; // Gradient
	[ 20 ]: DDiagramSerializedItem[];
	[ 21 ]: number; // pivot x
	[ 22 ]: number; // pivot y
	[ 23 ]: number; // (interactive ? 1 : 0) | (unfocusable ? 2 : 0)
	[ 24 ]: number; // shortcut
	[ 25 ]: number; // title
}

export interface DDiagramSerializedLayer {
	[ 0 ]: string;
}

export interface DDiagramSerializedSnapTargetValue {
	[ 0 ]: number; // 0: Horizontal, 1: Vertical
	[ 1 ]: number; // Position
}

export interface DDiagramSerializedSnapTarget {
	[ 0 ]: number; // Snap on guide (0: Off, 1: On)
	[ 1 ]: number; // Visibility (0: Invisible, 1: Visible)
	[ 2 ]: DDiagramSerializedSnapTargetValue[]; // Snap targets
}

export interface DDiagramSerializedSnapGrid {
	[ 0 ]: number; // Snap on grid (0: Off, 1: On)
	[ 1 ]: number; // Grid size
}

export interface DDiagramSerializedSnap {
	[ 0 ]: number; // Snap (0: Off, 1: On)
	[ 1 ]: DDiagramSerializedSnapTarget;
	[ 2 ]: DDiagramSerializedSnapGrid;
}

export interface DDiagramSerializedBackground {
	color?: number | null;
	alpha?: number;
}

export interface DDiagramSerializedTile {
	mapping?: DDiagramCanvasTileMapping;
}

export interface DDiagramSerialized {
	version: number;
	id?: number;
	name: string;
	width: number;
	height: number;
	background?: DDiagramSerializedBackground;
	tile?: DDiagramSerializedTile;
	resources: string[];
	layers: DDiagramSerializedLayer[];
	items: DDiagramSerializedItem[];
	snap?: DDiagramSerializedSnap;
}

export interface DDiagramSerializedSimple {
	version: number;
	id: number | undefined;
	name: string;
	data: string;
}

export interface DDiagramSerializedName {
	id: number;
	name: string;
}

export interface DDiagramSerializedTag {
	gid: number;
	id: string;
	source: string;
	device: string;
	sensor: string;
	type: string;
	interval: number;
}
