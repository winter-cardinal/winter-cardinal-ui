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
	DDiagramSerializedTextOutline,
	DDiagramSerializedData,
	DDiagramSerializedDataMapping,
	DDiagramSerializedDataSystem
} from "../d-diagram-serialized";
import { EShapeActionValue } from "./action/e-shape-action-value";
import { EShapeDataMapper } from "./e-shape-data-mapper";
import { EShapeDataMapperImpl } from "./e-shape-data-mapper-impl";
import { EShapeResourceManagerDeserializationMode } from "./e-shape-resource-manager-deserialization-mode";
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
	mode: EShapeResourceManagerDeserializationMode;
	depth: number;

	protected _actions: Map<number, EShapeActionValue>;
	protected _fills: Map<number, DDiagramSerializedFill>;
	protected _strokes: Map<number, DDiagramSerializedStroke>;
	protected _data: Map<number, DDiagramSerializedData>;
	protected _dataValues: Map<number, DDiagramSerializedDataValue>;
	protected _dataMapping: Map<number, DDiagramSerializedDataMapping>;
	protected _dataMappers: Map<string, EShapeDataMapper | null>;
	protected _dataDestinations: Map<string, string[] | null>;
	protected _dataSystem: Map<number, DDiagramSerializedDataSystem>;
	protected _ranges: Map<number, DDiagramSerializedDataRange>;
	protected _aligns: Map<number, [EShapeTextAlignHorizontal, EShapeTextAlignVertical]>;
	protected _margins: Map<number, [number, number]>;
	protected _texts: Map<number, DDiagramSerializedText>;
	protected _textOutlines: Map<number, DDiagramSerializedTextOutline>;
	protected _capabilities: Map<number, [number, number]>;
	protected _extensions: Map<number, unknown>;

	constructor(
		serialized: EShapeResourceManagerDeserializationSerialized,
		pieces: string[] | undefined,
		pieceData: Map<string, EShapeEmbeddedDatum | null> | undefined,
		mode: EShapeResourceManagerDeserializationMode,
		depth: number
	) {
		this.resources = serialized.resources;
		this.data = serialized.data || serialized.tags || serialized.resources;
		this.pieces = pieces;
		this.pieceData = pieceData;
		this.mode = mode;
		this.depth = depth;

		this._actions = new Map<number, EShapeActionValue>();
		this._fills = new Map<number, DDiagramSerializedFill>();
		this._strokes = new Map<number, DDiagramSerializedStroke>();
		this._data = new Map<number, DDiagramSerializedData>();
		this._dataValues = new Map<number, DDiagramSerializedDataValue>();
		this._dataMapping = new Map<number, DDiagramSerializedDataMapping>();
		this._dataMappers = new Map<string, EShapeDataMapper | null>();
		this._dataDestinations = new Map<string, string[] | null>();
		this._dataSystem = new Map<number, DDiagramSerializedDataSystem>();
		this._ranges = new Map<number, DDiagramSerializedDataRange>();
		this._aligns = new Map<number, [EShapeTextAlignHorizontal, EShapeTextAlignVertical]>();
		this._margins = new Map<number, [number, number]>();
		this._texts = new Map<number, DDiagramSerializedText>();
		this._textOutlines = new Map<number, DDiagramSerializedTextOutline>();
		this._capabilities = new Map<number, [number, number]>();
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

	getData(id: number): DDiagramSerializedData | undefined {
		return this._data.get(id);
	}

	setData(id: number, data: DDiagramSerializedData): void {
		this._data.set(id, data);
	}

	getDataValue(id: number): DDiagramSerializedDataValue | undefined {
		return this._dataValues.get(id);
	}

	setDataValue(id: number, dataValue: DDiagramSerializedDataValue): void {
		this._dataValues.set(id, dataValue);
	}

	getDataMapping(id: number): DDiagramSerializedDataMapping | undefined {
		return this._dataMapping.get(id);
	}

	setDataMapping(id: number, dataMapping: DDiagramSerializedDataMapping): void {
		this._dataMapping.set(id, dataMapping);
	}

	getDataMapper(source: string): EShapeDataMapper | null {
		const dataMappers = this._dataMappers;
		let result = dataMappers.get(source);
		if (result === undefined) {
			result = new EShapeDataMapperImpl(source);
			dataMappers.set(source, result);
		}
		return result;
	}

	getDataDestination(destination: string): string[] | null {
		const dataDestinations = this._dataDestinations;
		let result: string[] | null | undefined = dataDestinations.get(destination);
		if (result === undefined) {
			result = EShapeDataMapperImpl.split(destination);
			dataDestinations.set(destination, result);
		}
		return result;
	}

	getDataSystem(id: number): DDiagramSerializedDataSystem | undefined {
		return this._dataSystem.get(id);
	}

	setDataSystem(id: number, dataSystem: DDiagramSerializedDataSystem): void {
		this._dataSystem.set(id, dataSystem);
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

	getCapability(id: number): [number, number] | undefined {
		return this._capabilities.get(id);
	}

	setCapability(id: number, capability: [number, number]): void {
		this._capabilities.set(id, capability);
	}

	getExtension<T>(id: number): T | undefined {
		return this._extensions.get(id) as T | undefined;
	}

	setExtension(id: number, extension: unknown): void {
		this._extensions.set(id, extension);
	}
}
