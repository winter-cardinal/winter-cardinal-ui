import { EThemeWhiteShapePointsFormatter } from "./e-theme-white-shape-points-formatter";

export class EThemeWhiteEnUsShapePointsFormatter extends EThemeWhiteShapePointsFormatter {
	override getCurveLabel(): string {
		return "Curve";
	}
}
