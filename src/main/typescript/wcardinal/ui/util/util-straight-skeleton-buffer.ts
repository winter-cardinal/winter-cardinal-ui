import { utils } from "pixi.js";
import { UtilStraightSkeletonWavefront } from "./util-straight-skeleton";

export class UtilStraightSkeletonBufferBuilder {
	protected _vertices: number[];
	protected _distances: number[];
	protected _lengths: number[];
	protected _clippings: number[];
	protected _indices: number[];
	protected _wavefrontToIndexToIv: Map<
		UtilStraightSkeletonWavefront,
		Map<number, Map<number, number>>
	>;

	constructor() {
		this._vertices = [];
		this._distances = [];
		this._lengths = [];
		this._clippings = [];
		this._indices = [];
		this._wavefrontToIndexToIv = new Map<
			UtilStraightSkeletonWavefront,
			Map<number, Map<number, number>>
		>();
	}

	addVertex(wavefront: UtilStraightSkeletonWavefront, index: number, length: number): number {
		const indexToLengthToIv = this._wavefrontToIndexToIv.get(wavefront);
		if (indexToLengthToIv == null) {
			const iv = this.addVertexAt(wavefront, index, length);
			const newLengthToIv = new Map<number, number>();
			newLengthToIv.set(length, iv);
			const newIndexToLengthToIv = new Map<number, Map<number, number>>();
			newIndexToLengthToIv.set(index, newLengthToIv);
			this._wavefrontToIndexToIv.set(wavefront, newIndexToLengthToIv);
			return iv;
		} else {
			const lengthToIv = indexToLengthToIv.get(index);
			if (lengthToIv == null) {
				const iv = this.addVertexAt(wavefront, index, length);
				const newLengthToIv = new Map<number, number>();
				newLengthToIv.set(length, iv);
				indexToLengthToIv.set(index, newLengthToIv);
				return iv;
			} else {
				const iv = lengthToIv.get(length);
				if (iv == null) {
					const newIv = this.addVertexAt(wavefront, index, length);
					lengthToIv.set(length, newIv);
					return newIv;
				} else {
					return iv;
				}
			}
		}
	}

	addVertexAt(wavefront: UtilStraightSkeletonWavefront, index: number, length: number): number {
		const vertices = this._vertices;
		const result = vertices.length >> 1;
		const points = wavefront.points;
		vertices.push(points[index], points[index + 1]);
		const distance = wavefront.distance;
		this._distances.push(distance);
		this._lengths.push(length);
		return result;
	}

	addWavefront(wavefront: UtilStraightSkeletonWavefront): void {
		if (wavefront.parent != null) {
			return;
		}

		// Add all edges
		const distances = this._distances;
		const oldDistancesLength = distances.length;
		const p = wavefront.points;
		const pl = p.length;
		if (4 < pl) {
			const n = wavefront.normals;
			let la = 0;
			for (let ia = 0; ia < pl; ia += 2) {
				const ib = (ia + 2) % pl;
				const xa = p[ia];
				const ya = p[ia + 1];
				const xb = p[ib];
				const yb = p[ib + 1];
				const dx = xb - xa;
				const dy = yb - ya;
				const dd = dx * dx + dy * dy;
				const nx = n[ia];
				const ny = n[ia + 1];
				const mx = ny;
				const my = -nx;
				const l = dx * mx + dy * my;
				const lb = la + l;
				let fx = 0;
				let fy = 0;
				if (0 < dd) {
					const f = 1 / dd;
					fx = dx * f;
					fy = dy * f;
				}
				this.addEdge(wavefront, ia, ib, la, lb, xa, ya, fx, fy);
				la = lb;
			}
		}

		// Make clippings and adjust distances
		const newDistancesLength = distances.length;
		if (newDistancesLength <= oldDistancesLength) {
			return;
		}
		let mdistance = distances[oldDistancesLength];
		for (let i = oldDistancesLength + 1; i < newDistancesLength; ++i) {
			mdistance = Math.max(mdistance, distances[i]);
		}
		const clippings = this._clippings;
		if (0 < mdistance) {
			const fdistance = 1 / mdistance;
			for (let i = oldDistancesLength; i < newDistancesLength; ++i) {
				clippings.push(1 - distances[i] * fdistance);
				distances[i] = fdistance;
			}
		} else {
			for (let i = oldDistancesLength; i < newDistancesLength; ++i) {
				clippings.push(1);
				distances[i] = mdistance;
			}
		}
	}

	addWavefrontAll(wavefronts: UtilStraightSkeletonWavefront[]): this {
		const wavefrontsLength = wavefronts.length;
		for (let i = 0; i < wavefrontsLength; ++i) {
			this.addWavefront(wavefronts[i]);
		}
		return this;
	}

	protected calcLength(
		wavefront: UtilStraightSkeletonWavefront,
		i: number,
		la: number,
		lb: number,
		xa: number,
		ya: number,
		fx: number,
		fy: number
	): number {
		const points = wavefront.points;
		const t = (points[i] - xa) * fx + (points[i + 1] - ya) * fy;
		return (1 - t) * la + t * lb;
	}

	protected addEdge(
		wavefront: UtilStraightSkeletonWavefront,
		ia: number,
		ib: number,
		la: number,
		lb: number,
		xa: number,
		ya: number,
		fx: number,
		fy: number
	): void {
		const awavefronts: UtilStraightSkeletonWavefront[] = [];
		const bwavefronts: UtilStraightSkeletonWavefront[] = [wavefront, wavefront];
		const aindices: number[] = [];
		const bindices: number[] = [ia, ib];
		const alengths: number[] = [];
		const blengths: number[] = [la, lb];
		const work: [number, number, number] = [0, 0, 0];
		while (true) {
			const next = this.findEdgeNext(wavefront, ia, ib, work);
			if (next[0] < 0) {
				break;
			}
			wavefront = wavefront.children[next[0]];
			ia = next[1];
			ib = next[2];
			if (ia === ib) {
				if (
					wavefront.children.length <= 0 ||
					2 <= wavefront.mappings[ib].length ||
					0 <= wavefront.bridges[ib]
				) {
					bwavefronts.push(wavefront);
					bindices.push(ib);
					blengths.push(this.calcLength(wavefront, ib, la, lb, xa, ya, fx, fy));
				}
				break;
			} else {
				if (
					wavefront.children.length <= 0 ||
					2 <= wavefront.mappings[ia].length ||
					0 <= wavefront.bridges[ia]
				) {
					awavefronts.push(wavefront);
					aindices.push(ia);
					alengths.push(this.calcLength(wavefront, ia, la, lb, xa, ya, fx, fy));
				}
				if (
					wavefront.children.length <= 0 ||
					2 <= wavefront.mappings[ib].length ||
					0 <= wavefront.bridges[ib]
				) {
					bwavefronts.push(wavefront);
					bindices.push(ib);
					blengths.push(this.calcLength(wavefront, ib, la, lb, xa, ya, fx, fy));
				}
			}
		}

		// Merge awavefronts / aindices into bwavefronts / bindices
		const awavefrontsLength = awavefronts.length;
		for (let i = awavefrontsLength - 1; 0 <= i; --i) {
			bwavefronts.push(awavefronts[i]);
			bindices.push(aindices[i]);
			blengths.push(alengths[i]);
		}

		// Triangulate
		this.triangulate(bwavefronts, bindices, blengths);
	}

	protected findEdgeNext(
		wavefront: UtilStraightSkeletonWavefront,
		ia: number,
		ib: number,
		result: [number, number, number]
	): [number, number, number] {
		const rmappings = wavefront.rmappings;
		const ca = rmappings[ia];
		const pa = rmappings[ia + 1];
		const cb = rmappings[ib];
		const pb = rmappings[ib + 1];
		result[0] = -1;
		for (let ica = 0; ica < ca.length; ++ica) {
			for (let icb = 0; icb < cb.length; ++icb) {
				if (ca[ica] === cb[icb]) {
					if (result[0] < 0) {
						result[0] = ca[ica];
						result[1] = pa[ica];
						result[2] = pb[icb];
					} else {
						result[0] = -1;
						return result;
					}
				}
			}
		}
		return result;
	}

	protected triangulate(
		wavefronts: UtilStraightSkeletonWavefront[],
		indices: number[],
		lengths: number[]
	): void {
		const wavefrontsLength = wavefronts.length;
		if (wavefrontsLength === 3) {
			this._indices.push(
				this.addVertex(wavefronts[0], indices[0], lengths[0]),
				this.addVertex(wavefronts[1], indices[1], lengths[1]),
				this.addVertex(wavefronts[2], indices[2], lengths[2])
			);
		} else if (3 < wavefrontsLength) {
			// Add all vertices
			const ivs: number[] = [];
			const vs: number[] = [];
			const vertices = this._vertices;
			for (let i = 0; i < wavefrontsLength; ++i) {
				const iv1 = this.addVertex(wavefronts[i], indices[i], lengths[i]);
				ivs.push(iv1);
				const iv2 = iv1 << 1;
				vs.push(vertices[iv2], vertices[iv2 + 1]);
			}

			// Add all indices
			const iis = utils.earcut(vs);
			const iisl = iis.length;
			for (let i = 0; i < iisl; i += 3) {
				this._indices.push(ivs[iis[i]], ivs[iis[i + 1]], ivs[iis[i + 2]]);
			}
		}
	}

	/**
	 * Returns {@link UtilStraightSkeletonBuffer} instance.
	 * Must not call any methods after calling this methods.
	 *
	 * @returns a new {@link UtilStraightSkeletonBuffer} instance
	 */
	build(): UtilStraightSkeletonBuffer {
		this._wavefrontToIndexToIv.clear();
		return new UtilStraightSkeletonBuffer(
			this._vertices,
			this._distances,
			this._lengths,
			this._clippings,
			this._indices
		);
	}
}

export class UtilStraightSkeletonBuffer {
	vertices: number[];
	distances: number[];
	lengths: number[];
	clippings: number[];
	indices: number[];

	constructor(
		vertices: number[],
		distances: number[],
		lengths: number[],
		clippings: number[],
		indices: number[]
	) {
		this.vertices = vertices;
		this.distances = distances;
		this.lengths = lengths;
		this.clippings = clippings;
		this.indices = indices;
	}

	public static from(wavefronts: UtilStraightSkeletonWavefront[]): UtilStraightSkeletonBuffer {
		return new UtilStraightSkeletonBufferBuilder().addWavefrontAll(wavefronts).build();
	}
}
