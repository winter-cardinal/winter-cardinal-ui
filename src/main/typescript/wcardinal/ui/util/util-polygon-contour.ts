export const CONTOUR_EPSILON = 1e-5;

export class Contour {
	p: number[];
	n: number[];
	protected _next?: Contour[];

	constructor() {
		this.p = [];
		this.n = [];
	}

	get next(): Contour[] {
		return (this._next ??= this.newNext());
	}

	protected newNext(): Contour[] {
		// Calculate p[i], n[i], m[i]
		const p = this.p;
		const pl = this.p.length;
		if (pl <= 4) {
			return [];
		}

		// Calculate s[i], t[i]
		//
		// t[i]=n[i] + s[i] m[i]
		// s[i]=(1 - dot(n[i],n[i-1])) / dot(m[i],n[i-1])
		const t: number[] = [];
		const n = this.n;
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
				if (mdri < 0 || dr < mdr) {
					mdr = dr;
					mdri = i;
				}
			} else {
				const mx = ny;
				const my = -nx;
				const dmpt = mx * (tx - ptx) + my * (ty - pty);
				if (CONTOUR_EPSILON < Math.abs(dmpt)) {
					const dr = (mx * dpx + my * dpy) / dmpt;
					if (mdri < 0 || dr < mdr) {
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
					if (dr < mdr) {
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
						if (mdri < 0 || dr < mdr) {
							mdr = dr;
							mdri = i;
						}
					}
					const c23 = c2 + c3;
					if (CONTOUR_EPSILON < Math.abs(c23)) {
						const dr = (c0 + c1) / c23;
						if (mdri < 0 || dr < mdr) {
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
			const q = [];
			for (let i = 0; i < pl; i += 2) {
				q.push(p[i] - mdr * t[i], p[i + 1] - mdr * t[i + 1]);
			}
			return Contour.from(q).cut();
		}

		// No dr has found
		return [];
	}

	cut(): Contour[] {
		const p = this.p;
		const n = this.n;
		const pl = p.length;
		for (let i = 0; i < pl; i += 2) {
			const pix = p[i];
			const piy = p[i + 1];
			for (let k = 0; k < pl; k += 2) {
				if (k === i || (0 < i && k === i - 2) || (i === 0 && k === pl - 2)) {
					continue;
				}
				const pkx = p[k];
				const pky = p[k + 1];
				const nkx = n[k];
				const nky = n[k + 1];
				const mkx = nky;
				const mky = -nkx;
				const dx = pix - pkx;
				const dy = piy - pky;
				const dn = nkx * dx + nky * dy;
				const dm = mkx * dx + mky * dy;
				if (Math.abs(dn) < CONTOUR_EPSILON && 0 <= dm && dm <= 1) {
					const result = [];
					if (i < k) {
						// In this case, points are arranged like (p[0], ..., p[i], ...., p[k], p[k+1], p[k+2], ..., p[pl-1]).
						// So, cut out the polygons of (p[i], ..., p[k], p[k+1]) and (p[0], ..., p[i], p[k+2], ..., p[pl-1]).
						const cutted1 = new Contour();
						for (let l = i; l <= k; l += 2) {
							cutted1.p.push(p[l], p[l + 1]);
							cutted1.n.push(n[l], n[l + 1]);
						}
						cutted1.cut().forEach((cutted) => {
							result.push(cutted);
						});

						const cutted2 = new Contour();
						for (let l = 0; l <= i; l += 2) {
							cutted2.p.push(p[l], p[l + 1]);
							cutted2.n.push(n[l], n[l + 1]);
						}
						for (let l = k + 2; l < pl; l += 2) {
							cutted2.p.push(p[l], p[l + 1]);
							cutted2.n.push(n[l], n[l + 1]);
						}
						cutted2.cut().forEach((cutted) => {
							result.push(cutted);
						});
					} else {
						// On the other hand, in this case, points are arranged like (p[0], ..., p[k], p[k+1], p[k+2], ..., p[i], ...., p[pl-1]).
						// Cut out the polygons of (p[k+2], ..., p[i]) and (p[0], ..., p[k], p[k+1], p[i], ..., p[pl-1]).
						const cutted1 = new Contour();
						for (let l = k + 2; l <= i; l += 2) {
							cutted1.p.push(p[l], p[l + 1]);
							cutted1.n.push(n[l], n[l + 1]);
						}
						result.push(cutted1);

						const cutted2 = new Contour();
						for (let l = 0; l <= k; l += 2) {
							cutted2.p.push(p[l], p[l + 1]);
							cutted2.n.push(n[l], n[l + 1]);
						}
						for (let l = i; l < pl; l += 2) {
							cutted2.p.push(p[l], p[l + 1]);
							cutted2.n.push(n[l], n[l + 1]);
						}
						cutted2.cut().forEach((cutted) => {
							result.push(cutted);
						});
					}
					return result;
				}
			}
		}
		return [this];
	}

	public static from(points: number[]): Contour {
		const result = new Contour();
		const pointsLength = points.length;
		if (pointsLength <= 0) {
			return result;
		}
		const p = result.p;
		const n = result.n;
		let npx = points[0];
		let npy = points[1];
		for (let i = pointsLength - 2; 0 <= i; i -= 2) {
			const px = points[i];
			const py = points[i + 1];
			const dx = npx - px;
			const dy = npy - py;
			const d = dx * dx + dy * dy;
			if (d <= CONTOUR_EPSILON) {
				// Skip this point
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
		return result;
	}
}

export class UtilPolygonContour {
	public static from(points: number[]): Contour {
		return Contour.from(points);
	}
}
