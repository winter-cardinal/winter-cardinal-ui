/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDiagramSerializedFill, DDiagramSerializedStroke, DDiagramSerializedTagRange,
	DDiagramSerializedTagValue, DDiagramSerializedText, DDiagramSerializedTextOutline
} from "../d-diagram-serialized";
import { EShapeActionValue } from "./action/e-shape-action-value";
import { EShapePieceDatum } from "./e-shape-piece-datum";

export class EShapeResourceManagerDeserialization {
	resources: string[];
	tags: string[];
	pieces?: string[];
	pieceData?: Map<string, EShapePieceDatum>;

	protected _actions: Map<number, EShapeActionValue>;
	protected _fills: Map<number, DDiagramSerializedFill>;
	protected _strokes: Map<number, DDiagramSerializedStroke>;
	protected _tagValues: Map<number, DDiagramSerializedTagValue>;
	protected _tags: Map<number, number[]>;
	protected _ranges: Map<number, DDiagramSerializedTagRange>;
	protected _aligns: Map<number, [ number, number ]>;
	protected _margins: Map<number, [ number, number ]>;
	protected _texts: Map<number, DDiagramSerializedText>;
	protected _textOutlines: Map<number, DDiagramSerializedTextOutline>;
	protected _extensions: Map<number, unknown>;

	constructor(
		resources: string[],
		tags?: string[],
		pieces?: string[],
		pieceData?: Map<string, EShapePieceDatum>
	) {
		this.resources = resources;
		this.tags = tags || resources;
		this.pieces = pieces;
		this.pieceData = pieceData;

		this._actions = new Map<number, EShapeActionValue>();
		this._fills = new Map<number, DDiagramSerializedFill>();
		this._strokes = new Map<number, DDiagramSerializedStroke>();
		this._tags = new Map<number, number[]>();
		this._tagValues = new Map<number, DDiagramSerializedTagValue>();
		this._ranges = new Map<number, DDiagramSerializedTagRange>();
		this._aligns = new Map<number, [ number, number ]>();
		this._margins = new Map<number, [ number, number ]>();
		this._texts = new Map<number, DDiagramSerializedText>();
		this._textOutlines = new Map<number, DDiagramSerializedTextOutline>();
		this._extensions = new Map<number, unknown>();
	}

	getAction( id: number ): EShapeActionValue | undefined {
		return this._actions.get( id );
	}

	setAction( id: number, action: EShapeActionValue ): void {
		this._actions.set( id, action );
	}

	getFill( id: number ): DDiagramSerializedFill | undefined {
		return this._fills.get( id );
	}

	setFill( id: number, fill: DDiagramSerializedFill ): void {
		this._fills.set( id, fill );
	}

	getStroke( id: number ): DDiagramSerializedStroke | undefined {
		return this._strokes.get( id );
	}

	setStroke( id: number, stroke: DDiagramSerializedStroke ): void {
		this._strokes.set( id, stroke );
	}

	getTag( id: number ): number[] | undefined {
		return this._tags.get( id );
	}

	setTag( id: number, tag: number[] ): void {
		this._tags.set( id, tag );
	}

	getTagValue( id: number ): DDiagramSerializedTagValue | undefined {
		return this._tagValues.get( id );
	}

	setTagValue( id: number, tagValue: DDiagramSerializedTagValue ): void {
		this._tagValues.set( id, tagValue );
	}

	getRange( id: number ): DDiagramSerializedTagRange | undefined {
		return this._ranges.get( id );
	}

	setRange( id: number, range: DDiagramSerializedTagRange ): void {
		this._ranges.set( id, range );
	}

	getAlign( id: number ): [ number, number ] | undefined {
		return this._aligns.get( id );
	}

	setAlign( id: number, align: [ number, number ] ): void {
		this._aligns.set( id, align );
	}

	getMargin( id: number ): [ number, number ] | undefined {
		return this._margins.get( id );
	}

	setMargin( id: number, margin: [ number, number ] ): void {
		this._margins.set( id, margin );
	}

	getText( id: number ): DDiagramSerializedText | undefined {
		return this._texts.get( id );
	}

	setText( id: number, text: DDiagramSerializedText ): void {
		this._texts.set( id, text );
	}

	getTextOutline( id: number ): DDiagramSerializedTextOutline | undefined {
		return this._textOutlines.get( id );
	}

	setTextOutline( id: number, textOutline: DDiagramSerializedTextOutline ): void {
		this._textOutlines.set( id, textOutline );
	}

	getExtension<T>( id: number ): T | undefined {
		return this._extensions.get( id ) as T | undefined;
	}

	setExtension( id: number, extension: unknown ): void {
		this._extensions.set( id, extension );
	}
}
