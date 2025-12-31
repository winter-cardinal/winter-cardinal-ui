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

	protected merge(): this {
		const p = this.points;
		const pl = p.length;
		if (pl <= 2) {
			// No need to merge
			return this;
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
		}

		// Done
		return this;
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
				const dx0 = pix - pkx;
				const dy0 = piy - pky;
				const dx1 = npix - pkx;
				const dy1 = npiy - pky;
				const dn0 = nkx * dx0 + nky * dy0;
				const dn1 = nkx * dx1 + nky * dy1;
				if (Math.sign(dn0) !== Math.sign(dn1)) {
					const dn01 = dn0 - dn1;
					if (EPSILON < Math.abs(dn01)) {
						const t = dn0 / dn01;
						if (0 <= t && t <= 1) {
							const mkx = nky;
							const mky = -nkx;
							const dm0 = mkx * dx0 + mky * dy0;
							const dm1 = mkx * dx1 + mky * dy1;
							const dm = dm0 + t * (dm1 - dm0);
							if (Math.abs(dm) < EPSILON) {
								if (i < k) {
									// (0, 2, ..., i, [t], i + 2, ..., [k], k + 2, ..., pl - 2)
									// -> (i + 2, ..., [k])
									// -> (0, 2, ..., i, [k], k + 2, ..., pl - 2)
									this.cut1a(i + 2, k, p, n, result);
									this.cut2a(0, i, k, pl - 2, p, n, result);
								} else {
									// (0, 2, ..., [k], k + 2, ..., i, [t], i + 2, ..., pl - 2)
									// -> ([k], k + 2, ..., i)
									// -> (0, 2, ..., [k], i + 2, ..., pl - 2)
									this.cut1a(k, i, p, n, result);
									this.cut2a(0, k, i + 2, pl - 2, p, n, result);
								}
								return true;
							} else {
								const dx2 = npkx - pkx;
								const dy2 = npky - pky;
								const dm2 = mkx * dx2 + mky * dy2;
								if (0 <= dm && dm <= dm2 && EPSILON <= Math.abs(dm - dm2)) {
									const tpx = pix + t * (npix - pix);
									const tpy = piy + t * (npiy - piy);
									if (i < k) {
										// (0, 2, ..., i, [t], i + 2, ..., k, [t], k + 2, ..., pl - 2)
										// -> ([t], i + 2, ..., k)
										// -> (0, 2, ..., i, [t], k + 2, ..., pl - 2)
										this.cut1b(i + 2, k, tpx, tpy, p, n, result);
										this.cut2b(0, i, k + 2, pl - 2, tpx, tpy, p, n, result);
									} else {
										// (0, 2, ..., k, [t], k + 2, ..., i, [t], i + 2, ..., pl - 2)
										// -> ([t], k + 2, ..., i)
										// -> (0, 2, ..., k, [t], i + 2, ..., pl - 2)
										this.cut1b(k + 2, i, tpx, tpy, p, n, result);
										this.cut2b(0, k, i + 2, pl - 2, tpx, tpy, p, n, result);
									}
									return true;
								}
							}
						}
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

	protected cut1a(
		from: number,
		to: number,
		p: number[],
		n: number[],
		result: UtilPolygon[]
	): void {
		if (2 < to - from + 2) {
			const tmp = new UtilPolygon();
			const tp = tmp.points;
			const tn = tmp.normals;
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
			tmp.merge().cut(result);
		}
	}

	protected cut1b(
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
			tmp.merge().cut(result);
		}
	}

	protected cut2a(
		from1: number,
		to1: number,
		from2: number,
		to2: number,
		p: number[],
		n: number[],
		result: UtilPolygon[]
	): void {
		if (2 < Math.max(0, to1 - from1 + 2) + Math.max(0, to2 - from2 + 2)) {
			const tmp = new UtilPolygon();
			const tp = tmp.points;
			const tn = tmp.normals;
			for (let i = from1; i <= to1; i += 2) {
				tp.push(p[i], p[i + 1]);
				tn.push(n[i], n[i + 1]);
			}
			for (let i = from2; i <= to2; i += 2) {
				tp.push(p[i], p[i + 1]);
				tn.push(n[i], n[i + 1]);
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

			// Done
			tmp.merge().cut(result);
		}
	}

	protected cut2b(
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
			tmp.merge().cut(result);
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
