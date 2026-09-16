/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "../e-shape-boundary";
import type { EShapeTriangle } from "./e-shape-triangle";
import { EShapeTriangleTriangulated } from "./e-shape-triangle-triangulated";

export class EShapeTriangleTriangulatedImpl implements EShapeTriangleTriangulated {
	protected _id: number;
	protected _parent: EShapeTriangle;
	protected _width: number;
	protected _height: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
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

	constructor(parent: EShapeTriangle) {
		this._id = 0;
		this._parent = parent;
		this._width = 0;
		this._height = 0;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
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
		const nv = 7;
		const ni = 3;
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
			this.updateAll(fx, fy, ax, ay, scale, nv, ni);
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

	protected updateAll(
		fx: number,
		fy: number,
		ax: number,
		ay: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		// The triangle is defined by the top vertex (0, -ay) and the two
		// bottom vertices (-ax, ay) and (ax, ay).
		// The sloped edge spans ax horizontally and 2 * ay vertically.
		const side = Math.sqrt(ax * ax + 4 * ay * ay);
		// The base is horizontal, so its length is twice the half-width.
		const base = 2 * ax;
		// Length values are measured along the triangle perimeter.
		const perimeter = 2 * side + base;
		// The incenter lies on the vertical center line. This is its y-coordinate.
		// Along the median, the distances from the top vertex to the incenter and
		// from the incenter to the base are in the ratio 2 * side : base.
		// Thus, (ay + cy) : (ay - cy) = 2 * side : base.
		// 2 side (ay - cy) = base * (ay + cy)
		// 2 side ay - 2 side cy = base ay + base cy
		// (base + 2 side) cy = ay (2 side - base)
		// cy = ay (2 side - base) / (2 side + base)
		// cy = ay (2 side - 2 ax) / (2 side + 2 ax)
		// cy = ay (side - ax) / (side + ax)
		const cx = 0;
		const cy = (ay * (side - ax)) / (side + ax);
		// The distance from the incenter to every edge is the inradius.
		// Since 0 <= (side - ax) / (side + ax) <= 1, innerY <= ay.
		const distance = ay - cy;
		const fdistance = 1 / distance;
		// Expand the triangle around its incenter for anti-aliasing and strokes.
		// The outer vertices are shared where their interpolated attributes match.
		const x0 = 0;
		const y0 = cy - scale * (ay + cy);
		const x1 = +scale * ax;
		const y1 = cy + scale * (ay - cy);
		const x2 = -x1;
		const y2 = y1;

		// Top-to-right edge cell. The inner vertex carries the fill attributes.
		this.updateVertex(0, x0, y0, fdistance, 0, scale, fx, fy);
		this.updateVertex(1, x1, y1, fdistance, side, scale, fx, fy);
		this.updateVertex(2, cx, cy, fdistance, side - ax, 0, fx, fy);
		const indices = this._indices;
		indices[0] = 0;
		indices[1] = 1;
		indices[2] = 2;

		// Right-to-left base edge cell. The right and left outer vertices are reused.
		this.updateVertex(3, x2, y2, fdistance, side + base, scale, fx, fy);
		this.updateVertex(4, cx, cy, fdistance, side + ax, 0, fx, fy);
		indices[3] = 1;
		indices[4] = 3;
		indices[5] = 4;

		// Left-to-top edge cell. The top vertex is duplicated for the perimeter seam.
		this.updateVertex(5, x0, y0, fdistance, perimeter, scale, fx, fy);
		this.updateVertex(6, cx, cy, fdistance, perimeter - (side - ax), 0, fx, fy);
		indices[6] = 3;
		indices[7] = 5;
		indices[8] = 6;
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
