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
		const nv = 9;
		const ni = 3;
		this._nvertices = nv;
		this._nindices = ni;

		// ID
		this._id += 1;

		//
		if (sizeX === 0 || sizeY === 0) {
			this.pad(0, 0, nv, ni, 0);
		} else {
			this.updateAll(sizeX, sizeY, scale);
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

	protected updateAll(sx: number, sy: number, scale: number): void {
		const fx = 1 / sx;
		const fy = 1 / sy;
		const ax = Math.abs(sx);
		const ay = Math.abs(sy);
		// The triangle is defined by the apex (0, -sy) and the two base
		// vertices (-sx, sy) and (sx, sy). The signs of sx and
		// sy intentionally preserve horizontal and vertical reflections.
		// The sloped edge spans ax horizontally and 2 * ay vertically.
		const b = Math.sqrt(ax * ax + 4 * ay * ay);
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
		const cy = (sy * (b - ax)) / (b + ax);
		// The distance from the incenter to every edge is the inradius.
		// Since 0 <= (side - ax) / (side + ax) <= 1, the incenter remains
		// between the apex and the base even when sy is negative.
		const d = Math.abs(sy - cy);
		const fd = 1 / d;
		// Expand the triangle around its incenter for anti-aliasing and strokes.
		// The outer vertices are shared where their interpolated attributes match.
		const x0 = 0;
		const y0 = cy + scale * (-sy - cy);
		const x1 = scale * sx;
		const y1 = cy + scale * (sy - cy);
		const x2 = -x1;
		const y2 = y1;

		// Each cell has its own vertices because `length` is the arc length projected onto
		// the cell's edge. It is `lc` at the incenter (the tangent point) and
		// `lc + scale * (l - lc)` at the outer vertices so that it equals `l` at clipping = 1.
		const indices = this._indices;

		// Top-to-right edge cell
		const l0 = 0;
		const l1 = l0 + b;
		const lc0 = b - ax;
		this.writeVertex(0, x0, y0, fd, lc0 + scale * (l0 - lc0), scale, fx, fy);
		this.writeVertex(1, x1, y1, fd, lc0 + scale * (l1 - lc0), scale, fx, fy);
		this.writeVertex(2, cx, cy, fd, lc0, 0, fx, fy);

		// Right-to-left base edge cell
		const l2 = l1 + 2 * ax;
		const lc1 = b + ax;
		this.writeVertex(3, x1, y1, fd, lc1 + scale * (l1 - lc1), scale, fx, fy);
		this.writeVertex(4, x2, y2, fd, lc1 + scale * (l2 - lc1), scale, fx, fy);
		this.writeVertex(5, cx, cy, fd, lc1, 0, fx, fy);

		// Left-to-top edge cell
		const l3 = l2 + b;
		const lc2 = b + 3 * ax;
		this.writeVertex(6, x2, y2, fd, lc2 + scale * (l2 - lc2), scale, fx, fy);
		this.writeVertex(7, x0, y0, fd, lc2 + scale * (l3 - lc2), scale, fx, fy);
		this.writeVertex(8, cx, cy, fd, lc2, 0, fx, fy);

		for (let i = 0; i < 9; ++i) {
			indices[i] = i;
		}
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
}
