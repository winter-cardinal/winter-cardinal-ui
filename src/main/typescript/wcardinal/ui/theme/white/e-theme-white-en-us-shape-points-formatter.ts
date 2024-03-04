import { EThemeWhiteShapePointsFormatter } from "./e-theme-white-shape-points-formatter";

export class EThemeWhiteEnUsShapePointsFormatter extends EThemeWhiteShapePointsFormatter {
	override getCurveSplineLabel(): string {
		return "Spline Curve";
	}

	override getCurveBezierQuadraticLabel(): string {
		return "Quadratic Bezier Curve";
	}
}
