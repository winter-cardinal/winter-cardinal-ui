/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer } from "pixi.js";
import { DBaseMeshGeometry, DBaseMeshGeometryTable } from "./d-base-mesh-geometry";
import { DBorderMask } from "./d-border-mask";
import { DCornerMask } from "./d-corner-mask";

export class DBaseBorderMeshGeometry extends DBaseMeshGeometry {
	protected _borderWidth: number;
	protected _borderMask: DBorderMask;

	constructor() {
		super(
			new Float32Array(32 * DBaseMeshGeometry.N),
			new Float32Array(32 * DBaseMeshGeometry.N),
			new Uint16Array(4 * 18 * DBaseMeshGeometry.N)
		);

		this._borderWidth = 0;
		this._borderMask = DBorderMask.NONE;
	}

	get borderWidth(): number {
		return this._borderWidth;
	}

	set borderWidth(borderWidth: number) {
		if (this._borderWidth !== borderWidth) {
			this._borderWidth = borderWidth;
			this._isDirty = true;
		}
	}

	get borderMask(): DBorderMask {
		return this._borderMask;
	}

	set borderMask(borderMask: DBorderMask) {
		if (this._borderMask !== borderMask) {
			this._borderMask = borderMask;
			this._isDirty = true;
		}
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
		borderWidth: number,
		table: DBaseMeshGeometryTable
	): void {
		const hw = 0.5 * borderWidth;
		const r1 = r - hw;
		const r2 = r + hw;
		const r0 = r1 - dr;
		const r3 = r2 + dr;
		const cos = table.cos;
		const sin = table.sin;
		if (r0 < 0) {
			const m = n >> 1;
			const c0 = cos[m];
			const s0 = sin[m];
			if (r1 < 0) {
				for (let i = 0; i < n; ++i) {
					const c = cos[i];
					const s = sin[i];
					vertices[++iv] = x + c0 * r0;
					vertices[++iv] = y + s0 * r0;
					vertices[++iv] = x + c0 * r1;
					vertices[++iv] = y + s0 * r1;
					vertices[++iv] = x + c * r2;
					vertices[++iv] = y + s * r2;
					vertices[++iv] = x + c * r3;
					vertices[++iv] = y + s * r3;
					uvs[++iuv] = 0.5 * (1 + c);
					uvs[++iuv] = 0.5 * (1 + s);
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5 * (1 + c);
					uvs[++iuv] = 0.5 * (1 + s);
				}
			} else {
				for (let i = 0; i < n; ++i) {
					const c = cos[i];
					const s = sin[i];
					vertices[++iv] = x + c0 * r0;
					vertices[++iv] = y + s0 * r0;
					vertices[++iv] = x + c * r1;
					vertices[++iv] = y + s * r1;
					vertices[++iv] = x + c * r2;
					vertices[++iv] = y + s * r2;
					vertices[++iv] = x + c * r3;
					vertices[++iv] = y + s * r3;
					uvs[++iuv] = 0.5 * (1 + c);
					uvs[++iuv] = 0.5 * (1 + s);
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5;
					uvs[++iuv] = 0.5 * (1 + c);
					uvs[++iuv] = 0.5 * (1 + s);
				}
			}
		} else {
			for (let i = 0; i < n; ++i) {
				const c = cos[i];
				const s = sin[i];
				vertices[++iv] = x + c * r0;
				vertices[++iv] = y + s * r0;
				vertices[++iv] = x + c * r1;
				vertices[++iv] = y + s * r1;
				vertices[++iv] = x + c * r2;
				vertices[++iv] = y + s * r2;
				vertices[++iv] = x + c * r3;
				vertices[++iv] = y + s * r3;
				uvs[++iuv] = 0.5 * (1 + c);
				uvs[++iuv] = 0.5 * (1 + s);
				uvs[++iuv] = 0.5;
				uvs[++iuv] = 0.5;
				uvs[++iuv] = 0.5;
				uvs[++iuv] = 0.5;
				uvs[++iuv] = 0.5 * (1 + c);
				uvs[++iuv] = 0.5 * (1 + s);
			}
		}
	}

	protected fillIndices(
		indices: Uint16Array,
		ia: number,
		ii: number,
		n: number,
		end: boolean,
		loop: boolean
	): void {
		for (let i = 0, imax = n - 1; i < imax; ++i) {
			indices[++ii] = ia + 0;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 4;

			indices[++ii] = ia + 4;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 5;
			ia += 1;

			indices[++ii] = ia + 0;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 4;

			indices[++ii] = ia + 4;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 5;
			ia += 1;

			indices[++ii] = ia + 0;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 4;

			indices[++ii] = ia + 4;
			indices[++ii] = ia + 1;
			indices[++ii] = ia + 5;
			ia += 2;
		}
		if (end) {
			if (loop) {
				indices[++ii] = ia + 0;
				indices[++ii] = ia + 1;
				indices[++ii] = 0;

				indices[++ii] = 0;
				indices[++ii] = ia + 1;
				indices[++ii] = 1;
				ia += 1;

				indices[++ii] = ia + 0;
				indices[++ii] = ia + 1;
				indices[++ii] = 1;

				indices[++ii] = 1;
				indices[++ii] = ia + 1;
				indices[++ii] = 2;
				ia += 1;

				indices[++ii] = ia + 0;
				indices[++ii] = ia + 1;
				indices[++ii] = 2;

				indices[++ii] = 2;
				indices[++ii] = ia + 1;
				indices[++ii] = 3;
				ia += 2;
			} else {
				indices[++ii] = ia + 0;
				indices[++ii] = ia + 1;
				indices[++ii] = ia + 4;

				indices[++ii] = ia + 4;
				indices[++ii] = ia + 1;
				indices[++ii] = ia + 5;
				ia += 1;

				indices[++ii] = ia + 0;
				indices[++ii] = ia + 1;
				indices[++ii] = ia + 4;

				indices[++ii] = ia + 4;
				indices[++ii] = ia + 1;
				indices[++ii] = ia + 5;
				ia += 1;

				indices[++ii] = ia + 0;
				indices[++ii] = ia + 1;
				indices[++ii] = ia + 4;

				indices[++ii] = ia + 4;
				indices[++ii] = ia + 1;
				indices[++ii] = ia + 5;
				ia += 2;
			}
		} else {
			indices[++ii] = ia;
			indices[++ii] = ia;
			indices[++ii] = ia;

			indices[++ii] = ia;
			indices[++ii] = ia;
			indices[++ii] = ia;
			ia += 1;

			indices[++ii] = ia;
			indices[++ii] = ia;
			indices[++ii] = ia;

			indices[++ii] = ia;
			indices[++ii] = ia;
			indices[++ii] = ia;
			ia += 1;

			indices[++ii] = ia;
			indices[++ii] = ia;
			indices[++ii] = ia;

			indices[++ii] = ia;
			indices[++ii] = ia;
			indices[++ii] = ia;
			ia += 2;
		}
	}

	update(renderer: Renderer): void {
		const resolution = renderer.resolution;
		if (this._isDirty || this._resolution !== resolution) {
			this._isDirty = false;
			this._resolution = resolution;

			const vrtcs = this._vertices;
			const uvs = this._uvs;
			const indices = this._indices;

			const w = this._width;
			const h = this._height;
			const bw = this._borderWidth;
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

			const borderMask = this._borderMask;
			const bt = !(borderMask & DBorderMask.TOP);
			const bb = !(borderMask & DBorderMask.BOTTOM);
			const bl = !(borderMask & DBorderMask.LEFT);
			const br = !(borderMask & DBorderMask.RIGHT);

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
			const n8 = n << 3;
			const n18 = 18 * n;

			const tables = this.getTables();
			const tlt = tables[0];
			const ttr = tables[1];
			const trb = tables[2];
			const tbl = tables[3];

			// left -> top
			if (ctl) {
				if (bl || bt) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x1, y1, r, a, bw, tlt);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x1, y1, r, 0, 0, tlt);
				}
			} else {
				if (bl || bt) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x0, y0, 0, 0, bw, tlt);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x0, y0, 0, 0, 0, tlt);
				}
			}
			this.fillIndices(indices, ia, ii, n, bt, false);
			iv += n8;
			iuv += n8;
			ia += n4;
			ii += n18;

			// top -> right
			if (ctr) {
				if (bt || br) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x2, y1, r, a, bw, ttr);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x2, y1, r, 0, 0, ttr);
				}
			} else {
				if (bt || br) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x3, y0, 0, 0, bw, ttr);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x3, y0, 0, 0, 0, ttr);
				}
			}
			this.fillIndices(indices, ia, ii, n, br, false);
			iv += n8;
			iuv += n8;
			ia += n4;
			ii += n18;

			// right -> bottom
			if (cbr) {
				if (br || bb) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x2, y2, r, a, bw, trb);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x2, y2, r, 0, 0, trb);
				}
			} else {
				if (br || bb) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x3, y3, 0, 0, bw, trb);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x3, y3, 0, 0, 0, trb);
				}
			}
			this.fillIndices(indices, ia, ii, n, bb, false);
			iv += n8;
			iuv += n8;
			ia += n4;
			ii += n18;

			// bottom -> left
			if (cbl) {
				if (bb || bl) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x1, y2, r, a, bw, tbl);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x1, y2, r, 0, 0, tbl);
				}
			} else {
				if (bb || bl) {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x0, y3, 0, 0, bw, tbl);
				} else {
					this.fillVertices(vrtcs, uvs, iv, iuv, n, x0, y3, 0, 0, 0, tbl);
				}
			}
			this.fillIndices(indices, ia, ii, n, bl, true);
			iv += n8;
			iuv += n8;
			ia += n4;
			ii += n18;

			this._vertexBuffer.update();
			this._uvBuffer.update();
			this._indexBuffer.update();
		}
	}
}
