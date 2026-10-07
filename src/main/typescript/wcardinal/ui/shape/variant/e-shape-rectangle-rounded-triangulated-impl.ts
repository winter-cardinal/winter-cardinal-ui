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
					if (2 * ay <= ax) {
						this.updateNotTop0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateNotTop1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_RIGHT:
					if (2 * ax <= ay) {
						this.updateNotRight0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateNotRight1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_BOTTOM:
					if (2 * ay <= ax) {
						this.updateNotBottom0(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					} else {
						this.updateNotBottom1(fx, fy, ax, ay, scale, radius, corner, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_LEFT:
					if (2 * ax <= ay) {
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
		const s = scale;
		const fs = (scale - 1) * d;
		const r = radius * ay;

		const x0 = -ax;
		const x1 = -ax + r;
		const x4 = +ax - r;
		const x5 = +ax;

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

		let iv = 0;
		let ii = 0;
		this.writePoly12(
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
			x5,
			y1,
			x5,
			y4,
			cbr ? x4 : x5,
			cbr ? y4 : y5,
			x4,
			y5,
			x1,
			y5,
			cbl ? x1 : x0,
			cbl ? y4 : y5,
			x0,
			y4,
			x0,
			y1,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 12;
		ii += 30;

		const dx = 2 * (ax - r);
		const dy = 2 * (ay - r);
		const rs = r + fs;
		let l = ctl ? dx : dx + r;
		if (ctr) {
			this.writeStripTop(x4, y1, 0, -1, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (cbr) {
			this.writeStripTop(x4, y4, 1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dx;
		} else {
			l += r + r + dx;
		}
		if (cbl) {
			this.writeStripTop(x1, y4, 0, 1, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (ctl) {
			this.writeStripTop(x1, y1, -1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
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
		const s = scale;
		const fs = (scale - 1) * d;
		const r = radius * ax;

		const x0 = -ax - fs;
		const x1 = -ax + r;
		const x4 = +ax - r;
		const x5 = +ax + fs;

		const y0 = -ay;
		const y1 = -ay + r;
		const y4 = +ay - r;
		const y5 = +ay;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writePoly12(
			iv,
			ii,
			1,
			lot,
			ctl ? x1 : x0,
			ctl ? y1 : y0,
			x1,
			y0,
			x4,
			y0,
			ctr ? x4 : x5,
			ctr ? y1 : y0,
			x5,
			y1,
			x5,
			y4,
			cbr ? x4 : x5,
			cbr ? y4 : y5,
			x4,
			y5,
			x1,
			y5,
			cbl ? x1 : x0,
			cbl ? y4 : y5,
			x0,
			y4,
			x0,
			y1,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 12;
		ii += 30;

		const dx = 2 * (ax - r);
		const dy = 2 * (ay - r);
		const rs = r + fs;
		let l = ctl ? dx : dx + r;
		if (ctr) {
			this.writeStripRight(x4, y1, 0, -1, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (cbr) {
			this.writeStripRight(x4, y4, 1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dx;
		} else {
			l += r + r + dx;
		}
		if (cbl) {
			this.writeStripRight(x1, y4, 0, 1, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (ctl) {
			this.writeStripRight(x1, y1, -1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
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
		const sw = this._strokeWidth;

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
			this.writeBottomStrip(+1, xr, ctr, cbr, lb, iv, ii, n, r, ay, scale, sw, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}
		if (ctl || cbl) {
			this.writeBottomStrip(-1, xl, ctl, cbl, lb, iv, ii, n, r, ay, scale, sw, fd, fx, fy);
			iv += 2 * n;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes a vertical strip of a corner column (n lines, 2 vertices per line).
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
		sw: number,
		fd: number,
		fx: number,
		fy: number
	): void {
		const dangle = (Math.PI * 0.5) / (n - 1);
		const indices = this._indices;
		for (let i = 0; i < n; ++i) {
			const angle = i * dangle;
			const x = xi + sign * r * Math.sin(angle);
			const raise = r * (1 - Math.cos(angle));
			const top = -ay + (ct ? raise : 0);
			const bottom = +ay - (cb ? raise : 0);
			const length = cb ? lb - xi - sign * r * angle : lb - x;
			const width = Math.max(0, sw - (cb ? raise : 0));
			const h = bottom - top;
			const distance = 0 < h ? 1 / h : fd;
			this.updateVertex(iv, x, top, distance, length, 0, fx, fy, width);
			this.updateVertex(
				iv + 1,
				x,
				bottom + (scale - 1) * h,
				distance,
				length,
				scale,
				fx,
				fy,
				width
			);
			if (0 < i) {
				indices[ii++] = iv - 2;
				indices[ii++] = iv - 1;
				indices[ii++] = iv + 1;
				indices[ii++] = iv - 2;
				indices[ii++] = iv + 1;
				indices[ii++] = iv;
			}
			iv += 2;
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
		const s = scale;
		const fs = (scale - 1) * d;
		const r = radius * ax;

		const x0 = -ax - fs;
		const x1 = -ax + r;
		const x4 = +ax - r;
		const x5 = +ax;

		const y0 = -ay;
		const y1 = -ay + r;
		const y4 = +ay - r;
		const y5 = +ay;

		const cr = 0 < radius;
		const ctl = cr && !!(corner & EShapeCorner.TOP_LEFT);
		const ctr = cr && !!(corner & EShapeCorner.TOP_RIGHT);
		const cbl = cr && !!(corner & EShapeCorner.BOTTOM_LEFT);
		const cbr = cr && !!(corner & EShapeCorner.BOTTOM_RIGHT);

		const arc = 0.5 * Math.PI * r;
		const lot = ctl ? -r : 0;

		let iv = 0;
		let ii = 0;
		this.writePoly12(
			iv,
			ii,
			3,
			lot,
			ctl ? x1 : x0,
			ctl ? y1 : y0,
			x1,
			y0,
			x4,
			y0,
			ctr ? x4 : x5,
			ctr ? y1 : y0,
			x5,
			y1,
			x5,
			y4,
			cbr ? x4 : x5,
			cbr ? y4 : y5,
			x4,
			y5,
			x1,
			y5,
			cbl ? x1 : x0,
			cbl ? y4 : y5,
			x0,
			y4,
			x0,
			y1,
			fd,
			s,
			fx,
			fy,
			ax,
			ay
		);
		iv += 12;
		ii += 30;

		const dx = 2 * (ax - r);
		const dy = 2 * (ay - r);
		const rs = r + fs;
		let l = ctl ? dx : dx + r;
		if (ctr) {
			this.writeStripLeft(x4, y1, 0, -1, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (cbr) {
			this.writeStripLeft(x4, y4, 1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dx;
		} else {
			l += r + r + dx;
		}
		if (cbl) {
			this.writeStripLeft(x1, y4, 0, 1, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
			l += arc + dy;
		} else {
			l += r + r + dy;
		}
		if (ctl) {
			this.writeStripLeft(x1, y1, -1, 0, l, iv, ii, n, r, rs, fd, s, fx, fy, ax, ay);
			iv += 2 * n - 1;
			ii += 6 * (n - 1);
		}

		this.pad(iv, ii, nv, ni, fd);
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
		const fdistance = 1 / ax;
		const shift = (scale - 1) / fdistance;
		this.updateCellLeft(-ax - shift, -ay, 0, +ay, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateCellRight(0, -ay, +ax + shift, +ay, fdistance, scale, fx, fy, ax, ay, 4);
		this.pad(8, 12, nv, ni, fdistance);
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
		const fdistance = 1 / ay;
		const shift = (scale - 1) / fdistance;
		this.updateCellTop(-ax, -ay - shift, +ax, 0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateCellBottom(-ax, 0, +ax, +ay + shift, fdistance, scale, fx, fy, ax, ay, 4);
		this.pad(8, 12, nv, ni, fdistance);
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
		const distance = 2 * ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax + shift;
		const top = -ay - shift;
		const bottom = +ay;
		const indices = this._indices;

		const splitX = ax - 2 * ay;
		this.updateVertexTop(0, left, top, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(1, right, top, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(2, splitX, bottom, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(3, left, bottom, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(4, right, top, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(5, right, bottom, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(6, splitX, bottom, fdistance, scale, fx, fy, ax, ay, 0);
		indices[0] = 0;
		indices[1] = 1;
		indices[2] = 2;
		indices[3] = 0;
		indices[4] = 2;
		indices[5] = 3;
		indices[6] = 4;
		indices[7] = 5;
		indices[8] = 6;
		this.pad(7, 9, nv, ni, fdistance);
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
		const distance = 2 * ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax + shift;
		const top = -ay - shift;
		const bottom = +ay;
		const indices = this._indices;
		const splitY = 2 * ax - ay;
		this.updateVertexTop(0, left, top, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(1, right, top, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(2, left, splitY, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(3, right, top, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(4, right, bottom, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(5, left, bottom, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(6, left, splitY, fdistance, scale, fx, fy, ax, ay, 0);
		indices[0] = 0;
		indices[1] = 1;
		indices[2] = 2;
		indices[3] = 3;
		indices[4] = 4;
		indices[5] = 5;
		indices[6] = 3;
		indices[7] = 5;
		indices[8] = 6;

		this.pad(7, 9, nv, ni, fdistance);
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
		const distance = 2 * ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax;
		const top = -ay;
		const bottom = +ay + shift;

		const splitX = 2 * ay - ax;
		this.updateQuadBottom(
			0,
			0,
			right,
			bottom,
			left,
			bottom,
			splitX,
			top,
			right,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriLeft(
			4,
			6,
			left,
			bottom,
			left,
			top,
			splitX,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(7, 9, nv, ni, fdistance);
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
		const distance = 2 * ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax;
		const top = -ay;
		const bottom = +ay + shift;
		const splitY = ay - 2 * ax;
		this.updateTriBottom(
			0,
			0,
			right,
			bottom,
			left,
			bottom,
			right,
			splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadLeft(
			3,
			3,
			left,
			bottom,
			left,
			top,
			right,
			top,
			right,
			splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(7, 9, nv, ni, fdistance);
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
		const distance = 2 * ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax;
		const top = -ay - shift;
		const bottom = +ay;

		const splitX = 2 * ay - ax;
		this.updateQuadTop(
			0,
			0,
			right,
			top,
			left,
			top,
			splitX,
			bottom,
			right,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriLeft(
			4,
			6,
			left,
			top,
			left,
			bottom,
			splitX,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(7, 9, nv, ni, fdistance);
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
		const distance = 2 * ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax;
		const top = -ay - shift;
		const bottom = +ay;
		const splitY = 2 * ax - ay;
		this.updateTriTop(
			0,
			0,
			right,
			top,
			left,
			top,
			right,
			splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadLeft(
			3,
			3,
			left,
			top,
			left,
			bottom,
			right,
			bottom,
			right,
			splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(7, 9, nv, ni, fdistance);
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
		const distance = 2 * ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax + shift;
		const top = -ay;
		const bottom = +ay + shift;

		const splitX = ax - 2 * ay;
		this.updateQuadBottom(
			0,
			0,
			left,
			bottom,
			right,
			bottom,
			splitX,
			top,
			left,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriRight(
			4,
			6,
			right,
			bottom,
			right,
			top,
			splitX,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(7, 9, nv, ni, fdistance);
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
		const distance = 2 * ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax + shift;
		const top = -ay;
		const bottom = +ay + shift;
		const splitY = ay - 2 * ax;
		this.updateTriBottom(
			0,
			0,
			left,
			bottom,
			right,
			bottom,
			left,
			splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadRight(
			3,
			3,
			right,
			bottom,
			right,
			top,
			left,
			top,
			left,
			splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(7, 9, nv, ni, fdistance);
	}

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
		const distance = 2 * ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax + shift;
		const top = -ay;
		const bottom = +ay + shift;
		const splitLeft = 2 * ay - ax;
		const splitRight = ax - 2 * ay;
		this.updateTriLeft(
			0,
			0,
			left,
			top,
			splitLeft,
			top,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadBottom(
			3,
			3,
			splitLeft,
			top,
			splitRight,
			top,
			right,
			bottom,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriRight(
			7,
			9,
			splitRight,
			top,
			right,
			top,
			right,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(10, 12, nv, ni, fdistance);
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
		const distance = ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax + shift;
		const top = -ay;
		const bottom = +ay + shift;
		const splitY = ay - ax;
		this.updateQuadLeft(
			0,
			0,
			left,
			top,
			0,
			top,
			0,
			splitY,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadRight(
			4,
			6,
			0,
			top,
			right,
			top,
			right,
			bottom,
			0,
			splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriBottom(
			8,
			12,
			0,
			splitY,
			right,
			bottom,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(11, 15, nv, ni, fdistance);
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
		const distance = 2 * ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax + shift;
		const top = -ay - shift;
		const bottom = +ay;

		const splitLeft = 2 * ay - ax;
		const splitRight = ax - 2 * ay;
		this.updateTriLeft(
			0,
			0,
			left,
			bottom,
			splitLeft,
			bottom,
			left,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadTop(
			3,
			3,
			splitLeft,
			bottom,
			splitRight,
			bottom,
			right,
			top,
			left,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriRight(
			7,
			9,
			splitRight,
			bottom,
			right,
			bottom,
			right,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(10, 12, nv, ni, fdistance);
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
		const distance = ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax + shift;
		const top = -ay - shift;
		const bottom = +ay;
		const splitY = ay - ax;
		this.updateQuadLeft(
			0,
			0,
			left,
			bottom,
			0,
			bottom,
			0,
			-splitY,
			left,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadRight(
			4,
			6,
			0,
			bottom,
			right,
			bottom,
			right,
			top,
			0,
			-splitY,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriTop(
			8,
			12,
			0,
			-splitY,
			right,
			top,
			left,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(11, 15, nv, ni, fdistance);
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
		const distance = 2 * ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax + shift;
		const top = -ay - shift;
		const bottom = +ay + shift;

		const splitTop = 2 * ax - ay;
		const splitBottom = ay - 2 * ax;
		this.updateTriBottom(
			0,
			0,
			left,
			bottom,
			left,
			splitBottom,
			right,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadRight(
			3,
			3,
			left,
			splitBottom,
			left,
			splitTop,
			right,
			top,
			right,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriTop(
			7,
			9,
			left,
			splitTop,
			left,
			top,
			right,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(10, 12, nv, ni, fdistance);
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
		const distance = ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax + shift;
		const top = -ay - shift;
		const bottom = +ay + shift;
		const splitX = ax - ay;
		this.updateQuadBottom(
			0,
			0,
			left,
			bottom,
			left,
			0,
			splitX,
			0,
			right,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadTop(
			4,
			6,
			left,
			0,
			left,
			top,
			right,
			top,
			splitX,
			0,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriRight(
			8,
			12,
			splitX,
			0,
			right,
			top,
			right,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(11, 15, nv, ni, fdistance);
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
		const distance = 2 * ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax;
		const top = -ay - shift;
		const bottom = +ay + shift;

		const stop = 2 * ax - ay;
		const sbottom = ay - 2 * ax;
		this.updateTriBottom(
			0,
			0,
			right,
			bottom,
			right,
			sbottom,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadLeft(
			3,
			3,
			right,
			sbottom,
			right,
			stop,
			left,
			top,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriTop(
			7,
			9,
			right,
			stop,
			right,
			top,
			left,
			top,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(10, 12, nv, ni, fdistance);
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
		const distance = ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax;
		const top = -ay - shift;
		const bottom = +ay + shift;
		const splitX = ay - ax;
		this.updateQuadBottom(
			0,
			0,
			right,
			bottom,
			right,
			0,
			splitX,
			0,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadTop(
			4,
			6,
			right,
			0,
			right,
			top,
			left,
			top,
			splitX,
			0,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriLeft(
			8,
			12,
			splitX,
			0,
			left,
			top,
			left,
			bottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(11, 15, nv, ni, fdistance);
	}

	protected updateTriTop(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexTop(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay, 0);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
	}

	protected updateTriRight(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexRight(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay, 0);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
	}

	protected updateTriBottom(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexBottom(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay, 0);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
	}

	protected updateTriLeft(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexLeft(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay, 0);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
	}

	protected updateQuadTop(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexTop(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 3, x3, y3, fdistance, scale, fx, fy, ax, ay, 0);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
		this._indices[ii + 3] = iv;
		this._indices[ii + 4] = iv + (reverse ? 3 : 2);
		this._indices[ii + 5] = iv + (reverse ? 2 : 3);
	}

	protected updateQuadRight(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexRight(iv, x0, y0, fdistance, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 1, x1, y1, fdistance, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 2, x2, y2, fdistance, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 3, x3, y3, fdistance, fdistance, scale, fx, fy, ax, ay);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
		this._indices[ii + 3] = iv;
		this._indices[ii + 4] = iv + (reverse ? 3 : 2);
		this._indices[ii + 5] = iv + (reverse ? 2 : 3);
	}

	protected updateQuadBottom(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexBottom(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 3, x3, y3, fdistance, scale, fx, fy, ax, ay, 0);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
		this._indices[ii + 3] = iv;
		this._indices[ii + 4] = iv + (reverse ? 3 : 2);
		this._indices[ii + 5] = iv + (reverse ? 2 : 3);
	}

	protected updateQuadLeft(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		reverse: boolean = (x1 - x0) * (y2 - y0) < (y1 - y0) * (x2 - x0)
	): void {
		this.updateVertexLeft(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 3, x3, y3, fdistance, scale, fx, fy, ax, ay, 0);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
		this._indices[ii + 3] = iv;
		this._indices[ii + 4] = iv + (reverse ? 3 : 2);
		this._indices[ii + 5] = iv + (reverse ? 2 : 3);
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

	protected writePoly12(
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
		x6: number,
		y6: number,
		x7: number,
		y7: number,
		x8: number,
		y8: number,
		x9: number,
		y9: number,
		x10: number,
		y10: number,
		x11: number,
		y11: number,
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
		const index6 = vertex++;
		const index7 = vertex++;
		const index8 = vertex++;
		const index9 = vertex++;
		const index10 = vertex++;
		const index11 = vertex++;
		this.writeVertex(index0, x0, y0, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index1, x1, y1, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index2, x2, y2, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index3, x3, y3, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index4, x4, y4, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index5, x5, y5, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index6, x6, y6, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index7, x7, y7, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index8, x8, y8, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index9, x9, y9, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index10, x10, y10, side, lo, fd, scale, fx, fy, ax, ay);
		this.writeVertex(index11, x11, y11, side, lo, fd, scale, fx, fy, ax, ay);
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

		indices[index++] = index0;
		indices[index++] = index5;
		indices[index++] = index6;

		indices[index++] = index0;
		indices[index++] = index6;
		indices[index++] = index7;

		indices[index++] = index0;
		indices[index++] = index7;
		indices[index++] = index8;

		indices[index++] = index0;
		indices[index++] = index8;
		indices[index++] = index9;

		indices[index++] = index0;
		indices[index++] = index9;
		indices[index++] = index10;

		indices[index++] = index0;
		indices[index++] = index10;
		indices[index++] = index11;
	}

	protected writeStripTop(
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
		fy: number,
		ax: number,
		ay: number
	): void {
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		const innerClipping = Math.min(scale, 1 - (cy + ay) * fd);
		const outerClipping = sin0 < 0 || cos0 < 0 ? scale : 1 - scale;
		let ivout = iv;
		let ivin = iv;
		let cos = 1;
		let sin = 0;
		for (let i = 0; i < n; ++i) {
			const angle = i * dangle;
			const horizontal = cos0 * cos - sin0 * sin;
			const vertical = sin0 * cos + cos0 * sin;
			const x = cx + r * horizontal;
			const y = cy + r * vertical + (rs - r) * (cos0 + sin0);
			const distance = vertical !== 0 ? fd / Math.abs(vertical) : fd;
			const length = lo + r * angle;
			const outer = iv++;
			this.updateVertex(
				outer,
				x,
				y,
				distance,
				length,
				vertical !== 0 ? outerClipping : innerClipping,
				fx,
				fy
			);
			let inner = outer;
			if (!((i === 0 && sin0 === 0) || (i === n - 1 && cos0 === 0))) {
				inner = iv++;
				this.updateVertex(inner, x, cy, distance, length, innerClipping, fx, fy);
			}
			if (0 < i) {
				indices[ii++] = ivin;
				indices[ii++] = ivout;
				indices[ii++] = outer;
				indices[ii++] = ivin;
				indices[ii++] = outer;
				indices[ii++] = inner;
			}
			ivout = outer;
			ivin = inner;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeStripRight(
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
		fy: number,
		ax: number,
		ay: number
	): void {
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		const innerClipping = Math.min(scale, (cx - ax) * fd + 1);
		const outerClipping = sin0 < 0 || cos0 > 0 ? scale : 1 - scale;
		let ivout = iv;
		let ivin = iv;
		let cos = 1;
		let sin = 0;
		for (let i = 0; i < n; ++i) {
			const angle = i * dangle;
			const horizontal = cos0 * cos - sin0 * sin;
			const vertical = sin0 * cos + cos0 * sin;
			const x = cx + r * horizontal + (rs - r) * (cos0 - sin0);
			const y = cy + r * vertical;
			const distance = horizontal !== 0 ? fd / Math.abs(horizontal) : fd;
			const length = lo + r * angle;
			const outer = iv++;
			this.updateVertex(
				outer,
				x,
				y,
				distance,
				length,
				horizontal !== 0 ? outerClipping : innerClipping,
				fx,
				fy
			);
			let inner = outer;
			if (!((i === 0 && cos0 === 0) || (i === n - 1 && sin0 === 0))) {
				inner = iv++;
				this.updateVertex(inner, cx, y, distance, length, innerClipping, fx, fy);
			}
			if (0 < i) {
				indices[ii++] = ivin;
				indices[ii++] = ivout;
				indices[ii++] = outer;
				indices[ii++] = ivin;
				indices[ii++] = outer;
				indices[ii++] = inner;
			}
			ivout = outer;
			ivin = inner;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeStripBottom(
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
		fy: number,
		ax: number,
		ay: number
	): void {
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		const innerClipping = Math.min(scale, (cy - ay) * fd + 1);
		const outerClipping = 0 < sin0 || 0 < cos0 ? scale : 1 - scale;
		let ivout = iv;
		let ivin = iv;
		let cos = 1;
		let sin = 0;
		for (let i = 0; i < n; ++i) {
			const angle = i * dangle;
			const horizontal = cos0 * cos - sin0 * sin;
			const vertical = sin0 * cos + cos0 * sin;
			const x = cx + r * horizontal;
			const y = cy + r * vertical + (rs - r) * (cos0 + sin0);
			// const distance = vertical !== 1 ? fd / Math.abs(1 - vertical) : fd;
			const distance = fd;
			const length = lo + r * angle;
			const outer = iv++;
			this.updateVertex(
				outer,
				x,
				y,
				distance,
				length,
				vertical !== 0 ? outerClipping : innerClipping,
				fx,
				fy
			);
			let inner = outer;
			if (!((i === 0 && sin0 === 0) || (i === n - 1 && cos0 === 0))) {
				inner = iv++;
				this.updateVertex(inner, x, cy, distance, length, innerClipping, fx, fy);
			}
			if (0 < i) {
				indices[ii++] = ivin;
				indices[ii++] = ivout;
				indices[ii++] = outer;
				indices[ii++] = ivin;
				indices[ii++] = outer;
				indices[ii++] = inner;
			}
			ivout = outer;
			ivin = inner;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
	}

	protected writeStripLeft(
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
		fy: number,
		ax: number,
		ay: number
	): void {
		const dangle = (Math.PI * 0.5) / (n - 1);
		const dcos = Math.cos(dangle);
		const dsin = Math.sin(dangle);
		const indices = this._indices;
		const innerClipping = Math.min(scale, (cx + ax) * -fd + 1);
		const outerClipping = sin0 > 0 || cos0 < 0 ? scale : 1 - scale;
		let ivout = iv;
		let ivin = iv;
		let cos = 1;
		let sin = 0;
		for (let i = 0; i < n; ++i) {
			const angle = i * dangle;
			const horizontal = cos0 * cos - sin0 * sin;
			const vertical = sin0 * cos + cos0 * sin;
			const x = cx + r * horizontal + (rs - r) * (cos0 - sin0);
			const y = cy + r * vertical;
			const distance = horizontal !== 0 ? fd / Math.abs(horizontal) : fd;
			const length = lo + r * angle;
			const outer = iv++;
			this.updateVertex(
				outer,
				x,
				y,
				distance,
				length,
				horizontal !== 0 ? outerClipping : innerClipping,
				fx,
				fy
			);
			let inner = outer;
			if (!((i === 0 && cos0 === 0) || (i === n - 1 && sin0 === 0))) {
				inner = iv++;
				this.updateVertex(inner, cx, y, distance, length, innerClipping, fx, fy);
			}
			if (0 < i) {
				indices[ii++] = ivin;
				indices[ii++] = ivout;
				indices[ii++] = outer;
				indices[ii++] = ivin;
				indices[ii++] = outer;
				indices[ii++] = inner;
			}
			ivout = outer;
			ivin = inner;
			const ncos = dcos * cos - dsin * sin;
			const nsin = dsin * cos + dcos * sin;
			cos = ncos;
			sin = nsin;
		}
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

	protected updateCellTop(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		iv: number
	): void {
		this.updateVertexTop(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexTop(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay, 0);
		let ii = (iv >> 1) * 3;
		const indices = this._indices;
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		indices[ii++] = iv;
		indices[ii++] = iv + 2;
		indices[ii++] = iv + 3;
	}

	protected updateCellRight(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		iv: number
	): void {
		this.updateVertexRight(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexRight(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay, 0);
		let ii = (iv >> 1) * 3;
		const indices = this._indices;
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		indices[ii++] = iv;
		indices[ii++] = iv + 2;
		indices[ii++] = iv + 3;
	}

	protected updateCellBottom(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		iv: number
	): void {
		this.updateVertexBottom(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexBottom(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay, 0);
		let ii = (iv >> 1) * 3;
		const indices = this._indices;
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		indices[ii++] = iv;
		indices[ii++] = iv + 2;
		indices[ii++] = iv + 3;
	}

	protected updateCellLeft(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		fdistance: number,
		scale: number,
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		iv: number
	): void {
		this.updateVertexLeft(iv, x0, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay, 0);
		this.updateVertexLeft(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay, 0);
		let ii = (iv >> 1) * 3;
		const indices = this._indices;
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		indices[ii++] = iv;
		indices[ii++] = iv + 2;
		indices[ii++] = iv + 3;
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
