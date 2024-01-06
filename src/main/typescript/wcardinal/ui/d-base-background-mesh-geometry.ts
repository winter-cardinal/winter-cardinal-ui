/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer } from "pixi.js";
import { DBaseMeshGeometry, DBaseMeshGeometryTable } from "./d-base-mesh-geometry";
import { DCornerMask } from "./d-corner-mask";

export class DBaseBackgroundMeshGeometry extends DBaseMeshGeometry {
	constructor() {
		super(
			new Float32Array(16 * DBaseMeshGeometry.N),
			new Float32Array(16 * DBaseMeshGeometry.N),
			new Uint16Array(3 * (12 * DBaseMeshGeometry.N - 2))
		);
	}

	protected fillVertices(
		vertices: Float32Array,
		uvs: Float32Array,
		iv: number,
		iuv: number,
		n: number,
		x: number,
		y: number,
		r: number,
		dr: number,
		table: DBaseMeshGeometryTable
	): void {
		const cos = table.cos;
		const sin = table.sin;
		const r1 = r + dr;
		for (let i = 0; i < n; ++i) {
			const c = cos[i];
			const s = sin[i];
			vertices[++iv] = x + c * r;
			vertices[++iv] = y + s * r;
			vertices[++iv] = x + c * r1;
			vertices[++iv] = y + s * r1;
			uvs[++iuv] = 0.5;
			uvs[++iuv] = 0.5;
			uvs[++iuv] = 0.5 * (1 + c);
			uvs[++iuv] = 0.5 * (1 + s);
		}
	}

	protected fillIndices(indices: Uint16Array, ia: number, ii: number, n: number): void {
		for (let i = 0; i < n; ++i) {
			indices[++ii] = ia + 0;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 2;

			indices[++ii] = ia + 2;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 3;
			ia += 2;
		}
	}

	protected fillIndicesEnd(indices: Uint16Array, ia: number, ii: number, n: number): void {
		for (let i = 0, imax = n - 1; i < imax; ++i) {
			indices[++ii] = ia + 0;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 2;

			indices[++ii] = ia + 2;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 3;
			ia += 2;
		}

		indices[++ii] = ia + 0;
		indices[++ii] = ia + 1;
		indices[++ii] = 0;

		indices[++ii] = 0;
		indices[++ii] = ia + 1;
		indices[++ii] = 1;
		ia += 2;
	}

	update(renderer: Renderer): void {
		const resolution = renderer.resolution;
		if (this._isDirty || this._resolution !== resolution) {
			this._isDirty = false;
			this._resolution = resolution;

			const vertices = this._vertices;
			const uvs = this._uvs;
			const indices = this._indices;

			const w = this._width;
			const h = this._height;
			const r = Math.min(0.5 * w, 0.5 * h, this._cornerRadius);
			const a = 1 / resolution;

			const x0 = 0;
			const x1 = r;
			const x2 = w - r;
			const x3 = w;

			const y0 = 0;
			const y1 = r;
			const y2 = h - r;
			const y3 = h;

			const cornerMask = this._cornerMask;
			const ctl = !(cornerMask & DCornerMask.TOP_LEFT);
			const ctr = !(cornerMask & DCornerMask.TOP_RIGHT);
			const cbl = !(cornerMask & DCornerMask.BOTTOM_LEFT);
			const cbr = !(cornerMask & DCornerMask.BOTTOM_RIGHT);

			// Vertices & UVs
			let iv = -1;
			let iuv = -1;
			let ia = 0;
			let ii = -1;

			const n = DBaseMeshGeometry.N;
			const n4 = n << 2;
			const n2 = n << 1;
			const n6 = 6 * n;

			const tables = this.getTables();
			const tlt = tables[0];
			const ttr = tables[1];
			const trb = tables[2];
			const tbl = tables[3];

			// left -> top
			if (ctl) {
				this.fillVertices(vertices, uvs, iv, iuv, n, x1, y1, r, a, tlt);
			} else {
				this.fillVertices(vertices, uvs, iv, iuv, n, x0, y0, 0, 0, tlt);
			}
			this.fillIndices(indices, ia, ii, n);
			iv += n4;
			iuv += n4;
			ia += n2;
			ii += n6;

			// top -> right
			if (ctr) {
				this.fillVertices(vertices, uvs, iv, iuv, n, x2, y1, r, a, ttr);
			} else {
				this.fillVertices(vertices, uvs, iv, iuv, n, x3, y0, 0, 0, ttr);
			}
			this.fillIndices(indices, ia, ii, n);
			iv += n4;
			iuv += n4;
			ia += n2;
			ii += n6;

			// right -> bottom
			if (cbr) {
				this.fillVertices(vertices, uvs, iv, iuv, n, x2, y2, r, a, trb);
			} else {
				this.fillVertices(vertices, uvs, iv, iuv, n, x3, y3, 0, 0, trb);
			}
			this.fillIndices(indices, ia, ii, n);
			iv += n4;
			iuv += n4;
			ia += n2;
			ii += n6;

			// bottom -> left
			if (cbl) {
				this.fillVertices(vertices, uvs, iv, iuv, n, x1, y2, r, a, tbl);
			} else {
				this.fillVertices(vertices, uvs, iv, iuv, n, x0, y3, 0, 0, tbl);
			}
			this.fillIndicesEnd(indices, ia, ii, n);
			iv += n4;
			iuv += n4;
			ia += n2;
			ii += n6;

			// Center
			ia = 2;
			for (let i = 1, imax = 4 * n - 1; i < imax; i += 1, ia += 2) {
				indices[++ii] = 0;
				indices[++ii] = ia;
				indices[++ii] = ia + 2;
			}

			this._vertexBuffer.update();
			this._uvBuffer.update();
			this._indexBuffer.update();
		}
	}
}
