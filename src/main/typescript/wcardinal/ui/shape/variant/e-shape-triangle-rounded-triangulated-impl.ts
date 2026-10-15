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
	protected _path: number[];
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
		this._path = [];
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

	protected update(sizeX: number, sizeY: number, radius: number, corner: EShapeCorner): void {
		const minCornerRadius = this._strokeWidth;
		const boundary = this._boundary;
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		boundary[0] = -ax;
		boundary[1] = -ay;
		boundary[2] = +ax;
		boundary[3] = +ay;

		this._id += 1;
		if (sizeX === 0 || sizeY === 0) {
			this.pad(0, 0);
			return;
		}

		const sx = sizeX;
		const sy = sizeY;
		const sz = Math.sqrt(sx * sx + 4 * sy * sy);
		const sw = (2 * sx * sy) / (sx + sz);
		const ry = (sw * radius) / (2 * sy);
		const rz = (0.5 * (sz - sw) * radius) / sz;
		const rx = (ry * sz) / (2 * sx);

		const topX = 0;
		const topY = -sy;
		const rightX = sx;
		const rightY = sy;
		const leftX = -sx;
		const leftY = sy;
		const centerX = 0;
		const centerY = sy - sw;
		const topRightX = topX + rz * (rightX - topX);
		const topRightY = topY + rz * (rightY - topY);
		const rightTopX = rightX + ry * (topX - rightX);
		const rightTopY = rightY + ry * (topY - rightY);
		const rightBottomX = rightX + rx * (leftX - rightX);
		const rightBottomY = rightY + rx * (leftY - rightY);
		const leftBottomX = leftX + rx * (rightX - leftX);
		const leftBottomY = leftY + rx * (rightY - leftY);
		const leftTopX = leftX + ry * (topX - leftX);
		const leftTopY = leftY + ry * (topY - leftY);
		const topLeftX = topX + rz * (leftX - topX);
		const topLeftY = topY + rz * (leftY - topY);

		const vertices = this._vertices;
		let vertexCount = 0;
		vertexCount = this.appendCorner(
			vertices,
			vertexCount,
			corner & EShapeCorner.TOP,
			topLeftX,
			topLeftY,
			topX,
			topY,
			topRightX,
			topRightY,
			radius,
			minCornerRadius
		);
		vertexCount = this.appendCorner(
			vertices,
			vertexCount,
			corner & EShapeCorner.BOTTOM_RIGHT,
			rightTopX,
			rightTopY,
			rightX,
			rightY,
			rightBottomX,
			rightBottomY,
			radius,
			minCornerRadius
		);
		vertexCount = this.appendCorner(
			vertices,
			vertexCount,
			corner & EShapeCorner.BOTTOM_LEFT,
			leftBottomX,
			leftBottomY,
			leftX,
			leftY,
			leftTopX,
			leftTopY,
			radius,
			minCornerRadius
		);

		const inradius = Math.abs(sy - centerY);
		this._nvertices = vertexCount * 3;
		this._nindices = vertexCount;
		const path = this._path;
		for (let i = 0, imax = vertexCount << 1; i < imax; ++i) {
			path[i] = vertices[i];
		}
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;
		const scale = 1.1;
		let length = 0;
		for (let i = 0; i < vertexCount; ++i) {
			const i2 = i << 1;
			const nextI2 = (i + 1) % vertexCount << 1;
			const rawPointX = path[i2];
			const rawPointY = path[i2 + 1];
			const rawNextX = path[nextI2];
			const rawNextY = path[nextI2 + 1];
			const dx = rawNextX - rawPointX;
			const dy = rawNextY - rawPointY;
			const edgeLength = Math.sqrt(dx * dx + dy * dy);
			const edgeDistance =
				edgeLength === 0
					? inradius
					: Math.abs(
							(rawPointX - centerX) * (rawNextY - centerY) -
								(rawPointY - centerY) * (rawNextX - centerX)
					  ) / edgeLength;
			const distance = edgeDistance === 0 ? 0 : 1 / edgeDistance;
			const pointX = centerX + scale * (rawPointX - centerX);
			const pointY = centerY + scale * (rawPointY - centerY);
			const nextX = centerX + scale * (rawNextX - centerX);
			const nextY = centerY + scale * (rawNextY - centerY);
			const projectedLength =
				edgeLength === 0
					? edgeLength * 0.5
					: ((centerX - rawPointX) * dx + (centerY - rawPointY) * dy) / edgeLength;
			const pointIndex = i * 3;
			const nextPointIndex = pointIndex + 1;
			const centerIndex = pointIndex + 2;
			const pointI2 = pointIndex << 1;
			const nextPointI2 = nextPointIndex << 1;
			const centerI2 = centerIndex << 1;
			vertices[pointI2] = pointX;
			vertices[pointI2 + 1] = pointY;
			vertices[nextPointI2] = nextX;
			vertices[nextPointI2 + 1] = nextY;
			distances[pointIndex] = distance;
			distances[nextPointIndex] = distance;
			lengths[pointIndex] = length;
			lengths[nextPointIndex] = length + edgeLength;
			clippings[pointIndex] = 1.1;
			clippings[nextPointIndex] = 1.1;
			uvs[pointI2] = 0.5 * (pointX / sx + 1);
			uvs[pointI2 + 1] = 0.5 * (pointY / sy + 1);
			uvs[nextPointI2] = 0.5 * (vertices[nextPointI2] / sx + 1);
			uvs[nextPointI2 + 1] = 0.5 * (vertices[nextPointI2 + 1] / sy + 1);
			distances[centerIndex] = distance;
			lengths[centerIndex] = length + projectedLength;
			clippings[centerIndex] = 0;
			vertices[centerI2] = centerX;
			vertices[centerI2 + 1] = centerY;
			uvs[centerI2] = 0.5 * (centerX / sx + 1);
			uvs[centerI2 + 1] = 0.5 * (centerY / sy + 1);
			indices[i * 3] = pointIndex;
			indices[i * 3 + 1] = nextPointIndex;
			indices[i * 3 + 2] = centerIndex;
			length += edgeLength;
		}
		vertices.length = this._nvertices * 2;
		distances.length = this._nvertices;
		lengths.length = this._nvertices;
		clippings.length = this._nvertices;
		uvs.length = this._nvertices * 2;
		indices.length = this._nindices * 3;
	}

	protected appendCorner(
		vertices: number[],
		vertexOffset: number,
		isRounded: number,
		startX: number,
		startY: number,
		vertexX: number,
		vertexY: number,
		endX: number,
		endY: number,
		radius: number,
		minCornerRadius: number
	): number {
		if (isRounded) {
			if (0 < radius) {
				const startDX = startX - vertexX;
				const startDY = startY - vertexY;
				const endDX = endX - vertexX;
				const endDY = endY - vertexY;
				const startLength = Math.sqrt(startDX * startDX + startDY * startDY);
				const endLength = Math.sqrt(endDX * endDX + endDY * endDY);
				const startUX = startLength === 0 ? 0 : startDX / startLength;
				const startUY = startLength === 0 ? 0 : startDY / startLength;
				const endUX = endLength === 0 ? 0 : endDX / endLength;
				const endUY = endLength === 0 ? 0 : endDY / endLength;
				const bisectorX = startUX + endUX;
				const bisectorY = startUY + endUY;
				const bisectorLength = Math.sqrt(bisectorX * bisectorX + bisectorY * bisectorY);
				const cosHalf = Math.sqrt(
					Math.max(0, 0.5 * (1 + startUX * endUX + startUY * endUY))
				);
				const sinHalf = Math.sqrt(Math.max(0, 1 - cosHalf * cosHalf));
				if (
					0 < startLength &&
					0 < endLength &&
					0 < bisectorLength &&
					0 < cosHalf &&
					0 < sinHalf
				) {
					const tangentLength = Math.max(
						0.5 * (startLength + endLength),
						minCornerRadius * (cosHalf / sinHalf)
					);
					const arcStartX = vertexX + startUX * tangentLength;
					const arcStartY = vertexY + startUY * tangentLength;
					const arcEndX = vertexX + endUX * tangentLength;
					const arcEndY = vertexY + endUY * tangentLength;
					const centerDistance = tangentLength / cosHalf;
					const arcCenterX = vertexX + (bisectorX / bisectorLength) * centerDistance;
					const arcCenterY = vertexY + (bisectorY / bisectorLength) * centerDistance;
					const startRX = arcStartX - arcCenterX;
					const startRY = arcStartY - arcCenterY;
					const endRX = arcEndX - arcCenterX;
					const endRY = arcEndY - arcCenterY;
					const startAngle = Math.atan2(startRY, startRX);
					const angle = Math.atan2(
						startRX * endRY - startRY * endRX,
						startRX * endRX + startRY * endRY
					);
					const arcRadius = centerDistance * sinHalf;
					const segments = EShapeDefaults.CIRCLE_SEGMENT_COUNT;
					for (let i = 0; i <= segments; ++i) {
						const vertex2 = (vertexOffset + i) << 1;
						if (i === 0) {
							vertices[vertex2] = arcStartX;
							vertices[vertex2 + 1] = arcStartY;
						} else if (i === segments) {
							vertices[vertex2] = arcEndX;
							vertices[vertex2 + 1] = arcEndY;
						} else {
							const currentAngle = startAngle + (angle * i) / segments;
							vertices[vertex2] = arcCenterX + arcRadius * Math.cos(currentAngle);
							vertices[vertex2 + 1] = arcCenterY + arcRadius * Math.sin(currentAngle);
						}
					}
					return vertexOffset + segments + 1;
				}

				const segments = EShapeDefaults.CIRCLE_SEGMENT_COUNT;
				for (let i = 0; i <= segments; ++i) {
					const t = i / segments;
					const oneMinusT = 1 - t;
					const a = oneMinusT * oneMinusT;
					const b = 2 * oneMinusT * t;
					const c = t * t;
					const vertex2 = (vertexOffset + i) << 1;
					vertices[vertex2] = a * startX + b * vertexX + c * endX;
					vertices[vertex2 + 1] = a * startY + b * vertexY + c * endY;
				}
				return vertexOffset + segments + 1;
			} else {
				vertices[vertexOffset << 1] = vertexX;
				vertices[(vertexOffset << 1) + 1] = vertexY;
				return vertexOffset + 1;
			}
		} else {
			vertices[vertexOffset << 1] = vertexX;
			vertices[(vertexOffset << 1) + 1] = vertexY;
			return vertexOffset + 1;
		}
	}

	protected pad(iv: number, ii: number): void {
		const vertexCount = 4;
		const indexCount = 3;
		this._nvertices = vertexCount;
		this._nindices = indexCount;
		for (let i = iv; i < vertexCount; ++i) {
			const i2 = i << 1;
			this._vertices[i2] = 0;
			this._vertices[i2 + 1] = 0;
			this._distances[i] = 0;
			this._lengths[i] = 0;
			this._clippings[i] = 0;
			this._uvs[i2] = 0.5;
			this._uvs[i2 + 1] = 0.5;
		}
		for (let i = ii; i < indexCount * 3; ++i) {
			this._indices[i] = 0;
		}
		this._vertices.length = vertexCount * 2;
		this._distances.length = vertexCount;
		this._lengths.length = vertexCount;
		this._clippings.length = vertexCount;
		this._uvs.length = vertexCount * 2;
		this._indices.length = indexCount * 3;
	}
}
