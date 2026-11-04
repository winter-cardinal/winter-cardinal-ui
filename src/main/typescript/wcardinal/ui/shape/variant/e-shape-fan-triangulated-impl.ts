/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { EShape } from "../e-shape";
import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeFanTriangulated } from "./e-shape-fan-triangulated";
import { toFanAngleCentric } from "./to-fan-angle-centric";
import { toFanAngleEccentric } from "./to-fan-angle-eccentric";

/**
 * Triangulates a fan whose arc is on the ellipse with the semi-axes (w, h) centered at the origin O.
 * The vertices are computed in the frame where w and h are positive and flipped at the end.
 *
 * ## Points
 *
 * - O: the apex of the fan, the origin
 * - A, B: the end points of the arc, (-w sin(ea), -h cos(ea)) and (+w sin(ea), -h cos(ea))
 * - C: the point where the area of the fan becomes zero when the fan shrinks, (0, -h / (1 + sin(ca)))
 * - P[k]: the points on the arc, k in [0, 2N] (P[0] = A, P[N] is the top, P[2N] = B)
 * - Q[k]: the points on the medial axis of the fan, which are on the normal of the arc at P[k]
 *   and equidistant from the arc and the straight sides (Q[0] = A, Q[N] = C, Q[2N] = B)
 * - R[k]: the points P[k] shifted outward for the anti-aliasing
 * - O': the point O shifted outward for the anti-aliasing
 *
 * ## Stroke sides
 *
 * The arc is stroked if any of the LEFT, TOP and RIGHT bits of the stroke side is set (ARC below),
 * and the straight sides are stroked if the BOTTOM bit is set.
 * The clipping of a vertex is 1 on the outline and decreases toward the inside by (the distance from the outline) * fd,
 * where the outline is the arc and/or the straight sides depending on the stroke side.
 *
 * - ARC and BOTTOM (and NONE): the stroke is at the arc and the straight sides.
 *   The fan is triangulated into the strip P[k], P[k + 1], Q[k + 1], Q[k] and
 *   the two polygons O', A', Q[0], ..., Q[N] and O', B', Q[2N], ..., Q[N] at the bottom.
 * - ARC: the stroke is only at the arc.
 *   For a circle and a semi-ellipse, Q[k] are the points on the axis, which gives the exact fan with the strip only.
 *   For the other ellipses, Q[k] are on the medial axis as ALL, and the two polygons
 *   O, Q[0], ..., Q[N] and O, Q[2N], ..., Q[N] are added at the bottom without the stroke and the anti-aliasing.
 * - BOTTOM: the stroke is only at the straight sides.
 *   It is the same as a polygon. Two triangle fans from C cover the area between the arc and the segments CA and CB,
 *   and two quads O', A', A, C and O', B', B, C cover the rest.
 */
export class EShapeFanTriangulatedImpl implements EShapeFanTriangulated {
	/** The ratio of the outer edge, where the clipping is 1, to the edge of the anti-aliasing */
	protected static readonly SCALE = 1.1;

	// Work arrays shared by all the instances because they are used only in a single synchronous triangulation.
	// All of them are indexed by k, which is in [0, 2N].
	/** P: the points on the arc */
	protected static readonly WORK_ARC_X: number[] = [];
	protected static readonly WORK_ARC_Y: number[] = [];
	/** The lengths of the polyline P[0], ..., P[k] */
	protected static readonly WORK_ARC_L: number[] = [];
	/** The unit inward normals of the arc */
	protected static readonly WORK_NORMAL_X: number[] = [];
	protected static readonly WORK_NORMAL_Y: number[] = [];
	/** The magnitudes of the tangents, that is, the speeds of the arc */
	protected static readonly WORK_SPEED: number[] = [];
	/** Q: the points on the normals */
	protected static readonly WORK_MEDIAL_X: number[] = [];
	protected static readonly WORK_MEDIAL_Y: number[] = [];
	/** The distances from P to Q */
	protected static readonly WORK_MEDIAL_D: number[] = [];
	/** R: the points on the arc shifted outward */
	protected static readonly WORK_RIM_X: number[] = [];
	protected static readonly WORK_RIM_Y: number[] = [];

	protected _id: number;
	protected _parent: EShape;
	protected _width: number;
	protected _height: number;
	protected _strokeAlign: number;
	protected _strokeWidth: number;
	protected _strokeSideArc: boolean;
	protected _strokeSideBottom: boolean;
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

	constructor(parent: EShape) {
		this._id = 0;
		this._parent = parent;
		this._width = 0;
		this._height = 0;
		this._strokeAlign = 0;
		this._strokeWidth = 0;
		this._strokeSideArc = true;
		this._strokeSideBottom = true;
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
		const strokeSideArc = (stroke.side & EShapeStrokeSide.NOT_BOTTOM) !== 0;
		const strokeSideBottom = (stroke.side & EShapeStrokeSide.BOTTOM) !== 0;
		const strokeWidth = stroke.enable && (strokeSideArc || strokeSideBottom) ? stroke.width : 0;
		const isStrokeChanged =
			this._strokeAlign !== strokeAlign || this._strokeWidth !== strokeWidth;
		const isStrokeSideChanged =
			this._strokeSideArc !== strokeSideArc || this._strokeSideBottom !== strokeSideBottom;

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

		if (isNotInitialized || isSizeChanged || isStrokeSideChanged || isAngleChanged) {
			this._sizeX = sizeX;
			this._sizeY = sizeY;
			this._strokeSideArc = strokeSideArc;
			this._strokeSideBottom = strokeSideBottom;
			this._angle = angle;
			this.update(sizeX, sizeY, angle, strokeSideArc, strokeSideBottom);
		}
	}

	protected update(sx: number, sy: number, angle: number, ssa: boolean, ssb: boolean): void {
		// The number of the arc segments is 2n and the number of the points on the arc is m.
		const n = EShapeDefaults.CIRCLE_SEGMENT_COUNT >> 2;
		const m = 2 * n + 1;
		const nv = 4 * (m - 1) + 2 * (n + 4);
		const ni = 4 * n + 2 * (n + 2);
		this._nvertices = nv;
		this._nindices = ni;
		this._id += 1;

		// The eccentric angle ea of A and B, and the sine and cosine of it
		const ax = Math.abs(sx);
		const ay = Math.abs(sy);
		if (ax <= 0 || ay <= 0) {
			this.updateEmpty(ax, ay, nv, ni);
			return;
		}
		const ca = toFanAngleCentric(angle);
		const ea = toFanAngleEccentric(ax, ay, ca);
		const sea = Math.sin(ea);
		const cea = Math.cos(ea);
		const bx = ax * sea;
		const by = ay * cea;
		const bz = bx * bx + by * by;
		if (bx <= 0 || bz <= 0) {
			this.updateEmpty(ax, ay, nv, ni);
			return;
		}

		// The sine and cosine of the geometric half central angle
		const oa = Math.sqrt(bz);
		const st = bx / oa;
		const ct = by / oa;

		// The factors of the UVs and the signs of the flipping
		const fx = 1 / bx;
		const fy = 1 / ay;
		const gx = Math.sign(sx);
		const gy = Math.sign(sy);

		if (!ssa && ssb) {
			this.updateBottom(ax, ay, n, ea, sea, cea, bx, by, st, ct, fx, fy, gx, gy, nv, ni);
		} else {
			this.updateArc(
				ax,
				ay,
				n,
				ea,
				sea,
				cea,
				bx,
				oa,
				st,
				ct,
				fx,
				fy,
				gx,
				gy,
				ssa,
				ssb,
				nv,
				ni
			);
		}
	}

	/**
	 * Fills the empty fan, which has no vertices to draw.
	 */
	protected updateEmpty(w: number, h: number, nv: number, ni: number): void {
		const boundary = this._boundary;
		boundary[0] = -w;
		boundary[1] = -h;
		boundary[2] = +w;
		boundary[3] = +h;
		this.pad(0, 0, nv, ni, 0);
	}

	protected updateArc(
		w: number,
		h: number,
		n: number,
		ea: number,
		sea: number,
		cea: number,
		bx: number,
		oa: number,
		st: number,
		ct: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number,
		ssa: boolean,
		ssb: boolean,
		nv: number,
		ni: number
	): void {
		const m = 2 * n + 1;

		// sided: the straight sides are the outline, which has the stroke and the anti-aliasing
		// capped: the polygons are added at the bottom to cover the sector with the hard straight sides
		// chained: Q is on the medial axis. Otherwise, Q is on the axis x = 0 (w <= h) or y = 0 (h < w)
		// For a circle and a semi-ellipse, Q on the axis gives the exact fan.
		const sided = !ssa || ssb;
		const isExact = Math.abs(w - h) <= 1e-9 * w || Math.PI * 0.5 <= ea;
		const capped = !sided && !isExact;
		const chained = sided || capped;

		this.computeArcPoints(w, h, n, ea, sea, cea);
		this.computeArcNormals(w, h, n);
		let dmax = this.computeMedialPoints(w, h, n, st, ct, chained);
		if (capped) {
			// The distance field of the arc must cover O, which is the farthest point from the arc,
			// because the clipping in the polygons at the bottom is interpolated from the arc to O.
			dmax = Math.max(dmax, h <= w ? h : oa);
		}
		if (dmax <= 0) {
			this.updateEmpty(w, h, nv, ni);
			return;
		}

		const boundary = this._boundary;
		boundary[0] = -bx;
		boundary[1] = -h;
		boundary[2] = +bx;
		boundary[3] = 0;

		const fd = 1 / dmax;
		const fs = (EShapeFanTriangulatedImpl.SCALE - 1) * dmax;
		this.computeRimPoints(n, fs, st, ct, sided);

		// Strip: 4 * (m - 1) vertices and 2 * 3 * (m - 1) indices
		this.writeStrip(m, fd, fx, fy, gx, gy);
		let iv = 4 * (m - 1);
		let ii = 6 * (m - 1);

		// Polygons at the bottom: left (sign = -1) and right (sign = +1)
		if (sided) {
			for (let sign = -1; sign <= 1; sign += 2) {
				const count = this.writeSidePolygon(
					iv,
					ii,
					sign,
					n,
					w,
					oa,
					st,
					ct,
					fs,
					fd,
					fx,
					fy,
					gx,
					gy
				);
				iv += count;
				ii += 3 * (count - 2);
			}
		} else if (capped) {
			const co = Math.max(0, 1 - (w >= h ? h : oa) * fd);
			for (let sign = -1; sign <= 1; sign += 2) {
				const count = this.writeCapPolygon(iv, ii, sign, n, w, co, fd, fx, fy, gx, gy);
				iv += count;
				ii += 3 * (count - 2);
			}
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Computes P[k], the points on the arc, in the work arrays.
	 *
	 * The sine and cosine of the angle are updated by the rotation to avoid calling Math.sin and Math.cos in the loop.
	 * The points are symmetric with respect to the axis x = 0, so only the left half is computed
	 * and the right half is mirrored from it.
	 */
	protected computeArcPoints(
		w: number,
		h: number,
		n: number,
		ea: number,
		sea: number,
		cea: number
	): void {
		const m = 2 * n + 1;
		const px = EShapeFanTriangulatedImpl.WORK_ARC_X;
		const py = EShapeFanTriangulatedImpl.WORK_ARC_Y;
		const da = ea / n;
		const cda = Math.cos(da);
		const sda = Math.sin(da);
		let s = -sea;
		let c = cea;
		for (let k = 0; k <= n; ++k) {
			// Use the exact values at the center to prevent the accumulation of the errors.
			if (k === n) {
				s = 0;
				c = 1;
			}
			px[k] = w * s;
			py[k] = -h * c;

			// Rotate by da
			const ns = s * cda + c * sda;
			c = c * cda - s * sda;
			s = ns;
		}
		for (let k = 0; k < n; ++k) {
			px[m - 1 - k] = -px[k];
			py[m - 1 - k] = py[k];
		}
	}

	/**
	 * Computes the unit inward normals of the arc, the speeds of the arc, and the lengths of the polyline at P[k].
	 *
	 * The normal at P is Np = (-h x / w, -w y / h), whose magnitude is the speed of the arc.
	 * The lengths are the ones of the polyline, which is the actual outline, so that they are exact at clipping = 1.
	 */
	protected computeArcNormals(w: number, h: number, n: number): void {
		const m = 2 * n + 1;
		const px = EShapeFanTriangulatedImpl.WORK_ARC_X;
		const py = EShapeFanTriangulatedImpl.WORK_ARC_Y;
		const nx = EShapeFanTriangulatedImpl.WORK_NORMAL_X;
		const ny = EShapeFanTriangulatedImpl.WORK_NORMAL_Y;
		const speeds = EShapeFanTriangulatedImpl.WORK_SPEED;
		const ls = EShapeFanTriangulatedImpl.WORK_ARC_L;
		const hw = h / w;
		const wh = w / h;
		let l = 0;
		for (let k = 0; k <= n; ++k) {
			const dx = -hw * px[k];
			const dy = -wh * py[k];
			const speed = Math.sqrt(dx * dx + dy * dy);
			nx[k] = dx / speed;
			ny[k] = dy / speed;
			speeds[k] = speed;
			if (0 < k) {
				const ex = px[k] - px[k - 1];
				const ey = py[k] - py[k - 1];
				l += Math.sqrt(ex * ex + ey * ey);
			}
			ls[k] = l;
		}
		for (let k = 0; k < n; ++k) {
			const j = m - 1 - k;
			nx[j] = -nx[k];
			ny[j] = ny[k];
			speeds[j] = speeds[k];
			ls[j] = 2 * ls[n] - ls[k];
		}
	}

	/**
	 * Computes Q[k], the points on the normals, and their distances from P[k], and returns the maximum distance.
	 *
	 * If chained is true, Q is the point on the medial axis, that is, the point on the normal
	 * whose distance to the arc is equal to the distance to the straight sides.
	 * The distance delta is obtained from delta = -(n . P) - delta (n . normal) for the outward unit normals n of the sides.
	 * The clamps keep Q on the same side of the axis x = 0 as P and before the center of curvature,
	 * otherwise adjacent normals cross each other, which happens for tall ellipses.
	 *
	 * Otherwise, the normal is extended until it reaches x = 0 if w <= h, otherwise y = 0.
	 */
	protected computeMedialPoints(
		w: number,
		h: number,
		n: number,
		st: number,
		ct: number,
		chained: boolean
	): number {
		const m = 2 * n + 1;
		const px = EShapeFanTriangulatedImpl.WORK_ARC_X;
		const py = EShapeFanTriangulatedImpl.WORK_ARC_Y;
		const nx = EShapeFanTriangulatedImpl.WORK_NORMAL_X;
		const ny = EShapeFanTriangulatedImpl.WORK_NORMAL_Y;
		const speeds = EShapeFanTriangulatedImpl.WORK_SPEED;
		const qx = EShapeFanTriangulatedImpl.WORK_MEDIAL_X;
		const qy = EShapeFanTriangulatedImpl.WORK_MEDIAL_Y;
		const qd = EShapeFanTriangulatedImpl.WORK_MEDIAL_D;
		const u = w <= h ? w / h : h / w;
		let dmax = 0;
		for (let k = 0; k <= n; ++k) {
			const x = px[k];
			const y = py[k];
			const nnx = nx[k];
			const nny = ny[k];
			const speed = speeds[k];

			let delta = Infinity;
			if (chained) {
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
				delta = Math.max(0, Math.min(delta, (speed * speed * speed) / (w * h)));
			}

			// The distance between P and Q
			let d: number;
			if (Number.isFinite(delta)) {
				d = delta;
			} else {
				d = u * speed;
			}
			qx[k] = x + d * nnx;
			qy[k] = y + d * nny;
			qd[k] = d;
			dmax = Math.max(dmax, d);
		}
		for (let k = 0; k < n; ++k) {
			const j = m - 1 - k;
			qx[j] = -qx[k];
			qy[j] = qy[k];
			qd[j] = qd[k];
		}
		return dmax;
	}

	/**
	 * Computes R[k], the points on the arc shifted outward by fs.
	 * If the straight sides are the outline, the end points are shifted
	 * to the intersections of the shifted arc and the shifted straight sides.
	 */
	protected computeRimPoints(
		n: number,
		fs: number,
		st: number,
		ct: number,
		sided: boolean
	): void {
		const m = 2 * n + 1;
		const px = EShapeFanTriangulatedImpl.WORK_ARC_X;
		const py = EShapeFanTriangulatedImpl.WORK_ARC_Y;
		const nx = EShapeFanTriangulatedImpl.WORK_NORMAL_X;
		const ny = EShapeFanTriangulatedImpl.WORK_NORMAL_Y;
		const rx = EShapeFanTriangulatedImpl.WORK_RIM_X;
		const ry = EShapeFanTriangulatedImpl.WORK_RIM_Y;
		for (let k = 0; k < m; ++k) {
			let x = px[k] - fs * nx[k];
			let y = py[k] - fs * ny[k];
			if (sided && (k === 0 || k === m - 1)) {
				const sign = k === 0 ? -1 : +1;

				// The miter of the outward normal of the arc (n1) and that of the straight side (n2)
				const n1x = -nx[k];
				const n1y = -ny[k];
				const n2x = sign * ct;
				const n2y = st;
				const miter = fs / Math.max(1 + n1x * n2x + n1y * n2y, 0.05);
				x = px[k] + miter * (n1x + n2x);
				y = py[k] + miter * (n1y + n2y);
			}
			rx[k] = x;
			ry[k] = y;
		}
	}

	/**
	 * Writes the strip P[k], P[k + 1], Q[k + 1], Q[k] with the vertices R[k], Q[k], R[k + 1] and Q[k + 1].
	 *
	 * Each quad owns its vertices. The length in a quad is the length at P[k] plus the projection
	 * to the chord P[k]P[k + 1], which is exact at clipping = 1 where the chord is the outline.
	 */
	protected writeStrip(
		m: number,
		fd: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number
	): void {
		const px = EShapeFanTriangulatedImpl.WORK_ARC_X;
		const py = EShapeFanTriangulatedImpl.WORK_ARC_Y;
		const qx = EShapeFanTriangulatedImpl.WORK_MEDIAL_X;
		const qy = EShapeFanTriangulatedImpl.WORK_MEDIAL_Y;
		const qd = EShapeFanTriangulatedImpl.WORK_MEDIAL_D;
		const ls = EShapeFanTriangulatedImpl.WORK_ARC_L;
		const rx = EShapeFanTriangulatedImpl.WORK_RIM_X;
		const ry = EShapeFanTriangulatedImpl.WORK_RIM_Y;
		const scale = EShapeFanTriangulatedImpl.SCALE;
		const indices = this._indices;
		let iv = 0;
		let ii = 0;
		for (let k = 0; k < m - 1; ++k) {
			const x0 = px[k];
			const y0 = py[k];
			const l0 = ls[k];
			const dl = ls[k + 1] - l0;
			const fl = 0 < dl ? 1 / dl : 0;
			const ex = (px[k + 1] - x0) * fl;
			const ey = (py[k + 1] - y0) * fl;

			const r0x = rx[k];
			const r0y = ry[k];
			const q0x = qx[k];
			const q0y = qy[k];
			const r1x = rx[k + 1];
			const r1y = ry[k + 1];
			const q1x = qx[k + 1];
			const q1y = qy[k + 1];
			const lr0 = l0 + (r0x - x0) * ex + (r0y - y0) * ey;
			const lq0 = l0 + (q0x - x0) * ex + (q0y - y0) * ey;
			const lr1 = l0 + (r1x - x0) * ex + (r1y - y0) * ey;
			const lq1 = l0 + (q1x - x0) * ex + (q1y - y0) * ey;
			const cq0 = 1 - qd[k] * fd;
			const cq1 = 1 - qd[k + 1] * fd;
			this.writeVertex(iv, r0x, r0y, lr0, scale, fd, fx, fy, gx, gy);
			this.writeVertex(iv + 1, q0x, q0y, lq0, cq0, fd, fx, fy, gx, gy);
			this.writeVertex(iv + 2, r1x, r1y, lr1, scale, fd, fx, fy, gx, gy);
			this.writeVertex(iv + 3, q1x, q1y, lq1, cq1, fd, fx, fy, gx, gy);
			indices[ii++] = iv;
			indices[ii++] = iv + 2;
			indices[ii++] = iv + 3;
			indices[ii++] = iv;
			indices[ii++] = iv + 3;
			indices[ii++] = iv + 1;
			iv += 4;
		}
	}

	/**
	 * Writes the polygon O', R[end], Q[end], ..., Q[N] where the end is 0 for the left (sign = -1)
	 * and 2N for the right (sign = +1). The straight side OA (or OB) is the outline of the polygon.
	 * Returns the number of the written vertices.
	 *
	 * The chain of Q ends at the first point on the axis because the following points go back along the axis.
	 * Q is not always on the medial axis where it is clamped,
	 * so the clipping must not be less than the one of the arc.
	 *
	 * The clipping and the length are computed from the straight side:
	 * the outward unit normal is (sign * ct, st) and the length is oa + arc + (-st, sign * ct) . p.
	 */
	protected writeSidePolygon(
		iv: number,
		ii: number,
		sign: number,
		n: number,
		w: number,
		oa: number,
		st: number,
		ct: number,
		fs: number,
		fd: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number
	): number {
		const m = 2 * n + 1;
		const qx = EShapeFanTriangulatedImpl.WORK_MEDIAL_X;
		const qy = EShapeFanTriangulatedImpl.WORK_MEDIAL_Y;
		const qd = EShapeFanTriangulatedImpl.WORK_MEDIAL_D;
		const rx = EShapeFanTriangulatedImpl.WORK_RIM_X;
		const ry = EShapeFanTriangulatedImpl.WORK_RIM_Y;
		const l0 = oa + EShapeFanTriangulatedImpl.WORK_ARC_L[m - 1];
		const nx = sign * ct;
		const ly = sign * ct;
		const eps = 1e-9 * w;
		const end = sign < 0 ? 0 : m - 1;

		let count = 0;
		this.writeSideVertex(
			iv + count++,
			0,
			fs / st,
			-Infinity,
			nx,
			st,
			l0,
			-st,
			ly,
			fd,
			fx,
			fy,
			gx,
			gy
		);
		this.writeSideVertex(
			iv + count++,
			rx[end],
			ry[end],
			-Infinity,
			nx,
			st,
			l0,
			-st,
			ly,
			fd,
			fx,
			fy,
			gx,
			gy
		);
		for (let j = 0; j <= n; ++j) {
			const k = sign < 0 ? j : m - 1 - j;
			const floor = 1 - qd[k] * fd;
			const isOnAxis = Math.abs(qx[k]) <= eps;

			// Where Q is clamped, the clipping of the side reaches the floor at T on the axis before Q.
			// Without T, the clipping on the axis is not linear and a dent appears at O.
			const ty = -qd[k] / st;
			if (isOnAxis && qy[k] < ty - eps) {
				this.writeSideVertex(
					iv + count++,
					0,
					ty,
					floor,
					nx,
					st,
					l0,
					-st,
					ly,
					fd,
					fx,
					fy,
					gx,
					gy
				);
				this.writeFan(ii, iv, count);
				this.writeSideVertex(
					iv + count,
					qx[k],
					qy[k],
					floor,
					nx,
					st,
					l0,
					-st,
					ly,
					fd,
					fx,
					fy,
					gx,
					gy
				);
				const indices = this._indices;
				const i = ii + 3 * (count - 2);
				indices[i] = iv + count - 2;
				indices[i + 1] = iv + count;
				indices[i + 2] = iv + count - 1;
				return count + 1;
			}

			this.writeSideVertex(
				iv + count++,
				qx[k],
				qy[k],
				floor,
				nx,
				st,
				l0,
				-st,
				ly,
				fd,
				fx,
				fy,
				gx,
				gy
			);
			if (isOnAxis) {
				break;
			}
		}
		this.writeFan(ii, iv, count);
		return count;
	}

	/**
	 * Writes the polygon O, Q[end], ..., Q[N] where the end is 0 for the left (sign = -1)
	 * and 2N for the right (sign = +1). The straight sides are hard edges without the stroke.
	 * Returns the number of the written vertices.
	 *
	 * The clipping of O is given by co, and the length of O is the one of the end point.
	 */
	protected writeCapPolygon(
		iv: number,
		ii: number,
		sign: number,
		n: number,
		w: number,
		co: number,
		fd: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number
	): number {
		const m = 2 * n + 1;
		const qx = EShapeFanTriangulatedImpl.WORK_MEDIAL_X;
		const qy = EShapeFanTriangulatedImpl.WORK_MEDIAL_Y;
		const qd = EShapeFanTriangulatedImpl.WORK_MEDIAL_D;
		const ls = EShapeFanTriangulatedImpl.WORK_ARC_L;
		const eps = 1e-9 * w;
		const end = sign < 0 ? 0 : m - 1;

		this.writeVertex(iv, 0, 0, ls[end], co, fd, fx, fy, gx, gy);
		let count = 1;
		for (let j = 0; j <= n; ++j) {
			const k = sign < 0 ? j : m - 1 - j;
			const clipping = 1 - qd[k] * fd;
			this.writeVertex(iv + count++, qx[k], qy[k], ls[k], clipping, fd, fx, fy, gx, gy);
			if (Math.abs(qx[k]) <= eps) {
				break;
			}
		}
		this.writeFan(ii, iv, count);
		return count;
	}

	/**
	 * The clipping is 1 - (the distance from the straight side) / d where d is the distance from C to OA (or OB).
	 */
	protected updateBottom(
		w: number,
		h: number,
		n: number,
		ea: number,
		sea: number,
		cea: number,
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
		const boundary = this._boundary;
		boundary[0] = -bx;
		boundary[1] = -h;
		boundary[2] = +bx;
		boundary[3] = 0;

		const yc = h / (1 + st);
		const fd = (1 + st) / (h * st);
		const fs = (EShapeFanTriangulatedImpl.SCALE - 1) / fd;

		this.computeArcPoints(w, h, n, ea, sea, cea);
		this.computeArcNormals(w, h, n);

		// The length of O, which is the same as the one of writeSidePolygon: |OA| + the length of the arc
		const l0 = Math.sqrt(bx * bx + by * by) + EShapeFanTriangulatedImpl.WORK_ARC_L[2 * n];

		// Triangle fans from C to the arc: left (sign = -1) and right (sign = +1)
		let iv = 0;
		let ii = 0;
		for (let sign = -1; sign <= 1; sign += 2) {
			const count = this.writeBottomFan(iv, ii, sign, n, yc, l0, st, ct, fd, fx, fy, gx, gy);
			iv += count;
			ii += 3 * (count - 2);
		}

		// Quads at the bottom: O', A', A, C and O', B', B, C
		for (let sign = -1; sign <= 1; sign += 2) {
			const count = this.writeBottomQuad(
				iv,
				ii,
				sign,
				bx,
				by,
				yc,
				l0,
				fs,
				st,
				ct,
				fd,
				fx,
				fy,
				gx,
				gy
			);
			iv += count;
			ii += 3 * (count - 2);
		}

		this.pad(iv, ii, nv, ni, fd);
	}

	/**
	 * Writes the triangle fan from C to the arc of the left half (sign = -1) or the right half (sign = +1).
	 * Returns the number of the written vertices.
	 *
	 * The clipping is 1 + fd * (n . p) where n is the outward unit normal of the straight side,
	 * and the length is l0 + (-st, sign * ct) . p, which is the same as the one of writeSidePolygon
	 * so that the dashes of the straight sides do not depend on the stroke side.
	 */
	protected writeBottomFan(
		iv: number,
		ii: number,
		sign: number,
		n: number,
		yc: number,
		l0: number,
		st: number,
		ct: number,
		fd: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number
	): number {
		const px = EShapeFanTriangulatedImpl.WORK_ARC_X;
		const py = EShapeFanTriangulatedImpl.WORK_ARC_Y;
		const nx = sign * ct;
		const ly = sign * ct;

		let count = 0;
		this.writeSideVertex(iv + count++, 0, -yc, 0, nx, st, l0, -st, ly, fd, fx, fy, gx, gy);
		for (let j = 0; j <= n; ++j) {
			const k = sign < 0 ? j : n + j;
			this.writeSideVertex(
				iv + count++,
				px[k],
				py[k],
				0,
				nx,
				st,
				l0,
				-st,
				ly,
				fd,
				fx,
				fy,
				gx,
				gy
			);
		}
		this.writeFan(ii, iv, count);
		return count;
	}

	/**
	 * Writes the quad O', A', A, C (sign = -1) or O', B', B, C (sign = +1) at the bottom.
	 * O' is shifted outward by fs / st, and A' (B') is shifted outward by fs perpendicular to the straight side.
	 * Returns the number of the written vertices.
	 */
	protected writeBottomQuad(
		iv: number,
		ii: number,
		sign: number,
		bx: number,
		by: number,
		yc: number,
		l0: number,
		fs: number,
		st: number,
		ct: number,
		fd: number,
		fx: number,
		fy: number,
		gx: number,
		gy: number
	): number {
		const nx = sign * ct;
		const ly = sign * ct;
		this.writeSideVertex(iv, 0, fs / st, 0, nx, st, l0, -st, ly, fd, fx, fy, gx, gy);
		this.writeSideVertex(
			iv + 1,
			sign * (bx + fs * ct),
			-by + fs * st,
			0,
			nx,
			st,
			l0,
			-st,
			ly,
			fd,
			fx,
			fy,
			gx,
			gy
		);
		this.writeSideVertex(iv + 2, sign * bx, -by, 0, nx, st, l0, -st, ly, fd, fx, fy, gx, gy);
		this.writeSideVertex(iv + 3, 0, -yc, 0, nx, st, l0, -st, ly, fd, fx, fy, gx, gy);
		this.writeFan(ii, iv, 4);
		return 4;
	}

	// ----------------------------------------------------------------------------------------
	// Writers
	// ----------------------------------------------------------------------------------------

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
	 * Writes the indices of a triangle fan from the first vertex.
	 * The number of the written indices is 3 * (count - 2).
	 */
	protected writeFan(ii: number, iv: number, count: number): void {
		const indices = this._indices;
		for (let i = 1; i < count - 1; ++i) {
			indices[ii++] = iv;
			indices[ii++] = iv + i;
			indices[ii++] = iv + i + 1;
		}
	}

	/**
	 * Writes a vertex.
	 *
	 * @param x - The X coordinate in the frame where the sizes are positive
	 * @param y - The Y coordinate in the frame where the sizes are positive
	 * @param fd - The inverse of the distance where the clipping decreases from 1 to 0
	 * @param fx - The factor to convert x to the UV
	 * @param fy - The factor to convert y to the UV
	 * @param gx - The sign of the X size, which flips the vertex
	 * @param gy - The sign of the Y size, which flips the vertex
	 */
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

	/**
	 * Fills the unused tail with degenerated triangles and trims the arrays
	 * so that the buffers always hold exactly `nv` vertices and `ni` triangles.
	 */
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
