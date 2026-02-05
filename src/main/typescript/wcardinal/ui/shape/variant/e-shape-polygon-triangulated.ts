import { EShapeBoundary } from "../e-shape-boundary";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";

export interface EShapePolygonTriangulated {
	readonly id: number;
	readonly vertices: number[];
	readonly nvertices: number;
	readonly distances: number[];
	readonly lengths: number[];
	readonly clippings: number[];
	readonly uvs: number[];
	readonly indices: number[];
	readonly nindices: number;
	readonly boundary: EShapeBoundary;

	set(
		parentId?: number,
		vertices?: number[],
		distances?: number[],
		lengths?: number[],
		clippings?: number[],
		uvs?: number[],
		indices?: number[],
		boundary?: EShapeBoundary
	): this;
	copy(source: EShapePolygonTriangulated): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void;
}
