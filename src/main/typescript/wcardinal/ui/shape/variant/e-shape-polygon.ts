/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";

export type EShapePolygonExtensionSerialized = [number, number, number, number];

export class EShapePolygon extends EShapePrimitive {
	protected _vertices: number[];
	protected _vertexId: number;
	protected _nvertices: number;
	protected _distances: number[];
	protected _distanceId: number;
	protected _clippings: number[];
	protected _clippingId: number;
	protected _indices: number[];
	protected _indexId: number;
	protected _nindices: number;

	/**
	 * Please note that the given arrays `vertices`, `distances`, `clippings` and `indices` are used internally.
	 * Because of this, these arrays must not be modified outside of this class after calling this constructor.
	 */
	constructor(
		type: EShapeType = EShapeType.POLYGON,
		vertices: number[] = [],
		distances: number[] = [],
		clippings: number[] = [],
		indices: number[] = []
	) {
		super(type);
		this._vertices = vertices;
		this._nvertices = vertices.length >> 1;
		this._vertexId = 0;
		this._distances = distances;
		this._distanceId = 0;
		this._clippings = clippings;
		this._clippingId = 0;
		this._indices = indices;
		this._nindices = indices.length / 3;
		this._indexId = 0;
	}

	/**
	 * Vertex positions are in [-0.5, +0.5] and relative to the shape position and size.
	 * Therefore, transformed actual vertex positions are calculated as follows:
	 *
	 * ```
	 *     const imx = this.transform.internalTransform;
	 *     const size = this.size;
	 *     const vertices = this._vertices;
	 *     const transformedVertices = [];
	 *     for (let i = 0; i < vertices.length; i += 2) {
	 *         const transformedVertex = imx.apply(
	 *             new Point(size.x * vertices[i + 0], size.y * vertices[i + 1])
	 *         );
	 *         transformedVertices.push(transformedVertex.x, transformedVertex.y);
	 *     }
	 * ```
	 */
	get vertices(): number[] {
		return this._vertices;
	}

	set vertices(vertices: number[]) {
		this.set(vertices);
	}

	get nvertices(): number {
		return this._nvertices;
	}

	get vertexId(): number {
		return this._vertexId;
	}

	get distances(): number[] {
		return this._distances;
	}

	set distances(distances: number[]) {
		this.set(undefined, distances);
	}

	get distanceId(): number {
		return this._distanceId;
	}

	get clippings(): number[] {
		return this._clippings;
	}

	set clippings(clippings: number[]) {
		this.set(undefined, undefined, clippings);
	}

	get clippingId(): number {
		return this._clippingId;
	}

	get indices(): number[] {
		return this._indices;
	}

	set indices(indices: number[]) {
		this.set(undefined, undefined, undefined, indices);
	}

	get nindices(): number {
		return this._nindices;
	}

	get indexId(): number {
		return this._indexId;
	}

	set(vertices?: number[], distances?: number[], clippings?: number[], indices?: number[]): this {
		let isChanged = false;

		// Vertices
		if (vertices != null) {
			const verticesLength = vertices.length;
			for (let i = 0; i < verticesLength; ++i) {
				this._vertices[i] = vertices[i];
			}
			if (this._vertices.length !== verticesLength) {
				this._vertices.length = verticesLength;
				this._nvertices = verticesLength >> 1;
			}
			this._vertexId += 1;
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
			this._distanceId += 1;
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
			this._clippingId += 1;
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
				this._nindices = indicesLength / 3;
			}
			this._indexId += 1;
			isChanged = true;
		}

		// Update the uploaded if necessary
		if (isChanged) {
			this.updateUploaded();
		}
		return this;
	}

	clone(): EShapePolygon {
		return new EShapePolygon(this.type).copy(this);
	}

	override copy(source: EShape): this {
		const result = super.copy(source);
		if (source instanceof EShapePolygon) {
			this.set(source._vertices, source._distances, this._clippings, source._indices);
		}
		return result;
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		const verticesId = manager.addResource(JSON.stringify(this._vertices));
		const distancesId = manager.addResource(JSON.stringify(this._distances));
		const clippingsId = manager.addResource(JSON.stringify(this._clippings));
		const indicesId = manager.addResource(JSON.stringify(this._indices));
		const extension: EShapePolygonExtensionSerialized = [
			verticesId,
			distancesId,
			clippingsId,
			indicesId
		];
		result[15] = manager.addResource(JSON.stringify(extension));
		return result;
	}

	containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		return super.containsAbsBBox(x, y, ax, ay);
	}
}
