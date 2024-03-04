import { EThemeWhiteShapePointsFormatter } from "./e-theme-white-shape-points-formatter";

export class EThemeWhiteJaJpShapePointsFormatter extends EThemeWhiteShapePointsFormatter {
	override getCurveSplineLabel(): string {
		return "スプライン曲線";
	}

	override getCurveBezierQuadraticLabel(): string {
		return "２次ベジェ曲線";
	}
}
