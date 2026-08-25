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

		if (isNotInitialized || isSizeChanged) {
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
		const nv = 0; // TODO: IMPLEMENT THIS
		const ni = 0; // TODO: IMPLEMENT THIS
		this._nvertices = nv;
		this._nindices = ni;

		// ID
		this._id += 1;

		//
		if (sizeX === 0 || sizeY === 0) {
			this.pad(0, 0, nv, ni, 0);
		} else if (ax === ay) {
			const side = this._parent.stroke.side;
			switch (side) {
				case EShapeStrokeSide.ALL:
					this.update0a(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.NONE:
					this.update0b(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.TOP:
				case EShapeStrokeSide.RIGHT:
				case EShapeStrokeSide.BOTTOM:
				case EShapeStrokeSide.LEFT:
					this.update0c(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.TOP_OR_RIGHT:
				case EShapeStrokeSide.TOP_OR_BOTTOM:
				case EShapeStrokeSide.TOP_OR_LEFT:
				case EShapeStrokeSide.BOTTOM_OR_RIGHT:
				case EShapeStrokeSide.LEFT_OR_RIGHT:
					this.update0d(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.NOT_TOP:
				case EShapeStrokeSide.NOT_RIGHT:
				case EShapeStrokeSide.NOT_BOTTOM:
				case EShapeStrokeSide.NOT_LEFT:
					this.update0e(sizeX, sizeY, scale, side, nv, ni);
					break;
			}
		} else if (ay < ax) {
			const side = this._parent.stroke.side;
			switch (side) {
				case EShapeStrokeSide.ALL:
					this.update1a(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.NONE:
					this.update1b(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.TOP:
				case EShapeStrokeSide.RIGHT:
				case EShapeStrokeSide.BOTTOM:
				case EShapeStrokeSide.LEFT:
					this.update1c(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.TOP_OR_RIGHT:
				case EShapeStrokeSide.TOP_OR_BOTTOM:
				case EShapeStrokeSide.TOP_OR_LEFT:
				case EShapeStrokeSide.BOTTOM_OR_RIGHT:
				case EShapeStrokeSide.LEFT_OR_RIGHT:
					this.update1d(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.NOT_TOP:
				case EShapeStrokeSide.NOT_RIGHT:
				case EShapeStrokeSide.NOT_BOTTOM:
				case EShapeStrokeSide.NOT_LEFT:
					this.update1e(sizeX, sizeY, scale, side, nv, ni);
					break;
			}
		} else {
			const side = this._parent.stroke.side;
			switch (side) {
				case EShapeStrokeSide.ALL:
					this.update2a(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.NONE:
					this.update2b(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.TOP:
				case EShapeStrokeSide.RIGHT:
				case EShapeStrokeSide.BOTTOM:
				case EShapeStrokeSide.LEFT:
					this.update2c(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.TOP_OR_RIGHT:
				case EShapeStrokeSide.TOP_OR_BOTTOM:
				case EShapeStrokeSide.TOP_OR_LEFT:
				case EShapeStrokeSide.BOTTOM_OR_RIGHT:
				case EShapeStrokeSide.LEFT_OR_RIGHT:
					this.update2d(sizeX, sizeY, scale, side, nv, ni);
					break;
				case EShapeStrokeSide.NOT_TOP:
				case EShapeStrokeSide.NOT_RIGHT:
				case EShapeStrokeSide.NOT_BOTTOM:
				case EShapeStrokeSide.NOT_LEFT:
					this.update2e(sizeX, sizeY, scale, side, nv, ni);
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
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) === abs(sizeY)
	 *     * side === EShapeStrokeSide.ALL
	 */
	protected update0a(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) === abs(sizeY)
	 *     * side === EShapeStrokeSide.NONE
	 */
	protected update0b(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) === abs(sizeY)
	 *     * side === EShapeStrokeSide.TOP or RIGHT, BOTTOM, LEFT
	 */
	protected update0c(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) === abs(sizeY)
	 *     * side === EShapeStrokeSide.TOP_OR_RIGHT or TOP_OR_BOTTOM, TOP_OR_LEFT, BOTTOM_OR_RIGHT, LEFT_OR_RIGHT
	 */
	protected update0d(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) === abs(sizeY)
	 *     * side === EShapeStrokeSide.NOT_TOP or NOT_RIGHT, NOT_BOTTOM, NOT_LEFT
	 */
	protected update0e(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeY) < abs(sizeX)
	 *     * side === EShapeStrokeSide.ALL
	 */
	protected update1a(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeY) < abs(sizeX)
	 *     * side === EShapeStrokeSide.NONE
	 */
	protected update1b(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeY) < abs(sizeX)
	 *     * side === EShapeStrokeSide.TOP or RIGHT, BOTTOM, LEFT
	 */
	protected update1c(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeY) < abs(sizeX)
	 *     * side === EShapeStrokeSide.TOP_OR_RIGHT or TOP_OR_BOTTOM, TOP_OR_LEFT, BOTTOM_OR_RIGHT, LEFT_OR_RIGHT
	 */
	protected update1d(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeY) < abs(sizeX)
	 *     * side === EShapeStrokeSide.NOT_TOP or NOT_RIGHT, NOT_BOTTOM, NOT_LEFT
	 */
	protected update1e(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) < abs(sizeY)
	 *     * side === EShapeStrokeSide.ALL
	 */
	protected update2a(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) < abs(sizeY)
	 *     * side === EShapeStrokeSide.NONE
	 */
	protected update2b(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) < abs(sizeY)
	 *     * side === EShapeStrokeSide.TOP or RIGHT, BOTTOM, LEFT
	 */
	protected update2c(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) < abs(sizeY)
	 *     * side === EShapeStrokeSide.TOP_OR_RIGHT or TOP_OR_BOTTOM, TOP_OR_LEFT, BOTTOM_OR_RIGHT, LEFT_OR_RIGHT
	 */
	protected update2d(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}

	/**
	 * Precondition:
	 *     * sizeX !== 0 &&
	 *     * sizeY !== 0 &&
	 *     * abs(sizeX) < abs(sizeY)
	 *     * side === EShapeStrokeSide.NOT_TOP or NOT_RIGHT, NOT_BOTTOM, NOT_LEFT
	 */
	protected update2e(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		// TODO: IMPLEMENT THIS
	}
}
