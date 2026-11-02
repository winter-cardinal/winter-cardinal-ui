/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeDefaults } from "../e-shape-defaults";
import type { EShapeFan } from "./e-shape-fan";
import { EShapeFanTriangulated } from "./e-shape-fan-triangulated";
import { EShapeFanStrokeSide, toFanChi, toFanStrokeSide, toFanTheta } from "./to-fan";

/**
 * Triangulates a fan whose arc is on the ellipse with the semi-axes (w, h) centered at the origin O.
 * The vertices are computed in the frame where w and h are positive and flipped at the end.
 *
 * - A, B: the end points of the arc, (-w sin(chi), -h cos(chi)) and (+w sin(chi), -h cos(chi))
 * - C: the point where the area of the fan becomes zero when the fan shrinks, (0, -h / (1 + sin(theta)))
 * - P[i]: the points on the arc, (w sin(i phi), -h cos(i phi)) with phi = chi / N and i in [-N, N]
 * - Q[i]: the points on the medial axis of the fan, which are on the normal of the arc at P[i]
 *   and equidistant from the arc and the straight side (Q[0] = A, Q[N] = C, Q[2N] = B)
 *
 * The fan is triangulated into 2N quads P[i], P[i + 1], Q[i + 1], Q[i] and
 * two polygons O', A', Q[0], ..., Q[N] and O', B', Q[2N], ..., Q[N] at the bottom where the stroke at the sides is drawn.
 * If the bottom stroke is not necessary, the bottom quads are removed and
 * Q[i] are the points on the axis, which gives the same result as an ellipse.
 * If only the bottom stroke is necessary, the fan is triangulated in the same way as a polygon,
 * that is, two triangle fans from C and the two bottom quads.
 *
 * To reduce the load of the garbage collection, no temporary arrays are created in the triangulation.
 */
export class EShapeFanTriangulatedImpl implements EShapeFanTriangulated {
	// Work arrays for the points on the arc.
	// They are shared by all the instances because they are used only in a single synchronous triangulation.
	protected static readonly WORK_PX: number[] = [];
	protected static readonly WORK_PY: number[] = [];
	protected static readonly WORK_NX: number[] = [];
	protected static readonly WORK_NY: number[] = [];
	protected static readonly WORK_QX: number[] = [];
	protected static readonly WORK_QY: number[] = [];
	protected static readonly WORK_QD: number[] = [];
	protected static readonly WORK_LS: number[] = [];
	protected static readonly WORK_RX: number[] = [];
	protected static readonly WORK_RY: number[] = [];
	protected static readonly WORK_RL: number[] = [];

	protected _id: number;
	protected _parent: EShapeFan;
	protected _width: number;
	protected _height: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
	protected _strokeSide: EShapeFanStrokeSide;
	protected _angle: number;
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

	constructor(parent: EShapeFan) {
		this._id = 0;
		this._parent = parent;
		this._width = 0;
		this._height = 0;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
		this._strokeSide = EShapeFanStrokeSide.ALL;
		this._angle = 0;
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
		const strokeSide = toFanStrokeSide(stroke.side);
		const strokeWidth =
			stroke.enable && strokeSide !== EShapeFanStrokeSide.NONE ? stroke.width : 0;
		const isStrokeChanged =
			this._strokeAlign !== strokeAlign || this._strokeWidth !== strokeWidth;
		const isStrokeModeChanged = this._strokeSide !== strokeSide;

		const angle = parent.angle;
		const isAngleChanged = this._angle !== angle;

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

		if (isNotInitialized || isSizeChanged || isStrokeModeChanged || isAngleChanged) {
			this._sizeX = sizeX;
			this._sizeY = sizeY;
			this._strokeSide = strokeSide;
			this._angle = angle;
			this.update(sizeX, sizeY, angle, strokeSide);
		}
	}

	protected update(sx: number, sy: number, angle: number, strokeMode: EShapeFanStrokeSide): void {
		const w = Math.abs(sx);
		const h = Math.abs(sy);

		// The number of the arc segments is 2n.
		const n = EShapeDefaults.CIRCLE_SEGMENT_COUNT >> 2;
		const m = 2 * n + 1;
		const nv = 2 * m + 2 * (n + 3);
		const ni = 4 * n + 2 * (n + 1);
		this._nvertices = nv;
		this._nindices = ni;
		this._id += 1;

		const boundary = this._boundary;
		const theta = toFanTheta(angle);
		const chi = 0 < w && 0 < h && 0 < theta ? toFanChi(w, h, theta) : 0;
		const bx = w * Math.sin(chi);
		const by = h * Math.cos(chi);
		const oa = Math.sqrt(bx * bx + by * by);
		if (!(0 < bx) || !(0 < oa)) {
			boundary[0] = -w;
			boundary[1] = -h;
			boundary[2] = +w;
			boundary[3] = +h;
			this.pad(0, 0, nv, ni, 0);
			return;
		}

		// The sine and cosine of the geometric half central angle
		const st = bx / oa;
		const ct = by / oa;

		// The factors of the UVs and the signs of the flipping
		const fx = 1 / bx;
		const fy = 1 / h;
		const gx = Math.sign(sx);
		const gy = Math.sign(sy);

		if (strokeMode === EShapeFanStrokeSide.BOTTOM) {
			this.updateBottom(w, h, n, chi, bx, by, st, ct, fx, fy, gx, gy, nv, ni);
		} else {
			this.updateOthers(w, h, n, chi, bx, oa, st, ct, fx, fy, gx, gy, strokeMode, nv, ni);
		}
	}

	protected updateOthers(
		w: number,
		h: number,
		n: number,
		chi: number,
		bx: number,
		oa: number,
		st: number,
		ct: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number,
		strokeSide: EShapeFanStrokeSide,
		nv: number,
		ni: number
	): void {
		const boundary = this._boundary;
		const scale = 1.1;
		const hasBottom = strokeSide !== EShapeFanStrokeSide.TOP;
		const m = 2 * n + 1;

		// Points on the arc, their unit inward normals, and points Q on the normals
		// The sine and cosine of the angle are updated by the rotation to avoid calling Math.sin and Math.cos in the loop.
		const phi = chi / n;
		const cphi = Math.cos(phi);
		const sphi = Math.sin(phi);
		const schi = bx / w;
		const cchi = Math.cos(chi);
		const px = EShapeFanTriangulatedImpl.WORK_PX;
		const py = EShapeFanTriangulatedImpl.WORK_PY;
		const nx = EShapeFanTriangulatedImpl.WORK_NX;
		const ny = EShapeFanTriangulatedImpl.WORK_NY;
		const qx = EShapeFanTriangulatedImpl.WORK_QX;
		const qy = EShapeFanTriangulatedImpl.WORK_QY;
		const qd = EShapeFanTriangulatedImpl.WORK_QD;
		const ls = EShapeFanTriangulatedImpl.WORK_LS;
		let dmax = 0;
		let l = 0;
		let s = -schi;
		let c = cchi;
		for (let k = 0; k < m; ++k) {
			// Use the exact values at the center and the ends to prevent the accumulation of the errors.
			if (k === n) {
				s = 0;
				c = 1;
			} else if (k === m - 1) {
				s = schi;
				c = cchi;
			}
			const x = w * s;
			const y = -h * c;
			const dx = -h * s;
			const dy = w * c;
			const dn = Math.sqrt(dx * dx + dy * dy);
			const nnx = dx / dn;
			const nny = dy / dn;
			px[k] = x;
			py[k] = y;
			nx[k] = nnx;
			ny[k] = nny;

			// Q is the point on the medial axis, that is, the point on the normal
			// whose distance to the arc is equal to the distance to the straight sides.
			// The distance delta is obtained from delta = -(n . P) - delta (n . normal) for the outward unit normals n of the sides.
			// The clamps keep Q on the same side of the axis x = 0 as P and before the center of curvature,
			// otherwise adjacent normals cross each other, which happens for tall ellipses.
			let delta = Infinity;
			if (hasBottom) {
				const da = 1 + -ct * nnx + st * nny;
				if (1e-9 < da) {
					delta = Math.min(delta, (ct * x - st * y) / da);
				}
				const db = 1 + ct * nnx + st * nny;
				if (1e-9 < db) {
					delta = Math.min(delta, (-ct * x - st * y) / db);
				}
				if (k !== n && 1e-12 < Math.abs(nnx)) {
					delta = Math.min(delta, -x / nnx);
				}
				delta = Math.max(0, Math.min(delta, (dn * dn * dn) / (w * h)));
			}
			if (Number.isFinite(delta)) {
				qx[k] = x + delta * nnx;
				qy[k] = y + delta * nny;
			} else {
				// The normal is extended until it reaches x = 0 if w <= h, otherwise y = 0.
				const u = w <= h ? w / h : h / w;
				qx[k] = x + u * dx;
				qy[k] = y + u * dy;
			}
			const ddx = qx[k] - x;
			const ddy = qy[k] - y;
			const d = Math.sqrt(ddx * ddx + ddy * ddy);
			qd[k] = d;
			dmax = Math.max(dmax, d);

			if (0 < k) {
				const lx = x - px[k - 1];
				const ly = y - py[k - 1];
				l += Math.sqrt(lx * lx + ly * ly);
			}
			ls[k] = l;

			// Rotate by phi
			const ns = s * cphi + c * sphi;
			c = c * cphi - s * sphi;
			s = ns;
		}
		if (!(0 < dmax)) {
			boundary[0] = -w;
			boundary[1] = -h;
			boundary[2] = +w;
			boundary[3] = +h;
			this.pad(0, 0, nv, ni, 0);
			return;
		}

		boundary[0] = -bx;
		boundary[1] = -h;
		boundary[2] = +bx;
		boundary[3] = 0;

		const fd = 1 / dmax;
		const fs = (scale - 1) * dmax;

		// Rim vertices R are the points on the arc shifted outward by fs.
		// At the ends, they are shifted to the intersections of the shifted arc and the shifted straight sides.
		const rx = EShapeFanTriangulatedImpl.WORK_RX;
		const ry = EShapeFanTriangulatedImpl.WORK_RY;
		const rl = EShapeFanTriangulatedImpl.WORK_RL;
		for (let k = 0; k < m; ++k) {
			let x = px[k] - fs * nx[k];
			let y = py[k] - fs * ny[k];
			let lr = ls[k];
			if (hasBottom && (k === 0 || k === m - 1)) {
				const side = k === 0 ? -1 : +1;
				const n1x = -nx[k];
				const n1y = -ny[k];
				const n2x = side * ct;
				const n2y = st;
				const miter = fs / Math.max(1 + n1x * n2x + n1y * n2y, 0.05);
				x = px[k] + miter * (n1x + n2x);
				y = py[k] + miter * (n1y + n2y);
				const tx = w * cchi;
				const ty = side * h * schi;
				const tn = Math.sqrt(tx * tx + ty * ty);
				lr += ((x - px[k]) * tx + (y - py[k]) * ty) / tn;
			}
			rx[k] = x;
			ry[k] = y;
			rl[k] = lr;
		}

		// Strip
		let iv = 0;
		let ii = 0;
		const indices = this._indices;
		for (let k = 0; k < m; ++k) {
			this.writeVertex(iv++, rx[k], ry[k], rl[k], scale, fd, fx, fy, gx, gy);
			this.writeVertex(iv++, qx[k], qy[k], ls[k], 1 - qd[k] * fd, fd, fx, fy, gx, gy);
			if (k < m - 1) {
				const a = 2 * k;
				indices[ii++] = a;
				indices[ii++] = a + 2;
				indices[ii++] = a + 3;
				indices[ii++] = a;
				indices[ii++] = a + 3;
				indices[ii++] = a + 1;
			}
		}

		// Bottom polygons
		if (hasBottom) {
			const arc = ls[m - 1];
			const oy = fs / st;
			const eps = 1e-9 * w;

			// The chains of Q end at the first points on the axis because the following points go back along the axis.
			// Q is not always on the medial axis where it is clamped, so the clipping must not be less than the one of the arc.

			// Left: O', A', Q[0] (= A), ..., Q[n] (= C)
			// The straight side is OA: n = (-ct, st), l0 = oa + arc, l = (-st, -ct)
			const ll0 = oa + arc;
			let count = 0;
			this.writeSideVertex(
				iv + count++,
				0,
				oy,
				-Infinity,
				-ct,
				st,
				ll0,
				-st,
				-ct,
				fd,
				fx,
				fy,
				gx,
				gy
			);
			this.writeSideVertex(
				iv + count++,
				rx[0],
				ry[0],
				-Infinity,
				-ct,
				st,
				ll0,
				-st,
				-ct,
				fd,
				fx,
				fy,
				gx,
				gy
			);
			for (let k = 0; k <= n; ++k) {
				const floor = 1 - qd[k] * fd;
				this.writeSideVertex(
					iv + count++,
					qx[k],
					qy[k],
					floor,
					-ct,
					st,
					ll0,
					-st,
					-ct,
					fd,
					fx,
					fy,
					gx,
					gy
				);
				if (Math.abs(qx[k]) <= eps) {
					break;
				}
			}
			ii = this.writeFan(ii, iv, count);
			iv += count;

			// Right: O', B', Q[2n] (= B), ..., Q[n] (= C)
			// The straight side is BO: n = (ct, st), l0 = arc + st * B.x - ct * B.y, l = (-st, ct)
			const rl0 = arc + st * px[m - 1] - ct * py[m - 1];
			count = 0;
			this.writeSideVertex(
				iv + count++,
				0,
				oy,
				-Infinity,
				ct,
				st,
				rl0,
				-st,
				ct,
				fd,
				fx,
				fy,
				gx,
				gy
			);
			this.writeSideVertex(
				iv + count++,
				rx[m - 1],
				ry[m - 1],
				-Infinity,
				ct,
				st,
				rl0,
				-st,
				ct,
				fd,
				fx,
				fy,
				gx,
				gy
			);
			for (let k = m - 1; n <= k; --k) {
				const floor = 1 - qd[k] * fd;
				this.writeSideVertex(
					iv + count++,
					qx[k],
					qy[k],
					floor,
					ct,
					st,
					rl0,
					-st,
					ct,
					fd,
					fx,
					fy,
					gx,
					gy
				);
				if (Math.abs(qx[k]) <= eps) {
					break;
				}
			}
			ii = this.writeFan(ii, iv, count);
			iv += count;
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Triangulates the fan whose stroke is only at the straight sides OA and OB.
	 * It is the same as a polygon: the arc is a hard edge without the stroke,
	 * and triangle fans from C cover the area between the arc and the segments CA and CB.
	 * The clipping is 1 - (the distance from the straight side) / d where d is the distance from C to OA (or OB).
	 */
	protected updateBottom(
		w: number,
		h: number,
		n: number,
		chi: number,
		bx: number,
		by: number,
		st: number,
		ct: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number,
		nv: number,
		ni: number
	): void {
		const m = 2 * n + 1;
		const yc = h / (1 + st);
		const fd = (1 + st) / (h * st);
		const fs = (1.1 - 1) / fd;

		const boundary = this._boundary;
		boundary[0] = -bx;
		boundary[1] = -h;
		boundary[2] = +bx;
		boundary[3] = 0;

		// The clipping is 1 + fd * (n . p) where n is the outward unit normal of the straight side,
		// and the length is the distance along the straight side measured from O.
		// The left side is OA: n = (-ct, st), l = (-st, -ct)
		// The right side is OB: n = (ct, st), l = (st, -ct)
		// The sine and cosine of the angle are updated by the rotation to avoid calling Math.sin and Math.cos in the loops.
		const phi = chi / n;
		const cphi = Math.cos(phi);
		const sphi = Math.sin(phi);
		const schi = bx / w;
		const cchi = by / h;
		let iv = 0;
		let ii = 0;

		// Left: C, P[0], ..., P[n]
		let count = 0;
		this.writeSideVertex(iv + count++, 0, -yc, 0, -ct, st, 0, -st, -ct, fd, fx, fy, gx, gy);
		let s = -schi;
		let c = cchi;
		for (let k = 0; k <= n; ++k) {
			if (k === n) {
				s = 0;
				c = 1;
			}
			const x = w * s;
			const y = -h * c;
			this.writeSideVertex(iv + count++, x, y, 0, -ct, st, 0, -st, -ct, fd, fx, fy, gx, gy);
			const ns = s * cphi + c * sphi;
			c = c * cphi - s * sphi;
			s = ns;
		}
		ii = this.writeFan(ii, iv, count);
		iv += count;

		// Right: C, P[n], ..., P[2n]
		count = 0;
		this.writeSideVertex(iv + count++, 0, -yc, 0, ct, st, 0, st, -ct, fd, fx, fy, gx, gy);
		s = 0;
		c = 1;
		for (let k = n; k < m; ++k) {
			if (k === m - 1) {
				s = schi;
				c = cchi;
			}
			const x = w * s;
			const y = -h * c;
			this.writeSideVertex(iv + count++, x, y, 0, ct, st, 0, st, -ct, fd, fx, fy, gx, gy);
			const ns = s * cphi + c * sphi;
			c = c * cphi - s * sphi;
			s = ns;
		}
		ii = this.writeFan(ii, iv, count);
		iv += count;

		// Bottom left: O', A', A, C
		const oy = fs / st;
		this.writeSideVertex(iv, 0, oy, 0, -ct, st, 0, -st, -ct, fd, fx, fy, gx, gy);
		this.writeSideVertex(
			iv + 1,
			-bx - fs * ct,
			-by + fs * st,
			0,
			-ct,
			st,
			0,
			-st,
			-ct,
			fd,
			fx,
			fy,
			gx,
			gy
		);
		this.writeSideVertex(iv + 2, -bx, -by, 0, -ct, st, 0, -st, -ct, fd, fx, fy, gx, gy);
		this.writeSideVertex(iv + 3, 0, -yc, 0, -ct, st, 0, -st, -ct, fd, fx, fy, gx, gy);
		ii = this.writeFan(ii, iv, 4);
		iv += 4;

		// Bottom right: O', B', B, C
		this.writeSideVertex(iv, 0, oy, 0, ct, st, 0, st, -ct, fd, fx, fy, gx, gy);
		this.writeSideVertex(
			iv + 1,
			+bx + fs * ct,
			-by + fs * st,
			0,
			ct,
			st,
			0,
			st,
			-ct,
			fd,
			fx,
			fy,
			gx,
			gy
		);
		this.writeSideVertex(iv + 2, +bx, -by, 0, ct, st, 0, st, -ct, fd, fx, fy, gx, gy);
		this.writeSideVertex(iv + 3, 0, -yc, 0, ct, st, 0, st, -ct, fd, fx, fy, gx, gy);
		ii = this.writeFan(ii, iv, 4);
		iv += 4;

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes a vertex whose clipping and length are computed from the parameters of a straight side.
	 * The clipping is 1 + fd * (nx * x + ny * y), which is not less than the given floor,
	 * and the length is l0 + lx * x + ly * y.
	 */
	protected writeSideVertex(
		vertex: number,
		x: number,
		y: number,
		floor: number,
		nx: number,
		ny: number,
		l0: number,
		lx: number,
		ly: number,
		fd: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number
	): void {
		const clipping = Math.max(floor, 1 + fd * (nx * x + ny * y));
		const length = l0 + lx * x + ly * y;
		this.writeVertex(vertex, x, y, length, clipping, fd, fx, fy, gx, gy);
	}

	/**
	 * Writes the indices of a triangle fan from the first vertex and returns the next index offset.
	 */
	protected writeFan(ii: number, iv: number, count: number): number {
		const indices = this._indices;
		for (let i = 1; i < count - 1; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + i;
			indices[ii++] = iv + i + 1;
		}
		return ii;
	}

	protected writeVertex(
		vertex: number,
		x: number,
		y: number,
		length: number,
		clipping: number,
		fd: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number
	): void {
		const vertex2 = vertex << 1;
		this._vertices[vertex2] = gx * x;
		this._vertices[vertex2 + 1] = gy * y;
		this._distances[vertex] = fd;
		this._lengths[vertex] = length;
		this._clippings[vertex] = clipping;
		this._uvs[vertex2] = 0.5 * (x * fx + 1);
		this._uvs[vertex2 + 1] = 1 + y * fy;
	}

	protected pad(iv: number, ii: number, nv: number, ni: number, distance: number): void {
		for (let i = iv; i < nv; ++i) {
			const vertex2 = i << 1;
			this._vertices[vertex2] = 0;
			this._vertices[vertex2 + 1] = 0;
			this._distances[i] = distance;
			this._lengths[i] = 0;
			this._clippings[i] = 0;
			this._uvs[vertex2] = 0.5;
			this._uvs[vertex2 + 1] = 0.5;
		}
		for (let i = ii; i < ni * 3; ++i) {
			this._indices[i] = 0;
		}
		this._vertices.length = nv * 2;
		this._distances.length = nv;
		this._lengths.length = nv;
		this._clippings.length = nv;
		this._uvs.length = nv * 2;
		this._indices.length = ni * 3;
	}
}
