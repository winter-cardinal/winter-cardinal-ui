/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeCircleTriangulated } from "./e-shape-circle-triangulated";
import type { EShapeRectangle } from "./e-shape-rectangle";

export class EShapeRectangleTriangulatedImpl implements EShapeCircleTriangulated {
	protected _id: number;
	protected _parent: EShapeRectangle;
	protected _width: number;
	protected _height: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
	protected _strokeSide: EShapeStrokeSide;
	protected _sizeX: number;
	protected _sizeY: number;
	protected _vertices: number[];
	protected _nvertices: number;
	protected _distances: number[];
	protected _lengths: number[];
	protected _clippings: number[];
	protected _uvs: number[];
	protected _indices: number[];
	protected _nindices: number;
	protected _boundary: EShapeBoundary;

	constructor(parent: EShapeRectangle) {
		this._id = 0;
		this._parent = parent;
		this._width = 0;
		this._height = 0;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
		this._strokeSide = EShapeStrokeSide.NONE;
		this._sizeX = 0;
		this._sizeY = 0;
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

		if (isNotInitialized || isSizeChanged || isStrokeChanged) {
			this._sizeX = sizeX;
			this._sizeY = sizeY;
			this.update(sizeX, sizeY, 1.1);
		}
	}

	protected update(sizeX: number, sizeY: number, scale: number): void {
		// Boundary
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const boundary = this._boundary;
		boundary[0] = -ax;
		boundary[1] = -ay;
		boundary[2] = +ax;
		boundary[3] = +ay;

		// # of vertices and # of indices
		const nv = 14;
		const ni = 6;
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
					this.updateNone(fx, fy, ax, ay, scale, nv, ni);
					break;
				case EShapeStrokeSide.ALL:
					if (ay <= ax) {
						this.updateAll0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateAll1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.TOP:
					this.updateTop(fx, fy, ax, ay, scale, nv, ni);
					break;
				case EShapeStrokeSide.RIGHT:
					this.updateRight(fx, fy, ax, ay, scale, nv, ni);
					break;
				case EShapeStrokeSide.BOTTOM:
					this.updateBottom(fx, fy, ax, ay, scale, nv, ni);
					break;
				case EShapeStrokeSide.LEFT:
					this.updateLeft(fx, fy, ax, ay, scale, nv, ni);
					break;
				case EShapeStrokeSide.TOP_OR_BOTTOM:
					this.updateTopBottom(fx, fy, ax, ay, scale, nv, ni);
					break;
				case EShapeStrokeSide.LEFT_OR_RIGHT:
					this.updateLeftRight(fx, fy, ax, ay, scale, nv, ni);
					break;
				case EShapeStrokeSide.TOP_OR_RIGHT:
					if (ay <= ax) {
						this.updateTopRight0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateTopRight1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.TOP_OR_LEFT:
					if (ay <= ax) {
						this.updateTopLeft0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateTopLeft1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.BOTTOM_OR_RIGHT:
					if (ay <= ax) {
						this.updateBottomRight0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateBottomRight1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.BOTTOM_OR_LEFT:
					if (ay <= ax) {
						this.updateBottomLeft0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateBottomLeft1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_TOP:
					if (2 * ay <= ax) {
						this.updateNotTop0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateNotTop1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_RIGHT:
					if (2 * ax <= ay) {
						this.updateNotRight0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateNotRight1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_BOTTOM:
					if (2 * ay <= ax) {
						this.updateNotBottom0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateNotBottom1(fx, fy, ax, ay, scale, nv, ni);
					}
					break;
				case EShapeStrokeSide.NOT_LEFT:
					if (2 * ax <= ay) {
						this.updateNotLeft0(fx, fy, ax, ay, scale, nv, ni);
					} else {
						this.updateNotLeft1(fx, fy, ax, ay, scale, nv, ni);
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

	protected updateTop(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		const fdistance = 1 / (2 * ay);
		this.updateCellTop(
			-ax,
			-ay - (scale - 1) / fdistance,
			+ax,
			+ay,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay,
			0
		);
		this.pad(4, 6, nv, ni, fdistance);
	}

	protected updateRight(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		const fdistance = 1 / (2 * ax);
		this.updateCellRight(
			-ax,
			-ay,
			+ax + (scale - 1) / fdistance,
			+ay,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay,
			0
		);
		this.pad(4, 6, nv, ni, fdistance);
	}

	protected updateBottom(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		const fdistance = 1 / (2 * ay);
		this.updateCellBottom(
			-ax,
			-ay,
			+ax,
			+ay + (scale - 1) / fdistance,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay,
			0
		);
		this.pad(4, 6, nv, ni, fdistance);
	}

	protected updateLeft(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		const fdistance = 1 / (2 * ax);
		this.updateCellLeft(
			-ax - (scale - 1) / fdistance,
			-ay,
			+ax,
			+ay,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay,
			0
		);
		this.pad(4, 6, nv, ni, fdistance);
	}

	protected updateLeftRight(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
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
		this.updateVertexTop(0, left, top, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(1, right, top, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(2, splitX, bottom, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(3, left, bottom, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(4, right, top, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(5, right, bottom, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(6, splitX, bottom, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexTop(0, left, top, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(1, right, top, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(2, left, splitY, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(3, right, top, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(4, right, bottom, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(5, left, bottom, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(6, left, splitY, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexTop(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexRight(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexBottom(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexLeft(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexTop(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 3, x3, y3, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexRight(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 3, x3, y3, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexBottom(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 3, x3, y3, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexLeft(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 1, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 2, x2, y2, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 3, x3, y3, fdistance, scale, fx, fy, ax, ay);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + (reverse ? 2 : 1);
		this._indices[ii + 2] = iv + (reverse ? 1 : 2);
		this._indices[ii + 3] = iv;
		this._indices[ii + 4] = iv + (reverse ? 3 : 2);
		this._indices[ii + 5] = iv + (reverse ? 2 : 3);
	}

	protected updateNone(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		this.updateCellNone(-ax, -ay, +ax, +ay, 0, scale, fx, fy, ax, ay, 0);
		this.pad(4, 6, nv, ni, 0);
	}

	protected updateAll0(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		const distance = ay;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const outerLeft = -ax - shift;
		const outerRight = +ax + shift;
		const outerTop = -ay - shift;
		const outerBottom = +ay + shift;
		const innerLeft = -ax + ay;
		const innerRight = +ax - ay;

		this.updateQuadTop(
			0,
			0,
			outerLeft,
			outerTop,
			outerRight,
			outerTop,
			innerRight,
			0,
			innerLeft,
			0,
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
			outerRight,
			outerTop,
			outerRight,
			outerBottom,
			innerRight,
			0,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadBottom(
			7,
			9,
			outerRight,
			outerBottom,
			outerLeft,
			outerBottom,
			innerLeft,
			0,
			innerRight,
			0,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriLeft(
			11,
			15,
			outerLeft,
			outerBottom,
			outerLeft,
			outerTop,
			innerLeft,
			0,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(14, 18, nv, ni, fdistance);
	}

	protected updateAll1(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		const distance = ax;
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const outerLeft = -ax - shift;
		const outerRight = +ax + shift;
		const outerTop = -ay - shift;
		const outerBottom = +ay + shift;
		const innerTop = -ay + ax;
		const innerBottom = +ay - ax;

		this.updateTriTop(
			0,
			0,
			outerLeft,
			outerTop,
			outerRight,
			outerTop,
			0,
			innerTop,
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
			outerRight,
			outerTop,
			outerRight,
			outerBottom,
			0,
			innerBottom,
			0,
			innerTop,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateTriBottom(
			7,
			9,
			outerRight,
			outerBottom,
			outerLeft,
			outerBottom,
			0,
			innerBottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.updateQuadLeft(
			10,
			12,
			outerLeft,
			outerBottom,
			outerLeft,
			outerTop,
			0,
			innerTop,
			0,
			innerBottom,
			fdistance,
			scale,
			fx,
			fy,
			ax,
			ay
		);
		this.pad(14, 18, nv, ni, fdistance);
	}

	protected updateCellNone(
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
		this.updateVertex(iv, x0, y0, 0, 0, 0, fx, fy);
		this.updateVertex(iv + 1, x1, y0, 0, 0, 0, fx, fy);
		this.updateVertex(iv + 2, x1, y1, 0, 0, 0, fx, fy);
		this.updateVertex(iv + 3, x0, y1, 0, 0, 0, fx, fy);
		let ii = (iv >> 1) * 3;
		const indices = this._indices;
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		indices[ii++] = iv;
		indices[ii++] = iv + 2;
		indices[ii++] = iv + 3;
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
		this.updateVertexTop(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexTop(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexRight(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexRight(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexBottom(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexBottom(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay);
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
		this.updateVertexLeft(iv, x0, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 1, x1, y0, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 2, x1, y1, fdistance, scale, fx, fy, ax, ay);
		this.updateVertexLeft(iv + 3, x0, y1, fdistance, scale, fx, fy, ax, ay);
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
		ay: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			x + ax,
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
		ay: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			2 * ax + y + ay,
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
		ay: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			3 * ax + 2 * ay - x,
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
		ay: number
	): void {
		this.updateVertex(
			vertex,
			x,
			y,
			fdistance,
			4 * ax + 3 * ay - y,
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
}
