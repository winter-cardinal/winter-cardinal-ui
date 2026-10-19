/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeDefaults } from "../e-shape-defaults";
import type { EShapeCircle } from "./e-shape-circle";
import { EShapeCircleTriangulated } from "./e-shape-circle-triangulated";

export class EShapeCircleTriangulatedImpl implements EShapeCircleTriangulated {
	protected _id: number;
	protected _parent: EShapeCircle;
	protected _width: number;
	protected _height: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
	protected _sizeX: number;
	protected _sizeY: number;
	protected _n: number;
	protected _vertices: number[];
	protected _nvertices: number;
	protected _distances: number[];
	protected _lengths: number[];
	protected _lengthShifts: number[];
	protected _clippings: number[];
	protected _uvs: number[];
	protected _indices: number[];
	protected _nindices: number;
	protected _boundary: EShapeBoundary;

	constructor(parent: EShapeCircle) {
		this._id = 0;
		this._parent = parent;
		this._width = 0;
		this._height = 0;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
		this._sizeX = 0;
		this._sizeY = 0;
		this._n = EShapeDefaults.CIRCLE_SEGMENT_COUNT;
		this._vertices = [];
		this._nvertices = 0;
		this._distances = [];
		this._lengths = [];
		this._lengthShifts = [];
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
		const isNotInitialized = this._id === 0;

		const parent = this._parent;
		const size = parent.size;
		const width = size.x;
		const height = size.y;
		const isRectChanged = this._width !== width || this._height !== height;

		const stroke = parent.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const isStrokeChanged =
			this._strokeAlign !== strokeAlign || this._strokeWidth !== strokeWidth;

		let isSizeChanged = false;
		let sizeX = this._sizeX;
		let sizeY = this._sizeY;
		if (isRectChanged || isStrokeChanged) {
			this._width = width;
			this._height = height;
			this._strokeAlign = strokeAlign;
			this._strokeWidth = strokeWidth;

			const s = strokeAlign * strokeWidth;
			sizeX = width * 0.5 + (0 <= width ? +s : -s);
			sizeY = height * 0.5 + (0 <= height ? +s : -s);
			isSizeChanged = this._sizeX !== sizeX || this._sizeY !== sizeY;
		}

		if (isNotInitialized || isSizeChanged) {
			this._sizeX = sizeX;
			this._sizeY = sizeY;
			this.update(sizeX, sizeY, 1.1, this._n);
		}
	}

	protected update(sizeX: number, sizeY: number, scale: number, n: number): void {
		// Boundary
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const boundary = this._boundary;
		boundary[0] = -ax;
		boundary[1] = -ay;
		boundary[2] = +ax;
		boundary[3] = +ay;

		// # of vertices and # of indices
		const nv = 4 * n - 4;
		const ni = 2 * n - 4;
		this._nvertices = nv;
		this._nindices = ni;

		// ID
		this._id += 1;

		//
		if (sizeX === 0 || sizeY === 0) {
			this.pad(0, 0, nv, ni, 0);
		} else if (ax === ay) {
			this.update0(sizeX, sizeY, scale, n, nv, ni);
		} else if (ay < ax) {
			this.update1(sizeX, sizeY, scale, n, nv, ni);
		} else {
			this.update2(sizeX, sizeY, scale, n, nv, ni);
		}
	}

	/**
	 * Fills the unused tail with degenerated triangles and trims the arrays
	 * so that the buffers always hold exactly `nv` vertices and `ni` triangles.
	 */
	protected pad(iv: number, ii: number, nv: number, ni: number, fd: number): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		for (let i = iv; i < nv; ++i) {
			const i2 = i << 1;
			vertices[i2] = 0;
			vertices[i2 + 1] = 0;
			distances[i] = fd;
			lengths[i] = 0;
			clippings[i] = 0;
			uvs[i2] = 0.5;
			uvs[i2 + 1] = 0.5;
		}
		for (let i = ii, imax = ni * 3; i < imax; ++i) {
			indices[i] = 0;
		}

		const nv2 = nv << 1;
		vertices.length = nv2;
		distances.length = nv;
		lengths.length = nv;
		clippings.length = nv;
		uvs.length = nv2;
		indices.length = ni * 3;
	}

	/**
	 * Precondition: sizeX !== 0 && sizeY !== 0 & abs(sizeX) === abs(sizeY)
	 */
	protected update0(
		sizeX: number,
		sizeY: number,
		scale: number,
		n: number,
		nv: number,
		ni: number
	): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		const dangle = (2 * Math.PI) / n;
		const c = Math.cos(dangle);
		const s = Math.sin(dangle);

		// Edge length and apothem of the unscaled polygon
		const ex = -s * sizeX;
		const ey = (c - 1) * sizeY;
		const dl = Math.sqrt(ex * ex + ey * ey);
		const mx = 0.5 * ex;
		const my = 0.5 * (c + 1) * sizeY;
		const fdistance = 1 / Math.sqrt(mx * mx + my * my);
		// Half edge length at clipping = scale
		const hl = 0.5 * scale * dl;

		// Each triangle owns its vertices so that the lengths are exact at clipping = 1 on both sides.
		let u0 = 0;
		let v0 = scale;
		let iv = 0;
		let ii = 0;
		for (let i = 0; i < n; ++i) {
			const u1 = c * u0 - s * v0;
			const v1 = s * u0 + c * v0;
			const lm = (i + 0.5) * dl;
			const iv2 = iv << 1;

			vertices[iv2 + 0] = u0 * sizeX;
			vertices[iv2 + 1] = v0 * sizeY;
			vertices[iv2 + 2] = u1 * sizeX;
			vertices[iv2 + 3] = v1 * sizeY;
			vertices[iv2 + 4] = 0;
			vertices[iv2 + 5] = 0;
			distances[iv + 0] = fdistance;
			distances[iv + 1] = fdistance;
			distances[iv + 2] = fdistance;
			clippings[iv + 0] = scale;
			clippings[iv + 1] = scale;
			clippings[iv + 2] = 0;
			lengths[iv + 0] = lm - hl;
			lengths[iv + 1] = lm + hl;
			lengths[iv + 2] = lm;
			uvs[iv2 + 0] = 0.5 * (u0 + 1);
			uvs[iv2 + 1] = 0.5 * (v0 + 1);
			uvs[iv2 + 2] = 0.5 * (u1 + 1);
			uvs[iv2 + 3] = 0.5 * (v1 + 1);
			uvs[iv2 + 4] = 0.5;
			uvs[iv2 + 5] = 0.5;
			indices[ii + 0] = iv + 0;
			indices[ii + 1] = iv + 1;
			indices[ii + 2] = iv + 2;

			u0 = u1;
			v0 = v1;
			iv += 3;
			ii += 3;
		}

		// Degenerate triangles keep the buffer sizes consistent with elongated circles.
		this.pad(iv, ii, nv, ni, fdistance);
	}

	/**
	 * Precondition: sizeX !== 0 && sizeY !== 0 && abs(sizeY) < abs(sizeX)
	 */
	protected update1(
		sizeX: number,
		sizeY: number,
		scale: number,
		n: number,
		nv: number,
		ni: number
	): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		const dangle = (2 * Math.PI) / n;
		const c = Math.cos(dangle);
		const s = Math.sin(dangle);
		const fx = 1 / sizeX;
		const fy = 1 / sizeY;
		const fxy = sizeX * fy;
		const fyx = sizeY * fx;

		const ileft = n >> 2;
		const iright = ileft * 3;
		const ppx = sizeX * s;
		const ppy = sizeY * c;
		let px = 0;
		let py = sizeY;
		let nx = -sizeX * s;
		let ny = sizeY * c;
		let nnx = nx * c - ny * fxy * s;
		let nny = nx * fyx * s + ny * c;
		let sx = this.toSkeletonX(ppx, ppy, px, py, nx, ny);

		let iv = 0;
		let ii = 0;
		let l = 0;
		let maxDistance = 0;
		for (let i = 0; i < n; ++i) {
			const inext = (i + 1) % n;
			let nsx: number;
			// At the leftmost and rightmost vertices, reuse the adjacent skeleton point.
			if (i === ileft || inext === ileft || i === iright || inext === iright) {
				nsx = sx;
			} else {
				nsx = this.toSkeletonX(px, py, nx, ny, nnx, nny);
			}
			const dx = nx - px;
			const dy = ny - py;
			const dl = Math.sqrt(dx * dx + dy * dy);
			const fl = 1 / dl;
			const nl = l + dl;

			const nd = Math.abs(-dx * py - dy * (nsx - px)) * fl;
			const md = sx === nsx ? nd : Math.abs(-dx * py - dy * (sx - px)) * fl;
			maxDistance = Math.max(maxDistance, nd, md);

			// Each edge owns its vertices so that the lengths are exact at clipping = 1 on both sides.
			const iva = iv++;
			const ivb = iv++;
			const ivn = iv++;
			const ls0 = ((px - sx) * dx + py * dy) * fl;
			const ls1 = ((nx - nsx) * dx + ny * dy) * fl;
			const ls2 = ((nsx - px) * dx - py * dy) * fl;
			this.writeVertex(iva, px, py, fx, fy, sx, l, -1 - md, ls0);
			this.writeVertex(ivb, nx, ny, fx, fy, nsx, nl, -1 - nd, ls1);
			this.writeVertex(ivn, nsx, 0, fx, fy, 0, l + ls2, nd, 0);
			indices[ii++] = iva;
			indices[ii++] = ivb;
			indices[ii++] = ivn;

			if (sx !== nsx) {
				const ivm = iv++;
				const ls3 = ((sx - px) * dx - py * dy) * fl;
				this.writeVertex(ivm, sx, 0, fx, fy, 0, l + ls3, md, 0);
				indices[ii++] = iva;
				indices[ii++] = ivn;
				indices[ii++] = ivm;
			}

			l = nl;
			px = nx;
			py = ny;
			nx = nnx;
			ny = nny;
			nnx = c * nx - s * ny * fxy;
			nny = s * nx * fyx + c * ny;
			sx = nsx;
		}

		let fdistance = 0;
		if (0 < maxDistance) {
			fdistance = 1 / maxDistance;
		}
		const shift = (scale - 1) * maxDistance;
		const lengthShifts = this._lengthShifts;
		for (let i = 0; i < iv; ++i) {
			const clipping = clippings[i];
			if (0 <= clipping) {
				clippings[i] = 1 - clipping * fdistance;
			} else {
				const distance = -1 - clipping;
				if (0 < distance) {
					const i2 = i << 1;
					const factor = shift / distance;
					const x = vertices[i2] + (vertices[i2] - distances[i]) * factor;
					const y = vertices[i2 + 1] * (1 + factor);
					lengths[i] += factor * lengthShifts[i];
					vertices[i2] = x;
					vertices[i2 + 1] = y;
					uvs[i2] = 0.5 * (x / sizeX + 1);
					uvs[i2 + 1] = 0.5 * (y / sizeY + 1);
				}
				clippings[i] = scale;
			}
			distances[i] = fdistance;
		}

		// The skeleton points of adjacent vertices may coincide on a nearly circular ellipse.
		this.pad(iv, ii, nv, ni, fdistance);
	}

	protected toSkeletonX(
		ppx: number,
		ppy: number,
		px: number,
		py: number,
		pnx: number,
		pny: number
	): number {
		const pdx = ppx - px;
		const pdy = ppy - py;
		const ndx = pnx - px;
		const ndy = pny - py;
		const fp = 1 / Math.sqrt(pdx * pdx + pdy * pdy);
		const fn = 1 / Math.sqrt(ndx * ndx + ndy * ndy);
		const bx = pdx * fp + ndx * fn;
		const by = pdy * fp + ndy * fn;
		return px - (py * bx) / by;
	}

	/**
	 * Precondition: sizeX !== 0 && sizeY !== 0 && abs(sizeX) < abs(sizeY)
	 */
	protected update2(
		sizeX: number,
		sizeY: number,
		scale: number,
		n: number,
		nv: number,
		ni: number
	): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		const dangle = (2 * Math.PI) / n;
		const c = Math.cos(dangle);
		const s = Math.sin(dangle);
		const fx = 1 / sizeX;
		const fy = 1 / sizeY;
		const fxy = sizeX * fy;
		const fyx = sizeY * fx;

		const itop = 0;
		const ibottom = n >> 1;
		const ppx = sizeX * s;
		const ppy = sizeY * c;
		const pppx = 2 * sizeX * s * c;
		const pppy = sizeY * (c * c - s * s);
		let px = 0;
		let py = sizeY;
		let nx = -sizeX * s;
		let ny = sizeY * c;
		let nnx = c * nx - s * ny * fxy;
		let nny = s * nx * fyx + c * ny;
		let sy = this.toSkeletonY(pppx, pppy, ppx, ppy, px, py);

		let iv = 0;
		let ii = 0;
		let l = 0;
		let maxDistance = 0;
		for (let i = 0; i < n; ++i) {
			const inext = (i + 1) % n;
			let nsy: number;
			// At the topmost and bottommost vertices, reuse the adjacent skeleton point.
			if (i === itop || inext === itop || i === ibottom || inext === ibottom) {
				nsy = sy;
			} else {
				nsy = this.toSkeletonY(px, py, nx, ny, nnx, nny);
			}
			const dx = nx - px;
			const dy = ny - py;
			const dl = Math.sqrt(dx * dx + dy * dy);
			const fl = 1 / dl;
			const nl = l + dl;

			const nd = Math.abs(dx * (nsy - py) + dy * px) * fl;
			const md = sy === nsy ? nd : Math.abs(dx * (sy - py) + dy * px) * fl;
			maxDistance = Math.max(maxDistance, nd, md);

			// Each edge owns its vertices so that the lengths are exact at clipping = 1 on both sides.
			const iva = iv++;
			const ivb = iv++;
			const ivn = iv++;

			const ls0 = (px * dx + (py - sy) * dy) * fl;
			const ls1 = (nx * dx + (ny - nsy) * dy) * fl;
			const ls2 = (-px * dx + (nsy - py) * dy) * fl;
			this.writeVertex(iva, px, py, fx, fy, sy, l, -1 - md, ls0);
			this.writeVertex(ivb, nx, ny, fx, fy, nsy, nl, -1 - nd, ls1);
			this.writeVertex(ivn, 0, nsy, fx, fy, 0, l + ls2, nd, 0);
			indices[ii++] = iva;
			indices[ii++] = ivb;
			indices[ii++] = ivn;

			if (sy !== nsy) {
				const ivm = iv++;
				const ls3 = (-px * dx + (sy - py) * dy) * fl;
				this.writeVertex(ivm, 0, sy, fx, fy, 0, l + ls3, md, 0);
				indices[ii++] = iva;
				indices[ii++] = ivn;
				indices[ii++] = ivm;
			}

			l = nl;
			px = nx;
			py = ny;
			nx = nnx;
			ny = nny;
			nnx = c * nx - s * ny * fxy;
			nny = s * nx * fyx + c * ny;
			sy = nsy;
		}

		let fdistance = 0;
		if (0 < maxDistance) {
			fdistance = 1 / maxDistance;
		}
		const shift = (scale - 1) * maxDistance;
		const lengthShifts = this._lengthShifts;
		for (let i = 0; i < iv; ++i) {
			const clipping = clippings[i];
			if (0 <= clipping) {
				clippings[i] = 1 - clipping * fdistance;
			} else {
				const distance = -1 - clipping;
				if (0 < distance) {
					const i2 = i << 1;
					const factor = shift / distance;
					const x = vertices[i2] * (1 + factor);
					const y = vertices[i2 + 1] + (vertices[i2 + 1] - distances[i]) * factor;
					lengths[i] += factor * lengthShifts[i];
					vertices[i2] = x;
					vertices[i2 + 1] = y;
					uvs[i2] = 0.5 * (x / sizeX + 1);
					uvs[i2 + 1] = 0.5 * (y / sizeY + 1);
				}
				clippings[i] = scale;
			}
			distances[i] = fdistance;
		}

		// The skeleton points of adjacent vertices may coincide on a nearly circular ellipse.
		this.pad(iv, ii, nv, ni, fdistance);
	}

	protected toSkeletonY(
		ppx: number,
		ppy: number,
		px: number,
		py: number,
		pnx: number,
		pny: number
	): number {
		const pdx = ppx - px;
		const pdy = ppy - py;
		const ndx = pnx - px;
		const ndy = pny - py;
		const fp = 1 / Math.sqrt(pdx * pdx + pdy * pdy);
		const fn = 1 / Math.sqrt(ndx * ndx + ndy * ndy);
		const bx = pdx * fp + ndx * fn;
		const by = pdy * fp + ndy * fn;
		return py - (px * by) / bx;
	}

	protected writeVertex(
		iv: number,
		x: number,
		y: number,
		fx: number,
		fy: number,
		distance: number,
		length: number,
		clipping: number,
		lengthShift: number
	): void {
		const iv2 = iv << 1;
		this._vertices[iv2] = x;
		this._vertices[iv2 + 1] = y;
		this._distances[iv] = distance;
		this._lengths[iv] = length;
		this._clippings[iv] = clipping;
		this._lengthShifts[iv] = lengthShift;
		this._uvs[iv2] = 0.5 * (x * fx + 1);
		this._uvs[iv2 + 1] = 0.5 * (y * fy + 1);
	}
}
