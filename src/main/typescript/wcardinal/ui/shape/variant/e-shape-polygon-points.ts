import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeLinePoints } from "./e-shape-line-points";

export class EShapePolygonPoints extends EShapeLinePoints {
	protected override newStyle(): EShapePointsStyle {
		return EShapePointsStyle.CLOSED;
	}
}
