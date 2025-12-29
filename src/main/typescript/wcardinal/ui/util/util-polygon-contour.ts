export const CONTOUR_EPSILON = 1e-5;

export class Contour {
	points: number[];
	normals: number[];
	parents: number[];
	protected _next?: Contour[];

	constructor() {
		this.points = [];
		this.normals = [];
		this.parents = [];
	}

	get next(): Contour[] {
		return (this._next ??= this.newNext());
	}

	protected newNext(): Contour[] {
		// Calculate p[i], n[i], m[i]
		const p = this.points;
		const pl = this.points.length;
		if (pl <= 4) {
			return [];
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
			const s =
				CONTOUR_EPSILON <= Math.abs(dmn) ? (1 - (nx * pnx + ny * pny)) / dmn : -0.5 * dmn;
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
			if (CONTOUR_EPSILON < Math.abs(dnpt)) {
				const dr = (nx * dpx + ny * dpy) / dnpt;
				if (0 < dr && (mdri < 0 || dr < mdr)) {
					mdr = dr;
					mdri = i;
				}
			} else {
				const mx = ny;
				const my = -nx;
				const dmpt = mx * (tx - ptx) + my * (ty - pty);
				if (CONTOUR_EPSILON < Math.abs(dmpt)) {
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
				if (CONTOUR_EPSILON < Math.abs(dnt)) {
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
					if (CONTOUR_EPSILON < Math.abs(c2)) {
						const dr = c0 / c2;
						if (0 < dr && (mdri < 0 || dr < mdr)) {
							mdr = dr;
							mdri = i;
						}
					}
					const c23 = c2 + c3;
					if (CONTOUR_EPSILON < Math.abs(c23)) {
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
			// Calculate the next contour
			console.log("mdr", mdr);
			const r = this.parents;
			const c = new Contour();
			const cp = c.points;
			const cn = c.normals;
			const cr = c.parents;
			for (let i = 0; i < pl; i += 2) {
				cp.push(p[i] - mdr * t[i], p[i + 1] - mdr * t[i + 1]);
				cn.push(n[i], n[i + 1]);
				cr.push(r[i], r[i + 1]);
			}
			return c.merge().cut();
		}

		// No dr has found
		return [];
	}

	merge(): this {
		const p = this.points;
		const pl = p.length;
		if (pl <= 2) {
			// No need to merge
			return this;
		}

		const n = this.normals;
		const r = this.parents;
		let nr = 0;
		let ppx = p[0];
		let ppy = p[1];
		let ppi = 0;
		for (let i = 2; i < pl; i += 2) {
			const px = p[i];
			const py = p[i + 1];
			const dx = px - ppx;
			const dy = py - ppy;
			if (Math.abs(dx) <= CONTOUR_EPSILON || Math.abs(dy) <= CONTOUR_EPSILON) {
				// Merge this point to the previous point
				r[ppi + 1] = r[i + 1];
				r[i] = -1;
				n[ppi] = n[i];
				n[ppi + 1] = n[i + 1];
				nr += 1;
				continue;
			}
			ppx = px;
			ppy = py;
			ppi = i;
		}

		// Merge the last one and the first one
		if (ppi !== 0) {
			const dx = p[ppi] - p[0];
			const dy = p[ppi + 1] - p[1];
			if (Math.abs(dx) < CONTOUR_EPSILON || Math.abs(dy) < CONTOUR_EPSILON) {
				r[0] = r[ppi];
				r[ppi] = -1;
				nr += 1;
			}
		}

		// Remove merged points
		if (0 < nr) {
			let k = 0;
			for (let i = 0; i < pl; i += 2, k += 2) {
				if (r[i] < 0) {
					k -= 2;
				} else if (i !== k) {
					p[k] = p[i];
					p[k + 1] = p[i + 1];
					n[k] = n[i];
					n[k + 1] = n[i + 1];
					r[k] = r[i];
					r[k + 1] = r[i + 1];
				}
			}
			if (k < pl) {
				p.length = k;
				n.length = k;
				r.length = k;
			}
		}

		// Done
		return this;
	}

	cut(): Contour[] {
		const p = this.points;
		const n = this.normals;
		const r = this.parents;
		const pl = p.length;
		for (let i = 0; i < pl; i += 2) {
			const pix = p[i];
			const piy = p[i + 1];
			for (let k = 0; k < pl; k += 2) {
				if (k === i || (0 < i && k === i - 2) || (i === 0 && k === pl - 2)) {
					continue;
				}
				const result = this.cut0(i, k, p, n, r, pl, pix, piy);
				if (result != null && 0 < result.length) {
					return result;
				}
			}
		}
		return [this];
	}

	protected cut0(
		i: number,
		k: number,
		p: number[],
		n: number[],
		r: number[],
		pl: number,
		pix: number,
		piy: number
	): Contour[] | null {
		const pkx = p[k];
		const pky = p[k + 1];
		const nkx = n[k];
		const nky = n[k + 1];
		const dx = pix - pkx;
		const dy = piy - pky;
		const dn = nkx * dx + nky * dy;
		if (Math.abs(dn) < CONTOUR_EPSILON) {
			const mkx = nky;
			const mky = -nkx;
			const dm = mkx * dx + mky * dy;
			const c0 = Math.abs(dm) < CONTOUR_EPSILON;
			const c1 = Math.abs(dm - 1) < CONTOUR_EPSILON;
			const c2 = 0 <= dm && dm <= 1;
			if (c0 || c1 || c2) {
				const result: Contour[] = [];
				if (i < k) {
					// In this case, points are arranged like (p[0], ..., p[i], ...., p[k], p[k+1], p[k+2], ..., p[pl-1]).
					// So, cut out the polygons of (p[i], ..., p[k], p[k+1]) and (p[0], ..., p[i], p[k+2], ..., p[pl-1]).
					this.cut1(i, k, p, n, r, result);
					this.cut2(0, i, k + 2, pl - 2, p, n, r, result);
				} else {
					// On the other hand, in this case, points are arranged like (p[0], ..., p[k], p[k+1], p[k+2], ..., p[i], ...., p[pl-1]).
					// Cut out the polygons of (p[k+2], ..., p[i]) and (p[0], ..., p[k], p[k+1], p[i], ..., p[pl-1]).
					this.cut1(k + 2, i, p, n, r, result);
					this.cut2(0, k, i, pl - 2, p, n, r, result);
				}
				return result;
			}
		}
		return null;
	}

	protected cut1(
		from: number,
		to: number,
		p: number[],
		n: number[],
		r: number[],
		result: Contour[]
	): void {
		if (2 < to - from + 2) {
			// Copy
			const tmp = new Contour();
			const tp = tmp.points;
			const tn = tmp.normals;
			const tr = tmp.parents;
			for (let i = from; i <= to; i += 2) {
				tp.push(p[i], p[i + 1]);
				tn.push(n[i], n[i + 1]);
				tr.push(r[i], r[i + 1]);
			}

			// Recalculate a normal of the 'to'-th point.
			const tpl = tp.length;
			if (2 < tpl) {
				const tpx = tp[tpl - 2];
				const tpy = tp[tpl - 1];
				const ntpx = tp[0];
				const ntpy = tp[1];
				const dx = ntpx - tpx;
				const dy = ntpy - tpy;
				const d = dx * dx + dy * dy;
				if (d <= CONTOUR_EPSILON) {
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
			tmp.merge()
				.cut()
				.forEach((cutted) => {
					result.push(cutted);
				});
		}
	}

	protected cut2(
		from1: number,
		to1: number,
		from2: number,
		to2: number,
		p: number[],
		n: number[],
		r: number[],
		result: Contour[]
	): void {
		if (2 < Math.max(0, to1 - from1 + 2) + Math.max(0, to2 - from2 + 2)) {
			// Copy
			const tmp = new Contour();
			const tp = tmp.points;
			const tn = tmp.normals;
			const tr = tmp.parents;
			for (let l = from1; l <= to1; l += 2) {
				tp.push(p[l], p[l + 1]);
				tn.push(n[l], n[l + 1]);
				tr.push(r[l], r[l + 1]);
			}
			for (let l = from2; l <= to2; l += 2) {
				tp.push(p[l], p[l + 1]);
				tn.push(n[l], n[l + 1]);
				tr.push(r[l], r[l + 1]);
			}

			// Recalculate a normal of the 'to1 - from1'-th point.
			const tpl = tp.length;
			if (2 < tpl) {
				const itp = to1 - from1;
				const nitp = itp + 2 < tpl ? itp + 2 : 0;
				const tpx = tp[itp];
				const tpy = tp[itp + 1];
				const ntpx = tp[nitp];
				const ntpy = tp[nitp + 1];
				const dx = ntpx - tpx;
				const dy = ntpy - tpy;
				const d = dx * dx + dy * dy;
				if (d <= CONTOUR_EPSILON) {
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
			tmp.merge()
				.cut()
				.forEach((cutted) => {
					result.push(cutted);
				});
		}
	}

	public static from(points: number[]): Contour {
		const result = new Contour();
		const pointsLength = points.length;
		if (pointsLength <= 0) {
			return result;
		}
		const p = result.points;
		const n = result.normals;
		const r = result.parents;
		let npx = points[0];
		let npy = points[1];
		let npi = pointsLength;
		for (let i = pointsLength - 2; 0 <= i; i -= 2) {
			const px = points[i];
			const py = points[i + 1];
			const dx = npx - px;
			const dy = npy - py;
			const d = dx * dx + dy * dy;
			if (d <= CONTOUR_EPSILON) {
				// Merge this point to the last point (p[0], p[1])
				if (0 < r.length) {
					r[0] = i;
					npi = i;
				}
				continue;
			}
			const f = 1 / Math.sqrt(d);
			const mx = dx * f;
			const my = dy * f;
			n.unshift(-my, mx);
			p.unshift(px, py);
			r.unshift(i, npi);
			npx = px;
			npy = py;
			npi = i;
		}
		if (p.length <= 0) {
			p.push(npx, npy);
			n.push(0, 1);
			r.push(0, pointsLength);
		}
		return result;
	}
}

export class UtilPolygonContour {
	public static from(points: number[]): Contour {
		const pointsLength = points.length;
		if (4 < pointsLength) {
			// Check if the polygon is CW or CCW using signed area
			let area = 0;
			let ppx = points[pointsLength - 2];
			let ppy = points[pointsLength - 1];
			for (let i = 0; i < pointsLength; i += 2) {
				const px = points[i];
				const py = points[i + 1];
				area += ppx * py - px * ppy;
				ppx = px;
				ppy = py;
			}

			// If CW (0 < area), reverse the point order to make it CCW.
			// Please note that in the screen coordinate (Y-axis pointing down), 0 < area means CW.
			if (0 < area) {
				const newPoints = [];
				for (let i = pointsLength - 2; 0 <= i; i -= 2) {
					newPoints.push(points[i], points[i + 1]);
				}
				return Contour.from(newPoints);
			} else {
				return Contour.from(points);
			}
		} else {
			return Contour.from(points);
		}
	}
}
