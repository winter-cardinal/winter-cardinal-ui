import { Matrix } from "pixi.js";
import { PolygonTransformed } from "./polygon-transformed";

export interface Polygon {
	vertexCount: number;
	vertexFillCount: number;
	vertexStrokeCount: number;
	indexCount: number;
	indexFillCount: number;
	indexStrokeCount: number;

	pointCount: number;

	getTransformed(
		originX: number,
		originY: number,
		sizeX: number,
		sizeY: number,
		radius: number,
		matrix: Matrix
	): PolygonTransformed;

	hitTest(
		x: number,
		y: number,
		originX: number,
		originY: number,
		sizeX: number,
		sizeY: number,
		radius: number,
		strokeWidth: number,
		strokeAlign: number,
		isStrokeEnabled: boolean,
		isFillEnabled: boolean
	): boolean;
}
