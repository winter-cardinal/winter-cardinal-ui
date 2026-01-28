import { UtilStraightSkeleton } from "../../util/util-straight-skeleton";
import { UtilStraightSkeletonBuffer } from "../../util/util-straight-skeleton-buffer";
import { EShapePolygon } from "./e-shape-polygon";

export const createPolygon = (points: number[]): EShapePolygon => {
	const buffer = UtilStraightSkeletonBuffer.from(UtilStraightSkeleton.from(points, -1));

	// Position & Size
	let xmin = 0;
	let xmax = 0;
	let ymin = 0;
	let ymax = 0;
	let sx = 100;
	let sy = 100;
	let fx = 0.01;
	let fy = 0.01;
	let px = 0;
	let py = 0;
	const vertices = buffer.vertices;
	const verticesLength = vertices.length;
	if (2 <= verticesLength) {
		xmin = xmax = vertices[0];
		ymin = ymax = vertices[1];
		for (let i = 2; i < verticesLength; i += 2) {
			const x = vertices[i];
			const y = vertices[i + 1];
			xmin = Math.min(xmin, x);
			xmax = Math.max(xmax, x);
			ymin = Math.min(ymin, y);
			ymax = Math.max(ymax, y);
		}
		sx = xmax - xmin;
		sy = ymax - ymin;
		px = xmin + 0.5 * sx;
		py = ymin + 0.5 * sy;
		fx = 1 / sx;
		fy = 1 / sy;
		for (let i = 0; i < verticesLength; i += 2) {
			vertices[i] = (vertices[i] - xmin) * fx - 0.5;
			vertices[i + 1] = (vertices[i + 1] - ymin) * fy - 0.5;
		}
	}

	// Distances
	const bufferDistances = buffer.distances;
	const distances: number[] = [];
	for (let i = 0, imax = bufferDistances.length; i < imax; ++i) {
		const distance = bufferDistances[i];
		distances.push(distance * fx, distance * fy);
	}

	// Done
	const result = new EShapePolygon(
		undefined,
		vertices,
		distances,
		buffer.clippings,
		buffer.indices
	);
	result.transform.position.set(px, py);
	result.size.set(sx, sy);
	return result;
};
