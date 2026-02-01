import { utils } from "pixi.js";
import { UtilStraightSkeletonWavefront } from "./util-straight-skeleton";

export class UtilStraightSkeletonBufferBuilder {
	protected _vertices: number[];
	protected _distances: number[];
	protected _clippings: number[];
	protected _indices: number[];
	protected _wavefrontToIndexToIv: Map<UtilStraightSkeletonWavefront, Map<number, number>>;

	constructor() {
		this._vertices = [];
		this._distances = [];
		this._clippings = [];
		this._indices = [];
		this._wavefrontToIndexToIv = new Map<UtilStraightSkeletonWavefront, Map<number, number>>();
	}

	addVertex(wavefront: UtilStraightSkeletonWavefront, index: number): number {
		let indexToIv = this._wavefrontToIndexToIv.get(wavefront);
		if (indexToIv == null) {
			indexToIv = new Map<number, number>();
			const vertices = this._vertices;
			const result = vertices.length >> 1;
			indexToIv.set(index, result);
			this._wavefrontToIndexToIv.set(wavefront, indexToIv);
			const points = wavefront.points;
			vertices.push(points[index], points[index + 1]);
			const distance = wavefront.distance;
			this._distances.push(distance, distance);
			return result;
		} else {
			let result = indexToIv.get(index);
			if (result != null) {
				return result;
			}
			const vertices = this._vertices;
			result = vertices.length >> 1;
			indexToIv.set(index, result);
			const points = wavefront.points;
			vertices.push(points[index], points[index + 1]);
			const distance = wavefront.distance;
			this._distances.push(distance, distance);
			return result;
		}
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
			for (let i = 0; i < pl; i += 2) {
				this.addEdge(wavefront, i, (i + 2) % pl);
			}
		}

		// Make clippings and adjust distances
		const newDistancesLength = distances.length;
		if (newDistancesLength <= oldDistancesLength) {
			return;
		}
		let mdistance = distances[oldDistancesLength];
		for (let i = oldDistancesLength + 1; i < newDistancesLength; i += 2) {
			mdistance = Math.max(mdistance, distances[i]);
		}
		const clippings = this._clippings;
		if (0 < mdistance) {
			const fdistance = 1 / mdistance;
			for (let i = oldDistancesLength; i < newDistancesLength; i += 2) {
				clippings.push(1 - distances[i] * fdistance);
				distances[i] = mdistance;
				distances[i + 1] = mdistance;
			}
		} else {
			for (let i = oldDistancesLength; i < newDistancesLength; i += 2) {
				clippings.push(1);
				distances[i] = mdistance;
				distances[i + 1] = mdistance;
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

	protected addEdge(wavefront: UtilStraightSkeletonWavefront, ia: number, ib: number): void {
		const awavefronts: UtilStraightSkeletonWavefront[] = [];
		const bwavefronts: UtilStraightSkeletonWavefront[] = [wavefront, wavefront];
		const aindices: number[] = [];
		const bindices: number[] = [ia, ib];
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
				}
				if (
					wavefront.children.length <= 0 ||
					2 <= wavefront.mappings[ib].length ||
					0 <= wavefront.bridges[ib]
				) {
					bwavefronts.push(wavefront);
					bindices.push(ib);
				}
			}
		}
		const awavefrontsLength = awavefronts.length;
		for (let i = awavefrontsLength - 1; 0 <= i; --i) {
			bwavefronts.push(awavefronts[i]);
			bindices.push(aindices[i]);
		}
		this.triangulate(bwavefronts, bindices);
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

	protected triangulate(wavefronts: UtilStraightSkeletonWavefront[], indices: number[]): void {
		const wavefrontsLength = wavefronts.length;
		if (wavefrontsLength === 3) {
			this._indices.push(
				this.addVertex(wavefronts[0], indices[0]),
				this.addVertex(wavefronts[1], indices[1]),
				this.addVertex(wavefronts[2], indices[2])
			);
		} else if (3 < wavefrontsLength) {
			// Add all vertices
			const ivs: number[] = [];
			const vs: number[] = [];
			const vertices = this._vertices;
			for (let i = 0; i < wavefrontsLength; ++i) {
				const iv1 = this.addVertex(wavefronts[i], indices[i]);
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
			this._clippings,
			this._indices
		);
	}
}

export class UtilStraightSkeletonBuffer {
	vertices: number[];
	distances: number[];
	clippings: number[];
	indices: number[];

	constructor(vertices: number[], distances: number[], clippings: number[], indices: number[]) {
		this.vertices = vertices;
		this.distances = distances;
		this.clippings = clippings;
		this.indices = indices;
	}

	public static from(wavefronts: UtilStraightSkeletonWavefront[]): UtilStraightSkeletonBuffer {
		return new UtilStraightSkeletonBufferBuilder().addWavefrontAll(wavefronts).build();
	}
}
