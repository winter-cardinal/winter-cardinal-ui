/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import type { EShapeTriangleRounded } from "./e-shape-triangle-rounded";
import { EShapeTriangleRoundedTriangulated } from "./e-shape-triangle-rounded-triangulated";

export class EShapeTriangleRoundedTriangulatedImpl implements EShapeTriangleRoundedTriangulated {
	protected _id: number;
	protected _parent: EShapeTriangleRounded;
	protected _width: number;
	protected _height: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
	protected _sizeX: number;
	protected _sizeY: number;
	protected _radius: number;
	protected _corner: EShapeCorner;
	protected _vertices: number[];
	protected _nvertices: number;
	protected _distances: number[];
	protected _lengths: number[];
	protected _clippings: number[];
	protected _uvs: number[];
	protected _indices: number[];
	protected _nindices: number;
	protected _boundary: EShapeBoundary;

	constructor(parent: EShapeTriangleRounded) {
		this._id = 0;
		this._parent = parent;
		this._width = 0;
		this._height = 0;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
		this._sizeX = 0;
		this._sizeY = 0;
		this._radius = 0;
		this._corner = EShapeCorner.NONE;
		this._vertices = [];
		this._nvertices = 0;
		this._distances = [];
		this._lengths = [];
		this._clippings = [];
		this._uvs = [];
		this._indices = [];
		this._nindices = 0;
		this._boundary = [0, 0, 0, 0];
	}

	get id(): number {
		this.triangulate();
		return this._id;
	}

	get vertices(): number[] {
		this.triangulate();
		return this._vertices;
	}

	get nvertices(): number {
		this.triangulate();
		return this._nvertices;
	}

	get distances(): number[] {
		this.triangulate();
		return this._distances;
	}

	get lengths(): number[] {
		this.triangulate();
		return this._lengths;
	}

	get clippings(): number[] {
		this.triangulate();
		return this._clippings;
	}

	get uvs(): number[] {
		this.triangulate();
		return this._uvs;
	}

	get indices(): number[] {
		this.triangulate();
		return this._indices;
	}

	get nindices(): number {
		this.triangulate();
		return this._nindices;
	}

	get boundary(): EShapeBoundary {
		this.triangulate();
		return this._boundary;
	}

	protected triangulate(): void {
		const parent = this._parent;
		const size = parent.size;
		const width = size.x;
		const height = size.y;
		const stroke = parent.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const radius = parent.radius;
		const corner = parent.corner;

		const s = strokeAlign * strokeWidth;
		const sizeX = width * 0.5 + (0 <= width ? +s : -s);
		const sizeY = height * 0.5 + (0 <= height ? +s : -s);
		if (
			this._id !== 0 &&
			this._width === width &&
			this._height === height &&
			this._strokeAlign === strokeAlign &&
			this._strokeWidth === strokeWidth &&
			this._sizeX === sizeX &&
			this._sizeY === sizeY &&
			this._radius === radius &&
			this._corner === corner
		) {
			return;
		}

		this._width = width;
		this._height = height;
		this._strokeAlign = strokeAlign;
		this._strokeWidth = strokeWidth;
		this._sizeX = sizeX;
		this._sizeY = sizeY;
		this._radius = radius;
		this._corner = corner;
		this.update(sizeX, sizeY, radius, corner);
	}

	protected update(sx: number, sy: number, radius: number, corner: EShapeCorner): void {
		const boundary = this._boundary;
		const ax = Math.abs(sx);
		const ay = Math.abs(sy);
		boundary[0] = -ax;
		boundary[1] = -ay;
		boundary[2] = +ax;
		boundary[3] = +ay;

		const n = EShapeDefaults.CIRCLE_SEGMENT_COUNT >> 2;
		const nv = 9 * n + 6;
		const ni = 3 * n + 6;
		this._nvertices = nv;
		this._nindices = ni;
		this._id += 1;
		if (ax <= 0 || ay <= 0) {
			this.pad(0, 0, nv, ni, 0);
			return;
		}

		const scale = 1.1;

		const az = 2 * ay;
		const b0 = Math.sqrt(ax * ax + az * az);
		const r0 = (ax * az) / (ax + b0);
		const r = radius * r0;
		const fs = (scale - 1) * r0;
		const rs = r + fs;
		const r0i = 1 / r0;
		const rr0 = r * r0i;
		const a0 = ax * rr0;
		const b1 = b0 - a0;
		const b2 = b0 - ax;
		const b3 = b2 * rr0;

		const b0i = 1 / b0;
		const b1b0 = b1 * b0i;
		const b3b0 = b3 * b0i;
		const b2b0 = b2 * b0i;

		const gx = Math.sign(sx);
		const x1 = -sx + gx * ax * (1 - b1b0);
		const x2 = -sx + gx * ax * rr0;
		const x3 = -sx + gx * ax * (1 - b3b0);
		const x4 = 0;
		const x6 = -x2;

		const xl = -sx + gx * ax * (1 - b2b0);

		const gy = Math.sign(sy);
		const y1 = -sy + gy * az * b3b0;
		const y2 = -sy + gy * (az - r0) * rr0;
		const y3 = -sy + gy * (az - r0);
		const y4 = -sy + gy * az * b1b0;
		const y5 = -sy + gy * (az - r);
		const y6 = +sy;

		const yc = -sy + gy * az * b2b0;

		const dlx = xl - x4;
		const dly = yc - y3;
		const nlx = dlx * r0i;
		const nly = dly * r0i;

		const sy6 = y6 + gy * fs;
		const sx1 = x1 + nlx * fs;
		const sx3 = x3 + nlx * fs;
		const sx5 = -sx3;
		const sx7 = -sx1;

		const sy1 = y1 + nly * fs;
		const sy4 = y4 + nly * fs;

		const fd = r0i;
		const fx = 1 / sx;
		const fy = 1 / sy;

		const ct = 0 < r && !!(corner & EShapeCorner.TOP);
		const cr = 0 < r && !!(corner & EShapeCorner.BOTTOM_RIGHT);
		const cl = 0 < r && !!(corner & EShapeCorner.BOTTOM_LEFT);

		// Top Fan
		let iv = 0;
		let ii = 0;
		let l = 0;
		if (ct) {
			l = this.writeFan(x4, y2, sx3, sy1, sx5, sy1, l, r, rs, fd, scale, fx, fy, n, iv, ii);
			iv += 3 * (n - 1);
			ii += 3 * (n - 1);
		}

		// Right Pentagon
		const lr = Math.abs((sx5 - sx7) * nly + (sy1 - sy4) * nlx);
		const lrc = Math.abs((sx5 - x4) * nly + (sy1 - y3) * nlx);
		const nlr = l + lr;
		const c0 = scale;
		const c1 = 1 - radius;
		this.writePenta(
			x4,
			y2,
			sx5,
			sy1,
			sx7,
			sy4,
			x6,
			y5,
			x4,
			y3,

			l,
			l,
			nlr,
			nlr,
			l + lrc,

			c1,
			c0,
			c0,
			c1,
			0,

			fd,

			fx,
			fy,

			iv,
			ii
		);
		iv += 5;
		ii += 9;
		l = nlr;

		// Right Fan
		if (cr) {
			l = this.writeFan(x6, y5, sx7, sy4, x6, sy6, l, r, rs, fd, scale, fx, fy, n, iv, ii);
			iv += 3 * (n - 1);
			ii += 3 * (n - 1);
		}

		// Bottom Pentagon
		const lb = Math.abs(x6 - x2);
		const lbc = Math.abs(x6 - x4);
		const nlb = l + lb;
		this.writePenta(
			x6,
			y5,
			x6,
			sy6,
			x2,
			sy6,
			x2,
			y5,
			x4,
			y3,

			l,
			l,
			nlb,
			nlb,
			l + lbc,

			c1,
			c0,
			c0,
			c1,
			0,

			fd,

			fx,
			fy,

			iv,
			ii
		);
		iv += 5;
		ii += 9;
		l = nlb;

		// Left Fan
		if (cl) {
			l = this.writeFan(x2, y5, x2, y6, x1, y4, l, r, rs, fd, scale, fx, fy, n, iv, ii);
			iv += 3 * (n - 1);
			ii += 3 * (n - 1);
		}

		// Left Pentagon
		const ll = lr;
		const llc = lr - lrc;
		const nll = l + ll;
		this.writePenta(
			sx3,
			sy1,
			x4,
			y2,
			x4,
			y3,
			x2,
			y5,
			sx1,
			sy4,

			nll,
			nll,
			l + llc,
			l,
			l,

			c0,
			c1,
			0,
			c1,
			c0,

			fd,

			fx,
			fy,

			iv,
			ii
		);
		iv += 5;
		ii += 9;

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writePenta(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number,
		x4: number,
		y4: number,
		length0: number,
		length1: number,
		length2: number,
		length3: number,
		length4: number,
		clipping0: number,
		clipping1: number,
		clipping2: number,
		clipping3: number,
		clipping4: number,
		distance: number,
		fx: number,
		fy: number,
		iv: number,
		ii: number
	): void {
		this.writeVertex(iv + 0, x0, y0, distance, length0, clipping0, fx, fy);
		this.writeVertex(iv + 1, x1, y1, distance, length1, clipping1, fx, fy);
		this.writeVertex(iv + 2, x2, y2, distance, length2, clipping2, fx, fy);
		this.writeVertex(iv + 3, x3, y3, distance, length3, clipping3, fx, fy);
		this.writeVertex(iv + 4, x4, y4, distance, length4, clipping4, fx, fy);
		const indices = this._indices;
		indices[ii + 0] = iv + 0;
		indices[ii + 1] = iv + 1;
		indices[ii + 2] = iv + 2;

		indices[ii + 3] = iv + 0;
		indices[ii + 4] = iv + 2;
		indices[ii + 5] = iv + 3;

		indices[ii + 6] = iv + 0;
		indices[ii + 7] = iv + 3;
		indices[ii + 8] = iv + 4;
	}

	protected writeFan(
		cx: number,
		cy: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		l0: number,
		r: number,
		rs: number,
		fd: number,
		scale: number,
		fx: number,
		fy: number,
		n: number,
		iv: number,
		ii: number
	): number {
		const dx0 = x0 - cx;
		const dy0 = y0 - cy;
		const dx1 = x1 - cx;
		const dy1 = y1 - cy;
		const t0 = Math.atan2(dy0, dx0);
		const t1 = Math.atan2(dy1, dx1);
		let dt = t1 - t0;
		if (Math.PI < dt) {
			dt -= 2 * Math.PI;
		} else if (dt < -Math.PI) {
			dt += 2 * Math.PI;
		}

		const m = n - 1;
		const da = dt / m;
		const dl = Math.abs(da) * r;
		// Rim vertices at radius rs sit dl / 2 * (rs / r) from the chord midpoint, so the length is exact at radius r.
		const dlm = 0.5 * dl * (rs / r - 1);
		const c0 = scale;
		const c1 = 1 - r * fd;
		const indices = this._indices;
		let l = l0;
		let xa = cx + rs * Math.cos(t0);
		let ya = cy + rs * Math.sin(t0);
		for (let i = 0, t = t0 + da; i < m; i += 1, t += da) {
			const xb = cx + rs * Math.cos(t);
			const yb = cy + rs * Math.sin(t);
			const nl = l + dl;
			this.writeVertex(iv + 0, xa, ya, fd, l - dlm, c0, fx, fy);
			this.writeVertex(iv + 1, xb, yb, fd, nl + dlm, c0, fx, fy);
			this.writeVertex(iv + 2, cx, cy, fd, l + 0.5 * dl, c1, fx, fy);
			indices[ii + 0] = iv + 2;
			indices[ii + 1] = iv + 0;
			indices[ii + 2] = iv + 1;
			iv += 3;
			ii += 3;
			l = nl;
			xa = xb;
			ya = yb;
		}
		return l;
	}

	protected writeVertex(
		vertex: number,
		x: number,
		y: number,
		distance: number,
		length: number,
		clipping: number,
		fx: number,
		fy: number
	): void {
		const vertex2 = vertex << 1;
		this._vertices[vertex2] = x;
		this._vertices[vertex2 + 1] = y;
		this._distances[vertex] = distance;
		this._lengths[vertex] = length;
		this._clippings[vertex] = clipping;
		this._uvs[vertex2] = 0.5 * (x * fx + 1);
		this._uvs[vertex2 + 1] = 0.5 * (y * fy + 1);
	}

	protected pad(iv: number, ii: number, nv: number, ni: number, distance: number): void {
		for (let i = iv; i < nv; ++i) {
			const vertex2 = i << 1;
			this._vertices[vertex2] = 0;
			this._vertices[vertex2 + 1] = 0;
			this._distances[i] = distance;
			this._lengths[i] = 0;
			this._clippings[i] = 0;
			this._uvs[vertex2] = 0.5;
			this._uvs[vertex2 + 1] = 0.5;
		}
		for (let i = ii; i < ni * 3; ++i) {
			this._indices[i] = 0;
		}
		this._vertices.length = nv * 2;
		this._distances.length = nv;
		this._lengths.length = nv;
		this._clippings.length = nv;
		this._uvs.length = nv * 2;
		this._indices.length = ni * 3;
	}
}
