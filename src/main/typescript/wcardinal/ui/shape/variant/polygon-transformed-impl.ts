import { Polygon } from "./polygon";
import { PolygonBoundary } from "./polygon-boundary";
import { PolygonCenter } from "./polygon-center";
import { PolygonTransformed } from "./polygon-transformed";

export class PolygonTransformedImpl implements PolygonTransformed {
	parent: Polygon;
	vertices: number[];
	normals: number[];
	boundary: PolygonBoundary;
	center: PolygonCenter;

	constructor(parent: Polygon) {
		this.parent = parent;
		this.vertices = [];
		this.normals = [];
		this.boundary = [0, 0, 1, 0, 0, 1];
		this.center = [0, 0];
	}
}
