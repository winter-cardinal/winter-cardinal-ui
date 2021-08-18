import { Matrix } from "pixi.js";
import { EShapePointsMarkerBase } from "./e-shape-points-marker-base";

export class EShapePointsMarkerTail extends EShapePointsMarkerBase {
	protected toTransform(values: number[], result: Matrix): Matrix {
		const valuesLength = values.length;
		if (4 <= valuesLength) {
			return this.toTransformMatrix(values[0], values[1], values[2], values[3], result);
		} else {
			result.identity();
		}
		return result;
	}
}
