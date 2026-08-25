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
		const nv = 36;
		const ni = 18;
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
				case EShapeStrokeSide.BOTTOM_OR_LEFT:
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
				case EShapeStrokeSide.BOTTOM_OR_LEFT:
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
				case EShapeStrokeSide.BOTTOM_OR_LEFT:
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
		this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangleSingle(sizeX, sizeY, scale, side, nv, ni);
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
		if (side === EShapeStrokeSide.TOP_OR_RIGHT) {
			this.updateTr(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.TOP_OR_LEFT) {
			this.updateTl(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.BOTTOM_OR_RIGHT) {
			this.updateBr(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.BOTTOM_OR_LEFT) {
			this.updateBl(sizeX, sizeY, scale, nv, ni);
		} else if (
			side === EShapeStrokeSide.TOP_OR_BOTTOM ||
			side === EShapeStrokeSide.LEFT_OR_RIGHT
		) {
			this.updateTb(sizeX, sizeY, scale, side, nv, ni);
		} else {
			this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
		}
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
		this.updateRectangleThree(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangleSingle(sizeX, sizeY, scale, side, nv, ni);
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
		if (side === EShapeStrokeSide.TOP_OR_RIGHT) {
			this.updateTr(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.TOP_OR_LEFT) {
			this.updateTl(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.BOTTOM_OR_RIGHT) {
			this.updateBr(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.BOTTOM_OR_LEFT) {
			this.updateBl(sizeX, sizeY, scale, nv, ni);
		} else if (
			side === EShapeStrokeSide.TOP_OR_BOTTOM ||
			side === EShapeStrokeSide.LEFT_OR_RIGHT
		) {
			this.updateTb(sizeX, sizeY, scale, side, nv, ni);
		} else {
			this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
		}
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
		this.updateRectangleThree(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
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
		this.updateRectangleSingle(sizeX, sizeY, scale, side, nv, ni);
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
		if (side === EShapeStrokeSide.TOP_OR_RIGHT) {
			this.updateTr(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.TOP_OR_LEFT) {
			this.updateTl(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.BOTTOM_OR_RIGHT) {
			this.updateBr(sizeX, sizeY, scale, nv, ni);
		} else if (side === EShapeStrokeSide.BOTTOM_OR_LEFT) {
			this.updateBl(sizeX, sizeY, scale, nv, ni);
		} else if (
			side === EShapeStrokeSide.TOP_OR_BOTTOM ||
			side === EShapeStrokeSide.LEFT_OR_RIGHT
		) {
			this.updateTb(sizeX, sizeY, scale, side, nv, ni);
		} else {
			this.updateRectangle(sizeX, sizeY, scale, side, nv, ni);
		}
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
		this.updateRectangleThree(sizeX, sizeY, scale, side, nv, ni);
	}

	protected updateRectangleSingle(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		let fdistance: number;
		switch (side) {
			case EShapeStrokeSide.TOP:
				fdistance = 1 / (2 * ay);
				this.updateCell(
					-ax,
					-ay - (scale - 1) / fdistance,
					+ax,
					+ay,
					side,
					fdistance,
					scale,
					sizeX,
					sizeY,
					ax,
					ay,
					0
				);
				break;
			case EShapeStrokeSide.RIGHT:
				fdistance = 1 / (2 * ax);
				this.updateCell(
					-ax,
					-ay,
					+ax + (scale - 1) / fdistance,
					+ay,
					side,
					fdistance,
					scale,
					sizeX,
					sizeY,
					ax,
					ay,
					0
				);
				break;
			case EShapeStrokeSide.BOTTOM:
				fdistance = 1 / (2 * ay);
				this.updateCell(
					-ax,
					-ay,
					+ax,
					+ay + (scale - 1) / fdistance,
					side,
					fdistance,
					scale,
					sizeX,
					sizeY,
					ax,
					ay,
					0
				);
				break;
			default:
				fdistance = 1 / (2 * ax);
				this.updateCell(
					-ax - (scale - 1) / fdistance,
					-ay,
					+ax,
					+ay,
					side,
					fdistance,
					scale,
					sizeX,
					sizeY,
					ax,
					ay,
					0
				);
				break;
		}
		this.pad(4, 6, nv, ni, fdistance);
	}

	protected updateTb(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		let fdistance: number;
		if (side === EShapeStrokeSide.LEFT_OR_RIGHT) {
			fdistance = 1 / ax;
			const shift = (scale - 1) / fdistance;
			this.updateCell(
				-ax - shift,
				-ay,
				0,
				+ay,
				EShapeStrokeSide.LEFT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay,
				0
			);
			this.updateCell(
				0,
				-ay,
				+ax + shift,
				+ay,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay,
				4
			);
		} else {
			fdistance = 1 / ay;
			const shift = (scale - 1) / fdistance;
			this.updateCell(
				-ax,
				-ay - shift,
				+ax,
				0,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay,
				0
			);
			this.updateCell(
				-ax,
				0,
				+ax,
				+ay + shift,
				EShapeStrokeSide.BOTTOM,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay,
				4
			);
		}
		this.pad(8, 12, nv, ni, fdistance);
	}

	protected updateTr(sizeX: number, sizeY: number, scale: number, nv: number, ni: number): void {
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const distance = 2 * Math.min(ax, ay);
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax + shift;
		const top = -ay - shift;
		const bottom = +ay;
		const indices = this._indices;

		if (ay <= ax) {
			const splitX = ax - 2 * ay;
			this.updateCellVertex(
				0,
				left,
				top,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				1,
				right,
				top,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				2,
				splitX,
				bottom,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				3,
				left,
				bottom,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				4,
				right,
				top,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				5,
				right,
				bottom,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				6,
				splitX,
				bottom,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			indices[0] = 0;
			indices[1] = 1;
			indices[2] = 2;
			indices[3] = 0;
			indices[4] = 2;
			indices[5] = 3;
			indices[6] = 4;
			indices[7] = 5;
			indices[8] = 6;
		} else {
			const splitY = 2 * ax - ay;
			this.updateCellVertex(
				0,
				left,
				top,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				1,
				right,
				top,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				2,
				left,
				splitY,
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				3,
				right,
				top,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				4,
				right,
				bottom,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				5,
				left,
				bottom,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateCellVertex(
				6,
				left,
				splitY,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			indices[0] = 0;
			indices[1] = 1;
			indices[2] = 2;
			indices[3] = 3;
			indices[4] = 4;
			indices[5] = 5;
			indices[6] = 3;
			indices[7] = 5;
			indices[8] = 6;
		}

		this.pad(7, 9, nv, ni, fdistance);
	}

	protected updateBl(sizeX: number, sizeY: number, scale: number, nv: number, ni: number): void {
		this.updateTr(sizeX, sizeY, scale, nv, ni);

		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const fdistance = 1 / (2 * Math.min(ax, ay));
		const horizontalEnd = ay <= ax ? 4 : 3;
		for (let vertex = 0; vertex < horizontalEnd; ++vertex) {
			const vertex2 = vertex << 1;
			this.updateCellVertex(
				vertex,
				-this._vertices[vertex2],
				-this._vertices[vertex2 + 1],
				EShapeStrokeSide.BOTTOM,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
		}
		for (let vertex = horizontalEnd; vertex < 7; ++vertex) {
			const vertex2 = vertex << 1;
			this.updateCellVertex(
				vertex,
				-this._vertices[vertex2],
				-this._vertices[vertex2 + 1],
				EShapeStrokeSide.LEFT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
		}
	}

	protected updateTl(sizeX: number, sizeY: number, scale: number, nv: number, ni: number): void {
		this.updateTr(sizeX, sizeY, scale, nv, ni);

		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const fdistance = 1 / (2 * Math.min(ax, ay));
		const horizontalEnd = ay <= ax ? 4 : 3;
		for (let vertex = 0; vertex < horizontalEnd; ++vertex) {
			const vertex2 = vertex << 1;
			this.updateCellVertex(
				vertex,
				-this._vertices[vertex2],
				this._vertices[vertex2 + 1],
				EShapeStrokeSide.TOP,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
		}
		for (let vertex = horizontalEnd; vertex < 7; ++vertex) {
			const vertex2 = vertex << 1;
			this.updateCellVertex(
				vertex,
				-this._vertices[vertex2],
				this._vertices[vertex2 + 1],
				EShapeStrokeSide.LEFT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
		}
		for (let index = 0; index < 9; index += 3) {
			const second = this._indices[index + 1];
			this._indices[index + 1] = this._indices[index + 2];
			this._indices[index + 2] = second;
		}
	}

	protected updateBr(sizeX: number, sizeY: number, scale: number, nv: number, ni: number): void {
		this.updateTr(sizeX, sizeY, scale, nv, ni);

		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const fdistance = 1 / (2 * Math.min(ax, ay));
		const horizontalEnd = ay <= ax ? 4 : 3;
		for (let vertex = 0; vertex < horizontalEnd; ++vertex) {
			const vertex2 = vertex << 1;
			this.updateCellVertex(
				vertex,
				this._vertices[vertex2],
				-this._vertices[vertex2 + 1],
				EShapeStrokeSide.BOTTOM,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
		}
		for (let vertex = horizontalEnd; vertex < 7; ++vertex) {
			const vertex2 = vertex << 1;
			this.updateCellVertex(
				vertex,
				this._vertices[vertex2],
				-this._vertices[vertex2 + 1],
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
		}
		for (let index = 0; index < 9; index += 3) {
			const second = this._indices[index + 1];
			this._indices[index + 1] = this._indices[index + 2];
			this._indices[index + 2] = second;
		}
	}

	protected updateRectangleNotTop(
		sizeX: number,
		sizeY: number,
		scale: number,
		nv: number,
		ni: number
	): void {
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const distance = Math.min(ax, 2 * ay);
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax - shift;
		const right = +ax + shift;
		const top = -ay;
		const bottom = +ay + shift;

		if (2 * ay <= ax) {
			const splitLeft = 2 * ay - ax;
			const splitRight = ax - 2 * ay;
			this.updateTriangle(
				0,
				0,
				left,
				top,
				splitLeft,
				top,
				left,
				bottom,
				EShapeStrokeSide.LEFT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateQuadrilateral(
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
				EShapeStrokeSide.BOTTOM,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateTriangle(
				7,
				9,
				splitRight,
				top,
				right,
				top,
				right,
				bottom,
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.pad(10, 12, nv, ni, fdistance);
		} else {
			const splitY = ay - ax;
			this.updateQuadrilateral(
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
				EShapeStrokeSide.LEFT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateQuadrilateral(
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
				EShapeStrokeSide.RIGHT,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.updateTriangle(
				8,
				12,
				0,
				splitY,
				right,
				bottom,
				left,
				bottom,
				EShapeStrokeSide.BOTTOM,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
			this.pad(11, 15, nv, ni, fdistance);
		}
	}

	protected updateRectangleThree(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		if (side === EShapeStrokeSide.NOT_TOP) {
			this.updateRectangleNotTop(sizeX, sizeY, scale, nv, ni);
			return;
		}

		const isSwapped = side === EShapeStrokeSide.NOT_LEFT || side === EShapeStrokeSide.NOT_RIGHT;
		if (isSwapped) {
			this.updateRectangleNotTop(sizeY, sizeX, scale, nv, ni);
		} else {
			this.updateRectangleNotTop(sizeX, sizeY, scale, nv, ni);
		}

		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const canonicalAx = isSwapped ? ay : ax;
		const canonicalAy = isSwapped ? ax : ay;
		const fdistance = 1 / Math.min(canonicalAx, 2 * canonicalAy);
		const isWide = 2 * canonicalAy <= canonicalAx;
		const firstEnd = isWide ? 3 : 4;
		const secondEnd = isWide ? 7 : 8;
		const vertexEnd = isWide ? 10 : 11;
		for (let vertex = 0; vertex < vertexEnd; ++vertex) {
			const vertex2 = vertex << 1;
			const x = this._vertices[vertex2];
			const y = this._vertices[vertex2 + 1];
			let canonicalEdge: EShapeStrokeSide;
			if (vertex < firstEnd) {
				canonicalEdge = EShapeStrokeSide.LEFT;
			} else if (vertex < secondEnd) {
				canonicalEdge = isWide ? EShapeStrokeSide.BOTTOM : EShapeStrokeSide.RIGHT;
			} else {
				canonicalEdge = isWide ? EShapeStrokeSide.RIGHT : EShapeStrokeSide.BOTTOM;
			}
			let transformedX: number;
			let transformedY: number;
			let edge: EShapeStrokeSide;
			if (side === EShapeStrokeSide.NOT_BOTTOM) {
				transformedX = x;
				transformedY = -y;
				edge =
					canonicalEdge === EShapeStrokeSide.BOTTOM
						? EShapeStrokeSide.TOP
						: canonicalEdge;
			} else if (side === EShapeStrokeSide.NOT_LEFT) {
				transformedX = y;
				transformedY = -x;
				edge =
					canonicalEdge === EShapeStrokeSide.LEFT
						? EShapeStrokeSide.BOTTOM
						: canonicalEdge === EShapeStrokeSide.BOTTOM
						  ? EShapeStrokeSide.RIGHT
						  : EShapeStrokeSide.TOP;
			} else {
				transformedX = -y;
				transformedY = x;
				edge =
					canonicalEdge === EShapeStrokeSide.LEFT
						? EShapeStrokeSide.TOP
						: canonicalEdge === EShapeStrokeSide.BOTTOM
						  ? EShapeStrokeSide.LEFT
						  : EShapeStrokeSide.BOTTOM;
			}
			this.updateCellVertex(
				vertex,
				transformedX,
				transformedY,
				edge,
				fdistance,
				scale,
				sizeX,
				sizeY,
				ax,
				ay
			);
		}

		if (side === EShapeStrokeSide.NOT_BOTTOM) {
			const indexEnd = isWide ? 12 : 15;
			for (let index = 0; index < indexEnd; index += 3) {
				const second = this._indices[index + 1];
				this._indices[index + 1] = this._indices[index + 2];
				this._indices[index + 2] = second;
			}
		}
	}

	protected updateTriangle(
		iv: number,
		ii: number,
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		edge: EShapeStrokeSide,
		fdistance: number,
		scale: number,
		sizeX: number,
		sizeY: number,
		ax: number,
		ay: number
	): void {
		this.updateCellVertex(iv, x0, y0, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 1, x1, y1, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 2, x2, y2, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + 1;
		this._indices[ii + 2] = iv + 2;
	}

	protected updateQuadrilateral(
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
		edge: EShapeStrokeSide,
		fdistance: number,
		scale: number,
		sizeX: number,
		sizeY: number,
		ax: number,
		ay: number
	): void {
		this.updateCellVertex(iv, x0, y0, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 1, x1, y1, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 2, x2, y2, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 3, x3, y3, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this._indices[ii] = iv;
		this._indices[ii + 1] = iv + 1;
		this._indices[ii + 2] = iv + 2;
		this._indices[ii + 3] = iv;
		this._indices[ii + 4] = iv + 2;
		this._indices[ii + 5] = iv + 3;
	}

	protected updateRectangle(
		sizeX: number,
		sizeY: number,
		scale: number,
		side: EShapeStrokeSide,
		nv: number,
		ni: number
	): void {
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const distance = Math.min(ax, ay);
		const fdistance = 1 / distance;
		const shift = (scale - 1) * distance;
		const left = -ax;
		const right = +ax;
		const top = -ay;
		const bottom = +ay;
		const innerLeft = left + distance;
		const innerRight = right - distance;
		const innerTop = top + distance;
		const innerBottom = bottom - distance;
		const outerLeft = left - shift;
		const outerRight = right + shift;
		const outerTop = top - shift;
		const outerBottom = bottom + shift;
		const hasTop = !!(side & EShapeStrokeSide.TOP);
		const hasRight = !!(side & EShapeStrokeSide.RIGHT);
		const hasBottom = !!(side & EShapeStrokeSide.BOTTOM);
		const hasLeft = !!(side & EShapeStrokeSide.LEFT);
		const topLeft = hasTop ? EShapeStrokeSide.TOP : hasLeft ? EShapeStrokeSide.LEFT : 0;
		const topRight = hasTop ? EShapeStrokeSide.TOP : hasRight ? EShapeStrokeSide.RIGHT : 0;
		const bottomLeft = hasBottom
			? EShapeStrokeSide.BOTTOM
			: hasLeft
			  ? EShapeStrokeSide.LEFT
			  : 0;
		const bottomRight = hasBottom
			? EShapeStrokeSide.BOTTOM
			: hasRight
			  ? EShapeStrokeSide.RIGHT
			  : 0;

		this.updateCell(
			topLeft === EShapeStrokeSide.LEFT ? outerLeft : left,
			topLeft === EShapeStrokeSide.TOP ? outerTop : top,
			innerLeft,
			innerTop,
			topLeft,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			0
		);
		this.updateCell(
			innerLeft,
			hasTop ? outerTop : top,
			innerRight,
			innerTop,
			hasTop ? EShapeStrokeSide.TOP : 0,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			4
		);
		this.updateCell(
			innerRight,
			topRight === EShapeStrokeSide.TOP ? outerTop : top,
			topRight === EShapeStrokeSide.RIGHT ? outerRight : right,
			innerTop,
			topRight,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			8
		);
		this.updateCell(
			hasLeft ? outerLeft : left,
			innerTop,
			innerLeft,
			innerBottom,
			hasLeft ? EShapeStrokeSide.LEFT : 0,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			12
		);
		this.updateCell(
			innerLeft,
			innerTop,
			innerRight,
			innerBottom,
			0,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			16
		);
		this.updateCell(
			innerRight,
			innerTop,
			hasRight ? outerRight : right,
			innerBottom,
			hasRight ? EShapeStrokeSide.RIGHT : 0,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			20
		);
		this.updateCell(
			bottomLeft === EShapeStrokeSide.LEFT ? outerLeft : left,
			innerBottom,
			innerLeft,
			bottomLeft === EShapeStrokeSide.BOTTOM ? outerBottom : bottom,
			bottomLeft,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			24
		);
		this.updateCell(
			innerLeft,
			innerBottom,
			innerRight,
			hasBottom ? outerBottom : bottom,
			hasBottom ? EShapeStrokeSide.BOTTOM : 0,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			28
		);
		this.updateCell(
			innerRight,
			innerBottom,
			bottomRight === EShapeStrokeSide.RIGHT ? outerRight : right,
			bottomRight === EShapeStrokeSide.BOTTOM ? outerBottom : bottom,
			bottomRight,
			fdistance,
			scale,
			sizeX,
			sizeY,
			ax,
			ay,
			32
		);

		this.pad(36, 54, nv, ni, fdistance);
	}

	protected updateCell(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		edge: EShapeStrokeSide,
		fdistance: number,
		scale: number,
		sizeX: number,
		sizeY: number,
		ax: number,
		ay: number,
		iv: number
	): void {
		const indices = this._indices;
		this.updateCellVertex(iv, x0, y0, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 1, x1, y0, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 2, x1, y1, edge, fdistance, scale, sizeX, sizeY, ax, ay);
		this.updateCellVertex(iv + 3, x0, y1, edge, fdistance, scale, sizeX, sizeY, ax, ay);

		let ii = (iv >> 1) * 3;
		indices[ii++] = iv;
		indices[ii++] = iv + 1;
		indices[ii++] = iv + 2;
		indices[ii++] = iv;
		indices[ii++] = iv + 2;
		indices[ii++] = iv + 3;
	}

	protected updateCellVertex(
		vertex: number,
		x: number,
		y: number,
		edge: EShapeStrokeSide,
		fdistance: number,
		scale: number,
		sizeX: number,
		sizeY: number,
		ax: number,
		ay: number
	): void {
		let clipping = 0;
		let length = 0;
		switch (edge) {
			case EShapeStrokeSide.TOP:
				clipping = (y + ay) * -fdistance + 1;
				length = x + ax;
				break;
			case EShapeStrokeSide.RIGHT:
				clipping = (x - ax) * fdistance + 1;
				length = 2 * ax + y + ay;
				break;
			case EShapeStrokeSide.BOTTOM:
				clipping = (y - ay) * fdistance + 1;
				length = 3 * ax + 2 * ay - x;
				break;
			case EShapeStrokeSide.LEFT:
				clipping = (x + ax) * -fdistance + 1;
				length = 4 * ax + 3 * ay - y;
				break;
		}
		this.updateVertex(
			vertex,
			x,
			y,
			edge !== 0 ? fdistance : 0,
			length,
			Math.min(scale, clipping),
			sizeX,
			sizeY
		);
	}

	protected updateVertex(
		vertex: number,
		x: number,
		y: number,
		distance: number,
		length: number,
		clipping: number,
		sizeX: number,
		sizeY: number
	): void {
		const vertex2 = vertex << 1;
		this._vertices[vertex2] = x;
		this._vertices[vertex2 + 1] = y;
		this._distances[vertex] = distance;
		this._lengths[vertex] = length;
		this._clippings[vertex] = clipping;
		this._uvs[vertex2] = 0.5 * (x / sizeX + 1);
		this._uvs[vertex2 + 1] = 0.5 * (y / sizeY + 1);
	}
}
