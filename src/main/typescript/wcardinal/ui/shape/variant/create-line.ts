import { toPointsBoundary } from "../e-shape-points-formatted";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeLine } from "./e-shape-line";

export const createLine = (
	points: number[],
	segments: number[],
	strokeWidth: number,
	pointsStyle: EShapePointsStyle
): EShapeLine => {
	// Calculate the boundary
	const boundary = toPointsBoundary(points, [0, 0, 0, 0]);
	const cx = (boundary[2] + boundary[0]) * 0.5;
	const cy = (boundary[3] + boundary[1]) * 0.5;
	const sx = boundary[2] - boundary[0];
	const sy = boundary[3] - boundary[1];

	// Calculate values
	const values: number[] = [];
	for (let i = 0, imax = points.length; i < imax; i += 2) {
		values.push(points[i] - cx, points[i + 1] - cy);
	}

	// Create a line
	const result = new EShapeLine();
	result.stroke.set(true, undefined, undefined, strokeWidth);
	result.transform.position.set(cx, cy);
	result.size.set(sx, sy);
	result.points.set(values, segments, pointsStyle);
	return result;
};
