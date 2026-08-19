import { EShapePolygonTriangulatedLike } from "./e-shape-polygon-triangulated-like";

export interface EShapePolygonLike {
	get triangulated(): EShapePolygonTriangulatedLike;
}
