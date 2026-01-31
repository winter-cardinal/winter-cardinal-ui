import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";

export interface EShapePolygonTriangulated {
	get id(): number;
	get vertices(): number[];
	get nvertices(): number;
	get distances(): number[];
	get clippings(): number[];
	get indices(): number[];
	get nindices(): number;

	set(
		parentVertexId?: number,
		parentWidth?: number,
		parentHeight?: number,
		vertices?: number[],
		distances?: number[],
		clippings?: number[],
		indices?: number[]
	): this;
	copy(source: EShapePolygonTriangulated): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void;
}
