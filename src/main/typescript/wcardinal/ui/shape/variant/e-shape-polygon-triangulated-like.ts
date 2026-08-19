import { EShapeBoundary } from "../e-shape-boundary";

export interface EShapePolygonTriangulatedLike {
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
}
