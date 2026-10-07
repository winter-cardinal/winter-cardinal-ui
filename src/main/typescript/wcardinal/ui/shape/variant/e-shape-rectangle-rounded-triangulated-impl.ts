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
	protected _strokeWidths: number[];
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
		this._strokeWidths = [];
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

	get strokeWidths(): number[] {
		this.triangulate();
		return this._strokeWidths;
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
		const nv = 22 + 4 * (2 * n - 1);
		const ni = Math.max(14 + 4 * (n - 1), 10 + 8 * (n - 1));
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
			switch (this._parent.stroke.side) {
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
					if (ax <= ay) {
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
					if (ax <= ay) {
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
		const strokeWidths = this._strokeWidths;
		const uvs = this._uvs;
		const indices = this._indices;

		for (let i = iv; i < nv; ++i) {
			const i2 = i << 1;
			vertices[i2] = 0;
			vertices[i2 + 1] = 0;
			distances[i] = fd;
			lengths[i] = 0;
			clippings[i] = 0;
			strokeWidths[i] = this._strokeWidth;
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
		strokeWidths.length = nv;
		uvs.length = nv2;
		indices.length = ni * 3;
	}

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
			this.writeTopStrip(+1, xr, ctr, cbr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (ctl || cbl) {
			this.writeTopStrip(-1, xl, ctl, cbl, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

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
			this.writeRightStrip(-1, yt, ctl, ctr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbl || cbr) {
			this.writeRightStrip(+1, yb, cbl, cbr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

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
			this.writeBottomStrip(+1, xr, ctr, cbr, lb, iv, ii, n, r, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (ctl || cbl) {
			this.writeBottomStrip(-1, xl, ctl, cbl, lb, iv, ii, n, r, ay, scale, d, fd, fx, fy);
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
	protected writeBottomStrip(
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

	protected writeTopStrip(
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

	protected writeRightStrip(
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

	protected writeLeftStrip(
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
			this.writeLeftStrip(-1, yt, ctl, ctr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbl || cbr) {
			this.writeLeftStrip(+1, yb, cbl, cbr, lo, iv, ii, n, r, ax, ay, scale, d, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes a rounded-corner strip of one half (x <= 0 or 0 <= x) of the shape.
	 * `sx` is -1 for the left half and +1 for the right half.
	 * `sy` is -1 for a top corner and +1 for a bottom corner.
	 * `yi` is Y of the line at the strip's inner edge.
	 */
	protected writeLeftRightStrip(
		sx: number,
		sy: number,
		yi: number,
		lo: number,
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
		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		for (let i = 0; i < n; ++i) {
			const y = yi + sy * r * sin;
			const xo = sx * (ax - r * (1 - cos));
			const length = sx < 0 ? lo + 4 * ax + 3 * ay - y : lo + 2 * ax + y + ay;
			const co = Math.min(scale, 1 - (ax - sx * xo) * fd);
			this.updateVertex(iv, xo, y, fd, length, co, fx, fy);
			this.updateVertex(iv + 1, 0, y, fd, length, 0, fx, fy);
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
		const fs = (scale - 1) * ax;
		const r = radius * Math.min(ax, ay);

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const xl = -ax - fs;
		const xr = +ax + fs;
		const ylt = ctl ? -ay + r : -ay;
		const ylb = cbl ? +ay - r : +ay;
		const yrt = ctr ? -ay + r : -ay;
		const yrb = cbr ? +ay - r : +ay;
		const lol = cbl ? -r : 0;
		const lor = ctr ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writePoly4(
			iv,
			ii,
			3,
			lol,
			xl,
			ylt,
			0,
			ylt,
			0,
			ylb,
			xl,
			ylb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 4;
		ii += 6;
		this.writePoly4(
			iv,
			ii,
			1,
			lor,
			0,
			yrt,
			xr,
			yrt,
			xr,
			yrb,
			0,
			yrb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 4;
		ii += 6;

		if (ctl) {
			this.writeLeftRightStrip(-1, -1, ylt, lol, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbl) {
			this.writeLeftRightStrip(-1, +1, ylb, lol, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (ctr) {
			this.writeLeftRightStrip(+1, -1, yrt, lor, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbr) {
			this.writeLeftRightStrip(+1, +1, yrb, lor, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

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
		const fs = (scale - 1) * ay;
		const r = radius * Math.min(ax, ay);

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const xlt = ctl ? -ax + r : -ax;
		const xrt = ctr ? +ax - r : +ax;
		const xlb = cbl ? -ax + r : -ax;
		const xrb = cbr ? +ax - r : +ax;
		const yt = -ay - fs;
		const yb = +ay + fs;
		const lot = ctl ? -r : 0;
		const lob = cbr ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writePoly4(
			iv,
			ii,
			0,
			lot,
			xlt,
			yt,
			xrt,
			yt,
			xrt,
			0,
			xlt,
			0,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 4;
		ii += 6;
		this.writePoly4(
			iv,
			ii,
			2,
			lob,
			xlb,
			0,
			xrb,
			0,
			xrb,
			yb,
			xlb,
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

		if (ctl) {
			this.writeTopBottomStrip(-1, -1, xlt, lot, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (ctr) {
			this.writeTopBottomStrip(+1, -1, xrt, lot, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbl) {
			this.writeTopBottomStrip(-1, +1, xlb, lob, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (cbr) {
			this.writeTopBottomStrip(+1, +1, xrb, lob, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeTopBottomStrip(
		sx: number,
		sy: number,
		xi: number,
		lo: number,
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
		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		for (let i = 0; i < n; ++i) {
			const x = xi + sx * r * sin;
			const y = sy * (ay - r * (1 - cos));
			const length = sy < 0 ? lo + x + ax : lo + 3 * ax + 2 * ay - x;
			const clipping = Math.min(scale, sy < 0 ? (y + ay) * -fd + 1 : (y - ay) * fd + 1);
			this.updateVertex(iv, x, y, fd, length, clipping, fx, fy);
			this.updateVertex(iv + 1, x, 0, fd, length, 0, fx, fy);
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
		const d = 2 * ay;
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

		const oldCtl = cbr;
		const oldCtr = cbl;
		const oldCbl = ctr;
		const oldCbr = ctl;
		const arc = 0.5 * Math.PI * r;
		const lot = oldCtl ? -r : 0;
		const lor = lot + (oldCtr ? arc - 2 * r : 0);
		const lob = lor + (oldCbr ? arc - 2 * r : 0);
		const lol = lob + (oldCbl ? arc - 2 * r : 0);

		const xl = -ax - fs;
		const xr = oldCtr || oldCbr ? +ax - r : +ax;
		const yt = oldCtl ? -ay + r : -ay;
		const yb = oldCbl ? +ay - r : +ay + fs;
		const yo = +ay + fs;
		const xdb = ay - ax - yb;
		const xdt = Math.min(ay - ax - yt, xr);
		const ydt = ay - ax - xdt;
		const xtb = Math.min(2 * ay - ax, xr);
		const ytb = ay - ax - xtb;
		const xbl = oldCbl ? -ax + r : xl;
		const lengthShift = 2 * ax + 2 * ay;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			7,
			lol + lengthShift,
			-xl,
			-yt,
			-xdt,
			-yt,
			-xdt,
			-ydt,
			-xdb,
			-yb,
			-xl,
			-yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			6,
			lob + lengthShift,
			-xtb,
			-ytb,
			-xr,
			-ytb,
			-xr,
			-yo,
			-xbl,
			-yo,
			-xdb,
			-yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (ctr) {
			const lo = lob + 4 * ax + 2 * ay - r + lengthShift;
			this.writeFan(+ax - r, -ay + r, 0, -1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctl || cbl) {
			this.writeTopRightLeftStrip(
				-xr,
				oldCbr,
				oldCtr,
				lob + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (cbr) {
			this.writeTopRightBottomStrip(
				-xtb,
				-ytb,
				-xdt,
				lol + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 3 * (2 * n + 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

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
		const d = 2 * ax;
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

		const oldCtl = cbr;
		const oldCtr = cbl;
		const oldCbl = ctr;
		const oldCbr = ctl;
		const arc = 0.5 * Math.PI * r;
		const lot = oldCbr ? -r : 0;
		const lor = lot + (oldCtr ? arc - 2 * r : 0);
		const lob = lor + (oldCtl ? arc - 2 * r : 0);
		const lol = lob + (oldCbl ? arc - 2 * r : 0);

		const ul = -ay - fs;
		const ur = oldCtl || oldCtr ? +ay - r : +ay;
		const vt = oldCbr ? -ax + r : -ax;
		const vb = oldCbl ? +ax - r : +ax + fs;
		const vo = +ax + fs;
		const udb = ax - ay - vb;
		const udt = Math.min(ax - ay - vt, ur);
		const vdt = ax - ay - udt;
		const utb = Math.min(2 * ax - ay, ur);
		const vtb = ax - ay - utb;
		const ubl = oldCbl ? -ay + r : ul;
		const lengthShift = 2 * ax + 2 * ay;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			6,
			lol + lengthShift,
			vt,
			ul,
			vdt,
			ul,
			vdt,
			udt,
			vb,
			udb,
			vb,
			ul,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			7,
			lob + lengthShift,
			vtb,
			utb,
			vtb,
			ur,
			vo,
			ur,
			vo,
			ubl,
			vb,
			udb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (ctr) {
			const lo = lob + 4 * ax + 2 * ay - r + lengthShift;
			this.writeFan(+ax - r, -ay + r, 0, -1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbl || cbr) {
			this.writeTopRightBottomRowStrip(
				ur,
				oldCtr,
				oldCtl,
				lor + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (ctl) {
			this.writeTopRightTopColumnStrip(
				utb,
				vtb,
				udt,
				lob + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 6 * n + 3;
		}

		this.pad(iv, ii, nv, ni, fd);
	}

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
		const d = 2 * ay;
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

		// The diagonal border between the left and the bottom sides is x + y = ay - ax
		const xl = -ax - fs;
		const xr = ctr || cbr ? +ax - r : +ax;
		const yt = ctl ? -ay + r : -ay;
		const yb = cbl ? +ay - r : +ay + fs;
		const yo = +ay + fs;
		const xdb = ay - ax - yb;
		const xdt = Math.min(ay - ax - yt, xr);
		const ydt = ay - ax - xdt;
		const xtb = Math.min(2 * ay - ax, xr);
		const ytb = ay - ax - xtb;
		const xbl = cbl ? -ax + r : xl;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			4,
			lol,
			xl,
			yt,
			xdt,
			yt,
			xdt,
			ydt,
			xdb,
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
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			5,
			lob,
			xtb,
			ytb,
			xr,
			ytb,
			xr,
			yo,
			xbl,
			yo,
			xdb,
			yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (cbl) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(-ax + r, +ay - r, 0, 1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctr || cbr) {
			this.writeBottomLeftRightStrip(
				xr,
				ctr,
				cbr,
				lob,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (ctl) {
			this.writeBottomLeftTopStrip(
				xtb,
				ytb,
				xdt,
				lol,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 3 * (2 * n + 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes the column strip of the right corners.
	 * Each line has 3 vertices (top, diagonal border, bottom) because the clipping bends on the border.
	 * `xi` is X of the line at the column's inner edge.
	 */
	protected writeBottomLeftRightStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const x = xi + r * sin;
			const raise = r * (1 - cos);
			const ytop = ct ? -ay + raise : -ay;
			const ybottom = cb ? +ay - raise : +ay + fs;
			const ymiddle = Math.min(Math.max(ay - ax - x, ytop), ybottom);
			this.updateVertexNearBottom(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearBottom(iv + 1, x, ymiddle, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearBottom(iv + 2, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	/**
	 * Writes the strip of the top-left corner and the band along the top edge.
	 * The first 3 vertices are the band's end on the diagonal border: `(xtb, ytb)`, `(xtb, -ay)` and `(xdt, -ay + r)`.
	 */
	protected writeBottomLeftTopStrip(
		xtb: number,
		ytb: number,
		xdt: number,
		lo: number,
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
		const indices = this._indices;
		const ybottom = -ay + r;
		this.updateVertexNearLeft(iv, xtb, ytb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearLeft(iv + 1, xtb, -ay, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearLeft(iv + 2, xdt, ybottom, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const x = -ax + r - r * sin;
			const ytop = -ay + r * (1 - cos);
			this.updateVertexNearLeft(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearLeft(iv + 1, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeTopRightLeftStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const x = xi - r * sin;
			const raise = r * (1 - cos);
			const ytop = ct ? -ay + raise : -ay - fs;
			const ybottom = cb ? +ay - raise : +ay;
			const ymiddle = Math.min(Math.max(ax - ay - x, ytop), ybottom);
			this.updateVertexNearTop(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearTop(iv + 1, x, ymiddle, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearTop(iv + 2, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeTopRightBottomStrip(
		xtb: number,
		ytb: number,
		xdt: number,
		lo: number,
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
		const indices = this._indices;
		const ybottom = +ay - r;
		this.updateVertexNearRight(iv, xtb, ytb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearRight(iv + 1, xtb, +ay, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearRight(iv + 2, xdt, ybottom, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const x = +ax - r + r * sin;
			const ytop = +ay - r * (1 - cos);
			this.updateVertexNearRight(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearRight(iv + 1, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

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
		const d = 2 * ax;
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
		const lot = cbr ? -r : 0;
		const lor = lot + (ctr ? arc - 2 * r : 0);
		const lob = lor + (ctl ? arc - 2 * r : 0);
		const lol = lob + (cbl ? arc - 2 * r : 0);

		const ul = -ay - fs;
		const ur = ctl || ctr ? +ay - r : +ay;
		const vt = cbr ? -ax + r : -ax;
		const vb = cbl ? +ax - r : +ax + fs;
		const vo = +ax + fs;
		const udb = ax - ay - vb;
		const udt = Math.min(ax - ay - vt, ur);
		const vdt = ax - ay - udt;
		const utb = Math.min(2 * ax - ay, ur);
		const vtb = ax - ay - utb;
		const ubl = cbl ? -ay + r : ul;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			5,
			lol,
			-vt,
			-ul,
			-vdt,
			-ul,
			-vdt,
			-udt,
			-vb,
			-udb,
			-vb,
			-ul,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			4,
			lob,
			-vtb,
			-utb,
			-vtb,
			-ur,
			-vo,
			-ur,
			-vo,
			-ubl,
			-vb,
			-udb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (cbl) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(-ax + r, +ay - r, 0, 1, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctl || ctr) {
			this.writeBottomLeftTopColumnStrip(
				ur,
				ctr,
				ctl,
				lor,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (cbr) {
			this.writeBottomLeftBottomStrip(
				utb,
				vtb,
				udt,
				lob,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 6 * n + 3;
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeBottomLeftTopColumnStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const u = xi + r * sin;
			const raise = r * (1 - cos);
			const vtop = ct ? -ax + raise : -ax;
			const vbottom = cb ? +ax - raise : +ax + fs;
			const vmiddle = Math.min(Math.max(ax - ay - u, vtop), vbottom);
			this.updateVertexNearLeft(iv, -vtop, -u, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearLeft(iv + 1, -vmiddle, -u, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearLeft(iv + 2, -vbottom, -u, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeBottomLeftBottomStrip(
		xtb: number,
		ytb: number,
		xdt: number,
		lo: number,
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
		const indices = this._indices;
		const xright = ax - r;
		this.updateVertexNearBottom(iv, -ytb, -xtb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearBottom(iv + 1, ax, -xtb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearBottom(iv + 2, xright, -xdt, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const u = -ay + r - r * sin;
			const v = -ax + r * (1 - cos);
			this.updateVertexNearBottom(iv, -v, -u, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearBottom(iv + 1, xright, -u, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeTopRightBottomRowStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const y = yi + r * sin;
			const raise = r * (1 - cos);
			const xleft = cl ? -ax + raise : -ax;
			const xright = cr ? +ax - raise : +ax + fs;
			const xmiddle = Math.min(Math.max(ax - ay - y, xleft), xright);
			this.updateVertexNearRight(iv, xleft, y, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearRight(iv + 1, xmiddle, y, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearRight(iv + 2, xright, y, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeTopRightTopColumnStrip(
		utb: number,
		vtb: number,
		udt: number,
		lo: number,
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
		const indices = this._indices;
		const xleft = -ax + r;
		this.updateVertexNearTop(iv, vtb, utb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearTop(iv + 1, -ax, utb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearTop(iv + 2, xleft, udt, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const y = -ay + r - r * sin;
			const x = -ax + r * (1 - cos);
			this.updateVertexNearTop(iv, x, y, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearTop(iv + 1, xleft, y, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

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
		const d = 2 * ay;
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

		const oldCtl = cbl;
		const oldCtr = cbr;
		const oldCbl = ctl;
		const oldCbr = ctr;
		const arc = 0.5 * Math.PI * r;
		const lot = oldCtl ? -r : 0;
		const lor = lot + (oldCtr ? arc - 2 * r : 0);
		const lob = lor + (oldCbr ? arc - 2 * r : 0);
		const lol = lob + (oldCbl ? arc - 2 * r : 0);

		const xl = -ax - fs;
		const xr = oldCtr || oldCbr ? +ax - r : +ax;
		const yt = oldCtl ? -ay + r : -ay;
		const yb = oldCbl ? +ay - r : +ay + fs;
		const yo = +ay + fs;
		const xdb = ay - ax - yb;
		const xdt = Math.min(ay - ax - yt, xr);
		const ydt = ay - ax - xdt;
		const xtb = Math.min(2 * ay - ax, xr);
		const ytb = ay - ax - xtb;
		const xbl = oldCbl ? -ax + r : xl;
		const lengthShift = -2 * ax - 2 * ay;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			9,
			lol + lengthShift,
			xl,
			-yt,
			xdt,
			-yt,
			xdt,
			-ydt,
			xdb,
			-yb,
			xl,
			-yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			8,
			lob + lengthShift,
			xtb,
			-ytb,
			xr,
			-ytb,
			xr,
			-yo,
			xbl,
			-yo,
			xdb,
			-yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (ctl) {
			const lo = lob + 4 * ax + 2 * ay - r + lengthShift;
			this.writeFan(-ax + r, -ay + r, -1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctr || cbr) {
			this.writeTopLeftRightStrip(
				xr,
				ctr,
				cbr,
				lob + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (cbl) {
			this.writeTopLeftBottomStrip(
				xtb,
				-ytb,
				xdt,
				lol + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 3 * (2 * n + 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

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
		const d = 2 * ax;
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

		const oldCtl = cbl;
		const oldCtr = cbr;
		const oldCbl = ctl;
		const oldCbr = ctr;
		const arc = 0.5 * Math.PI * r;
		const lot = oldCbr ? -r : 0;
		const lor = lot + (oldCtr ? arc - 2 * r : 0);
		const lob = lor + (oldCtl ? arc - 2 * r : 0);
		const lol = lob + (oldCbl ? arc - 2 * r : 0);

		const ul = -ay - fs;
		const ur = oldCtl || oldCtr ? +ay - r : +ay;
		const vt = oldCbr ? -ax + r : -ax;
		const vb = oldCbl ? +ax - r : +ax + fs;
		const vo = +ax + fs;
		const udb = ax - ay - vb;
		const udt = Math.min(ax - ay - vt, ur);
		const vdt = ax - ay - udt;
		const utb = Math.min(2 * ax - ay, ur);
		const vtb = ax - ay - utb;
		const ubl = oldCbl ? -ay + r : ul;
		const lengthShift = -2 * ax - 2 * ay;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			8,
			lol + lengthShift,
			-vt,
			ul,
			-vdt,
			ul,
			-vdt,
			udt,
			-vb,
			udb,
			-vb,
			ul,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			9,
			lob + lengthShift,
			-vtb,
			utb,
			-vtb,
			ur,
			-vo,
			ur,
			-vo,
			ubl,
			-vb,
			udb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (ctl) {
			const lo = lob + 4 * ax + 2 * ay - r + lengthShift;
			this.writeFan(-ax + r, -ay + r, -1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (cbl || cbr) {
			this.writeTopLeftBottomRowStrip(
				ur,
				cbl,
				cbr,
				lor + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (ctr) {
			this.writeTopLeftTopColumnStrip(
				utb,
				vtb,
				udt,
				lob + lengthShift,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 6 * n + 3;
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeTopLeftRightStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const x = xi + r * sin;
			const raise = r * (1 - cos);
			const ytop = ct ? -ay + raise : -ay - fs;
			const ybottom = cb ? +ay - raise : +ay;
			const ymiddle = Math.min(Math.max(x + ax - ay, ytop), ybottom);
			this.updateVertexNearTopLeft(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearTopLeft(iv + 1, x, ymiddle, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearTopLeft(iv + 2, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeTopLeftBottomStrip(
		xtb: number,
		ytb: number,
		xdt: number,
		lo: number,
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
		const indices = this._indices;
		const ybottom = +ay - r;
		this.updateVertexNearLeftTop(iv, xtb, ytb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearLeftTop(iv + 1, xtb, +ay, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearLeftTop(iv + 2, xdt, ybottom, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const x = -ax + r - r * sin;
			const ytop = +ay - r * (1 - cos);
			this.updateVertexNearLeftTop(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearLeftTop(iv + 1, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeTopLeftBottomRowStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const y = yi + r * sin;
			const raise = r * (1 - cos);
			const xleft = cl ? -ax + raise : -ax - fs;
			const xright = cr ? +ax - raise : +ax;
			const xmiddle = Math.min(Math.max(y + ay - ax, xleft), xright);
			this.updateVertexNearLeftTop(iv, xleft, y, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearLeftTop(iv + 1, xmiddle, y, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearLeftTop(iv + 2, xright, y, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeTopLeftTopColumnStrip(
		utb: number,
		vtb: number,
		udt: number,
		lo: number,
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
		const indices = this._indices;
		const xright = +ax - r;
		this.updateVertexNearTopLeft(iv, -vtb, utb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearTopLeft(iv + 1, +ax, utb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearTopLeft(iv + 2, xright, udt, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const y = -ay + r - r * sin;
			const x = +ax - r * (1 - cos);
			this.updateVertexNearTopLeft(iv, x, y, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearTopLeft(iv + 1, xright, y, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeBottomRightLeftStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const x = xi - r * sin;
			const raise = r * (1 - cos);
			const ytop = ct ? -ay + raise : -ay;
			const ybottom = cb ? +ay - raise : +ay + fs;
			const ymiddle = Math.min(Math.max(x + ay - ax, ytop), ybottom);
			this.updateVertexNearBottomRight(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearBottomRight(iv + 1, x, ymiddle, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearBottomRight(iv + 2, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeBottomRightTopStrip(
		xtb: number,
		ytb: number,
		xdt: number,
		lo: number,
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
		const indices = this._indices;
		const ybottom = -ay + r;
		this.updateVertexNearRightBottom(iv, xtb, ytb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearRightBottom(iv + 1, xtb, -ay, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearRightBottom(iv + 2, xdt, ybottom, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const x = +ax - r + r * sin;
			const ytop = -ay + r * (1 - cos);
			this.updateVertexNearRightBottom(iv, x, ytop, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearRightBottom(iv + 1, x, ybottom, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

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
		const d = 2 * ay;
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

		const oldCtl = ctr;
		const oldCtr = ctl;
		const oldCbl = cbr;
		const oldCbr = cbl;
		const arc = 0.5 * Math.PI * r;
		const lot = oldCtl ? -r : 0;
		const lor = lot + (oldCtr ? arc - 2 * r : 0);
		const lob = lor + (oldCbr ? arc - 2 * r : 0);
		const lol = lob + (oldCbl ? arc - 2 * r : 0);

		const xl = -ax - fs;
		const xr = oldCtr || oldCbr ? +ax - r : +ax;
		const yt = oldCtl ? -ay + r : -ay;
		const yb = oldCbl ? +ay - r : +ay + fs;
		const yo = +ay + fs;
		const xdb = ay - ax - yb;
		const xdt = Math.min(ay - ax - yt, xr);
		const ydt = ay - ax - xdt;
		const xtb = Math.min(2 * ay - ax, xr);
		const ytb = ay - ax - xtb;
		const xbl = oldCbl ? -ax + r : xl;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			10,
			lol,
			-xl,
			yt,
			-xdt,
			yt,
			-xdt,
			ydt,
			-xdb,
			yb,
			-xl,
			yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			11,
			lob,
			-xtb,
			ytb,
			-xr,
			ytb,
			-xr,
			yo,
			-xbl,
			yo,
			-xdb,
			yb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (cbr) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(+ax - r, +ay - r, 1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctl || cbl) {
			this.writeBottomRightLeftStrip(
				-xr,
				oldCtr,
				oldCbr,
				lob,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (ctr) {
			this.writeBottomRightTopStrip(
				-xtb,
				ytb,
				-xdt,
				lol,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 3 * (2 * n + 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	protected writeBottomRightTopColumnStrip(
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
		const fs = (scale - 1) / fd;
		for (let i = 0; i < n; ++i) {
			const u = xi + r * sin;
			const raise = r * (1 - cos);
			const vtop = ct ? -ax + raise : -ax;
			const vbottom = cb ? +ax - raise : +ax + fs;
			const vmiddle = Math.min(Math.max(ax - ay - u, vtop), vbottom);
			this.updateVertexNearRightBottom(iv, vtop, -u, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearRightBottom(iv + 1, vmiddle, -u, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearRightBottom(iv + 2, vbottom, -u, fd, scale, fx, fy, ax, ay, lo);
			if (0 < i) {
				indices[ii++] = iv - 3;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;

				indices[ii++] = iv - 3;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;

				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 2;

				indices[ii++] = iv - 2;
				indices[ii++] = iv + 2;
				indices[ii++] = iv + 1;
			}
			iv += 3;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeBottomRightBottomStrip(
		xtb: number,
		ytb: number,
		xdt: number,
		lo: number,
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
		const indices = this._indices;
		const xleft = -ax + r;
		this.updateVertexNearBottomRight(iv, ytb, -xtb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearBottomRight(iv + 1, -ax, -xtb, fd, scale, fx, fy, ax, ay, lo);
		this.updateVertexNearBottomRight(iv + 2, xleft, -xdt, fd, scale, fx, fy, ax, ay, lo);
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		iv += 3;

		let cos = 1;
		let sin = 0;
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		for (let i = 0; i < n; ++i) {
			const u = -ay + r - r * sin;
			const v = -ax + r * (1 - cos);
			this.updateVertexNearBottomRight(iv, v, -u, fd, scale, fx, fy, ax, ay, lo);
			this.updateVertexNearBottomRight(iv + 1, xleft, -u, fd, scale, fx, fy, ax, ay, lo);
			indices[ii++] = iv - 2;
			indices[ii++] = iv - 1;
			indices[ii++] = iv + 1;

			indices[ii++] = iv - 2;
			indices[ii++] = iv + 1;
			indices[ii++] = iv;
			iv += 2;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

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
		const d = 2 * ax;
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

		const oldCtl = ctr;
		const oldCtr = ctl;
		const oldCbl = cbr;
		const oldCbr = cbl;
		const arc = 0.5 * Math.PI * r;
		const lot = oldCbr ? -r : 0;
		const lor = lot + (oldCtr ? arc - 2 * r : 0);
		const lob = lor + (oldCtl ? arc - 2 * r : 0);
		const lol = lob + (oldCbl ? arc - 2 * r : 0);

		const ul = -ay - fs;
		const ur = oldCtl || oldCtr ? +ay - r : +ay;
		const vt = oldCbr ? -ax + r : -ax;
		const vb = oldCbl ? +ax - r : +ax + fs;
		const vo = +ax + fs;
		const udb = ax - ay - vb;
		const udt = Math.min(ax - ay - vt, ur);
		const vdt = ax - ay - udt;
		const utb = Math.min(2 * ax - ay, ur);
		const vtb = ax - ay - utb;
		const ubl = oldCbl ? -ay + r : ul;

		let iv = 0;
		let ii = 0;
		this.writePoly5(
			iv,
			ii,
			11,
			lol,
			vt,
			-ul,
			vdt,
			-ul,
			vdt,
			-udt,
			vb,
			-udb,
			vb,
			-ul,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;
		this.writePoly5(
			iv,
			ii,
			10,
			lob,
			vtb,
			-utb,
			vtb,
			-ur,
			vo,
			-ur,
			vo,
			-ubl,
			vb,
			-udb,
			fd,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		iv += 5;
		ii += 9;

		if (cbr) {
			const lo = lob + 4 * ax + 2 * ay - r;
			this.writeFan(+ax - r, +ay - r, 1, 0, lo, iv, ii, n, r, rs, fd, scale, fx, fy);
			iv += 2 * n - 1;
			ii += 3 * (n - 1);
		}
		if (ctl || ctr) {
			this.writeBottomRightTopColumnStrip(
				ur,
				oldCtr,
				oldCtl,
				lor,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 3 * n;
			ii += 12 * (n - 1);
		}
		if (cbl) {
			this.writeBottomRightBottomStrip(
				utb,
				vtb,
				udt,
				lob,
				iv,
				ii,
				n,
				r,
				ax,
				ay,
				scale,
				fd,
				fx,
				fy
			);
			iv += 2 * n + 3;
			ii += 6 * n + 3;
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.NOT_TOP
	 * * ay <= ax
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
		const d = 2 * ay;
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
		this.writeNotTopSide(-1, lol, ctl, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeNotTopSide(+1, lor, ctr, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
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
	protected writeNotTopSide(
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
		this.writeNotTopSide(-1, lol, ctl, cbl, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
		iv += n + 4;
		ii += 3 * (n + 2);
		this.writeNotTopSide(+1, lor, ctr, cbr, iv, ii, n, r, ax, ay, scale, fd, fx, fy);
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
		// TODO
	}

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
		// TODO
	}

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
		// TODO
	}

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
		// TODO
	}

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
		// TODO
	}

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
		// TODO
	}

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.ALL
	 * * ay <= ax
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
			case 4:
				this.updateVertexNearLeft(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 5:
				this.updateVertexNearBottom(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 6:
				this.updateVertexNearTop(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 7:
				this.updateVertexNearRight(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 8:
				this.updateVertexNearTopLeft(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 9:
				this.updateVertexNearLeftTop(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 10:
				this.updateVertexNearRightBottom(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
				break;
			case 11:
				this.updateVertexNearBottomRight(vertex, x, y, fd, scale, fx, fy, ax, ay, lo);
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

	/**
	 * Preconditions:
	 * * shape.stroke.side === EShapeStrokeSide.ALL
	 * * ax < ay
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

	protected updateVertexNearTopLeft(
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
		const ct = (y + ay) * -fdistance + 1;
		const cl = (x + ax) * -fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + x + ax,
			Math.min(scale, Math.max(ct, cl)),
			fx,
			fy
		);
	}

	protected updateVertexNearTop(
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
		const ct = (y + ay) * -fdistance + 1;
		const cr = (x - ax) * fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + x + ax,
			Math.min(scale, Math.max(ct, cr)),
			fx,
			fy
		);
	}

	protected updateVertexNearLeftTop(
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
		const ct = (y + ay) * -fdistance + 1;
		const cl = (x + ax) * -fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 4 * ax + 3 * ay - y,
			Math.min(scale, Math.max(ct, cl)),
			fx,
			fy
		);
	}

	protected updateVertexNearRight(
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
		const ct = (y + ay) * -fdistance + 1;
		const cr = (x - ax) * fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 2 * ax + y + ay,
			Math.min(scale, Math.max(ct, cr)),
			fx,
			fy
		);
	}

	/**
	 * The length follows the left side. The clipping follows the nearer of the left and the bottom sides.
	 */
	protected updateVertexNearLeft(
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
		const cl = (x + ax) * -fdistance + 1;
		const cb = (y - ay) * fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 4 * ax + 3 * ay - y,
			Math.min(scale, Math.max(cl, cb)),
			fx,
			fy
		);
	}

	/**
	 * The length follows the bottom side. The clipping follows the nearer of the left and the bottom sides.
	 */
	protected updateVertexNearBottom(
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
		const cl = (x + ax) * -fdistance + 1;
		const cb = (y - ay) * fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 3 * ax + 2 * ay - x,
			Math.min(scale, Math.max(cl, cb)),
			fx,
			fy
		);
	}

	protected updateVertexNearRightBottom(
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
		const cr = (x - ax) * fdistance + 1;
		const cb = (y - ay) * fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 2 * ax + y + ay,
			Math.min(scale, Math.max(cr, cb)),
			fx,
			fy
		);
	}

	protected updateVertexNearBottomRight(
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
		const cr = (x - ax) * fdistance + 1;
		const cb = (y - ay) * fdistance + 1;
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			lengthOffset + 3 * ax + 2 * ay - x,
			Math.min(scale, Math.max(cr, cb)),
			fx,
			fy
		);
	}

	protected updateVertex(
		vertex: number,
		x: number,
		y: number,
		distance: number,
		length: number,
		clipping: number,
		fx: number,
		fy: number,
		strokeWidth: number = this._strokeWidth
	): void {
		const vertex2 = vertex << 1;
		this._vertices[vertex2] = x;
		this._vertices[vertex2 + 1] = y;
		this._distances[vertex] = distance;
		this._lengths[vertex] = length;
		this._clippings[vertex] = clipping;
		this._strokeWidths[vertex] = strokeWidth;
		this._uvs[vertex2] = 0.5 * (x * fx + 1);
		this._uvs[vertex2 + 1] = 0.5 * (y * fy + 1);
	}
}
