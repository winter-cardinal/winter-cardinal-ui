/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeLockPart } from "./e-shape-lock-part";
import { EShapePolygonTriangulated } from "./e-shape-polygon-triangulated";
import { EShapePrimitive } from "./e-shape-primitive";

export type EShapePolygonExtensionSerialized = [number, number];

export class EShapePolygon extends EShapePrimitive {
	protected _vertices: number[];
	protected _vertexId: number;
	protected _nvertices: number;
	protected _triangulated: EShapePolygonTriangulated;

	/**
	 * Please note that the given arrays `vertices`, `distances`, `clippings` and `indices` are used internally.
	 * Because of this, these arrays must not be modified outside of this class after calling this constructor.
	 */
	constructor(type: EShapeType = EShapeType.POLYGON) {
		super(type);
		this._vertices = [];
		this._nvertices = 0;
		this._vertexId = 0;
		this._triangulated = new EShapePolygonTriangulated(this);
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

	get triangulated(): EShapePolygonTriangulated {
		return this._triangulated;
	}

	set(vertices?: number[]): this {
		let isChanged = false;

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

		if (isChanged) {
			this._vertexId += 1;
			this.updateUploaded();
		}
		return this;
	}

	clone(): EShapePolygon {
		return new EShapePolygon(this.type).copy(this);
	}

	override copy(source: EShape): this {
		this.lock(EShapeLockPart.ALL);
		const result = super.copy(source);
		if (source instanceof EShapePolygon) {
			// Vertex ID
			this._vertexId += 1;

			// Vertices
			const sourceVertices = source._vertices;
			const sourceVerticesLength = sourceVertices.length;
			const vertices = this._vertices;
			for (let i = 0; i < sourceVerticesLength; ++i) {
				vertices[i] = sourceVertices[i];
			}
			if (vertices.length !== sourceVerticesLength) {
				vertices.length = sourceVerticesLength;
			}

			// Number of Vertices
			this._nvertices = sourceVerticesLength >> 1;

			// Triangulated
			this._triangulated.copy(source._triangulated);

			// Update
			this.updateUploaded();
		}
		this.unlock(EShapeLockPart.ALL, true);
		return result;
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		const verticesId = manager.addResource(JSON.stringify(this._vertices));
		const triangulatedId = this._triangulated.serialize(manager);
		const serialized: EShapePolygonExtensionSerialized = [verticesId, triangulatedId];
		result[15] = manager.addResource(JSON.stringify(serialized));
		return result;
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		const resourcesLength = resources.length;
		if (0 <= resourceId && resourceId < resourcesLength) {
			let parsed = manager.getExtension<EShapePolygonExtensionSerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as EShapePolygonExtensionSerialized;
				manager.setExtension(resourceId, parsed);
			}

			// Vertex ID
			this._vertexId += 1;

			// Vertices
			const verticesId = parsed[0];
			if (0 <= verticesId && verticesId < resourcesLength) {
				const vertices = manager.getExtension<number[]>(verticesId);
				if (vertices != null) {
					this._vertices = vertices;
					this._nvertices = vertices.length >> 1;
				}
			}

			// Triangulated
			this._triangulated.deserialize(parsed[1], manager);

			// Update
			this.updateUploaded();
		}
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
