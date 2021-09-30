/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Buffer, MeshGeometry } from "pixi.js";
import { DCornerMask } from "./d-corner-mask";

export interface DBaseMeshGeometryTable {
	cos: number[];
	sin: number[];
}

export class DBaseMeshGeometry extends MeshGeometry {
	protected static N = 4;
	protected static TABLES?: DBaseMeshGeometryTable[];

	protected _width: number;
	protected _height: number;
	protected _cornerRadius: number;
	protected _cornerMask: DCornerMask;
	protected _isDirty: boolean;
	protected _vertices: Float32Array;
	protected _uvs: Float32Array;
	protected _indices: Uint16Array;
	protected _vertexBuffer: Buffer;
	protected _uvBuffer: Buffer;
	protected _indexBuffer: Buffer;
	protected _resolution: number;

	constructor(
		vertices: Float32Array | number[],
		uvs: Float32Array | number[],
		indices: Uint16Array | number[]
	) {
		super(vertices, uvs, indices);

		this._width = 100;
		this._height = 100;
		this._cornerRadius = 0;
		this._cornerMask = DCornerMask.NONE;
		this._isDirty = true;
		this._resolution = 1;

		this._vertexBuffer = this.getBuffer("aVertexPosition");
		this._vertices = this._vertexBuffer.data as Float32Array;
		this._uvBuffer = this.getBuffer("aTextureCoord");
		this._uvs = this._uvBuffer.data as Float32Array;
		this._indexBuffer = this.getIndex();
		this._indices = this._indexBuffer.data as Uint16Array;
	}

	get width(): number {
		return this._width;
	}

	set width(width: number) {
		if (this._width !== width) {
			this._width = width;
			this._isDirty = true;
		}
	}

	get height(): number {
		return this._height;
	}

	set height(height: number) {
		if (this._height !== height) {
			this._height = height;
			this._isDirty = true;
		}
	}

	get cornerRadius(): number {
		return this._cornerRadius;
	}

	set cornerRadius(borderSize: number) {
		if (this._cornerRadius !== borderSize) {
			this._cornerRadius = borderSize;
			this._isDirty = true;
		}
	}

	get cornerMask(): DCornerMask {
		return this._cornerMask;
	}

	set cornerMask(cornerMask: DCornerMask) {
		if (this._cornerMask !== cornerMask) {
			this._cornerMask = cornerMask;
			this._isDirty = true;
		}
	}

	protected getTables(): DBaseMeshGeometryTable[] {
		let result = DBaseMeshGeometry.TABLES;
		if (result == null) {
			result = this.newTables(DBaseMeshGeometry.N);
			DBaseMeshGeometry.TABLES = result;
		}
		return result;
	}

	protected newTables(n: number): DBaseMeshGeometryTable[] {
		const dp = 1.0 / (n - 1);
		const da = 0.5 * dp;
		return [
			this.newTable(n, 1.0, da),
			this.newTable(n, 0.5, da),
			this.newTable(n, 0.0, da),
			this.newTable(n, 1.5, da)
		];
	}

	protected newTable(n: number, a0: number, da: number): DBaseMeshGeometryTable {
		const cos: number[] = [];
		const sin: number[] = [];
		const pi = Math.PI;
		for (let i = 0, a = a0; i < n; i += 1, a -= da) {
			const t = a * pi;
			const c = +Math.cos(t);
			const s = -Math.sin(t);
			cos.push(c);
			sin.push(s);
		}
		return {
			cos,
			sin
		};
	}
}
