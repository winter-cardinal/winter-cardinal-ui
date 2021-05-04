import { Matrix } from "pixi.js";
import {
	toPolygonFillIndexCount,
	toPolygonFillVertexCount,
	toPolygonStrokeIndexCount,
	toPolygonStrokeVertexCount
} from "./build-polygon";
import { Polygon } from "./polygon";
import { PolygonCenter } from "./polygon-center";
import { PolygonTransformed } from "./polygon-transformed";
import { PolygonTransformedImpl } from "./polygon-transformed-impl";
import { PolygonUntransformed, PolygonUntransformedBoundary } from "./polygon-untransformed";

export abstract class PolygonImpl implements Polygon {
	readonly vertexCount: number;
	readonly vertexFillCount: number;
	readonly vertexStrokeCount: number;
	readonly indexCount: number;
	readonly indexFillCount: number;
	readonly indexStrokeCount: number;

	readonly pointCount: number;

	protected _untransformed: PolygonUntransformed;
	protected _transformed?: PolygonTransformed;

	constructor() {
		const untransformed = this.newUntransformed();
		this._untransformed = untransformed;
		const vertexCount = untransformed.vertices.length >> 1;

		const vertexFillCount = toPolygonFillVertexCount(vertexCount);
		const vertexStrokeCount = toPolygonStrokeVertexCount(vertexCount);
		const indexFillCount = toPolygonFillIndexCount(vertexCount);
		const indexStrokeCount = toPolygonStrokeIndexCount(vertexCount);
		this.vertexFillCount = vertexFillCount;
		this.vertexStrokeCount = vertexStrokeCount;
		this.vertexCount = vertexFillCount + vertexStrokeCount;
		this.indexFillCount = indexFillCount;
		this.indexStrokeCount = indexStrokeCount;
		this.indexCount = indexFillCount + indexStrokeCount;

		this.pointCount = vertexCount;
	}

	protected newUntransformed(): PolygonUntransformed {
		return {
			vertices: this.newVertices(),
			normals: this.newNormals(),
			boundary: this.newBoundary(),
			center: this.newCenter()
		};
	}

	protected getDivisionCount(): number {
		return 10;
	}

	protected newArray(length: number): number[] {
		const result: number[] = [];
		for (let i = 0; i < length; ++i) {
			result.push(0);
		}
		return result;
	}

	protected newVertices(): number[] {
		return [];
	}

	protected newNormals(): number[] {
		const result: number[] = [];
		const vertices = this.newVertices();
		for (let i = 0, imax = vertices.length; i < imax; i += 2) {
			const x0 = vertices[i];
			const y0 = vertices[i + 1];
			const j = (i + 2) % imax;
			const x1 = vertices[j];
			const y1 = vertices[j + 1];
			const dx = x1 - x0;
			const dy = y1 - y0;
			result[i] = dy;
			result[i + 1] = -dx;
		}
		return result;
	}

	protected updateVertices(
		sizeX: number,
		sizeY: number,
		radius: number,
		result: number[]
	): number[] {
		return result;
	}

	protected newBoundary(): PolygonUntransformedBoundary {
		return [-0.5, -0.5, +0.5, +0.5];
	}

	protected newCenter(): PolygonCenter {
		return [0, 0];
	}

	protected getUntransformed(sizeX: number, sizeY: number, radius: number): PolygonUntransformed {
		const result = this._untransformed;
		this.updateVertices(sizeX, sizeY, radius, result.vertices);
		return result;
	}

	getTransformed(
		originX: number,
		originY: number,
		sizeX: number,
		sizeY: number,
		radius: number,
		matrix: Matrix
	): PolygonTransformed {
		let result = this._transformed;
		if (result == null) {
			result = new PolygonTransformedImpl(this);
			this._transformed = result;
		}
		const a = matrix.a * sizeX;
		const b = matrix.b * sizeX;
		const c = matrix.c * sizeY;
		const d = matrix.d * sizeY;
		const tx = matrix.tx + originX;
		const ty = matrix.ty + originY;

		// Vertices
		const untransformed = this.getUntransformed(sizeX, sizeY, radius);
		const vertices = untransformed.vertices;
		const verticesLength = vertices.length;
		const transformedVertices = result.vertices;
		for (let i = 0; i < verticesLength; i += 2) {
			const x = vertices[i];
			const y = vertices[i + 1];
			transformedVertices[i] = a * x + c * y + tx;
			transformedVertices[i + 1] = b * x + d * y + ty;
		}

		// Normals
		const normals = untransformed.normals;
		const transformedNormals = result.normals;
		for (let i = 0; i < verticesLength; i += 2) {
			const nx = normals[i];
			const ny = normals[i + 1];
			const dx = -ny;
			const dy = +nx;
			const tdx = a * dx + c * dy;
			const tdy = b * dx + d * dy;
			transformedNormals[i] = tdy;
			transformedNormals[i + 1] = -tdx;
		}

		// Center
		const center = untransformed.center;
		const centerx = center[0];
		const centery = center[1];
		const transformedCenter = result.center;
		transformedCenter[0] = a * centerx + c * centery + tx;
		transformedCenter[1] = b * centerx + d * centery + ty;

		// Boundary
		const boundary = untransformed.boundary;
		const xmin = boundary[0];
		const ymin = boundary[1];
		const xmax = boundary[2];
		const ymax = boundary[3];
		const transformedBoundary = result.boundary;
		transformedBoundary[0] = a * xmin + c * ymin + tx;
		transformedBoundary[1] = b * xmin + d * ymin + ty;
		transformedBoundary[2] = a * xmax + c * ymin + tx;
		transformedBoundary[3] = b * xmax + d * ymin + ty;
		transformedBoundary[4] = a * xmin + c * ymax + tx;
		transformedBoundary[5] = b * xmin + d * ymax + ty;
		return result;
	}

	hitTest(
		x: number,
		y: number,
		originX: number,
		originY: number,
		sizeX: number,
		sizeY: number,
		radius: number,
		strokeWidth: number,
		strokeAlign: number,
		isStrokeEnabled: boolean,
		isFillEnabled: boolean
	): boolean {
		if (!isStrokeEnabled && !isFillEnabled) {
			return false;
		}

		const untransformed = this._untransformed;
		const dx = Math.sign(sizeX) * (x - originX);
		const dy = Math.sign(sizeY) * (y - originY);
		const boundary = untransformed.boundary;
		const s0 = strokeWidth * strokeAlign;
		const xmin = boundary[0] - s0;
		const ymin = boundary[1] - s0;
		const xmax = boundary[2] + s0;
		const ymax = boundary[3] + s0;
		if (xmin <= dx && dx <= xmax && ymin <= dy && dy <= ymax) {
			const ahx = 0.5 * Math.abs(sizeX);
			const ahy = 0.5 * Math.abs(sizeY);
			const vertices = untransformed.vertices;
			if (isStrokeEnabled && isFillEnabled) {
				const mx0 = ahx + s0;
				const my0 = ahy + s0;
				this.updateVertices(mx0, my0, radius, vertices);
				return this.hitTestAbs(dx, dy, mx0, my0, vertices);
			} else if (isStrokeEnabled) {
				const mx0 = ahx + s0;
				const my0 = ahy + s0;
				this.updateVertices(mx0, my0, radius, vertices);
				if (this.hitTestAbs(dx, dy, mx0, my0, vertices)) {
					const s1 = s0 - strokeWidth;
					const mx1 = ahx + s1;
					const my1 = ahy + s1;
					this.updateVertices(mx1, my1, radius, vertices);
					return !this.hitTestAbs(dx, dy, mx1, my1, vertices);
				}
				return false;
			} else {
				this.updateVertices(ahx, ahy, radius, vertices);
				return this.hitTestAbs(dx, dy, ahx, ahy, vertices);
			}
		}
		return false;
	}

	hitTestAbs(x: number, y: number, ahx: number, ahy: number, vertices: number[]): boolean {
		const verticesLength = vertices.length;
		if (6 <= verticesLength) {
			let result = false;
			let x0 = vertices[verticesLength - 2] * ahx;
			let y0 = vertices[verticesLength - 1] * ahy;
			for (let i = 0, imax = verticesLength - 2; i < imax; i += 2) {
				const x1 = vertices[i + 0] * ahx;
				const y1 = vertices[i + 1] * ahy;

				if ((y0 <= y && y <= y1) || (y1 <= y && y <= y0)) {
					if (x * (y1 - y0) <= (x1 - x0) * (y - y0)) {
						result = !result;
					}
				}

				x0 = x1;
				y0 = y1;
			}
			return result;
		}
		return false;
	}
}
