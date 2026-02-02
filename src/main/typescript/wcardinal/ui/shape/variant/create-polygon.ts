import { EShapeLockPart } from "./e-shape-lock-part";
import { EShapePolygon } from "./e-shape-polygon";

export const createPolygon = (points: number[], result?: EShapePolygon): EShapePolygon => {
	result ??= new EShapePolygon();
	const pointsLength = points.length;
	if (pointsLength < 2) {
		result.points.values = [];
		return result;
	}
	let xmin = 0;
	let xmax = 0;
	let ymin = 0;
	let ymax = 0;
	xmin = xmax = points[0];
	ymin = ymax = points[1];
	for (let i = 2; i < pointsLength; i += 2) {
		const x = points[i];
		const y = points[i + 1];
		xmin = Math.min(xmin, x);
		xmax = Math.max(xmax, x);
		ymin = Math.min(ymin, y);
		ymax = Math.max(ymax, y);
	}
	const sx = xmax - xmin;
	const sy = ymax - ymin;
	const px = xmin + 0.5 * sx;
	const py = ymin + 0.5 * sy;
	const values: number[] = [];
	for (let i = 0; i < pointsLength; i += 2) {
		values.push(points[i] - px, points[i + 1] - py);
	}
	result.lock(EShapeLockPart.ALL);
	result.transform.position.set(px, py);
	result.size.set(sx, sy);
	result.points.values = values;
	result.unlock(EShapeLockPart.ALL, true);
	return result;
};
