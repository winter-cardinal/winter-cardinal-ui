/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDiagramSerializedFill, DDiagramSerializedStroke, DDiagramSerializedTagRange, DDiagramSerializedTagValue,
	DDiagramSerializedText, DDiagramSerializedTextOutline
} from "../d-diagram-serialized";
import { EShapeActionValue } from "./action/e-shape-action-value";

export class EShapeResourceManagerDeserialization {
	resources: string[];
	actions: Map<number, EShapeActionValue>;
	fills: Map<number, DDiagramSerializedFill>;
	strokes: Map<number, DDiagramSerializedStroke>;
	tagValues: Map<number, DDiagramSerializedTagValue>;
	tags: Map<number, number[]>;
	ranges: Map<number, DDiagramSerializedTagRange>;
	aligns: Map<number, [ number, number ]>;
	margins: Map<number, [ number, number ]>;
	texts: Map<number, DDiagramSerializedText>;
	textOutlines: Map<number, DDiagramSerializedTextOutline>;
	extensions: Map<number, unknown>;

	constructor( resources: string[] ) {
		this.resources = resources;
		this.actions = new Map<number, EShapeActionValue>();
		this.fills = new Map<number, DDiagramSerializedFill>();
		this.strokes = new Map<number, DDiagramSerializedStroke>();
		this.tags = new Map<number, number[]>();
		this.tagValues = new Map<number, DDiagramSerializedTagValue>();
		this.ranges = new Map<number, DDiagramSerializedTagRange>();
		this.aligns = new Map<number, [ number, number ]>();
		this.margins = new Map<number, [ number, number ]>();
		this.texts = new Map<number, DDiagramSerializedText>();
		this.textOutlines = new Map<number, DDiagramSerializedTextOutline>();
		this.extensions = new Map<number, unknown>();
	}
}
