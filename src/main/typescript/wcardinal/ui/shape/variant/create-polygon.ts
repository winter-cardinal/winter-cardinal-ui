import { EShapeLockPart } from "./e-shape-lock-part";
import { EShapePolygon } from "./e-shape-polygon";

export const createPolygon = (points: number[]): EShapePolygon => {
	const pointsLength = points.length;
	if (2 <= pointsLength) {
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
		if (0 < Math.abs(sx) && 0 < Math.abs(sy)) {
			const fx = 1 / sx;
			const fy = 1 / sy;
			const vertices: number[] = [];
			for (let i = 0; i < pointsLength; i += 2) {
				vertices.push((points[i] - xmin) * fx - 0.5, (points[i + 1] - ymin) * fy - 0.5);
			}
			const result = new EShapePolygon();
			result.lock(EShapeLockPart.ALL);
			result.transform.position.set(px, py);
			result.size.set(sx, sy);
			result.vertices = vertices;
			result.unlock(EShapeLockPart.ALL, true);
			return result;
		} else {
			const result = new EShapePolygon();
			result.transform.position.set(px, py);
			return result;
		}
	} else {
		return new EShapePolygon();
	}
};
