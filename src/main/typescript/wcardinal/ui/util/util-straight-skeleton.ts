import { UtilPolygon } from "./util-polygon";

const EPSILON = 1e-5;
const EMPTY_ARRAY: any[] = [];

export class UtilStraightSkeletonWavefront {
	readonly parent: UtilStraightSkeletonWavefront | null;
	distance: number;
	readonly points: number[];
	readonly normals: number[];
	readonly mappings: number[][];
	readonly children: UtilStraightSkeletonWavefront[];

	constructor(parent: UtilStraightSkeletonWavefront | null, distance: number) {
		this.parent = parent;
		this.distance = distance;
		this.points = [];
		this.normals = [];
		this.mappings = [];
		this.children = [];
	}

	protected advance(): boolean {
		// Calculate p[i], n[i], m[i]
		const p = this.points;
		const pl = p.length;
		if (pl <= 4) {
			return false;
		}

		// Calculate s[i], t[i]
		//
		// t[i]=n[i] + s[i] m[i]
		// s[i]=(1 - dot(n[i],n[i-1])) / dot(m[i],n[i-1])
		const t: number[] = [];
		const n = this.normals;
		let pnx = n[pl - 2];
		let pny = n[pl - 1];
		for (let i = 0; i < pl; i += 2) {
			const nx = n[i];
			const ny = n[i + 1];
			const mx = ny;
			const my = -nx;
			const dmn = mx * pnx + my * pny;
			const s = EPSILON <= Math.abs(dmn) ? (1 - (nx * pnx + ny * pny)) / dmn : -0.5 * dmn;
			const tx = nx + s * mx;
			const ty = ny + s * my;
			t.push(tx, ty);
			pnx = nx;
			pny = ny;
		}

		// Calculate dr[i]
		// dr[i] = dot(n[i], p[i]-p[i-1]) / (1 - dot(n[i],t[i-1])) or
		// dr[i] = dot(m[i], p[i]-p[i-1]) / dot(m[i],t[i] - t[i-1])
		let mdr = 0;
		let mdri = -1;
		let ptx = t[pl - 2];
		let pty = t[pl - 1];
		let ppx = p[pl - 2];
		let ppy = p[pl - 1];
		for (let i = 0; i < pl; i += 2) {
			const nx = n[i];
			const ny = n[i + 1];
			const tx = t[i];
			const ty = t[i + 1];
			const px = p[i];
			const py = p[i + 1];
			const dpx = px - ppx;
			const dpy = py - ppy;
			const dnpt = 1 - (nx * ptx + ny * pty);
			if (EPSILON < Math.abs(dnpt)) {
				const dr = (nx * dpx + ny * dpy) / dnpt;
				if (0 < dr && (mdri < 0 || dr < mdr)) {
					mdr = dr;
					mdri = i;
				}
			} else {
				const mx = ny;
				const my = -nx;
				const dmpt = mx * (tx - ptx) + my * (ty - pty);
				if (EPSILON < Math.abs(dmpt)) {
					const dr = (mx * dpx + my * dpy) / dmpt;
					if (0 < dr && (mdri < 0 || dr < mdr)) {
						mdr = dr;
						mdri = i;
					}
				} else {
					// NO SOLUTIONS
				}
			}
			ptx = tx;
			pty = ty;
			ppx = px;
			ppy = py;
		}

		// Calculate dr[i,k]
		//     dr[i,k] = dot(n[k], p[k]-p[i]) / (1 - dot(n[k], t[i])) or
		//     dr[i,k] = c0 / c2 or
		//     dr[i,k] = (c0 + c1) / (c2 + c3)
		// where
		//    k != i or i - 1
		//    c0 = dot(m[k], p[k] - p[i])
		//    c1 = dot(m[k], p[k] - p[k+1])
		//    c2 = dot(m[k], t[k] - t[i])
		//    c3 = dot(m[k], t[k] - t[k+1])
		for (let i = 0; i < pl; i += 2) {
			const pix = p[i];
			const piy = p[i + 1];
			const tix = t[i];
			const tiy = t[i + 1];
			for (let k = 0; k < pl; k += 2) {
				if (k === i || (0 < i && k === i - 2) || (i === 0 && k === pl - 2)) {
					continue;
				}
				const pkx = p[k];
				const pky = p[k + 1];
				const nkx = n[k];
				const nky = n[k + 1];
				const dnt = 1 - (nkx * tix + nky * tiy);
				if (EPSILON < Math.abs(dnt)) {
					const dpx = pkx - pix;
					const dpy = pky - piy;
					const dr = (nkx * dpx + nky * dpy) / dnt;
					if (0 < dr && dr < mdr) {
						mdr = dr;
						mdri = i;
					}
				} else {
					const nk = (k + 2) % pl;
					const npkx = p[nk];
					const npky = p[nk + 1];
					const mkx = nky;
					const mky = -nkx;
					const tkx = t[nk];
					const tky = t[nk + 1];
					const ntkx = t[nk];
					const ntky = t[nk + 1];
					const c0 = mkx * (pkx - pix) + mky * (pky - piy);
					const c1 = mkx * (pkx - npkx) + mky * (pky - npky);
					const c2 = mkx * (tkx - tix) + mky * (tky - tiy);
					const c3 = mkx * (tkx - ntkx) + mky * (tky - ntky);
					if (EPSILON < Math.abs(c2)) {
						const dr = c0 / c2;
						if (0 < dr && (mdri < 0 || dr < mdr)) {
							mdr = dr;
							mdri = i;
						}
					}
					const c23 = c2 + c3;
					if (EPSILON < Math.abs(c23)) {
						const dr = (c0 + c1) / c23;
						if (0 < dr && (mdri < 0 || dr < mdr)) {
							mdr = dr;
							mdri = i;
						}
					}
				}
			}
		}

		//
		if (0 <= mdri) {
			this.distance += mdr;
			for (let i = 0; i < pl; i += 2) {
				p[i] -= mdr * t[i];
				p[i + 1] -= mdr * t[i + 1];
			}
			this.merge();
			return true;
		}
		return false;
	}

	/**
	 * Calculate the next wavefront and update `this.children`.
	 * Please do not call this method more than one time.
	 *
	 * @returns next wavefronts
	 */
	next(): UtilStraightSkeletonWavefront[] {
		const p = this.points;
		const pl = p.length;
		const children = this.children;
		if (pl <= 4) {
			return children;
		}

		const n = this.normals;
		const next = new UtilStraightSkeletonWavefront(this, this.distance);
		const np = next.points;
		const nn = next.normals;
		const nm = next.mappings;
		for (let i = 0; i < pl; i += 2) {
			np.push(p[i], p[i + 1]);
			nn.push(n[i], n[i + 1]);
			const m = [i];
			nm.push(m, m);
		}
		children.length = 0;
		next.cut(children);
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].advance();
		}
		return children;
	}

	merge(): this {
		const p = this.points;
		const pl = p.length;
		if (pl <= 2) {
			// No need to merge
			return this;
		}

		const n = this.normals;
		const m = this.mappings;
		let nr = 0;
		let ppx = p[0];
		let ppy = p[1];
		let ppi = 0;
		for (let i = 2; i < pl; i += 2) {
			const px = p[i];
			const py = p[i + 1];
			const dx = px - ppx;
			const dy = py - ppy;
			if (Math.abs(dx) <= EPSILON && Math.abs(dy) <= EPSILON) {
				// Merge this point to the previous point
				m[ppi] = m[ppi + 1] = m[ppi].concat(m[i]);
				m[i] = m[i + 1] = EMPTY_ARRAY;
				n[ppi] = n[i];
				n[ppi + 1] = n[i + 1];
				nr += 1;
				continue;
			}
			ppx = px;
			ppy = py;
			ppi = i;
		}

		// Merge the last one into the first one if necessary
		if (ppi !== 0) {
			const dx = p[ppi] - p[0];
			const dy = p[ppi + 1] - p[1];
			if (Math.abs(dx) < EPSILON && Math.abs(dy) < EPSILON) {
				m[0] = m[1] = m[ppi].concat(m[0]);
				m[ppi] = m[ppi + 1] = EMPTY_ARRAY;
				nr += 1;
			}
		}

		// Remove merged points
		if (0 < nr) {
			let k = 0;
			for (let i = 0; i < pl; i += 2, k += 2) {
				if (m[i].length <= 0) {
					k -= 2;
				} else if (i !== k) {
					p[k] = p[i];
					p[k + 1] = p[i + 1];
					n[k] = n[i];
					n[k + 1] = n[i + 1];
					m[k] = m[i];
					m[k + 1] = m[i + 1];
				}
			}
			if (k < pl) {
				p.length = k;
				n.length = k;
				m.length = k;
			}
		}

		// Done
		return this;
	}

	cut(result: UtilStraightSkeletonWavefront[]): boolean {
		const p = this.points;
		const n = this.normals;
		const m = this.mappings;
		const pl = p.length;
		for (let i = 0; i < pl; i += 2) {
			if (this.cut0(i, p, n, m, pl, result)) {
				return true;
			}
		}
		result.push(this);
		return false;
	}

	protected cut0(
		i: number,
		p: number[],
		n: number[],
		r: number[][],
		pl: number,
		result: UtilStraightSkeletonWavefront[]
	): boolean {
		const pix = p[i];
		const piy = p[i + 1];
		for (let k = 0; k < pl; k += 2) {
			if (k === i || k === (pl + i - 2) % pl) {
				continue;
			}
			const pkx = p[k];
			const pky = p[k + 1];
			const nkx = n[k];
			const nky = n[k + 1];
			const dix = pix - pkx;
			const diy = piy - pky;
			const din = nkx * dix + nky * diy;
			if (Math.abs(din) < EPSILON) {
				const mkx = nky;
				const mky = -nkx;
				const dim = mkx * dix + mky * diy;
				if (Math.abs(dim) < EPSILON) {
					// (p[i],p[i+1]) = (p[k], p[k+1])
					if (i < k) {
						// (p[0], ..., p[i], ...., p[k], p[k+1], p[k+2], ..., p[pl-1]).
						// -> (p[i], ..., p[k], p[k+1]) and (p[0], ..., p[i], p[k], p[k+1], p[k+2], ..., p[pl-1]).
						this.cut1(i, k, p, n, r, result);
						this.cut2(0, i, k, pl - 2, p, n, r, result);
					} else {
						// (p[0], ..., p[k], p[k+1], p[k+2], ..., p[i], ...., p[pl-1]).
						// -> (p[k], p[k+1], p[k+2], ..., p[i]) and (p[0], ..., p[k], p[k+1], p[i], ..., p[pl-1]).
						this.cut1(k, i, p, n, r, result);
						this.cut2(0, k, i, pl - 2, p, n, r, result);
					}
					return true;
				} else {
					const l = (k + 2) % pl;
					const plx = p[l];
					const ply = p[l + 1];
					const dlx = plx - pkx;
					const dly = ply - pky;
					const dlm = mkx * dlx + mky * dly;
					if (0 <= dim && dim <= dlm && EPSILON <= Math.abs(dim - dlm)) {
						if (i < k) {
							// (p[0], ..., p[i], ...., p[k], p[k+1], p[k+2], ..., p[pl-1]).
							// -> (p[i], ..., p[k], p[k+1]) and (p[0], ..., p[i], p[k+2], ..., p[pl-1]).
							this.cut1(i, k, p, n, r, result);
							this.cut2(0, i, k + 2, pl - 2, p, n, r, result);
						} else {
							// (p[0], ..., p[k], p[k+1], p[k+2], ..., p[i], ...., p[pl-1]).
							// -> (p[k+2], ..., p[i]) and (p[0], ..., p[k], p[k+1], p[i], ..., p[pl-1]).
							this.cut1(k + 2, i, p, n, r, result);
							this.cut2(0, k, i, pl - 2, p, n, r, result);
						}
						return true;
					}
				}
			}
		}
		return false;
	}

	protected cut1(
		from: number,
		to: number,
		p: number[],
		n: number[],
		m: number[][],
		result: UtilStraightSkeletonWavefront[]
	): void {
		if (2 < to - from + 2) {
			// Copy
			const tmp = new UtilStraightSkeletonWavefront(this.parent, this.distance);
			const tp = tmp.points;
			const tn = tmp.normals;
			const tm = tmp.mappings;
			for (let i = from; i <= to; i += 2) {
				tp.push(p[i], p[i + 1]);
				tn.push(n[i], n[i + 1]);
				tm.push(m[i], m[i + 1]);
			}

			// Recalculate a normal of the 'to'-th point.
			const tpl = tp.length;
			if (2 < tpl) {
				const dx = tp[0] - tp[tpl - 2];
				const dy = tp[1] - tp[tpl - 1];
				const d = dx * dx + dy * dy;
				if (d <= EPSILON) {
					tn[tpl - 2] = tn[0];
					tn[tpl - 1] = tn[1];
				} else {
					const f = 1 / Math.sqrt(d);
					const mx = dx * f;
					const my = dy * f;
					tn[tpl - 2] = -my;
					tn[tpl - 1] = mx;
				}
			}

			// Merge and cut again
			tmp.merge().cut(result);
		}
	}

	protected cut2(
		from1: number,
		to1: number,
		from2: number,
		to2: number,
		p: number[],
		n: number[],
		m: number[][],
		result: UtilStraightSkeletonWavefront[]
	): void {
		if (2 < Math.max(0, to1 - from1 + 2) + Math.max(0, to2 - from2 + 2)) {
			// Copy
			const tmp = new UtilStraightSkeletonWavefront(this.parent, this.distance);
			const tp = tmp.points;
			const tn = tmp.normals;
			const tm = tmp.mappings;
			for (let l = from1; l <= to1; l += 2) {
				tp.push(p[l], p[l + 1]);
				tn.push(n[l], n[l + 1]);
				tm.push(m[l], m[l + 1]);
			}
			for (let l = from2; l <= to2; l += 2) {
				tp.push(p[l], p[l + 1]);
				tn.push(n[l], n[l + 1]);
				tm.push(m[l], m[l + 1]);
			}

			// Recalculate a normal of the 'to1 - from1'-th point.
			const tpl = tp.length;
			if (2 < tpl) {
				const itp = to1 - from1;
				const nitp = (itp + 2) % tpl;
				const dx = tp[nitp] - tp[itp];
				const dy = tp[nitp + 1] - tp[itp + 1];
				const d = dx * dx + dy * dy;
				if (d <= EPSILON) {
					tn[itp] = tn[nitp];
					tn[itp + 1] = tn[nitp + 1];
				} else {
					const f = 1 / Math.sqrt(d);
					const mx = dx * f;
					const my = dy * f;
					tn[itp] = -my;
					tn[itp + 1] = mx;
				}
			}

			// Merge and cut again
			tmp.merge().cut(result);
		}
	}

	public static from(polygon: UtilPolygon): UtilStraightSkeletonWavefront {
		const result = new UtilStraightSkeletonWavefront(null, 0);
		const points = polygon.points;
		const pointsLength = points.length;
		if (pointsLength <= 0) {
			return result;
		}
		const normals = polygon.normals;
		const p = result.points;
		const n = result.normals;
		const m = result.mappings;
		if (polygon.isCw()) {
			for (let i = pointsLength - 2; 0 <= i; i -= 2) {
				const k = (pointsLength + i - 2) % pointsLength;
				n.push(-normals[k], -normals[k + 1]);
				p.push(points[i], points[i + 1]);
				m.push(EMPTY_ARRAY, EMPTY_ARRAY);
			}
		} else {
			for (let i = 0; i < pointsLength; i += 2) {
				n.push(normals[i], normals[i + 1]);
				p.push(points[i], points[i + 1]);
				m.push(EMPTY_ARRAY, EMPTY_ARRAY);
			}
		}
		return result;
	}
}

export class UtilStraightSkeleton {
	public static from(points: number[]): UtilStraightSkeletonWavefront[] {
		const result: UtilStraightSkeletonWavefront[] = [];
		const polygons = UtilPolygon.from(points);
		for (let i = 0, imax = polygons.length; i < imax; ++i) {
			const wavefront = UtilStraightSkeletonWavefront.from(polygons[i]);
			this.next(wavefront);
			result.push(wavefront);
		}
		return result;
	}

	protected static next(wavefront: UtilStraightSkeletonWavefront): void {
		const children = wavefront.next();
		const childrenLength = children.length;
		if (0 < childrenLength) {
			for (let i = 0; i < childrenLength; ++i) {
				this.next(children[i]);
			}
		}
	}
}
