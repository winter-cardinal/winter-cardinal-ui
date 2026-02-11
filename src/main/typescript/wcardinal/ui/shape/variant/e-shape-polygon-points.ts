import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeLinePoints } from "./e-shape-line-points";

export class EShapePolygonPoints extends EShapeLinePoints {
	protected override newStyle(): EShapePointsStyle {
		return EShapePointsStyle.CLOSED;
	}

	protected override doNeedCompatibilityCheck(): boolean {
		// Since the number of vertices and indices could be changed during the triangulation,
		// we need to check the compatibility whenever values change.
		return true;
	}
}
