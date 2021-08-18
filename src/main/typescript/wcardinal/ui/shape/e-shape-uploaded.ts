/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeBufferUnitBuilder } from "./e-shape-buffer-unit-builder";
import { Builder } from "./variant/builder";

export interface EShapeUploaded {
	update(shape: EShape): void;
	isCompatible(shape: EShape): boolean;
	getBuffer(): EShapeBuffer;
	getVertexOffset(): number;
	getVertexCount(): number;
	getIndexOffset(): number;
	getIndexCount(): number;
	buildUnit(builder: EShapeBufferUnitBuilder): void;
}

export class EShapeUploadedImpl implements EShapeUploaded {
	protected buffer: EShapeBuffer;
	protected _builders: Builder[];
	protected _vertexOffset: number;
	protected _indexOffset: number;
	protected _vertexCount: number;
	protected _indexCount: number;

	constructor(
		buffer: EShapeBuffer,
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number,
		builders: Builder[]
	) {
		this.buffer = buffer;
		this._builders = builders;
		this._vertexOffset = vertexOffset;
		this._indexOffset = indexOffset;
		this._vertexCount = vertexCount;
		this._indexCount = indexCount;
	}

	init(shape: EShape): this {
		shape.uploaded = this;
		const buffer = this.buffer;
		const builders = this._builders;
		for (let i = 0, imax = builders.length; i < imax; ++i) {
			builders[i].init(buffer);
		}
		this.update(shape);
		return this;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		const builders = this._builders;
		for (let i = 0, imax = builders.length; i < imax; ++i) {
			builders[i].update(buffer, shape);
		}
	}

	isCompatible(shape: EShape): boolean {
		const builders = this._builders;
		for (let i = 0, imax = builders.length; i < imax; ++i) {
			if (!builders[i].isCompatible(shape)) {
				return false;
			}
		}
		return true;
	}

	getBuffer(): EShapeBuffer {
		return this.buffer;
	}

	getVertexOffset(): number {
		return this._vertexOffset;
	}

	getVertexCount(): number {
		return this._vertexCount;
	}

	getIndexOffset(): number {
		return this._indexOffset;
	}

	getIndexCount(): number {
		return this._indexCount;
	}

	buildUnit(builder: EShapeBufferUnitBuilder): void {
		const builders = this._builders;
		for (let i = 0, imax = builders.length; i < imax; ++i) {
			builders[i].buildUnit(builder);
		}
	}
}
