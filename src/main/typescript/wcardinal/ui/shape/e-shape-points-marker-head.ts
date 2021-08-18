import { Matrix } from "pixi.js";
import { EShapePointsMarkerBase } from "./e-shape-points-marker-base";

export class EShapePointsMarkerHead extends EShapePointsMarkerBase {
	protected toTransform(values: number[], result: Matrix): Matrix {
		const valuesLength = values.length;
		if (4 <= valuesLength) {
			return this.toTransformMatrix(
				values[valuesLength - 2],
				values[valuesLength - 1],
				values[valuesLength - 4],
				values[valuesLength - 3],
				result
			);
		} else {
			result.identity();
		}
		return result;
	}
}
