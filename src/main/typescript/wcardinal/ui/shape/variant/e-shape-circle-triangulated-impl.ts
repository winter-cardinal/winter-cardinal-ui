import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeDefaults } from "../e-shape-defaults";
import type { EShapeCircle } from "./e-shape-circle";
import { EShapeCircleTriangulated } from "./e-shape-circle-triangulated";

export class EShapeCircleTriangulatedImpl implements EShapeCircleTriangulated {
	protected _id: number;
	protected _parent: EShapeCircle;
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

	constructor(parent: EShapeCircle) {
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

		if (isSizeChanged) {
			this._sizeX = sizeX;
			this._sizeY = sizeY;
			this.update(sizeX, sizeY, EShapeDefaults.CIRCLE_SEGMENT_COUNT);
		}
	}

	protected update(sizeX: number, sizeY: number, n: number): void {
		// Boundary
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const boundary = this._boundary;
		boundary[0] = -ax;
		boundary[1] = -ay;
		boundary[2] = +ax;
		boundary[3] = +ay;

		// # of vertices and # of indices
		const nvertices = 3 * n - 3;
		const nindices = 2 * n - 4;
		this._nvertices = nvertices;
		this._nindices = nindices;

		// ID
		this._id += 1;

		//
		if (sizeX === 0 || sizeY === 0) {
			this.update3(nvertices, nindices);
		} else if (ax === ay) {
			this.update0(sizeX, sizeY, n);
		} else if (ay < ax) {
			this.update1(sizeX, sizeY, n);
		} else {
			this.update2(sizeX, sizeY, n);
		}
	}

	/**
	 * Precondition: sizeX !== 0 && sizeY !== 0 & abs(sizeX) === abs(sizeY)
	 */
	protected update0(sizeX: number, sizeY: number, n: number): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		const dangle = (2 * Math.PI) / n;
		const c = Math.cos(dangle);
		const s = Math.sin(dangle);

		// First Edge
		const x0 = 0;
		const y0 = sizeY;
		let u = -s;
		let v = c;
		const x1 = u * sizeX;
		const y1 = v * sizeY;
		const dx = 0.5 * (x1 + x0) - 0;
		const dy = 0.5 * (y1 + y0) - 0;
		const fdistance = 1 / Math.sqrt(dx * dx + dy * dy);
		const lx = x1 - x0;
		const ly = y1 - y0;
		const dl = Math.sqrt(lx * lx + ly * ly);
		let l1 = dl;
		let l2 = 0.5 * dl;
		vertices[0] = x0;
		vertices[1] = y0;
		vertices[2] = x1;
		vertices[3] = y1;
		vertices[4] = 0;
		vertices[5] = 0;
		distances[0] = fdistance;
		distances[1] = fdistance;
		distances[2] = fdistance;
		clippings[0] = 1;
		clippings[1] = 1;
		clippings[2] = 0;
		lengths[0] = 0;
		lengths[1] = l1;
		lengths[2] = l2;
		uvs[0] = 0.5;
		uvs[1] = 1.0;
		uvs[2] = 0.5 * (u + 1);
		uvs[3] = 0.5 * (v + 1);
		uvs[4] = 0.5;
		uvs[5] = 0.5;
		indices[0] = 0;
		indices[1] = 1;
		indices[2] = 2;

		// The Other Edges
		let iv1 = 3;
		let iv2 = 6;
		let ii = 3;
		for (let i = 2; i <= n; ++i) {
			const nu = c * u - s * v;
			const nv = s * u + c * v;
			u = nu;
			v = nv;
			l1 += dl;
			l2 += dl;
			vertices[iv2 + 0] = sizeX * u;
			vertices[iv2 + 1] = sizeY * v;
			vertices[iv2 + 2] = 0;
			vertices[iv2 + 3] = 0;
			distances[iv1 + 0] = fdistance;
			distances[iv1 + 1] = fdistance;
			clippings[iv1 + 0] = 1;
			clippings[iv1 + 1] = 0;
			lengths[iv1 + 0] = l1;
			lengths[iv1 + 1] = l2;
			uvs[iv2 + 0] = 0.5 * (u + 1);
			uvs[iv2 + 1] = 0.5 * (v + 1);
			uvs[iv2 + 2] = 0.5;
			uvs[iv2 + 3] = 0.5;
			indices[ii + 0] = iv1 - 2;
			indices[ii + 1] = iv1;
			indices[ii + 2] = iv1 + 1;
			iv1 += 2;
			iv2 += 4;
			ii += 3;
		}

		// Degenerate triangles keep the buffer sizes consistent with elongated circles.
		for (let i = 4; i < n; ++i) {
			vertices[iv2 + 0] = 0;
			vertices[iv2 + 1] = 0;
			distances[iv1] = fdistance;
			clippings[iv1] = 0;
			lengths[iv1] = 0;
			uvs[iv2 + 0] = 0.5;
			uvs[iv2 + 1] = 0.5;
			indices[ii + 0] = iv1;
			indices[ii + 1] = iv1;
			indices[ii + 2] = iv1;
			iv1 += 1;
			iv2 += 2;
			ii += 3;
		}
	}

	/**
	 * Precondition: sizeX !== 0 && sizeY !== 0 && abs(sizeY) < abs(sizeX)
	 */
	protected update1(sizeX: number, sizeY: number, n: number): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		const dangle = (2 * Math.PI) / n;
		const c = Math.cos(dangle);
		const s = Math.sin(dangle);
		const fx = sizeX / sizeY;
		const fy = sizeY / sizeX;

		const ileft = n >> 2;
		const iright = ileft * 3;
		const ppx = sizeX * s;
		const ppy = sizeY * c;
		let px = 0;
		let py = sizeY;
		let nx = -sizeX * s;
		let ny = sizeY * c;
		let nnx = nx * c - ny * fx * s;
		let nny = nx * fy * s + ny * c;
		let sx = this.toSkeletonX(ppx, ppy, px, py, nx, ny);

		vertices[0] = 0;
		vertices[1] = sizeY;
		clippings[0] = 0;
		lengths[0] = 0;
		uvs[0] = 0.5;
		uvs[1] = 1;

		let iv = 1;
		let ii = 0;
		let length = 0;
		let current = 0;
		let maxDistance = 0;
		for (let i = 0; i < n; ++i) {
			const inext = (i + 1) % n;
			let nsx: number;
			// At the leftmost and rightmost vertices, reuse the adjacent skeleton point.
			if (i === ileft || inext === ileft || i === iright || inext === iright) {
				nsx = sx;
			} else {
				nsx = this.toSkeletonX(px, py, nx, ny, nnx, nny);
			}
			const dx = nx - px;
			const dy = ny - py;
			const dl = Math.sqrt(dx * dx + dy * dy);
			const fl = 1 / dl;
			const nlength = length + dl;

			const iv1 = iv++;
			const iv2 = iv1 << 1;
			vertices[iv2 + 0] = nx;
			vertices[iv2 + 1] = ny;
			clippings[iv1] = 0;
			lengths[iv1] = nlength;
			uvs[iv2 + 0] = 0.5 * (nx / sizeX + 1);
			uvs[iv2 + 1] = 0.5 * (ny / sizeY + 1);

			const niv1 = iv++;
			const niv2 = niv1 << 1;
			const ndistance = Math.abs(-dx * py - dy * (nsx - px)) * fl;
			vertices[niv2] = nsx;
			vertices[niv2 + 1] = 0;
			clippings[niv1] = ndistance;
			maxDistance = Math.max(maxDistance, ndistance);
			lengths[niv1] = length + ((nsx - px) * dx - py * dy) * fl;
			uvs[niv2] = 0.5 * (nsx / sizeX + 1);
			uvs[niv2 + 1] = 0.5;
			indices[ii++] = current;
			indices[ii++] = iv1;
			indices[ii++] = niv1;

			if (sx !== nsx) {
				const miv1 = iv++;
				const miv2 = miv1 << 1;
				const mdistance = Math.abs(-dx * py - dy * (sx - px)) * fl;
				vertices[miv2] = sx;
				vertices[miv2 + 1] = 0;
				clippings[miv1] = mdistance;
				maxDistance = Math.max(maxDistance, mdistance);
				lengths[miv1] = length + ((sx - px) * dx - py * dy) * fl;
				uvs[miv2] = 0.5 * (sx / sizeX + 1);
				uvs[miv2 + 1] = 0.5;
				indices[ii++] = current;
				indices[ii++] = niv1;
				indices[ii++] = miv1;
			}

			current = iv1;
			length = nlength;
			px = nx;
			py = ny;
			nx = nnx;
			ny = nny;
			nnx = c * nx - s * ny * fx;
			nny = s * nx * fy + c * ny;
			sx = nsx;
		}

		const fdistance = 1 / maxDistance;
		for (let i = 0; i < iv; ++i) {
			distances[i] = fdistance;
			clippings[i] = 1 - clippings[i] * fdistance;
		}
	}

	protected toSkeletonX(
		ppx: number,
		ppy: number,
		px: number,
		py: number,
		pnx: number,
		pny: number
	): number {
		const pdx = ppx - px;
		const pdy = ppy - py;
		const ndx = pnx - px;
		const ndy = pny - py;
		const fp = 1 / Math.sqrt(pdx * pdx + pdy * pdy);
		const fn = 1 / Math.sqrt(ndx * ndx + ndy * ndy);
		const bx = pdx * fp + ndx * fn;
		const by = pdy * fp + ndy * fn;
		return px - (py * bx) / by;
	}

	/**
	 * Precondition: sizeX !== 0 && sizeY !== 0 && abs(sizeX) < abs(sizeY)
	 */
	protected update2(sizeX: number, sizeY: number, n: number): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		const dangle = (2 * Math.PI) / n;
		const c = Math.cos(dangle);
		const s = Math.sin(dangle);
		const fx = sizeX / sizeY;
		const fy = sizeY / sizeX;

		const itop = 0;
		const ibottom = n >> 1;
		const ppx = sizeX * s;
		const ppy = sizeY * c;
		const pppx = 2 * sizeX * s * c;
		const pppy = sizeY * (c * c - s * s);
		let px = 0;
		let py = sizeY;
		let nx = -sizeX * s;
		let ny = sizeY * c;
		let nnx = c * nx - s * ny * fx;
		let nny = s * nx * fy + c * ny;
		let sy = this.toSkeletonY(pppx, pppy, ppx, ppy, px, py);

		vertices[0] = 0;
		vertices[1] = sizeY;
		clippings[0] = 0;
		lengths[0] = 0;
		uvs[0] = 0.5;
		uvs[1] = 1;

		let iv = 1;
		let ii = 0;
		let length = 0;
		let current = 0;
		let maxDistance = 0;
		for (let i = 0; i < n; ++i) {
			const inext = (i + 1) % n;
			let nsy: number;
			// At the topmost and bottommost vertices, reuse the adjacent skeleton point.
			if (i === itop || inext === itop || i === ibottom || inext === ibottom) {
				nsy = sy;
			} else {
				nsy = this.toSkeletonY(px, py, nx, ny, nnx, nny);
			}
			const dx = nx - px;
			const dy = ny - py;
			const dl = Math.sqrt(dx * dx + dy * dy);
			const fl = 1 / dl;
			const nlength = length + dl;

			const iv1 = iv++;
			const iv2 = iv1 << 1;
			vertices[iv2 + 0] = nx;
			vertices[iv2 + 1] = ny;
			clippings[iv1] = 0;
			lengths[iv1] = nlength;
			uvs[iv2 + 0] = 0.5 * (nx / sizeX + 1);
			uvs[iv2 + 1] = 0.5 * (ny / sizeY + 1);

			const niv1 = iv++;
			const niv2 = niv1 << 1;
			const ndistance = Math.abs(dx * (nsy - py) + dy * px) * fl;
			vertices[niv2] = 0;
			vertices[niv2 + 1] = nsy;
			clippings[niv1] = ndistance;
			maxDistance = Math.max(maxDistance, ndistance);
			lengths[niv1] = length + (-px * dx + (nsy - py) * dy) * fl;
			uvs[niv2] = 0.5;
			uvs[niv2 + 1] = 0.5 * (nsy / sizeY + 1);
			indices[ii++] = current;
			indices[ii++] = iv1;
			indices[ii++] = niv1;

			if (sy !== nsy) {
				const miv1 = iv++;
				const miv2 = miv1 << 1;
				const mdistance = Math.abs(dx * (sy - py) + dy * px) * fl;
				vertices[miv2] = 0;
				vertices[miv2 + 1] = sy;
				clippings[miv1] = mdistance;
				maxDistance = Math.max(maxDistance, mdistance);
				lengths[miv1] = length + (-px * dx + (sy - py) * dy) * fl;
				uvs[miv2] = 0.5;
				uvs[miv2 + 1] = 0.5 * (sy / sizeY + 1);
				indices[ii++] = current;
				indices[ii++] = niv1;
				indices[ii++] = miv1;
			}

			current = iv1;
			length = nlength;
			px = nx;
			py = ny;
			nx = nnx;
			ny = nny;
			nnx = c * nx - s * ny * fx;
			nny = s * nx * fy + c * ny;
			sy = nsy;
		}

		const fdistance = 1 / maxDistance;
		for (let i = 0; i < iv; ++i) {
			distances[i] = fdistance;
			clippings[i] = 1 - clippings[i] * fdistance;
		}
	}

	protected toSkeletonY(
		ppx: number,
		ppy: number,
		px: number,
		py: number,
		pnx: number,
		pny: number
	): number {
		const pdx = ppx - px;
		const pdy = ppy - py;
		const ndx = pnx - px;
		const ndy = pny - py;
		const fp = 1 / Math.sqrt(pdx * pdx + pdy * pdy);
		const fn = 1 / Math.sqrt(ndx * ndx + ndy * ndy);
		const bx = pdx * fp + ndx * fn;
		const by = pdy * fp + ndy * fn;
		return py - (px * by) / bx;
	}

	/**
	 * Precondition: sizeX === 0 || sizeY === 0
	 */
	protected update3(nv: number, ni: number): void {
		const vertices = this._vertices;
		const distances = this._distances;
		const lengths = this._lengths;
		const clippings = this._clippings;
		const uvs = this._uvs;
		const indices = this._indices;

		// Fill with degenerated triangles
		for (let i = 0, iv = 0; i < nv; i += 1, iv += 2) {
			vertices[iv] = 0;
			vertices[iv + 1] = 0;
			distances[i] = 0;
			lengths[i] = 0;
			clippings[i] = 0;
			uvs[iv] = 0.5;
			uvs[iv + 1] = 0.5;
		}
		for (let i = 0, ii = 0; i < ni; i += 1, ii += 3) {
			indices[ii + 0] = 0;
			indices[ii + 1] = 0;
			indices[ii + 2] = 0;
		}
	}
}
