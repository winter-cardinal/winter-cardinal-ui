import { EShapePoints } from "../e-shape-points";
import { toPolylineIndexCount, toPolylineVertexCount } from "./build-polyline";

export const toPointsCount = (points?: EShapePoints): number => {
	if (points) {
		return points.formatted.length;
	}
	return 0;
};

export const toLinePointsCount = (pointsCount: number): number => {
	return Math.ceil(pointsCount / 12) * 12;
};

export const toLineVertexCount = (pointsCount: number): number => {
	return toPolylineVertexCount(toLinePointsCount(pointsCount), true);
};

export const toLineIndexCount = (pointsCount: number): number => {
	return toPolylineIndexCount(toLinePointsCount(pointsCount), true);
};
