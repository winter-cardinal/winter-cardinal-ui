import { UtilStraightSkeleton } from "../../util/util-straight-skeleton";
import { UtilStraightSkeletonBuffer } from "../../util/util-straight-skeleton-buffer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import type { EShapePolygon } from "./e-shape-polygon";

export type EShapePolygonTriangulatedExtensionSerialized = [number, number, number, number];

export class EShapePolygonTriangulated {
	protected _id: number;
	protected _parent: EShapePolygon;
	protected _parentVertexId: number;
	protected _parentWidth: number;
	protected _parentHeight: number;
	protected _vertices: number[];
	protected _nvertices: number;
	protected _distances: number[];
	protected _clippings: number[];
	protected _indices: number[];
	protected _nindices: number;

	constructor(parent: EShapePolygon) {
		this._id = 0;
		this._parent = parent;
		this._parentVertexId = -1;
		this._parentWidth = -1;
		this._parentHeight = -1;
		this._vertices = [];
		this._nvertices = 0;
		this._distances = [];
		this._clippings = [];
		this._indices = [];
		this._nindices = 0;
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

	get clippings(): number[] {
		this.triangulate();
		return this._clippings;
	}

	get indices(): number[] {
		this.triangulate();
		return this._indices;
	}

	get nindices(): number {
		this.triangulate();
		return this._nindices;
	}

	set(
		parentVertexId?: number,
		parentWidth?: number,
		parentHeight?: number,
		vertices?: number[],
		distances?: number[],
		clippings?: number[],
		indices?: number[]
	): this {
		let isChanged = false;

		// Parent Vertex ID
		if (parentVertexId != null) {
			this._parentVertexId = parentVertexId;
			isChanged = true;
		}

		// Parent Size
		if (parentWidth != null) {
			this._parentWidth = parentWidth;
			isChanged = true;
		}
		if (parentHeight != null) {
			this._parentHeight = parentHeight;
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
		const parentVertexId = parent.vertexId;
		const isVertexIdChanged = this._parentVertexId !== parentVertexId;

		const parentSize = parent.size;
		const parentWidth = parentSize.x;
		const parentHeight = parentSize.y;
		const threshold = 0.00001;
		const isWidthChanged = threshold < Math.abs(this._parentWidth - parentWidth);
		const isHeightChanged = threshold < Math.abs(this._parentHeight - parentHeight);

		if (isVertexIdChanged || isWidthChanged || isHeightChanged) {
			this._parentVertexId = parentVertexId;
			this._parentWidth = parentWidth;
			this._parentHeight = parentHeight;

			const buffer = UtilStraightSkeletonBuffer.from(
				UtilStraightSkeleton.from(this._parent.vertices, parentWidth, parentHeight)
			);
			const vertices = buffer.vertices;
			const verticesLength = vertices.length;
			const distances = buffer.distances;
			const fx = 1 / parentWidth;
			const fy = 1 / parentHeight;
			for (let i = 0; i < verticesLength; i += 2) {
				vertices[i] *= fx;
				vertices[i + 1] *= fy;
				distances[i] *= fx;
				distances[i + 1] *= fy;
			}
			this._id += 1;
			this._vertices = vertices;
			this._nvertices = vertices.length >> 1;
			this._distances = distances;
			this._clippings = buffer.clippings;
			this._indices = buffer.indices;
			this._nindices = buffer.indices.length / 3;
		}
	}

	copy(source: EShapePolygonTriangulated): this {
		this.set(
			this._parent.vertexId,
			source._parentWidth,
			source._parentHeight,
			source._vertices,
			source._distances,
			source._clippings,
			source._indices
		);
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		this.triangulate();
		const serialized: EShapePolygonTriangulatedExtensionSerialized = [
			manager.addResource(JSON.stringify(this._vertices)),
			manager.addResource(JSON.stringify(this._distances)),
			manager.addResource(JSON.stringify(this._clippings)),
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

			// Parent Vertex Id
			const parent = this._parent;
			this._parentVertexId = parent.vertexId;

			// Parent Size
			const parentSize = parent.size;
			this._parentWidth = parentSize.x;
			this._parentHeight = parentSize.y;

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

			// Clippings
			const clippingId = parsed[2];
			if (0 <= clippingId && clippingId < resourcesLength) {
				let clippings = manager.getExtension<number[]>(clippingId);
				if (clippings == null) {
					clippings = JSON.parse(resources[clippingId]) as number[];
					manager.setExtension(clippingId, clippings);
				}
				this._clippings = clippings;
			}

			// Indices
			const indexId = parsed[3];
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
