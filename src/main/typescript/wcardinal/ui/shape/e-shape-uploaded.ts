/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeBufferUnitBuilder } from "./e-shape-buffer-unit-builder";
import { Builder, BuilderBuffer } from "./variant/builder";

export interface EShapeUploaded {
	init(shape: EShape): this;
	reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean;
	update(shape: EShape): this;
	isCompatible(shape: EShape): boolean;
	getVertexOffset(): number;
	getVertexCount(): number;
	getIndexOffset(): number;
	getIndexCount(): number;
	buildUnit(builder: EShapeBufferUnitBuilder): void;
}

export class EShapeUploadedImpl implements EShapeUploaded {
	protected _builders: Builder[];
	protected _vertexOffset: number;
	protected _indexOffset: number;
	protected _vertexCount: number;
	protected _indexCount: number;

	constructor(
		buffer: BuilderBuffer,
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number,
		builders: Builder[]
	) {
		this._builders = builders;
		this._vertexOffset = vertexOffset;
		this._indexOffset = indexOffset;
		this._vertexCount = vertexCount;
		this._indexCount = indexCount;
	}

	init(shape: EShape): this {
		shape.uploaded = this;
		const builders = this._builders;
		for (let i = 0, imax = builders.length; i < imax; ++i) {
			builders[i].init();
		}
		this.update(shape);
		return this;
	}

	reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean {
		const builders = this._builders;
		let voffset = vertexOffset;
		let ioffset = indexOffset;
		for (let i = 0, imax = builders.length; i < imax; ++i) {
			const builder = builders[i];
			if (!builder.reinit(buffer, shape, voffset, ioffset)) {
				return false;
			}
			const vertexCount = builder.vertexCount;
			const indexCount = builder.indexCount;
			voffset += vertexCount;
			ioffset += indexCount;
		}
		this._vertexCount = voffset - vertexOffset;
		this._indexCount = ioffset - indexOffset;
		this.update(shape);
		return true;
	}

	update(shape: EShape): this {
		const builders = this._builders;
		for (let i = 0, imax = builders.length; i < imax; ++i) {
			builders[i].update(shape);
		}
		return this;
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
