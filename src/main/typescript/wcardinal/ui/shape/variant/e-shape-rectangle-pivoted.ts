import { IPoint } from "pixi.js";
import { EShapeType } from "../e-shape-type";
import { EShapeBaseHitTestData } from "./e-shape-base-hit-test-data";
import { EShapeRectangle } from "./e-shape-rectangle";

export class EShapeRectanglePivoted extends EShapeRectangle {
	constructor(type = EShapeType.RECTANGLE_PIVOTED) {
		super(type);
	}

	toHitTestData(point: IPoint): EShapeBaseHitTestData {
		const result = super.toHitTestData(point);
		result.x -= result.width;
		result.y -= result.height;
		return result;
	}
}
