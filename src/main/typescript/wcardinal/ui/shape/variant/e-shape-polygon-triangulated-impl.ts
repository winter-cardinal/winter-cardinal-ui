import { UtilStraightSkeleton } from "../../util/util-straight-skeleton";
import { UtilStraightSkeletonBuffer } from "../../util/util-straight-skeleton-buffer";
import { EShapeBoundary } from "../e-shape-boundary";
import { toPointsBoundary } from "../e-shape-points-formatted";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import type { EShapePolygon } from "./e-shape-polygon";
import type { EShapePolygonTriangulated } from "./e-shape-polygon-triangulated";

export type EShapePolygonTriangulatedExtensionSerialized = [
	number,
	number,
	number,
	number,
	number,
	number
];

export class EShapePolygonTriangulatedImpl implements EShapePolygonTriangulated {
	protected _id: number;
	protected _parent: EShapePolygon;
	protected _parentPointsId: number;
	protected _vertices: number[];
	protected _nvertices: number;
	protected _distances: number[];
	protected _lengths: number[];
	protected _clippings: number[];
	protected _uvs: number[];
	protected _indices: number[];
	protected _nindices: number;
	protected _boundary: EShapeBoundary;

	constructor(parent: EShapePolygon) {
		this._id = 0;
		this._parent = parent;
		this._parentPointsId = -1;
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

	set(
		parentPointsId?: number,
		vertices?: number[],
		distances?: number[],
		lengths?: number[],
		clippings?: number[],
		uvs?: number[],
		indices?: number[]
	): this {
		let isChanged = false;

		// Parent Vertex ID
		if (parentPointsId != null) {
			this._parentPointsId = parentPointsId;
			isChanged = true;
		}

		// Vertices
		if (vertices != null) {
			const verticesLength = vertices.length;
			for (let i = 0; i < verticesLength; ++i) {
				this._vertices[i] = vertices[i];
			}
			if (this._vertices.length !== verticesLength) {
				this._vertices.length = verticesLength;
			}
			this._nvertices = verticesLength >> 1;
			isChanged = true;
		}

		// Distances
		if (distances != null) {
			const distancesLength = distances.length;
			for (let i = 0; i < distancesLength; ++i) {
				this._distances[i] = distances[i];
			}
			if (this._distances.length !== distancesLength) {
				this._distances.length = distancesLength;
			}
			isChanged = true;
		}

		// Lengths
		if (lengths != null) {
			const lengthsLength = lengths.length;
			for (let i = 0; i < lengthsLength; ++i) {
				this._lengths[i] = lengths[i];
			}
			if (this._lengths.length !== lengthsLength) {
				this._lengths.length = lengthsLength;
			}
			isChanged = true;
		}

		// Clippings
		if (clippings != null) {
			const clippingsLength = clippings.length;
			for (let i = 0; i < clippingsLength; ++i) {
				this._clippings[i] = clippings[i];
			}
			if (this._clippings.length !== clippingsLength) {
				this._clippings.length = clippingsLength;
			}
			isChanged = true;
		}

		// UVs
		if (uvs != null) {
			const uvsLength = uvs.length;
			for (let i = 0; i < uvsLength; ++i) {
				this._uvs[i] = uvs[i];
			}
			if (this._uvs.length !== uvsLength) {
				this._uvs.length = uvsLength;
			}
			isChanged = true;
		}

		// Indices
		if (indices != null) {
			const indicesLength = indices.length;
			for (let i = 0; i < indicesLength; ++i) {
				this._indices[i] = indices[i];
			}
			if (this._indices.length !== indicesLength) {
				this._indices.length = indicesLength;
			}
			this._nindices = indicesLength / 3;
			isChanged = true;
		}

		// Done
		if (isChanged) {
			this._id += 1;
		}
		return this;
	}

	protected triangulate(): void {
		const parent = this._parent;
		const parentPoints = parent.points;
		const parentPointsId = parentPoints.id;
		const isParentIdChanged = this._parentPointsId !== parentPointsId;
		if (isParentIdChanged) {
			this._parentPointsId = parentPointsId;
			const buffer = UtilStraightSkeletonBuffer.from(
				UtilStraightSkeleton.from(parentPoints.formatted.values)
			);
			this._id += 1;
			const vertices = buffer.vertices;
			this._vertices = vertices;
			this._nvertices = buffer.vertices.length >> 1;
			this._distances = buffer.distances;
			this._lengths = buffer.lengths;
			this._clippings = buffer.clippings;
			const boundary = this._boundary;
			toPointsBoundary(vertices, boundary);
			this._uvs = this.toUvs(vertices, boundary);
			this._indices = buffer.indices;
			this._nindices = buffer.indices.length / 3;
		}
	}

	protected toUvs(vertices: number[], boundary: EShapeBoundary): number[] {
		const result: number[] = [];
		const xmin = boundary[0];
		const ymin = boundary[1];
		const xmax = boundary[2];
		const ymax = boundary[3];
		const sx = xmax - xmin;
		const sy = ymax - ymin;
		const fx = 0 < sx ? 1 / sx : 0;
		const fy = 0 < sy ? 1 / sy : 0;
		const verticesLength = vertices.length;
		for (let i = 0; i < verticesLength; i += 2) {
			result.push((vertices[i] - xmin) * fx, (vertices[i + 1] - ymin) * fy);
		}
		return result;
	}

	copy(source: EShapePolygonTriangulated): this {
		this.set(
			this._parent.points.id,
			source.vertices,
			source.distances,
			source.lengths,
			source.clippings,
			source.uvs,
			source.indices
		);
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		this.triangulate();
		const serialized: EShapePolygonTriangulatedExtensionSerialized = [
			manager.addResource(JSON.stringify(this._vertices)),
			manager.addResource(JSON.stringify(this._distances)),
			manager.addResource(JSON.stringify(this._lengths)),
			manager.addResource(JSON.stringify(this._clippings)),
			manager.addResource(JSON.stringify(this._uvs)),
			manager.addResource(JSON.stringify(this._indices))
		];
		return manager.addResource(JSON.stringify(serialized));
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		const resourcesLength = resources.length;
		if (0 <= resourceId && resourceId < resourcesLength) {
			let parsed =
				manager.getExtension<EShapePolygonTriangulatedExtensionSerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(
					resources[resourceId]
				) as EShapePolygonTriangulatedExtensionSerialized;
				manager.setExtension(resourceId, parsed);
			}

			// Parent Points Id
			this._parentPointsId = this._parent.points.id;

			// Vertices
			const vertexId = parsed[0];
			if (0 <= vertexId && vertexId < resourcesLength) {
				let vertices = manager.getExtension<number[]>(vertexId);
				if (vertices == null) {
					vertices = JSON.parse(resources[vertexId]) as number[];
					manager.setExtension(vertexId, vertices);
				}
				this._vertices = vertices;
				this._nvertices = vertices.length >> 1;
			}

			// Distances
			const distanceId = parsed[1];
			if (0 <= distanceId && distanceId < resourcesLength) {
				let distances = manager.getExtension<number[]>(distanceId);
				if (distances == null) {
					distances = JSON.parse(resources[distanceId]) as number[];
					manager.setExtension(distanceId, distances);
				}
				this._distances = distances;
			}

			// Lengths
			const lengthId = parsed[2];
			if (0 <= lengthId && lengthId < resourcesLength) {
				let lengths = manager.getExtension<number[]>(lengthId);
				if (lengths == null) {
					lengths = JSON.parse(resources[lengthId]) as number[];
					manager.setExtension(lengthId, lengths);
				}
				this._lengths = lengths;
			}

			// Clippings
			const clippingId = parsed[3];
			if (0 <= clippingId && clippingId < resourcesLength) {
				let clippings = manager.getExtension<number[]>(clippingId);
				if (clippings == null) {
					clippings = JSON.parse(resources[clippingId]) as number[];
					manager.setExtension(clippingId, clippings);
				}
				this._clippings = clippings;
			}

			// UVs
			const uvId = parsed[4];
			if (0 <= uvId && uvId < resourcesLength) {
				let uvs = manager.getExtension<number[]>(uvId);
				if (uvs == null) {
					uvs = JSON.parse(resources[uvId]) as number[];
					manager.setExtension(uvId, uvs);
				}
				this._uvs = uvs;
			}

			// Indices
			const indexId = parsed[5];
			if (0 <= indexId && indexId < resourcesLength) {
				let indices = manager.getExtension<number[]>(indexId);
				if (indices == null) {
					indices = JSON.parse(resources[indexId]) as number[];
					manager.setExtension(indexId, indices);
				}
				this._indices = indices;
				this._nindices = indices.length / 3;
			}

			this._id += 1;
		}
	}
}
