const EPSILON = 1e-5;

export class UtilPolygon {
	readonly points: number[];
	readonly normals: number[];

	constructor() {
		this.points = [];
		this.normals = [];
	}

	isCw(): boolean {
		let area = 0;
		const p = this.points;
		const pl = p.length;
		let ppx = p[pl - 2];
		let ppy = p[pl - 1];
		for (let i = 0; i < pl; i += 2) {
			const px = p[i];
			const py = p[i + 1];
			area += ppx * py - px * ppy;
			ppx = px;
			ppy = py;
		}
		return 0 < area;
	}

	protected merge(): boolean {
		const p = this.points;
		const pl = p.length;
		if (pl <= 2) {
			// No need to merge
			return false;
		}

		const n = this.normals;
		const indices = new Set<number>();
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
				n[ppi] = n[i];
				n[ppi + 1] = n[i + 1];
				indices.add(i);
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
				indices.add(ppi);
			}
		}

		// Remove merged points
		if (0 < indices.size) {
			let k = 0;
			for (let i = 0; i < pl; i += 2, k += 2) {
				if (indices.has(i)) {
					k -= 2;
				} else if (i !== k) {
					p[k] = p[i];
					p[k + 1] = p[i + 1];
					n[k] = n[i];
					n[k + 1] = n[i + 1];
				}
			}
			if (k < pl) {
				p.length = k;
				n.length = k;
			}
			return true;
		}
		return false;
	}

	protected cut(result: UtilPolygon[]): boolean {
		const p = this.points;
		const pl = p.length;
		let pix = p[pl - 2];
		let piy = p[pl - 1];
		let i = pl - 2;
		let npix = pix;
		let npiy = piy;
		for (let ni = 0; ni < pl; ni += 2) {
			npix = p[ni];
			npiy = p[ni + 1];

			if (this.cut0(i, pix, piy, npix, npiy, result)) {
				return true;
			}

			pix = npix;
			piy = npiy;
			i = ni;
		}
		result.push(this);
		return false;
	}

	protected cut0(
		i: number,
		pix: number,
		piy: number,
		npix: number,
		npiy: number,
		result: UtilPolygon[]
	): boolean {
		const p = this.points;
		const n = this.normals;
		const pl = p.length;
		let pkx = p[pl - 2];
		let pky = p[pl - 1];
		let nkx = n[pl - 2];
		let nky = n[pl - 1];
		let k = pl - 2;
		let npkx = pkx;
		let npky = pky;
		let nnkx = nkx;
		let nnky = nky;
		for (let nk = 0; nk < pl; nk += 2) {
			npkx = p[nk];
			npky = p[nk + 1];
			nnkx = n[nk];
			nnky = n[nk + 1];
			if (!(k === i || k === (i + 2) % pl || k === (pl + i - 2) % pl)) {
				const ts = this.check0(pix, piy, npix, npiy, pkx, pky, npkx, npky, nkx, nky);
				if (ts != null) {
					const dpx0 = pix - pkx;
					const dpy0 = piy - pky;
					const dpx1 = npix - pkx;
					const dpy1 = npiy - pky;
					const mkx = nky;
					const mky = -nkx;
					const dpm0 = mkx * dpx0 + mky * dpy0;
					const dpm1 = mkx * dpx1 + mky * dpy1;
					const dpm10 = dpm1 - dpm0;
					const dpkx = npkx - pkx;
					const dpky = npky - pky;
					const dpkm = mkx * dpkx + mky * dpky;
					const tpoints = this.check1(ts, dpm0, dpm10, dpkm, pix, piy, npix, npiy);
					if (tpoints != null) {
						if (i < k) {
							// (0, 2, ..., i, [t0], [t1], i + 2, ..., k, k + 2, ...)
							// -> ([t1], i + 2, ..., k)
							// -> (0, 2, ..., i, [t0], k+2, ....)
							this.cut1(i + 2, k, tpoints[2], tpoints[3], p, n, result);
							this.cut2(0, i, k + 2, pl - 2, tpoints[0], tpoints[1], p, n, result);
						} else {
							// (0, 2, ..., k, k + 2, ..., i, [t0], [t1], i + 2, ..., pl - 2)
							// -> ([t0], k + 2, ..., i)
							// -> (0, 2, ..., k, [t1], i + 2, ..., pl - 2)
							this.cut1(k + 2, i, tpoints[0], tpoints[1], p, n, result);
							this.cut2(0, k, i + 2, pl - 2, tpoints[2], tpoints[3], p, n, result);
						}
						return true;
					}
				}
			}
			pkx = npkx;
			pky = npky;
			nkx = nnkx;
			nky = nnky;
			k = nk;
		}
		return false;
	}

	protected check1(
		ts: [number] | [number, number],
		dpm0: number,
		dpm10: number,
		dpkm: number,
		pix: number,
		piy: number,
		npix: number,
		npiy: number
	): [number, number, number, number] | null {
		if (ts.length === 1) {
			const t = ts[0];
			if (this.check2(dpm0 + t * dpm10, dpkm)) {
				const dpix = npix - pix;
				const dpiy = npiy - piy;
				const tpx = pix + t * dpix;
				const tpy = piy + t * dpiy;
				return [tpx, tpy, tpx, tpy];
			}
		} else {
			const t0 = ts[0];
			const t1 = ts[1];
			if (this.check2(dpm0 + t0 * dpm10, dpkm) || this.check2(dpm0 + t1 * dpm10, dpkm)) {
				const dpix = npix - pix;
				const dpiy = npiy - piy;
				const t0px = pix + t0 * dpix;
				const t0py = piy + t0 * dpiy;
				const t1px = pix + t1 * dpix;
				const t1py = piy + t1 * dpiy;
				return [t0px, t0py, t1px, t1py];
			}
		}
		return null;
	}

	protected check2(dpm: number, dpkm: number): boolean {
		return (
			Math.abs(dpm) < EPSILON || Math.abs(dpm - dpkm) < EPSILON || (0 <= dpm && dpm <= dpkm)
		);
	}

	protected check0(
		pix: number,
		piy: number,
		npix: number,
		npiy: number,
		pkx: number,
		pky: number,
		npkx: number,
		npky: number,
		nkx: number,
		nky: number
	): [number] | [number, number] | null {
		const dpx0 = pix - pkx;
		const dpy0 = piy - pky;
		const dpx1 = npix - pkx;
		const dpy1 = npiy - pky;
		const dpn0 = nkx * dpx0 + nky * dpy0;
		const dpn1 = nkx * dpx1 + nky * dpy1;
		const dpn01 = dpn0 - dpn1;
		if (EPSILON < Math.abs(dpn01)) {
			const t = dpn0 / dpn01;
			if (0 <= t && t <= 1) {
				return [t];
			}
		} else {
			const c0 = 0 <= dpn0 && 0 <= dpn1;
			const c1 = dpn0 <= 0 && dpn1 <= 0;
			const c2 = (c0 || c1) && (Math.abs(dpn0) < EPSILON || Math.abs(dpn1) < EPSILON);
			const c3 = 0 <= dpn0 && dpn1 <= 0;
			const c4 = dpn0 <= 0 && dpn1 <= 0;
			if (c2 || c3 || c4) {
				const mkx = nky;
				const mky = -nkx;
				const dpm0 = mkx * dpx0 + mky * dpy0;
				const dpm1 = mkx * dpx1 + mky * dpy1;
				const dpm01 = dpm0 - dpm1;
				if (EPSILON < Math.abs(dpm01)) {
					const dpkx = npkx - pkx;
					const dpky = npky - pky;
					const dpkm = mkx * dpkx + mky * dpky;
					const t0 = Math.max(0, dpm0 / dpm01);
					const t1 = Math.min(1, (dpm0 - dpkm) / dpm01);
					if (t0 <= t1) {
						return [t0, t1];
					}
				} else {
					return [0, 1];
				}
			}
		}
		return null;
	}

	protected cut1(
		from: number,
		to: number,
		tpx: number,
		tpy: number,
		p: number[],
		n: number[],
		result: UtilPolygon[]
	): void {
		if (2 <= to - from + 2) {
			const tmp = new UtilPolygon();
			const tp = tmp.points;
			const tn = tmp.normals;

			// Insert the start point
			tp.push(tpx, tpy);
			const tdx = p[from] - tpx;
			const tdy = p[from + 1] - tpy;
			const td = tdx * tdx + tdy * tdy;
			if (EPSILON < Math.abs(td)) {
				const f = 1 / Math.sqrt(td);
				const mx = tdx * f;
				const my = tdy * f;
				tn.push(-my, mx);
			} else {
				tn.push(n[from], n[from + 1]);
			}

			// Insert the rest
			for (let i = from; i <= to; i += 2) {
				tp.push(p[i], p[i + 1]);
				tn.push(n[i], n[i + 1]);
			}

			// Recalculate a normal of the last point.
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

			// Done
			tmp.merge();
			tmp.cut(result);
		}
	}

	protected cut2(
		from1: number,
		to1: number,
		from2: number,
		to2: number,
		tpx: number,
		tpy: number,
		p: number[],
		n: number[],
		result: UtilPolygon[]
	): void {
		if (2 <= Math.max(0, to1 - from1 + 2) + Math.max(0, to2 - from2 + 2)) {
			const tmp = new UtilPolygon();
			const tp = tmp.points;
			const tn = tmp.normals;
			for (let i = from1; i <= to1; i += 2) {
				tp.push(p[i], p[i + 1]);
				tn.push(n[i], n[i + 1]);
			}

			// The middle point
			tp.push(tpx, tpy);
			const itp0 = from2 <= to2 ? from2 : from1;
			const tdx = p[itp0] - tpx;
			const tdy = p[itp0 + 1] - tpy;
			const td = tdx * tdx + tdy * tdy;
			if (EPSILON < Math.abs(td)) {
				const f = 1 / Math.sqrt(td);
				const mx = tdx * f;
				const my = tdy * f;
				tn.push(-my, mx);
			} else {
				tn.push(n[itp0], n[itp0 + 1]);
			}

			// The rest points
			for (let i = from2; i <= to2; i += 2) {
				tp.push(p[i], p[i + 1]);
				tn.push(n[i], n[i + 1]);
			}

			// Recalculate a normal of the 'to1 - from1'-th point.
			const tpl = tp.length;
			if (2 < tpl) {
				const itp1 = to1 - from1;
				const nitp = (itp1 + 2) % tpl;
				const dx = tp[nitp] - tp[itp1];
				const dy = tp[nitp + 1] - tp[itp1 + 1];
				const d = dx * dx + dy * dy;
				if (d <= EPSILON) {
					tn[itp1] = tn[nitp];
					tn[itp1 + 1] = tn[nitp + 1];
				} else {
					const f = 1 / Math.sqrt(d);
					const mx = dx * f;
					const my = dy * f;
					tn[itp1] = -my;
					tn[itp1 + 1] = mx;
				}
			}

			// Done
			tmp.merge();
			tmp.cut(result);
		}
	}

	public static from(points: number[]): UtilPolygon[] {
		const pointsLength = points.length;
		if (pointsLength <= 0) {
			return [];
		}
		const tmp = new UtilPolygon();
		const p = tmp.points;
		const n = tmp.normals;
		let npx = points[0];
		let npy = points[1];
		for (let i = pointsLength - 2; 0 <= i; i -= 2) {
			const px = points[i];
			const py = points[i + 1];
			const dx = npx - px;
			const dy = npy - py;
			const d = dx * dx + dy * dy;
			if (d <= EPSILON) {
				continue;
			}
			const f = 1 / Math.sqrt(d);
			const mx = dx * f;
			const my = dy * f;
			n.unshift(-my, mx);
			p.unshift(px, py);
			npx = px;
			npy = py;
		}
		if (p.length <= 0) {
			p.push(npx, npy);
			n.push(0, 1);
		}
		const result: UtilPolygon[] = [];
		tmp.cut(result);
		return result;
	}
}
