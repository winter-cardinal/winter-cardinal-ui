/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDiagramSerializedFill,
	DDiagramSerializedStroke,
	DDiagramSerializedDataRange,
	DDiagramSerializedDataValue,
	DDiagramSerializedText,
	DDiagramSerializedTextOutline
} from "../d-diagram-serialized";
import { EShapeActionValue } from "./action/e-shape-action-value";
import { EShapeTextAlignHorizontal } from "./e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./e-shape-text-align-vertical";
import { EShapeEmbeddedDatum } from "./variant/e-shape-embedded-datum";

export interface EShapeResourceManagerDeserializationSerialized {
	resources: string[];
	tags?: string[];
	data?: string[];
}

export class EShapeResourceManagerDeserialization {
	resources: string[];
	data: string[];
	pieces?: string[];
	pieceData?: Map<string, EShapeEmbeddedDatum | null>;
	isEditMode: boolean;

	protected _actions: Map<number, EShapeActionValue>;
	protected _fills: Map<number, DDiagramSerializedFill>;
	protected _strokes: Map<number, DDiagramSerializedStroke>;
	protected _dataValues: Map<number, DDiagramSerializedDataValue>;
	protected _data: Map<number, number[]>;
	protected _ranges: Map<number, DDiagramSerializedDataRange>;
	protected _aligns: Map<number, [EShapeTextAlignHorizontal, EShapeTextAlignVertical]>;
	protected _margins: Map<number, [number, number]>;
	protected _texts: Map<number, DDiagramSerializedText>;
	protected _textOutlines: Map<number, DDiagramSerializedTextOutline>;
	protected _extensions: Map<number, unknown>;

	constructor(
		serialized: EShapeResourceManagerDeserializationSerialized,
		pieces: string[] | undefined,
		pieceData: Map<string, EShapeEmbeddedDatum | null> | undefined,
		isEditMode: boolean
	) {
		this.resources = serialized.resources;
		this.data = serialized.data || serialized.tags || serialized.resources;
		this.pieces = pieces;
		this.pieceData = pieceData;
		this.isEditMode = isEditMode;

		this._actions = new Map<number, EShapeActionValue>();
		this._fills = new Map<number, DDiagramSerializedFill>();
		this._strokes = new Map<number, DDiagramSerializedStroke>();
		this._data = new Map<number, number[]>();
		this._dataValues = new Map<number, DDiagramSerializedDataValue>();
		this._ranges = new Map<number, DDiagramSerializedDataRange>();
		this._aligns = new Map<number, [EShapeTextAlignHorizontal, EShapeTextAlignVertical]>();
		this._margins = new Map<number, [number, number]>();
		this._texts = new Map<number, DDiagramSerializedText>();
		this._textOutlines = new Map<number, DDiagramSerializedTextOutline>();
		this._extensions = new Map<number, unknown>();
	}

	getAction(id: number): EShapeActionValue | undefined {
		return this._actions.get(id);
	}

	setAction(id: number, action: EShapeActionValue): void {
		this._actions.set(id, action);
	}

	getFill(id: number): DDiagramSerializedFill | undefined {
		return this._fills.get(id);
	}

	setFill(id: number, fill: DDiagramSerializedFill): void {
		this._fills.set(id, fill);
	}

	getStroke(id: number): DDiagramSerializedStroke | undefined {
		return this._strokes.get(id);
	}

	setStroke(id: number, stroke: DDiagramSerializedStroke): void {
		this._strokes.set(id, stroke);
	}

	getData(id: number): number[] | undefined {
		return this._data.get(id);
	}

	setData(id: number, data: number[]): void {
		this._data.set(id, data);
	}

	getDataValue(id: number): DDiagramSerializedDataValue | undefined {
		return this._dataValues.get(id);
	}

	setDataValue(id: number, dataValue: DDiagramSerializedDataValue): void {
		this._dataValues.set(id, dataValue);
	}

	getRange(id: number): DDiagramSerializedDataRange | undefined {
		return this._ranges.get(id);
	}

	setRange(id: number, range: DDiagramSerializedDataRange): void {
		this._ranges.set(id, range);
	}

	getAlign(id: number): [EShapeTextAlignHorizontal, EShapeTextAlignVertical] | undefined {
		return this._aligns.get(id);
	}

	setAlign(id: number, align: [EShapeTextAlignHorizontal, EShapeTextAlignVertical]): void {
		this._aligns.set(id, align);
	}

	getMargin(id: number): [number, number] | undefined {
		return this._margins.get(id);
	}

	setMargin(id: number, margin: [number, number]): void {
		this._margins.set(id, margin);
	}

	getText(id: number): DDiagramSerializedText | undefined {
		return this._texts.get(id);
	}

	setText(id: number, text: DDiagramSerializedText): void {
		this._texts.set(id, text);
	}

	getTextOutline(id: number): DDiagramSerializedTextOutline | undefined {
		return this._textOutlines.get(id);
	}

	setTextOutline(id: number, textOutline: DDiagramSerializedTextOutline): void {
		this._textOutlines.set(id, textOutline);
	}

	getExtension<T>(id: number): T | undefined {
		return this._extensions.get(id) as T | undefined;
	}

	setExtension(id: number, extension: unknown): void {
		this._extensions.set(id, extension);
	}
}
