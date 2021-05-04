import { Polygon } from "./polygon";
import { PolygonBoundary } from "./polygon-boundary";
import { PolygonCenter } from "./polygon-center";

export interface PolygonTransformed {
	parent: Polygon;
	vertices: number[];
	normals: number[];
	boundary: PolygonBoundary;
	center: PolygonCenter;
}
