import { EThemeDarkShapePointsFormatter } from "./e-theme-dark-shape-points-formatter";

export class EThemeDarkEnUsShapePointsFormatter extends EThemeDarkShapePointsFormatter {
	override getCurveSplineLabel(): string {
		return "Spline Curve";
	}

	override getCurveBezierQuadraticLabel(): string {
		return "Quadratic Bezier Curve";
	}
}
