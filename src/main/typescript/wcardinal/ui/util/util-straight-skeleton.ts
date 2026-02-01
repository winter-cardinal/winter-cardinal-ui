import { UtilPolygon } from "./util-polygon";

export class UtilStraightSkeletonWavefront {
	protected static EMPTY_ARRAY: any[] = [];
	readonly parent: UtilStraightSkeletonWavefront | null;
	distance: number;
	readonly points: number[];
	readonly normals: number[];
	readonly mappings: number[][];
	readonly rmappings: number[][];
	readonly bridges: number[];
	readonly children: UtilStraightSkeletonWavefront[];
	protected readonly epsilon: number;

	constructor(parent: UtilStraightSkeletonWavefront | null, distance: number, epsilon: number) {
		this.parent = parent;
		this.distance = distance;
		this.points = [];
		this.normals = [];
		this.mappings = [];
		this.rmappings = [];
		this.bridges = [];
		this.children = [];
		this.epsilon = epsilon;
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
		const epsilon = this.epsilon;
		const t: number[] = [];
		const n = this.normals;
		let pnx = n[pl - 2];
		let pny = n[pl - 1];
		for (let i = 0; i < pl; i += 2) {
			const nx = n[i];
			const ny = n[i + 1];
			const mx = ny;
			const my = -nx;
			const dnm = mx * pnx + my * pny;
			const dnn = nx * pnx + ny * pny;
			// TODO: ADD HANDLING FOR THE CASE DNM === 0 &&  DNN < 0
			const s = 0 < Math.abs(dnm) ? (1 - dnn) / dnm : 0 <= dnn ? -0.5 * dnm : 0;
			const tx = nx + s * mx;
			const ty = ny + s * my;
			t.push(tx, ty);
			pnx = nx;
			pny = ny;
		}

		// Find the smallest dr
		let mdr = 0;
		let mdri = -1;
		let ppix = p[pl - 2];
		let ppiy = p[pl - 1];
		let ptix = t[pl - 2];
		let ptiy = t[pl - 1];
		let pnix = n[pl - 2];
		let pniy = n[pl - 1];
		for (let i = 0; i < pl; i += 2) {
			// Calculate dr where the i-th and (i-1)-th points collide.
			// dr = dot(n[i], p[i] - p[i - 1]) / dot(n[i], t[i] - t[i - 1])
			// dr = dot(m[i], p[i] - p[i - 1]) / dot(m[i], t[i] - t[i - 1])
			const nix = n[i];
			const niy = n[i + 1];
			const mix = niy;
			const miy = -nix;
			const tix = t[i];
			const tiy = t[i + 1];
			const pix = p[i];
			const piy = p[i + 1];
			const dpix = pix - ppix;
			const dpiy = piy - ppiy;
			const dtix = tix - ptix;
			const dtiy = tiy - ptiy;
			const dtin = nix * dtix + niy * dtiy;
			if (epsilon < Math.abs(dtin)) {
				const dpin = nix * dpix + niy * dpiy;
				const dr = dpin / dtin;
				if (0 <= dr && (mdri < 0 || dr < mdr)) {
					const dpim = mix * dpix + miy * dpiy;
					const dtim = mix * dtix + miy * dtiy;
					if (Math.abs(dpim - dr * dtim) < epsilon) {
						mdr = dr;
						mdri = i;
					}
				}
			} else {
				const dpim = mix * dpix + miy * dpiy;
				const dtim = mix * dtix + miy * dtiy;
				if (epsilon < Math.abs(dtim)) {
					const dr = dpim / dtim;
					if (0 <= dr && (mdri < 0 || dr < mdr)) {
						const dpin = nix * dpix + niy * dpiy;
						if (Math.abs(dpin - dr * dtin) < epsilon) {
							mdr = dr;
							mdri = i;
						}
					}
				} else {
					if (Math.abs(dpim) < epsilon) {
						const dpin = nix * dpix + niy * dpiy;
						if (Math.abs(dpin) < epsilon) {
							const dr = 0;
							if (0 <= dr && (mdri < 0 || dr < mdr)) {
								mdr = dr;
								mdri = i;
							}
						} else {
							// NO SOLUTIONS
						}
					} else {
						// NO SOLUTIONS
					}
				}
			}

			// Check if this i-th point is a flex point.
			if (0 <= mix * pnix + pniy * miy) {
				// Calculate dr where the i-th point and k-th edge collide.
				// dr = dot(n[k], p[i] - p[k]) / dot(n[k], t[i] - t[k])
				// dr = dot(m[k], p[i] - p[k]) / dot(m[k], t[i] - t[k])
				// dr = (dot(m[k], p[i] - p[k]) - dot(m[k], p[k+1] - p[k])) / (dot(m[k], t[i] - t[k]) - dot(m[k], t[k+1] - t[k]))
				for (let k = 0; k < pl; k += 2) {
					if (k === i || k === (pl + i - 2) % pl) {
						continue;
					}
					const pkx = p[k];
					const pky = p[k + 1];
					const nkx = n[k];
					const nky = n[k + 1];
					const mkx = nky;
					const mky = -nkx;
					const tkx = t[k];
					const tky = t[k + 1];
					const dpx = pix - pkx;
					const dpy = piy - pky;
					const dtx = tix - tkx;
					const dty = tiy - tky;
					const dtn = nkx * dtx + nky * dty;
					if (epsilon < Math.abs(dtn)) {
						const dpn = nkx * dpx + nky * dpy;
						const dr = dpn / dtn;
						if (0 <= dr && (mdri < 0 || dr < mdr)) {
							const dpm = mkx * dpx + mky * dpy;
							const dtm = mkx * dtx + mky * dty;
							const a = dpm - dr * dtm;
							if (epsilon <= a) {
								const nk = (k + 2) % pl;
								const npkx = p[nk];
								const npky = p[nk + 1];
								const ntkx = t[nk];
								const ntky = t[nk + 1];
								const dpkx = npkx - pkx;
								const dpky = npky - pky;
								const dtkx = ntkx - tkx;
								const dtky = ntky - tky;
								const dpkm = mkx * dpkx + mky * dpky;
								const dtkm = mkx * dtkx + mky * dtky;
								if (a - (dpkm - dr * dtkm) < epsilon) {
									mdr = dr;
									mdri = i;
								}
							}
						}
					} else {
						const nk = (k + 2) % pl;
						const npkx = p[nk];
						const npky = p[nk + 1];
						const ntkx = t[nk];
						const ntky = t[nk + 1];
						const dpkx = npkx - pkx;
						const dpky = npky - pky;
						const dtkx = ntkx - tkx;
						const dtky = ntky - tky;
						const dpm = mkx * dpx + mky * dpy;
						const dpkm = mkx * dpkx + mky * dpky;
						const dtm = mkx * dtx + mky * dty;
						const dtkm = mkx * dtkx + mky * dtky;

						// b = 0
						if (epsilon < Math.abs(dtm)) {
							const dr = dpm / dtm;
							if (0 <= dr && (mdri < 0 || dr < mdr)) {
								const dpn = nkx * dpx + nky * dpy;
								if (Math.abs(dpn - dr * dtn) < epsilon) {
									mdr = dr;
									mdri = i;
								}
							}
						} else {
							if (Math.abs(dpm) < epsilon) {
								const dpn = nkx * dpx + nky * dpy;
								if (Math.abs(dpn) < epsilon) {
									const dr = 0;
									if (0 <= dr && (mdri < 0 || dr < mdr)) {
										mdr = dr;
										mdri = i;
									}
								} else {
									// NO SOLUTION
								}
							} else {
								// NO SOLUTION
							}
						}

						// b = 1
						const dtma = dtm - dtkm;
						if (epsilon < Math.abs(dtma)) {
							const dr = (dpm - dpkm) / dtma;
							if (0 <= dr && (mdri < 0 || dr < mdr)) {
								const dpn = nkx * dpx + nky * dpy;
								if (Math.abs(dpn - dr * dtn) < epsilon) {
									mdr = dr;
									mdri = i;
								}
							}
						} else {
							if (Math.abs(dpm - dpkm) < epsilon) {
								const dpn = nkx * dpx + nky * dpy;
								if (Math.abs(dpn) < epsilon) {
									const dr = 0;
									if (0 <= dr && (mdri < 0 || dr < mdr)) {
										mdr = dr;
										mdri = i;
									}
								} else {
									// NO SOLUTION
								}
							} else {
								// NO SOLUTION
							}
						}
					}
				}
			}

			ptix = tix;
			ptiy = tiy;
			ppix = pix;
			ppiy = piy;
			pnix = nix;
			pniy = niy;
		}

		//
		if (0 <= mdri && 0 < mdr) {
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
		children.length = 0;
		this.cut(children);
		for (let i = children.length - 1; 0 <= i; --i) {
			if (!children[i].advance()) {
				// Failed to advance this wavefront
				children.splice(i, 1);
			}
		}
		return children;
	}

	merge(): boolean {
		const p = this.points;
		const pl = p.length;
		if (pl <= 2) {
			// No need to merge
			return false;
		}

		const epsilon = this.epsilon;
		const empty = UtilStraightSkeletonWavefront.EMPTY_ARRAY;
		const n = this.normals;
		const m = this.mappings;
		const b = this.bridges;
		let nr = 0;
		let ppx = p[0];
		let ppy = p[1];
		let ppi = 0;
		for (let i = 2; i < pl; i += 2) {
			const px = p[i];
			const py = p[i + 1];
			const dx = px - ppx;
			const dy = py - ppy;
			if (Math.abs(dx) <= epsilon && Math.abs(dy) <= epsilon) {
				// Merge this point to the previous point
				m[ppi] = m[ppi + 1] = m[ppi].concat(m[i]);
				m[i] = m[i + 1] = empty;
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
			if (Math.abs(dx) < epsilon && Math.abs(dy) < epsilon) {
				m[0] = m[1] = m[ppi].concat(m[0]);
				m[ppi] = m[ppi + 1] = empty;
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
				b.length = k;
			}
			return true;
		}
		return false;
	}

	insert(index: number, r: number, child: UtilStraightSkeletonWavefront | null): void {
		// Insert a position
		const p = this.points;
		const pl = p.length;
		const nindex = (index + 2) % pl;
		const px = p[index];
		const py = p[index + 1];
		const npx = p[nindex];
		const npy = p[nindex + 1];
		p.splice(index + 2, 0, px + r * (npx - px), py + r * (npy - py));

		// Insert a normal
		const n = this.normals;
		const nx = n[index];
		const ny = n[index + 1];
		n.splice(index + 2, 0, nx, ny);

		// Shift indices in bridges.
		const b = this.bridges;
		for (let i = 0; i < pl; i += 2) {
			const bx = b[i];
			if (index < bx) {
				b[i] = bx + 2;
			}
		}
		b.splice(index + 2, 0, -1, -1);

		// Insert a mapping and shift indices in mappings
		const m = this.mappings;
		const mx = m[index];
		const mxl = mx.length;
		const parent = this.parent;
		if (parent && 0 < mxl) {
			// Shift indices in mappings
			const pindex = mx[mxl - 1];
			for (let i = 0; i < pl; i += 2) {
				m[i] = m[i + 1] = this.toMappingShifted(pindex, m[i]);
			}

			// Insert a mapping
			const nmx = [pindex + 2];
			m.splice(index + 2, 0, nmx, nmx);

			// Insert a vertex to parent vertices
			parent.insert(pindex, r, this);
		} else {
			const empty = UtilStraightSkeletonWavefront.EMPTY_ARRAY;
			m.splice(index + 2, 0, empty, empty);
		}

		// Shift mappings of children
		const children = this.children;
		const childrenLength = children.length;
		for (let i = 0; i < childrenLength; ++i) {
			const c = children[i];
			if (c !== child) {
				const cm = c.mappings;
				const cml = cm.length;
				for (let k = 0; k < cml; k += 2) {
					cm[k] = cm[k + 1] = this.toMappingShifted(index, cm[k]);
				}
			}
		}
	}

	protected toMappingShifted(index: number, m: number[]): number[] {
		const ml = m.length;
		for (let i = 0; i < ml; ++i) {
			if (index < m[i]) {
				const result: number[] = [];
				for (let k = 0; k < ml; ++k) {
					const mv = m[k];
					result.push(index < mv ? mv + 2 : mv);
				}
				return result;
			}
		}
		return m;
	}

	cut(result: UtilStraightSkeletonWavefront[]): boolean {
		const p = this.points;
		let pl = p.length;
		const n = this.normals;
		const b = this.bridges;
		const epsilon = this.epsilon;
		for (let i = 0; i < pl; i += 2) {
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
				if (Math.abs(din) < epsilon) {
					const mkx = nky;
					const mky = -nkx;
					const dim = mkx * dix + mky * diy;
					if (Math.abs(dim) < epsilon) {
						b[i] = k;
						b[k] = i;
						break;
					} else {
						const l = (k + 2) % pl;
						const plx = p[l];
						const ply = p[l + 1];
						const dlx = plx - pkx;
						const dly = ply - pky;
						const dlm = mkx * dlx + mky * dly;
						if (Math.abs(dim - dlm) < epsilon) {
							b[i] = l;
							b[l] = i;
						} else if (0 <= dim && dim <= dlm) {
							if (Math.abs(dlm) < epsilon) {
								if (dim <= 0.5 * dlm) {
									b[i] = k;
									b[k] = i;
								} else {
									b[i] = l;
									b[l] = i;
								}
							} else {
								// Insert a vertex
								this.insert(k, dim / dlm, null);

								// Adjust i and pl
								if (k + 2 <= i) {
									i += 2;
								}
								pl += 2;

								// Add this bridge
								b[i] = k + 2;
								b[k + 2] = i;
							}
							break;
						}
					}
				}
			}
		}
		for (let ifrom = 0; ifrom < pl; ifrom += 2) {
			const ito = b[ifrom];
			if (0 <= ito && ifrom < ito) {
				const child = new UtilStraightSkeletonWavefront(this, this.distance, epsilon);
				const cp = child.points;
				const cn = child.normals;
				const cm = child.mappings;
				const cb = child.bridges;
				for (let i = ifrom; i < pl; i += 2) {
					cp.push(p[i], p[i + 1]);
					cn.push(n[i], n[i + 1]);
					const mix = [i];
					cm.push(mix, mix);
					cb.push(-1, -1);
					if (ifrom < i) {
						const k = b[i];
						if (0 <= k) {
							if (i < k) {
								cp.push(p[k], p[k + 1]);
								cn.push(n[k], n[k + 1]);
								const mkx = [k];
								cm.push(mkx, mkx);
								cb.push(-1, -1);
								i = k;
							} else {
								break;
							}
						}
					}
				}
				child.merge();
				result.push(child);
			}
		}
		const child = new UtilStraightSkeletonWavefront(this, this.distance, epsilon);
		const cp = child.points;
		const cn = child.normals;
		const cm = child.mappings;
		const cb = child.bridges;
		for (let i = 0; i < pl; i += 2) {
			cp.push(p[i], p[i + 1]);
			cn.push(n[i], n[i + 1]);
			const mix = [i];
			cm.push(mix, mix);
			cb.push(-1, -1);
			const k = b[i];
			if (0 <= k) {
				if (i < k) {
					cp.push(p[k], p[k + 1]);
					cn.push(n[k], n[k + 1]);
					const mkx = [k];
					cm.push(mkx, mkx);
					cb.push(-1, -1);
					i = k;
				} else {
					break;
				}
			}
		}
		child.merge();
		result.push(child);
		return true;
	}

	public static from(polygon: UtilPolygon, epsilon: number): UtilStraightSkeletonWavefront {
		const result = new UtilStraightSkeletonWavefront(null, 0, epsilon);
		const points = polygon.points;
		const pointsLength = points.length;
		if (pointsLength <= 0) {
			return result;
		}
		const normals = polygon.normals;
		const p = result.points;
		const n = result.normals;
		const m = result.mappings;
		const b = result.bridges;
		const empty = UtilStraightSkeletonWavefront.EMPTY_ARRAY;
		if (polygon.isCw()) {
			for (let i = pointsLength - 2; 0 <= i; i -= 2) {
				const k = (pointsLength + i - 2) % pointsLength;
				n.push(-normals[k], -normals[k + 1]);
				p.push(points[i], points[i + 1]);
				m.push(empty, empty);
				b.push(-1, -1);
			}
		} else {
			for (let i = 0; i < pointsLength; i += 2) {
				n.push(normals[i], normals[i + 1]);
				p.push(points[i], points[i + 1]);
				m.push(empty, empty);
				b.push(-1, -1);
			}
		}
		return result;
	}
}

export class UtilStraightSkeleton {
	public static from(
		points: number[],
		sx: number = 1,
		sy: number = 1,
		level: number = -1,
		epsilon: number = 1e-5
	): UtilStraightSkeletonWavefront[] {
		const result: UtilStraightSkeletonWavefront[] = [];
		const polygons = UtilPolygon.from(points, sx, sy, epsilon);
		for (let i = 0, imax = polygons.length; i < imax; ++i) {
			const wavefront = UtilStraightSkeletonWavefront.from(polygons[i], epsilon);
			if (level < 0 || 0 < level) {
				this.next(wavefront, level);
			}
			this.map(wavefront);
			result.push(wavefront);
		}
		return result;
	}

	protected static next(wavefront: UtilStraightSkeletonWavefront, level: number): void {
		const children = wavefront.next();
		level -= 1;
		if (level < 0 || 0 < level) {
			const childrenLength = children.length;
			if (0 < childrenLength) {
				for (let i = 0; i < childrenLength; ++i) {
					this.next(children[i], level);
				}
			}
		}
	}

	protected static map(wavefront: UtilStraightSkeletonWavefront): void {
		const p = wavefront.points;
		const pl = p.length;
		const r = wavefront.rmappings;
		for (let i = 0; i < pl; i += 2) {
			r.push([], []);
		}

		const children = wavefront.children;
		const childrenLength = children.length;
		for (let i = 0; i < childrenLength; ++i) {
			const child = children[i];
			const m = child.mappings;
			const ml = m.length;
			for (let k = 0; k < ml; k += 2) {
				const mx = m[k];
				const mxl = mx.length;
				for (let l = 0; l < mxl; ++l) {
					const mv = mx[l];
					r[mv].push(i);
					r[mv + 1].push(k);
				}
			}

			this.map(child);
		}
	}
}
