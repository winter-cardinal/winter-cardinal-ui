import { EThemeDarkShapePointsFormatter } from "./e-theme-dark-shape-points-formatter";

export class EThemeDarkJaJpShapePointsFormatter extends EThemeDarkShapePointsFormatter {
	override getCurveSplineLabel(): string {
		return "スプライン曲線";
	}

	override getCurveBezierQuadraticLabel(): string {
		return "２次ベジェ曲線";
	}
}
