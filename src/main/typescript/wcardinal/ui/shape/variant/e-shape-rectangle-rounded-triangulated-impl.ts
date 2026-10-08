/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import type { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";
import { EShapeRectangleRoundedTriangulated } from "./e-shape-rectangle-rounded-triangulated";

export class EShapeRectangleRoundedTriangulatedImpl implements EShapeRectangleRoundedTriangulated {
	protected _id: number;
	protected _parent: EShapeRectangleRounded;
	protected _width: number;
	protected _height: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
	protected _strokeSide: EShapeStrokeSide;
	protected _radius: number;
	protected _corner: EShapeCorner;
	protected _sizeX: number;
	protected _sizeY: number;
	protected _n: number;
	protected _vertices: number[];
	protected _nvertices: number;
	protected _distances: number[];
	protected _lengths: number[];
	protected _clippings: number[];
	protected _uvs: number[];
	protected _indices: number[];
	protected _nindices: number;
	protected _boundary: EShapeBoundary;

	constructor(parent: EShapeRectangleRounded) {
		this._id = 0;
		this._parent = parent;
		this._width = 0;
		this._height = 0;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
		this._strokeSide = EShapeStrokeSide.NONE;
		this._radius = 0;
		this._corner = EShapeCorner.NONE;
		this._sizeX = 0;
		this._sizeY = 0;
		this._n = EShapeDefaults.CIRCLE_SEGMENT_COUNT;
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
		const isNotInitialized = this._id === 0;

		const parent = this._parent;
		const size = parent.size;
		const width = size.x;
		const height = size.y;
		const isRectChanged = this._width !== width || this._height !== height;

		const stroke = parent.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeSide = stroke.side;
		const isStrokeChanged =
			this._strokeAlign !== strokeAlign ||
			this._strokeWidth !== strokeWidth ||
			this._strokeSide !== strokeSide;
		const radius = parent.radius;
		const corner = parent.corner;
		const isRadiusChanged = this._radius !== radius || this._corner !== corner;

		let isSizeChanged = false;
		let sizeX = this._sizeX;
		let sizeY = this._sizeY;
		if (isRectChanged || isStrokeChanged) {
			this._width = width;
			this._height = height;
			this._strokeAlign = strokeAlign;
			this._strokeWidth = strokeWidth;
			this._strokeSide = strokeSide;

			const s = strokeAlign * strokeWidth;
			sizeX = width * 0.5 + (0 <= width ? +s : -s);
			sizeY = height * 0.5 + (0 <= height ? +s : -s);
			isSizeChanged = this._sizeX !== sizeX || this._sizeY !== sizeY;
		}

		if (isNotInitialized || isSizeChanged || isStrokeChanged || isRadiusChanged) {
			this._sizeX = sizeX;
			this._sizeY = sizeY;
			this._radius = radius;
			this._corner = corner;
			this.update(sizeX, sizeY, radius, corner, 1.1);
		}
	}

	protected update(
		sizeX: number,
		sizeY: number,
		radius: number,
		corner: EShapeCorner,
		scale: number
	): void {
		// Boundary
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const boundary = this._boundary;
		boundary[0] = -ax;
		boundary[1] = -ay;
		boundary[2] = +ax;
		boundary[3] = +ay;

		// # of vertices and # of indices
		const n = this._n >> 2;
		const nv = 8 * n + 18;
		const ni = 4 * n + 10;
		this._nvertices = nv;
		this._nindices = ni;

		// ID
		this._id += 1;

		//
		if (sizeX === 0 || sizeY === 0) {
			this.pad(0, 0, nv, ni, 0);
		} else {
			const fx = 1 / sizeX;
			const fy = 1 / sizeY;
			switch (this._strokeSide) {
				case EShapeStrokeSide.NONE:
				case EShapeStrokeSide.ALL:
					if (ay <= ax) {
						this.updateAll0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateAll1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.TOP:
					this.updateTop(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					break;
				case EShapeStrokeSide.RIGHT:
					this.updateRight(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					break;
				case EShapeStrokeSide.BOTTOM:
					this.updateBottom(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					break;
				case EShapeStrokeSide.LEFT:
					this.updateLeft(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					break;
				case EShapeStrokeSide.TOP_OR_BOTTOM:
					this.updateTopBottom(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					break;
				case EShapeStrokeSide.LEFT_OR_RIGHT:
					this.updateLeftRight(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					break;
				case EShapeStrokeSide.TOP_OR_RIGHT:
					if (ay <= ax) {
						this.updateTopRight0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateTopRight1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.TOP_OR_LEFT:
					if (ay <= ax) {
						this.updateTopLeft0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateTopLeft1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.BOTTOM_OR_RIGHT:
					if (ay <= ax) {
						this.updateBottomRight0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateBottomRight1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.BOTTOM_OR_LEFT:
					if (ay <= ax) {
						this.updateBottomLeft0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateBottomLeft1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_TOP:
					if (ay <= ax) {
						this.updateNotTop0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateNotTop1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_RIGHT:
					if (ay <= ax) {
						this.updateNotRight0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateNotRight1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_BOTTOM:
					if (ay <= ax) {
						this.updateNotBottom0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateNotBottom1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_LEFT:
					if (ay <= ax) {
						this.updateNotLeft0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateNotLeft1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
			}
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
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.TOP
	 * * 4 * N + 4 <= nv
	 * * 4 * N - 2 <= ni
	 */
	protected updateTop(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = 2 * ay;
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * Math.min(ax, ay);

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const xl = ctl || cbl ? -ax + r : -ax;
		const xr = ctr || cbr ? +ax - r : +ax;
		const yt = -ay - fs;
		const yb = +ay;
		const lo = ctl ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writePoly4(iv, ii, 0, lo, xl, yt, xr, yt, xr, yb, xl, yb, fd, scale, fx, fy, ax, ay);
		iv += 4;
		ii += 6;

		if (ctr || cbr) {
			this.writeStripTop(+1, xr, ctr, cbr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (ctl || cbl) {
			this.writeStripTop(-1, xl, ctl, cbl, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeStripTop(
		sign: number,
		xi: number,
		ct: boolean,
		cb: boolean,
		lo: number,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		d: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		for (let i = 0; i < n; ++i) {
			const x = xi + sign * r * sin;
			const raise = r * (1 - cos);
			const ytop = ct ? -ay + raise : -ay - (scale - 1) * d;
			const ybottom = cb ? +ay - raise : +ay;
			const length = lo + x + ax;
			const ctop = Math.min(scale, (ytop + ay) * -fd + 1);
			const cbottom = Math.min(scale, (ybottom + ay) * -fd + 1);
			this.updateVertex(iv, x, ytop, fd, length, ctop, fx, fy);
			this.updateVertex(iv + 1, x, ybottom, fd, length, cbottom, fx, fy);
			if (0 < i) {
				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;
			}
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.RIGHT
	 * * 4 * N + 4 <= nv
	 * * 4 * N - 2 <= ni
	 */
	protected updateRight(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = 2 * ax;
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * Math.min(ax, ay);

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const yt = ctl || ctr ? -ay + r : -ay;
		const yb = cbl || cbr ? +ay - r : +ay;
		const xl = -ax;
		const xr = +ax + fs;
		const lo = ctr ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writePoly4(iv, ii, 1, lo, xl, yt, xr, yt, xr, yb, xl, yb, fd, scale, fx, fy, ax, ay);
		iv += 4;
		ii += 6;

		if (ctl || ctr) {
			this.writeStripRight(-1, yt, ctl, ctr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbl || cbr) {
			this.writeStripRight(+1, yb, cbl, cbr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeStripRight(
		sign: number,
		yi: number,
		cl: boolean,
		cr: boolean,
		lo: number,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		d: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		for (let i = 0; i < n; ++i) {
			const y = yi + sign * r * sin;
			const raise = r * (1 - cos);
			const xleft = cl ? -ax + raise : -ax;
			const xright = cr ? +ax - raise : +ax + (scale - 1) * d;
			const length = lo + 2 * ax + y + ay;
			const cleft = Math.min(scale, (xleft - ax) * fd + 1);
			const cright = Math.min(scale, (xright - ax) * fd + 1);
			this.updateVertex(iv, xleft, y, fd, length, cleft, fx, fy);
			this.updateVertex(iv + 1, xright, y, fd, length, cright, fx, fy);
			if (0 < i) {
				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;
			}
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.BOTTOM
	 * * 4 * N + 4 <= nv
	 * * 4 * N - 2 <= ni
	 */
	protected updateBottom(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const n = this._n >> 2;
		const r = radius * Math.min(ax, ay);
		const d = 2 * ay;
		const fd = 1 / d;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const xl = ctl || cbl ? -ax + r : -ax;
		const xr = ctr || cbr ? +ax - r : +ax;

		const yt = -ay;
		const yb = +ay + (scale - 1) * d;

		// Perimeter length of the bottom edge: lb - x
		const arc = 0.5 * Math.PI * r;
		const lb =
			2 * ax -
			(ctl ? r : 0) -
			(ctr ? r : 0) +
			(ctr ? arc : 0) +
			2 * ay -
			(ctr ? r : 0) -
			(cbr ? r : 0) +
			(cbr ? arc : 0) +
			(cbr ? ax - r : ax);

		let iv = 0;
		let ii = 0;
		this.writePoly4(
			iv,
			ii,
			2,
			lb - 3 * ax - 2 * ay,
			xl,
			yt,
			xr,
			yt,
			xr,
			yb,
			xl,
			yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 4;
		ii += 6;

		if (ctr || cbr) {
			this.writeStripBottom(+1, xr, ctr, cbr, lb, iv, ii, n, r, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (ctl || cbl) {
			this.writeStripBottom(-1, xl, ctl, cbl, lb, iv, ii, n, r, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes a vertical strip of a corner column (n lines, 2 vertices per line).
	 * Distance is constant and clipping depends only on y, so the stroke inner edge stays straight.
	 * `sign` is +1 for the right column and -1 for the left column.
	 * `xi` is X of the line at the column's inner edge.
	 */
	protected writeStripBottom(
		sign: number,
		xi: number,
		ct: boolean,
		cb: boolean,
		lb: number,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ay: number,
		scale: number,
		d: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		for (let i = 0; i < n; ++i) {
			const x = xi + sign * r * sin;
			const raise = r * (1 - cos);
			const ytop = -ay + (ct ? raise : 0);
			const ybottom = cb ? +ay - raise : +ay + (scale - 1) * d;
			const length = lb - x;
			const ctop = Math.min(scale, (ytop - ay) * fd + 1);
			const cbottom = Math.min(scale, (ybottom - ay) * fd + 1);
			this.updateVertex(iv, x, ytop, fd, length, ctop, fx, fy);
			this.updateVertex(iv + 1, x, ybottom, fd, length, cbottom, fx, fy);
			if (0 < i) {
				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;
			}
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.LEFT
	 * * 4 * N + 4 <= nv
	 * * 4 * N - 2 <= ni
	 */
	protected updateLeft(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = 2 * ax;
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * Math.min(ax, ay);

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const yt = ctl || ctr ? -ay + r : -ay;
		const yb = cbl || cbr ? +ay - r : +ay;
		const xl = -ax - fs;
		const xr = +ax;
		const lo = cbl ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writePoly4(iv, ii, 3, lo, xl, yt, xr, yt, xr, yb, xl, yb, fd, scale, fx, fy, ax, ay);
		iv += 4;
		ii += 6;

		if (ctl || ctr) {
			this.writeStripLeft(-1, yt, ctl, ctr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbl || cbr) {
			this.writeStripLeft(+1, yb, cbl, cbr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeStripLeft(
		sign: number,
		yi: number,
		cl: boolean,
		cr: boolean,
		lo: number,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		d: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		for (let i = 0; i < n; ++i) {
			const y = yi + sign * r * sin;
			const raise = r * (1 - cos);
			const xleft = cl ? -ax + raise : -ax - (scale - 1) * d;
			const xright = cr ? +ax - raise : +ax;
			const length = lo + 4 * ax + 3 * ay - y;
			const cleft = Math.min(scale, (xleft + ax) * -fd + 1);
			const cright = Math.min(scale, (xright + ax) * -fd + 1);
			this.updateVertex(iv, xleft, y, fd, length, cleft, fx, fy);
			this.updateVertex(iv + 1, xright, y, fd, length, cright, fx, fy);
			if (0 < i) {
				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;
			}
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.LEFT_OR_RIGHT
	 * * 4 * N + 4 <= nv
	 * * 4 * N + 0 <= ni
	 */
	protected updateLeftRight(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const fd = 1 / ax;
		const n = this._n >> 2;
		const r = radius * Math.min(ax, ay);

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const lol = cbl ? -r : 0;
		const lor = ctr ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writeSideLeftRight(-1, lol, ctl, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += 2 * n + 2;
		ii += 6 * n;
		this.writeSideLeftRight(+1, lor, ctr, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += 2 * n + 2;
		ii += 6 * n;

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes the left (`sx` = -1) or the right (`sx` = +1) half as a triangle fan of 2N + 2 vertices.
	 * Order: the top center (fan origin), the bottom center, the bottom arc (N), the top arc (N).
	 */
	protected writeSideLeftRight(
		sx: number,
		lo: number,
		ct: boolean,
		cb: boolean,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		const side = sx < 0 ? 3 : 1;
		const fs = (scale - 1) / fd;
		const xo = -ax - fs;
		const m = -sx;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);

		this.writeVertex(iv, 0, -ay, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv + 1, 0, +ay, side, lo, fd, scale, fx, fy, ax, ay);
		const ib = iv + 2;
		const it = ib + n;
		let cos = 1;
		let sin = 0;
		for (let i = 0; i < n; ++i) {
			// The bottom arc runs from the bottom tangent point to the left one, so its angle is pi / 2 - i * dangle.
			const xb = cb && i < n - 1 ? -ax + r - r * sin : xo;
			const yb = cb ? +ay - r + r * cos : +ay;
			this.writeVertex(ib + i, m * xb, yb, side, lo, fd, scale, fx, fy, ax, ay);
			const xt = ct && 0 < i ? -ax + r - r * cos : xo;
			const yt = ct ? -ay + r - r * sin : -ay;
			this.writeVertex(it + i, m * xt, yt, side, lo, fd, scale, fx, fy, ax, ay);
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}

		const indices = this._indices;
		for (let i = 1, imax = 2 * n + 1; i < imax; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + (sx < 0 ? i : i + 1);
			indices[ii++] = iv + (sx < 0 ? i + 1 : i);
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.TOP_OR_BOTTOM
	 * * 4 * N + 4 <= nv
	 * * 4 * N + 0 <= ni
	 */
	protected updateTopBottom(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const fd = 1 / ay;
		const n = this._n >> 2;
		const r = radius * Math.min(ax, ay);

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const lot = ctl ? -r : 0;
		const lob = cbr ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writeSideTopBottom(-1, lot, ctl, ctr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += 2 * n + 2;
		ii += 6 * n;
		this.writeSideTopBottom(+1, lob, cbl, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += 2 * n + 2;
		ii += 6 * n;

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeSideTopBottom(
		sy: number,
		lo: number,
		cl: boolean,
		cr: boolean,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		const side = sy < 0 ? 0 : 2;
		const fs = (scale - 1) / fd;
		const yo = -ay - fs;
		const m = -sy;
		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		this.writeVertex(iv, -ax, 0, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv + 1, +ax, 0, side, lo, fd, scale, fx, fy, ax, ay);
		const ir = iv + 2;
		const il = ir + n;
		for (let i = 0; i < n; ++i) {
			const xr = cr ? +ax - r + r * cos : +ax;
			const yr = cr && i < n - 1 ? -ay + r - r * sin : yo;
			const xl = cl ? -ax + r - r * sin : -ax;
			const yl = cl && 0 < i ? -ay + r - r * cos : yo;
			this.writeVertex(ir + i, xr, m * yr, side, lo, fd, scale, fx, fy, ax, ay);
			this.writeVertex(il + i, xl, m * yl, side, lo, fd, scale, fx, fy, ax, ay);
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
		for (let i = 1, imax = 2 * n + 1; i < imax; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + (sy < 0 ? i : i + 1);
			indices[ii++] = iv + (sy < 0 ? i + 1 : i);
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.TOP_OR_RIGHT
	 * * ay <= ax
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateTopRight0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const r = radius * ay;
		this.writeTopRight(fx, fy, ax, ay, scale, 2 * ay, r, corner, ax - 2 * ay, ay, 0, nv, ni);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.TOP_OR_RIGHT
	 * * ax < ay
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateTopRight1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const n = this._n >> 2;
		const r = radius * ax;
		this.writeTopRight(fx, fy, ax, ay, scale, 2 * ax, r, corner, -ax, 2 * ax - ay, n, nv, ni);
	}

	/**
	 * `(xred, yred)` is where the diagonal border meets the bottom edge or the left edge.
	 * `k` is the number of the bottom-left arc vertices on the right side of that point.
	 */
	protected writeTopRight(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		d: number,
		r: number,
		corner: EShapeCorner,
		xred: number,
		yred: number,
		k: number,
		nv: number,
		ni: number
	): void {
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const rs = r + fs;

		const cr = 0 < r;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);

		const dangle = (Math.PI * 0.5) / (n - 1);
		const xo = +ax + fs;
		const yo = -ay - fs;

		// The diagonal border between the top and the right sides is x + y = ax - ay.
		// It starts from the center of the top-right corner.
		const xc = ctr ? +ax - r : xo;
		const yc = ctr ? -ay + r : yo;

		// The red point is on the bottom-left arc if the border meets the bottom-left corner.
		if (cbl && xred < -ax + r && ay - r < yred) {
			const e = ax - ay;
			const z = Math.sqrt(0.5 * r * r - e * e);
			xred = -ax + r - z + e;
			yred = +ay - r + z + e;
			k = Math.ceil(Math.atan2(z - e, z + e) / dangle);
		}

		// Bottom-right polygon of N + k + 3 vertices as a triangle fan.
		// Order: the corner center (fan origin), the right end, the bottom-right arc (N), the bottom-left arc (k), the red point.
		let iv = 0;
		let ii = 0;
		this.writeVertex(iv++, xc, yc, 1, lor, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xo, yc, 1, lor, fd, scale, fx, fy, ax, ay);
		for (let i = 0; i < n; ++i) {
			const phi = i * dangle;
			const x = cbr && 0 < i ? ax - r + r * Math.cos(phi) : xo;
			const y = cbr ? +ay - r + r * Math.sin(phi) : +ay;
			this.writeVertex(iv++, x, y, 1, lor, fd, scale, fx, fy, ax, ay);
		}
		for (let i = 0; i < k; ++i) {
			const phi = i * dangle;
			const x = cbl ? -ax + r - r * Math.sin(phi) : -ax;
			const y = cbl ? +ay - r + r * Math.cos(phi) : +ay;
			this.writeVertex(iv++, x, y, 1, lor, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xred, yred, 1, lor, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(0, ii, iv);
		ii += 3 * (iv - 2);

		// Top-left polygon of M + N + 3 vertices as a triangle fan, where M = N - k.
		// Order: the corner center (fan origin), the red point, the bottom-left arc (M), the top-left arc (N), the top end.
		const iv0 = iv;
		this.writeVertex(iv++, xc, yc, 0, lot, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xred, yred, 0, lot, fd, scale, fx, fy, ax, ay);
		for (let i = k; i < n; ++i) {
			const phi = i * dangle;
			const x = cbl ? -ax + r - r * Math.sin(phi) : -ax;
			const y = cbl ? +ay - r + r * Math.cos(phi) : +ay;
			this.writeVertex(iv++, x, y, 0, lot, fd, scale, fx, fy, ax, ay);
		}
		for (let i = 0; i < n; ++i) {
			const phi = i * dangle;
			const x = ctl ? -ax + r - r * Math.cos(phi) : -ax;
			const y = ctl && i < n - 1 ? -ay + r - r * Math.sin(phi) : yo;
			this.writeVertex(iv++, x, y, 0, lot, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xc, yo, 0, lot, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(iv0, ii, iv - iv0);
		ii += 3 * (iv - iv0 - 2);

		if (ctr) {
			const lo = lot + 2 * ax - r;
			this.writeFan(+ax - r, -ay + r, 0, -1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.BOTTOM_OR_LEFT
	 * * ay <= ax
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateBottomLeft0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const r = radius * ay;
		this.writeBottomLeft(fx, fy, ax, ay, scale, 2 * ay, r, corner, 2 * ay - ax, -ay, 0, nv, ni);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.BOTTOM_OR_LEFT
	 * * ax < ay
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateBottomLeft1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const n = this._n >> 2;
		const r = radius * ax;
		this.writeBottomLeft(fx, fy, ax, ay, scale, 2 * ax, r, corner, ax, ay - 2 * ax, n, nv, ni);
	}

	/**
	 * `(xred, yred)` is where the diagonal border meets the top edge or the right edge.
	 * `k` is the number of the top-right arc vertices on the left side of that point.
	 */
	protected writeBottomLeft(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		d: number,
		r: number,
		corner: EShapeCorner,
		xred: number,
		yred: number,
		k: number,
		nv: number,
		ni: number
	): void {
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const rs = r + fs;

		const cr = 0 < r;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		const dangle = (Math.PI * 0.5) / (n - 1);
		const xo = -ax - fs;
		const yo = +ay + fs;

		// The diagonal border between the left and the bottom sides is x + y = ay - ax.
		// It starts from the center of the bottom-left corner.
		const xc = cbl ? -ax + r : xo;
		const yc = cbl ? +ay - r : yo;

		// The red point is on the top-right arc if the border meets the top-right corner.
		if (ctr && ax - r < xred && yred < -ay + r) {
			const e = ax - ay;
			const z = Math.sqrt(0.5 * r * r - e * e);
			xred = ax - r + z - e;
			yred = -ay + r - z - e;
			k = Math.ceil(Math.atan2(z - e, z + e) / dangle);
		}

		// Top-left polygon of N + k + 3 vertices as a triangle fan.
		// Order: the corner center (fan origin), the left end, the top-left arc (N), the top-right arc (k), the red point.
		let iv = 0;
		let ii = 0;
		this.writeVertex(iv++, xc, yc, 3, lol, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xo, yc, 3, lol, fd, scale, fx, fy, ax, ay);
		for (let i = 0; i < n; ++i) {
			const phi = i * dangle;
			const x = ctl && 0 < i ? -ax + r - r * Math.cos(phi) : xo;
			const y = ctl ? -ay + r - r * Math.sin(phi) : -ay;
			this.writeVertex(iv++, x, y, 3, lol, fd, scale, fx, fy, ax, ay);
		}
		for (let i = 0; i < k; ++i) {
			const phi = i * dangle;
			const x = ctr ? ax - r + r * Math.sin(phi) : ax;
			const y = ctr ? -ay + r - r * Math.cos(phi) : -ay;
			this.writeVertex(iv++, x, y, 3, lol, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xred, yred, 3, lol, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(0, ii, iv);
		ii += 3 * (iv - 2);

		// Bottom-right polygon of M + N + 3 vertices as a triangle fan, where M = N - k.
		// Order: the corner center (fan origin), the red point, the top-right arc (M), the bottom-right arc (N), the bottom end.
		const iv0 = iv;
		this.writeVertex(iv++, xc, yc, 2, lob, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xred, yred, 2, lob, fd, scale, fx, fy, ax, ay);
		for (let i = k; i < n; ++i) {
			const phi = i * dangle;
			const x = ctr ? ax - r + r * Math.sin(phi) : ax;
			const y = ctr ? -ay + r - r * Math.cos(phi) : -ay;
			this.writeVertex(iv++, x, y, 2, lob, fd, scale, fx, fy, ax, ay);
		}
		for (let i = 0; i < n; ++i) {
			const phi = i * dangle;
			const x = cbr ? ax - r + r * Math.cos(phi) : ax;
			const y = cbr && i < n - 1 ? +ay - r + r * Math.sin(phi) : yo;
			this.writeVertex(iv++, x, y, 2, lob, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xc, yo, 2, lob, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(iv0, ii, iv - iv0);
		ii += 3 * (iv - iv0 - 2);

		if (cbl) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(-ax + r, +ay - r, 0, 1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeFanIndices(iv: number, ii: number, count: number): void {
		const indices = this._indices;
		for (let i = 1, imax = count - 1; i < imax; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + i;
			indices[ii++] = iv + i + 1;
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.TOP_OR_LEFT
	 * * ay <= ax
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateTopLeft0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const r = radius * ay;
		this.writeTopLeft(fx, fy, ax, ay, scale, 2 * ay, r, corner, 2 * ay - ax, ay, 0, nv, ni);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.TOP_OR_LEFT
	 * * ax < ay
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateTopLeft1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const n = this._n >> 2;
		const r = radius * ax;
		this.writeTopLeft(fx, fy, ax, ay, scale, 2 * ax, r, corner, ax, 2 * ax - ay, n, nv, ni);
	}

	/**
	 * `(xred, yred)` is where the diagonal border meets the bottom edge or the right edge.
	 * `k` is the number of the bottom-right arc vertices before that point, counted from the bottom.
	 */
	protected writeTopLeft(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		d: number,
		r: number,
		corner: EShapeCorner,
		xred: number,
		yred: number,
		k: number,
		nv: number,
		ni: number
	): void {
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const rs = r + fs;

		const cr = 0 < r;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const lc = 0.5 * Math.PI * r - 2 * r;
		const lot = ctl ? -r : 0;
		const lol = lot + (ctr ? lc : 0) + (cbr ? lc : 0) + (cbl ? lc : 0);
		// The top side continues the left side beyond the top-left corner.
		const lop = lol + (ctl ? lc : 0) + 4 * ax + 4 * ay;

		const dangle = (Math.PI * 0.5) / (n - 1);
		const xo = -ax - fs;
		const yo = -ay - fs;

		// The diagonal border between the top and the left sides is -x + y = ax - ay.
		// It starts from the center of the top-left corner.
		const xc = ctl ? -ax + r : xo;
		const yc = ctl ? -ay + r : yo;

		// The red point is on the bottom-right arc if the border meets the bottom-right corner.
		if (cbr && ax - r < xred && ay - r < yred) {
			const e = ax - ay;
			const z = Math.sqrt(0.5 * r * r - e * e);
			xred = ax - r + z - e;
			yred = +ay - r + z + e;
			k = Math.ceil(Math.atan2(z - e, z + e) / dangle);
		}

		// Bottom-left polygon of N + k + 3 vertices as a triangle fan.
		// Order: the corner center (fan origin), the red point, the bottom-right arc (k), the bottom-left arc (N), the left end.
		let iv = 0;
		let ii = 0;
		this.writeVertex(iv++, xc, yc, 3, lol, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xred, yred, 3, lol, fd, scale, fx, fy, ax, ay);
		for (let i = k - 1; 0 <= i; --i) {
			const phi = i * dangle;
			const x = cbr ? ax - r + r * Math.sin(phi) : ax;
			const y = cbr ? +ay - r + r * Math.cos(phi) : +ay;
			this.writeVertex(iv++, x, y, 3, lol, fd, scale, fx, fy, ax, ay);
		}
		for (let i = n - 1; 0 <= i; --i) {
			const phi = i * dangle;
			const x = cbl && 0 < i ? -ax + r - r * Math.cos(phi) : xo;
			const y = cbl ? +ay - r + r * Math.sin(phi) : +ay;
			this.writeVertex(iv++, x, y, 3, lol, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xo, yc, 3, lol, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(0, ii, iv);
		ii += 3 * (iv - 2);

		// Top-right polygon of M + N + 3 vertices as a triangle fan, where M = N - k.
		// Order: the corner center (fan origin), the top end, the top-right arc (N), the bottom-right arc (M), the red point.
		const iv0 = iv;
		this.writeVertex(iv++, xc, yc, 0, lop, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xc, yo, 0, lop, fd, scale, fx, fy, ax, ay);
		for (let i = n - 1; 0 <= i; --i) {
			const phi = i * dangle;
			const x = ctr ? ax - r + r * Math.cos(phi) : ax;
			const y = ctr && i < n - 1 ? -ay + r - r * Math.sin(phi) : yo;
			this.writeVertex(iv++, x, y, 0, lop, fd, scale, fx, fy, ax, ay);
		}
		for (let i = n - 1; k <= i; --i) {
			const phi = i * dangle;
			const x = cbr ? ax - r + r * Math.sin(phi) : ax;
			const y = cbr ? +ay - r + r * Math.cos(phi) : +ay;
			this.writeVertex(iv++, x, y, 0, lop, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xred, yred, 0, lop, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(iv0, ii, iv - iv0);
		ii += 3 * (iv - iv0 - 2);

		if (ctl) {
			const lo = lol + 4 * ax + 4 * ay - r;
			this.writeFan(-ax + r, -ay + r, -1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.BOTTOM_OR_RIGHT
	 * * ay <= ax
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateBottomRight0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const r = radius * ay;
		this.writeBottomRight(
			fx,
			fy,
			ax,
			ay,
			scale,
			2 * ay,
			r,
			corner,
			ax - 2 * ay,
			-ay,
			0,
			nv,
			ni
		);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.BOTTOM_OR_RIGHT
	 * * ax < ay
	 * * 5 * N + 5 <= nv
	 * * 4 * N + 1 <= ni
	 */
	protected updateBottomRight1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const n = this._n >> 2;
		const r = radius * ax;
		this.writeBottomRight(
			fx,
			fy,
			ax,
			ay,
			scale,
			2 * ax,
			r,
			corner,
			-ax,
			ay - 2 * ax,
			n,
			nv,
			ni
		);
	}

	/**
	 * `(xred, yred)` is where the diagonal border meets the top edge or the left edge.
	 * `k` is the number of the top-left arc vertices on the right side of that point.
	 */
	protected writeBottomRight(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		d: number,
		r: number,
		corner: EShapeCorner,
		xred: number,
		yred: number,
		k: number,
		nv: number,
		ni: number
	): void {
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const rs = r + fs;

		const cr = 0 < r;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);

		const dangle = (Math.PI * 0.5) / (n - 1);
		const xo = +ax + fs;
		const yo = +ay + fs;

		// The diagonal border between the right and the bottom sides is -x + y = ay - ax.
		// It starts from the center of the bottom-right corner.
		const xc = cbr ? +ax - r : xo;
		const yc = cbr ? +ay - r : yo;

		// The red point is on the top-left arc if the border meets the top-left corner.
		if (ctl && xred < -ax + r && yred < -ay + r) {
			const e = ax - ay;
			const z = Math.sqrt(0.5 * r * r - e * e);
			xred = -ax + r - z + e;
			yred = -ay + r - z - e;
			k = Math.ceil(Math.atan2(z - e, z + e) / dangle);
		}

		// Top-right polygon of N + k + 3 vertices as a triangle fan.
		// Order: the corner center (fan origin), the red point, the top-left arc (k), the top-right arc (N), the right end.
		let iv = 0;
		let ii = 0;
		this.writeVertex(iv++, xc, yc, 1, lor, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xred, yred, 1, lor, fd, scale, fx, fy, ax, ay);
		for (let i = k - 1; 0 <= i; --i) {
			const phi = i * dangle;
			const x = ctl ? -ax + r - r * Math.sin(phi) : -ax;
			const y = ctl ? -ay + r - r * Math.cos(phi) : -ay;
			this.writeVertex(iv++, x, y, 1, lor, fd, scale, fx, fy, ax, ay);
		}
		for (let i = 0; i < n; ++i) {
			const phi = i * dangle;
			const x = ctr && i < n - 1 ? ax - r + r * Math.sin(phi) : xo;
			const y = ctr ? -ay + r - r * Math.cos(phi) : -ay;
			this.writeVertex(iv++, x, y, 1, lor, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xo, yc, 1, lor, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(0, ii, iv);
		ii += 3 * (iv - 2);

		// Bottom-left polygon of M + N + 3 vertices as a triangle fan, where M = N - k.
		// Order: the corner center (fan origin), the bottom end, the bottom-left arc (N), the top-left arc (M), the red point.
		const iv0 = iv;
		this.writeVertex(iv++, xc, yc, 2, lob, fd, scale, fx, fy, ax, ay);
		this.writeVertex(iv++, xc, yo, 2, lob, fd, scale, fx, fy, ax, ay);
		for (let i = 0; i < n; ++i) {
			const phi = i * dangle;
			const x = cbl ? -ax + r - r * Math.sin(phi) : -ax;
			const y = cbl && 0 < i ? +ay - r + r * Math.cos(phi) : yo;
			this.writeVertex(iv++, x, y, 2, lob, fd, scale, fx, fy, ax, ay);
		}
		for (let i = n - 1; k <= i; --i) {
			const phi = i * dangle;
			const x = ctl ? -ax + r - r * Math.sin(phi) : -ax;
			const y = ctl ? -ay + r - r * Math.cos(phi) : -ay;
			this.writeVertex(iv++, x, y, 2, lob, fd, scale, fx, fy, ax, ay);
		}
		this.writeVertex(iv++, xred, yred, 2, lob, fd, scale, fx, fy, ax, ay);
		this.writeFanIndices(iv0, ii, iv - iv0);
		ii += 3 * (iv - iv0 - 2);

		if (cbr) {
			const lo = lor + 2 * ax + 2 * ay - r;
			this.writeFan(+ax - r, +ay - r, 1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_TOP
	 * * ay <= ax
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotTop0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		// The deepest point of the stroke areas: the top edge if 2 * ay <= ax, otherwise the red point
		const d = Math.min(2 * ay, ax);
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ay;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		// The diagonal borders x + y = ay - ax and -x + y = ay - ax meet the top edge or each other (red point)
		const xred = Math.min(2 * ay - ax, 0);
		const yred = ay - ax - xred;
		const xl = cbl ? -ax + r : -ax - fs;
		const xr = cbr ? +ax - r : +ax + fs;
		const ydl = cbl ? +ay - r : +ay + fs;
		const ydr = cbr ? +ay - r : +ay + fs;
		const yo = +ay + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotTop(-1, lol, ctl, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotTop(+1, lor, ctr, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			2,
			lob,
			xred,
			yred,
			-xred,
			yred,
			xr,
			ydr,
			xr,
			yo,
			xl,
			yo,
			xl,
			ydl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;

		if (cbl) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(-ax + r, +ay - r, 0, 1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbr) {
			const lo = lor + 2 * ax + 2 * ay - r;
			this.writeFan(+ax - r, +ay - r, 1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_TOP
	 * * ax < ay
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotTop1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = ax;
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ax;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		const xred = Math.min(2 * ay - ax, 0);
		const yred = ay - ax - xred;
		const xl = cbl ? -ax + r : -ax - fs;
		const xr = cbr ? +ax - r : +ax + fs;
		const ydl = cbl ? +ay - r : +ay + fs;
		const ydr = cbr ? +ay - r : +ay + fs;
		const yo = +ay + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotTop(-1, lol, ctl, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotTop(+1, lor, ctr, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			2,
			lob,
			xred,
			yred,
			-xred,
			yred,
			xr,
			ydr,
			xr,
			yo,
			xl,
			yo,
			xl,
			ydl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;

		if (cbl) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(-ax + r, +ay - r, 0, 1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbr) {
			const lo = lor + 2 * ax + 2 * ay - r;
			this.writeFan(+ax - r, +ay - r, 1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes the left (`sx` = -1) or the right (`sx` = +1) polygon of N + 4 vertices as a triangle fan.
	 * Order: the red point (fan origin), the diagonal end, the outer bottom, the top arc (N), the blue point (0, -ay).
	 * If 2 * ay <= ax, the red point is on the top edge and the last triangle degenerates.
	 */
	protected writeSideNotTop(
		sx: number,
		lo: number,
		ct: boolean,
		cb: boolean,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		const side = sx < 0 ? 3 : 1;
		const fs = (scale - 1) / fd;
		const xo = -ax - fs;
		const xd = cb ? -ax + r : xo;
		const yd = cb ? +ay - r : +ay + fs;
		const m = -sx;
		const xred = Math.min(2 * ay - ax, 0);

		let k = iv;
		this.writeVertex(k++, m * xred, ay - ax - xred, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, m * xd, yd, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, m * xo, yd, side, lo, fd, scale, fx, fy, ax, ay);
		if (ct) {
			const dangle = (Math.PI * 0.5) / (n - 1);
			for (let i = 0; i < n; ++i) {
				const angle = i * dangle;
				const x = i === 0 ? xo : -ax + r - r * Math.cos(angle);
				const y = -ay + r - r * Math.sin(angle);
				this.writeVertex(k++, m * x, y, side, lo, fd, scale, fx, fy, ax, ay);
			}
		} else {
			for (let i = 0; i < n; ++i) {
				this.writeVertex(k++, m * xo, -ay, side, lo, fd, scale, fx, fy, ax, ay);
			}
		}
		this.writeVertex(k++, 0, -ay, side, lo, fd, scale, fx, fy, ax, ay);

		const indices = this._indices;
		for (let i = 1, imax = k - iv - 1; i < imax; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + (sx < 0 ? i : i + 1);
			indices[ii++] = iv + (sx < 0 ? i + 1 : i);
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_BOTTOM
	 * * ay <= ax
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotBottom0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		// The deepest point of the stroke areas: the bottom edge if 2 * ay <= ax, otherwise the red point
		const d = Math.min(2 * ay, ax);
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ay;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		const xred = Math.min(2 * ay - ax, 0);
		const yred = ay - ax - xred;
		const xl = ctl ? -ax + r : -ax - fs;
		const xr = ctr ? +ax - r : +ax + fs;
		const ydl = ctl ? +ay - r : +ay + fs;
		const ydr = ctr ? +ay - r : +ay + fs;
		const yo = +ay + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotBottom(-1, lol, ctl, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotBottom(+1, lor, ctr, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			0,
			lot,
			xred,
			-yred,
			-xred,
			-yred,
			xr,
			-ydr,
			xr,
			-yo,
			xl,
			-yo,
			xl,
			-ydl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		const indices = this._indices;
		for (let i = 0; i < 4; ++i) {
			const index = ii + 3 * i + 1;
			const value = indices[index];
			indices[index] = indices[index + 1];
			indices[index + 1] = value;
		}
		iv += 6;
		ii += 12;

		if (ctl) {
			const lo = lol + 4 * ax + 4 * ay - r;
			this.writeFan(-ax + r, -ay + r, -1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctr) {
			const lo = lot + 2 * ax - r;
			this.writeFan(+ax - r, -ay + r, 0, -1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_BOTTOM
	 * * ax < ay
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotBottom1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = ax;
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ax;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		const xred = Math.min(2 * ay - ax, 0);
		const yred = ay - ax - xred;
		const xl = ctl ? -ax + r : -ax - fs;
		const xr = ctr ? +ax - r : +ax + fs;
		const ydl = ctl ? +ay - r : +ay + fs;
		const ydr = ctr ? +ay - r : +ay + fs;
		const yo = +ay + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotBottom(-1, lol, ctl, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotBottom(+1, lor, ctr, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			0,
			lot,
			xred,
			-yred,
			-xred,
			-yred,
			xr,
			-ydr,
			xr,
			-yo,
			xl,
			-yo,
			xl,
			-ydl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		const indices = this._indices;
		for (let i = 0; i < 4; ++i) {
			const index = ii + 3 * i + 1;
			const value = indices[index];
			indices[index] = indices[index + 1];
			indices[index + 1] = value;
		}
		iv += 6;
		ii += 12;

		if (ctl) {
			const lo = lol + 4 * ax + 4 * ay - r;
			this.writeFan(-ax + r, -ay + r, -1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctr) {
			const lo = lot + 2 * ax - r;
			this.writeFan(+ax - r, -ay + r, 0, -1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeSideNotBottom(
		sx: number,
		lo: number,
		ct: boolean,
		cb: boolean,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		const side = sx < 0 ? 3 : 1;
		const fs = (scale - 1) / fd;
		const xo = -ax - fs;
		const xd = ct ? -ax + r : xo;
		const yd = ct ? +ay - r : +ay + fs;
		const m = -sx;
		const xred = Math.min(2 * ay - ax, 0);
		const yred = ay - ax - xred;

		let k = iv;
		this.writeVertex(k++, m * xred, -yred, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, m * xd, -yd, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, m * xo, -yd, side, lo, fd, scale, fx, fy, ax, ay);
		if (cb) {
			const dangle = (Math.PI * 0.5) / (n - 1);
			for (let i = 0; i < n; ++i) {
				const angle = i * dangle;
				const x = i === 0 ? xo : -ax + r - r * Math.cos(angle);
				const y = +ay - r + r * Math.sin(angle);
				this.writeVertex(k++, m * x, y, side, lo, fd, scale, fx, fy, ax, ay);
			}
		} else {
			for (let i = 0; i < n; ++i) {
				this.writeVertex(k++, m * xo, +ay, side, lo, fd, scale, fx, fy, ax, ay);
			}
		}
		this.writeVertex(k++, 0, +ay, side, lo, fd, scale, fx, fy, ax, ay);

		const indices = this._indices;
		for (let i = 1, imax = k - iv - 1; i < imax; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + (sx < 0 ? i : i + 1);
			indices[ii++] = iv + (sx < 0 ? i + 1 : i);
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_LEFT
	 * * ay <= ax
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotLeft0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = ay;
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ay;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);

		const xred = Math.min(2 * ax - ay, 0);
		const yred = ax - ay - xred;
		const xl = ctr ? -ay + r : -ay - fs;
		const xr = cbr ? +ay - r : +ay + fs;
		const ydl = ctr ? +ax - r : +ax + fs;
		const ydr = cbr ? +ax - r : +ax + fs;
		const yo = +ax + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotLeft(-1, lot, ctl, ctr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotLeft(+1, lob, cbl, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			1,
			lor,
			yred,
			xred,
			yred,
			-xred,
			ydr,
			xr,
			yo,
			xr,
			yo,
			xl,
			ydl,
			xl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		const indices = this._indices;
		for (let i = 0; i < 4; ++i) {
			const index = ii + 3 * i + 1;
			const value = indices[index];
			indices[index] = indices[index + 1];
			indices[index + 1] = value;
		}
		iv += 6;
		ii += 12;

		if (ctr) {
			const lo = lot + 2 * ax - r;
			this.writeFan(+ax - r, -ay + r, 0, -1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbr) {
			const lo = lor + 2 * ax + 2 * ay - r;
			this.writeFan(+ax - r, +ay - r, 1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_LEFT
	 * * ax < ay
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotLeft1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		// The deepest point of the stroke areas: the left edge if 2 * ax <= ay, otherwise the red point
		const d = Math.min(2 * ax, ay);
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ax;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);

		const xred = Math.min(2 * ax - ay, 0);
		const yred = ax - ay - xred;
		const xl = ctr ? -ay + r : -ay - fs;
		const xr = cbr ? +ay - r : +ay + fs;
		const ydl = ctr ? +ax - r : +ax + fs;
		const ydr = cbr ? +ax - r : +ax + fs;
		const yo = +ax + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotLeft(-1, lot, ctl, ctr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotLeft(+1, lob, cbl, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			1,
			lor,
			yred,
			xred,
			yred,
			-xred,
			ydr,
			xr,
			yo,
			xr,
			yo,
			xl,
			ydl,
			xl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		const indices = this._indices;
		for (let i = 0; i < 4; ++i) {
			const index = ii + 3 * i + 1;
			const value = indices[index];
			indices[index] = indices[index + 1];
			indices[index + 1] = value;
		}
		iv += 6;
		ii += 12;

		if (ctr) {
			const lo = lot + 2 * ax - r;
			this.writeFan(+ax - r, -ay + r, 0, -1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbr) {
			const lo = lor + 2 * ax + 2 * ay - r;
			this.writeFan(+ax - r, +ay - r, 1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeSideNotLeft(
		sy: number,
		lo: number,
		ct: boolean,
		cb: boolean,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		const side = sy < 0 ? 0 : 2;
		const fs = (scale - 1) / fd;
		const xo = -ay - fs;
		const xd = cb ? -ay + r : xo;
		const yd = cb ? +ax - r : +ax + fs;
		const m = -sy;
		const xred = Math.min(2 * ax - ay, 0);
		const yred = ax - ay - xred;

		let k = iv;
		this.writeVertex(k++, yred, m * xred, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, yd, m * xd, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, yd, m * xo, side, lo, fd, scale, fx, fy, ax, ay);
		if (ct) {
			const dangle = (Math.PI * 0.5) / (n - 1);
			for (let i = 0; i < n; ++i) {
				const angle = i * dangle;
				const x = i === 0 ? xo : -ay + r - r * Math.cos(angle);
				const y = -ax + r - r * Math.sin(angle);
				this.writeVertex(k++, y, m * x, side, lo, fd, scale, fx, fy, ax, ay);
			}
		} else {
			for (let i = 0; i < n; ++i) {
				this.writeVertex(k++, -ax, m * xo, side, lo, fd, scale, fx, fy, ax, ay);
			}
		}
		this.writeVertex(k++, -ax, 0, side, lo, fd, scale, fx, fy, ax, ay);

		const indices = this._indices;
		for (let i = 1, imax = k - iv - 1; i < imax; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + (sy < 0 ? i + 1 : i);
			indices[ii++] = iv + (sy < 0 ? i : i + 1);
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_RIGHT
	 * * ay <= ax
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotRight0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = ay;
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ay;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		const xred = Math.min(2 * ax - ay, 0);
		const yred = ax - ay - xred;
		const xl = ctl ? -ay + r : -ay - fs;
		const xr = cbl ? +ay - r : +ay + fs;
		const ydl = ctl ? +ax - r : +ax + fs;
		const ydr = cbl ? +ax - r : +ax + fs;
		const yo = +ax + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotRight(-1, lot, ctr, ctl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotRight(+1, lob, cbr, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			3,
			lol,
			-yred,
			xred,
			-yred,
			-xred,
			-ydr,
			xr,
			-yo,
			xr,
			-yo,
			xl,
			-ydl,
			xl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;

		if (ctl) {
			const lo = lol + 4 * ax + 4 * ay - r;
			this.writeFan(-ax + r, -ay + r, -1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbl) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(-ax + r, +ay - r, 0, 1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_RIGHT
	 * * ax < ay
	 * * 6 * N + 12 <= nv
	 * * 4 * N + 6 <= ni
	 */
	protected updateNotRight1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		// The deepest point of the stroke areas: the right edge if 2 * ax <= ay, otherwise the red point
		const d = Math.min(2 * ax, ay);
		const fd = 1 / d;
		const n = this._n >> 2;
		const fs = (scale - 1) * d;
		const r = radius * ax;
		const rs = r + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		const xred = Math.min(2 * ax - ay, 0);
		const yred = ax - ay - xred;
		const xl = ctl ? -ay + r : -ay - fs;
		const xr = cbl ? +ay - r : +ay + fs;
		const ydl = ctl ? +ax - r : +ax + fs;
		const ydr = cbl ? +ax - r : +ax + fs;
		const yo = +ax + fs;

		let iv = 0;
		let ii = 0;
		this.writeSideNotRight(-1, lot, ctr, ctl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeSideNotRight(+1, lob, cbr, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writePoly6(
			iv,
			ii,
			3,
			lol,
			-yred,
			xred,
			-yred,
			-xred,
			-ydr,
			xr,
			-yo,
			xr,
			-yo,
			xl,
			-ydl,
			xl,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;

		if (ctl) {
			const lo = lol + 4 * ax + 4 * ay - r;
			this.writeFan(-ax + r, -ay + r, -1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbl) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(-ax + r, +ay - r, 0, 1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeSideNotRight(
		sy: number,
		lo: number,
		ct: boolean,
		cb: boolean,
		iv: number,
		ii: number,
		n: number,
		r: number,
		ax: number,
		ay: number,
		scale: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		const side = sy < 0 ? 0 : 2;
		const fs = (scale - 1) / fd;
		const xo = -ay - fs;
		const xd = cb ? -ay + r : xo;
		const yd = cb ? +ax - r : +ax + fs;
		const m = -sy;
		const xred = Math.min(2 * ax - ay, 0);
		const yred = ax - ay - xred;

		let k = iv;
		this.writeVertex(k++, -yred, m * xred, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, -yd, m * xd, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(k++, -yd, m * xo, side, lo, fd, scale, fx, fy, ax, ay);
		if (ct) {
			const dangle = (Math.PI * 0.5) / (n - 1);
			for (let i = 0; i < n; ++i) {
				const angle = i * dangle;
				const x = i === 0 ? xo : -ay + r - r * Math.cos(angle);
				const y = -ax + r - r * Math.sin(angle);
				this.writeVertex(k++, -y, m * x, side, lo, fd, scale, fx, fy, ax, ay);
			}
		} else {
			for (let i = 0; i < n; ++i) {
				this.writeVertex(k++, +ax, m * xo, side, lo, fd, scale, fx, fy, ax, ay);
			}
		}
		this.writeVertex(k++, +ax, 0, side, lo, fd, scale, fx, fy, ax, ay);

		const indices = this._indices;
		for (let i = 1, imax = k - iv - 1; i < imax; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + (sy < 0 ? i : i + 1);
			indices[ii++] = iv + (sy < 0 ? i + 1 : i);
		}
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.ALL or NONE
	 * * ay <= ax
	 * * 8 * N + 18 <= nv
	 * * 4 * N + 10 <= ni
	 */
	protected updateAll0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = ay;
		const fd = 1 / d;
		const n = this._n >> 2;
		const s = scale;
		const fs = (scale - 1) * d;

		const r = radius * ay;

		const x0 = -ax - fs;
		const x1 = -ax + r;
		const x2 = -ax + d;
		const x3 = +ax - d;
		const x4 = +ax - r;
		const x5 = +ax + fs;

		const y0 = -ay - fs;
		const y1 = -ay + r;
		const y4 = +ay - r;
		const y5 = +ay + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		let iv = 0;
		let ii = 0;
		this.writePoly6(
			iv,
			ii,
			0,
			lot,
			ctl ? x1 : x0,
			ctl ? y1 : y0,
			x1,
			y0,
			x4,
			y0,
			ctr ? x4 : x5,
			ctr ? y1 : y0,
			x3,
			0,
			x2,
			0,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;
		this.writePoly5(
			iv,
			ii,
			1,
			lor,
			ctr ? x4 : x5,
			ctr ? y1 : y0,
			x5,
			y1,
			x5,
			y4,
			cbr ? x4 : x5,
			cbr ? y4 : y5,
			x3,
			0,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly6(
			iv,
			ii,
			2,
			lob,
			cbr ? x4 : x5,
			cbr ? y4 : y5,
			x4,
			y5,
			x1,
			y5,
			cbl ? x1 : x0,
			cbl ? y4 : y5,
			x2,
			0,
			x3,
			0,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;
		this.writePoly5(
			iv,
			ii,
			3,
			lol,
			cbl ? x1 : x0,
			cbl ? y4 : y5,
			x0,
			y4,
			x0,
			y1,
			ctl ? x1 : x0,
			ctl ? y1 : y0,
			x2,
			0,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		const dx = 2 * (ax - r);
		const dy = 2 * (ay - r);
		const rs = r + fs;
		let l = ctl ? dx : dx + r;
		if (ctr) {
			this.writeFan(x4, y1, 0, -1, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (cbr) {
			this.writeFan(x4, y4, 1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
			l += arc + dx;
		} else {
			l += r + r + dx;
		}
		if (cbl) {
			this.writeFan(x1, y4, 0, 1, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (ctl) {
			this.writeFan(x1, y1, -1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.ALL or NONE
	 * * ax < ay
	 * * 8 * N + 18 <= nv
	 * * 4 * N + 10 <= ni
	 */
	protected updateAll1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		radius: number,
		corner: EShapeCorner,
		nv: number,
		ni: number
	): void {
		const d = ax;
		const fd = 1 / d;
		const n = this._n >> 2;
		const s = scale;
		const fs = (scale - 1) * d;

		const r = radius * ax;
		const rs = r + fs;
		const ol = -ax - fs;
		const or = +ax + fs;
		const x1 = -ax + r;
		const x4 = +ax - r;

		const y0 = -ay - fs;
		const y1 = -ay + r;
		const y2 = -ay + d;
		const y3 = +ay - d;
		const y4 = +ay - r;
		const y5 = +ay + fs;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (cbr ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			0,
			lot,
			ctl ? x1 : ol,
			ctl ? y1 : y0,
			x1,
			y0,
			x4,
			y0,
			ctr ? x4 : or,
			ctr ? y1 : y0,
			0,
			y2,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly6(
			iv,
			ii,
			1,
			lor,
			ctr ? x4 : or,
			ctr ? y1 : y0,
			or,
			y1,
			or,
			y4,
			cbr ? x4 : or,
			cbr ? y4 : y5,
			0,
			y3,
			0,
			y2,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;
		this.writePoly5(
			iv,
			ii,
			2,
			lob,
			cbr ? x4 : or,
			cbr ? y4 : y5,
			x4,
			y5,
			x1,
			y5,
			cbl ? x1 : ol,
			cbl ? y4 : y5,
			0,
			y3,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly6(
			iv,
			ii,
			3,
			lol,
			cbl ? x1 : ol,
			cbl ? y4 : y5,
			ol,
			y4,
			ol,
			y1,
			ctl ? x1 : ol,
			ctl ? y1 : y0,
			0,
			y2,
			0,
			y3,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 6;
		ii += 12;

		const dx = 2 * (ax - r);
		const dy = 2 * (ay - r);
		let l = ctl ? dx : dx + r;
		if (ctr) {
			this.writeFan(x4, y1, 0, -1, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 1 + 2 * (n - 1);
			ii += 3 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (cbr) {
			this.writeFan(x4, y4, 1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 1 + 2 * (n - 1);
			ii += 3 * (n - 1);
			l += arc + dx;
		} else {
			l += r + r + dx;
		}
		if (cbl) {
			this.writeFan(x1, y4, 0, 1, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 1 + 2 * (n - 1);
			ii += 3 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (ctl) {
			this.writeFan(x1, y1, -1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy);
			iv += 1 + 2 * (n - 1);
			ii += 3 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeVertex(
		vertex: number,
		x: number,
		y: number,
		side: number,
		lo: number,
		fd: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number
	): void {
		switch (side) {
			case 0:
				this.updateVertexTop(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 1:
				this.updateVertexRight(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 2:
				this.updateVertexBottom(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 3:
				this.updateVertexLeft(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			default:
				this.updateVertex(vertex, x, y, fd, 0, 0, fx, fy);
				break;
		}
	}

	protected writePoly4(
		vertex: number,
		index: number,
		side: number,
		lo: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number,
		fd: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number
	): void {
		const index0 = vertex++;
		const index1 = vertex++;
		const index2 = vertex++;
		const index3 = vertex++;
		this.writeVertex(index0, x0, y0, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index1, x1, y1, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index2, x2, y2, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index3, x3, y3, side, lo, fd, scale, fx, fy, ax, ay);
		const indices = this._indices;
		indices[index++] = index0;
		indices[index++] = index1;
		indices[index++] = index2;

		indices[index++] = index0;
		indices[index++] = index2;
		indices[index++] = index3;
	}

	protected writePoly5(
		vertex: number,
		index: number,
		side: number,
		lo: number,
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
		fd: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number
	): void {
		const index0 = vertex++;
		const index1 = vertex++;
		const index2 = vertex++;
		const index3 = vertex++;
		const index4 = vertex++;
		this.writeVertex(index0, x0, y0, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index1, x1, y1, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index2, x2, y2, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index3, x3, y3, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index4, x4, y4, side, lo, fd, scale, fx, fy, ax, ay);
		const indices = this._indices;
		indices[index++] = index0;
		indices[index++] = index1;
		indices[index++] = index2;

		indices[index++] = index0;
		indices[index++] = index2;
		indices[index++] = index3;

		indices[index++] = index0;
		indices[index++] = index3;
		indices[index++] = index4;
	}

	protected writePoly6(
		vertex: number,
		index: number,
		side: number,
		lo: number,
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
		x5: number,
		y5: number,
		fd: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number
	): void {
		const index0 = vertex++;
		const index1 = vertex++;
		const index2 = vertex++;
		const index3 = vertex++;
		const index4 = vertex++;
		const index5 = vertex++;
		this.writeVertex(index0, x0, y0, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index1, x1, y1, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index2, x2, y2, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index3, x3, y3, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index4, x4, y4, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index5, x5, y5, side, lo, fd, scale, fx, fy, ax, ay);
		const indices = this._indices;
		indices[index++] = index0;
		indices[index++] = index1;
		indices[index++] = index2;

		indices[index++] = index0;
		indices[index++] = index2;
		indices[index++] = index3;

		indices[index++] = index0;
		indices[index++] = index3;
		indices[index++] = index4;

		indices[index++] = index0;
		indices[index++] = index4;
		indices[index++] = index5;
	}

	protected writeFan(
		cx: number,
		cy: number,
		cos0: number,
		sin0: number,
		lo: number,
		iv: number,
		ii: number,
		n: number,
		r: number,
		rs: number,
		fd: number,
		scale: number,
		fx: number,
		fy: number
	): void {
		const dangle = (Math.PI * 0.5) / (n - 1);
		const c = Math.cos(dangle);
		const s = Math.sin(dangle);
		const dl = 0.5 * r * dangle;
		let dx = rs * cos0;
		let dy = rs * sin0;
		let iv0 = iv++;
		let l = lo;
		this.updateVertex(iv0, cx + dx, cy + dy, fd, lo, scale, fx, fy);
		const indices = this._indices;
		const cc = 1 - r * fd;
		for (let i = 0; i < n - 1; ++i) {
			const iv1 = iv++;
			l += dl;
			this.updateVertex(iv1, cx, cy, fd, l, cc, fx, fy);

			const iv2 = iv++;
			l += dl;
			const ndx = c * dx - s * dy;
			const ndy = s * dx + c * dy;
			this.updateVertex(iv2, cx + ndx, cy + ndy, fd, l, scale, fx, fy);
			dx = ndx;
			dy = ndy;

			indices[ii++] = iv1;
			indices[ii++] = iv0;
			indices[ii++] = iv2;
			iv0 = iv2;
		}
	}

	protected updateVertexTop(
		vertex: number,
		x: number,
		y: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		lengthOffset: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + x + ax,
			Math.min(scale, (y + ay) * -fdistance + 1),
			fx,
			fy
		);
	}

	protected updateVertexRight(
		vertex: number,
		x: number,
		y: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		lengthOffset: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 2 * ax + y + ay,
			Math.min(scale, (x - ax) * fdistance + 1),
			fx,
			fy
		);
	}

	protected updateVertexBottom(
		vertex: number,
		x: number,
		y: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		lengthOffset: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 3 * ax + 2 * ay - x,
			Math.min(scale, (y - ay) * fdistance + 1),
			fx,
			fy
		);
	}

	protected updateVertexLeft(
		vertex: number,
		x: number,
		y: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		lengthOffset: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 4 * ax + 3 * ay - y,
			Math.min(scale, (x + ax) * -fdistance + 1),
			fx,
			fy
		);
	}

	protected updateVertex(
		iv: number,
		x: number,
		y: number,
		distance: number,
		length: number,
		clipping: number,
		fx: number,
		fy: number
	): void {
		const iv2 = iv << 1;
		this._vertices[iv2] = x;
		this._vertices[iv2 + 1] = y;
		this._distances[iv] = distance;
		this._lengths[iv] = length;
		this._clippings[iv] = clipping;
		this._uvs[iv2] = 0.5 * (x * fx + 1);
		this._uvs[iv2 + 1] = 0.5 * (y * fy + 1);
	}
}
