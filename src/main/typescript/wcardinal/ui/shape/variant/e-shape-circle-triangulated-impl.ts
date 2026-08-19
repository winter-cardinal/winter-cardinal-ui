import { Matrix } from "pixi.js";
import { UtilStraightSkeleton } from "../../util/util-straight-skeleton";
import { UtilStraightSkeletonBuffer } from "../../util/util-straight-skeleton-buffer";
import { EShapeBoundary } from "../e-shape-boundary";
import { toPointsBoundary } from "../e-shape-points-formatted";
import { toTransformLocalId } from "./builders";
import { EShapeCircle } from "./e-shape-circle";
import { EShapeCircleTriangulated } from "./e-shape-circle-triangulated";

export class EShapeCircleTriangulatedImpl implements EShapeCircleTriangulated {
	protected _id: number;
	protected _parent: EShapeCircle;
	protected _sizeX: number;
	protected _sizeY: number;
	protected _transformLocalId: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
	protected _vertices: number[];
	protected _nvertices: number;
	protected _distances: number[];
	protected _lengths: number[];
	protected _clippings: number[];
	protected _uvs: number[];
	protected _indices: number[];
	protected _nindices: number;
	protected _boundary: EShapeBoundary;

	constructor(parent: EShapeCircle) {
		this._id = 0;
		this._parent = parent;
		this._sizeX = 0;
		this._sizeY = 0;
		this._transformLocalId = -1;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
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
		const parent = this._parent;
		const size = parent.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = this._sizeX !== sizeX || this._sizeY !== sizeY;

		const transformLocalId = toTransformLocalId(parent);
		const isTransformChanged = this._transformLocalId !== transformLocalId;

		const stroke = parent.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const isStrokeChanged =
			this._strokeAlign !== strokeAlign || this._strokeWidth !== strokeWidth;

		if (isSizeChanged || isTransformChanged || isStrokeChanged) {
			this._sizeX = sizeX;
			this._sizeY = sizeY;
			this._transformLocalId = transformLocalId;
			this._strokeAlign = strokeAlign;
			this._strokeWidth = strokeWidth;

			const buffer = UtilStraightSkeletonBuffer.from(
				UtilStraightSkeleton.from(
					this.newPoints(
						sizeX,
						sizeY,
						strokeAlign,
						strokeWidth,
						parent.transform.internalTransform
					)
				)
			);
			this._id += 1;
			const vertices = buffer.vertices;
			this._vertices = vertices;
			this._nvertices = buffer.vertices.length >> 1;
			this._distances = buffer.distances;
			this._lengths = buffer.lengths;
			this._clippings = buffer.clippings;
			const boundary = this._boundary;
			toPointsBoundary(vertices, boundary);
			this._uvs = this.toUvs(vertices, boundary);
			this._indices = buffer.indices;
			this._nindices = buffer.indices.length / 3;
		}
	}

	protected newPoints(
		sizeX: number,
		sizeY: number,
		strokeAlign: number,
		strokeWidth: number,
		internalTransform: Matrix
	): number[] {
		const s = strokeAlign * strokeWidth;
		const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
		const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);

		const a = internalTransform.a;
		const b = internalTransform.b;
		const c = internalTransform.c;
		const d = internalTransform.d;
		const tx = internalTransform.tx;
		const ty = internalTransform.ty;

		// (0, 0) -> (0, -sy)
		const vx = -c * sy;
		const vy = -d * sy;
		// (0, 0) -> (sx, 0)
		const hx = a * sx;
		const hy = b * sx;

		const n = 32;
		const dangle = (2 * Math.PI) / n;
		const result: number[] = [];
		for (let i = 0, angle = Math.PI * 0.5; i < n; i += 1, angle += dangle) {
			const x = Math.cos(angle);
			const y = Math.sin(angle);
			const px = hx * x + vx * y + tx;
			const py = hy * x + vy * y + ty;
			result.push(px, py);
		}
		return result;
	}

	protected toUvs(vertices: number[], boundary: EShapeBoundary): number[] {
		const result: number[] = [];
		const xmin = boundary[0];
		const ymin = boundary[1];
		const xmax = boundary[2];
		const ymax = boundary[3];
		const sx = xmax - xmin;
		const sy = ymax - ymin;
		const fx = 0 < sx ? 1 / sx : 0;
		const fy = 0 < sy ? 1 / sy : 0;
		const verticesLength = vertices.length;
		for (let i = 0; i < verticesLength; i += 2) {
			result.push((vertices[i] - xmin) * fx, (vertices[i + 1] - ymin) * fy);
		}
		return result;
	}
}
