import { buildColor } from "./build-color";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";

export const toLineOfAnyPointCount = (pointCount: number): number => {
	return Math.ceil(pointCount / 12) * 12;
};

export const buildLineOfAnyColor = (
	voffset: number,
	vcountPerPoint: number,
	point: EShapeLineOfAnyPointsStroke | EShapeLineOfAnyPointsFill,
	pointCount: number,
	colors: Float32Array,
	isEnabled: boolean,
	colorDef: number,
	alphaDef: number
): void => {
	if (isEnabled) {
		if (point.isStaticColor()) {
			const color = point.getColor(0, colorDef);
			if (point.isStaticAlpha()) {
				const alpha = point.getAlpha(0, alphaDef);
				buildColor(color, alpha, voffset, vcountPerPoint * pointCount, colors);
			} else {
				for (let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
					const alpha = point.getAlpha(i, alphaDef);
					buildColor(color, alpha, iv, vcountPerPoint, colors);
				}
			}
		} else {
			if (point.isStaticAlpha()) {
				const alpha = point.getAlpha(0, alphaDef);
				for (let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
					const color = point.getColor(i, colorDef);
					buildColor(color, alpha, iv, vcountPerPoint, colors);
				}
			} else {
				for (let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
					const color = point.getColor(i, colorDef);
					const alpha = point.getAlpha(i, alphaDef);
					buildColor(color, alpha, iv, vcountPerPoint, colors);
				}
			}
		}
	} else {
		if (point.isStaticColor()) {
			const color = point.getColor(0, colorDef);
			buildColor(color, 0, voffset, vcountPerPoint * pointCount, colors);
		} else {
			for (let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
				const color = point.getColor(i, colorDef);
				buildColor(color, 0, iv, vcountPerPoint, colors);
			}
		}
	}
};
