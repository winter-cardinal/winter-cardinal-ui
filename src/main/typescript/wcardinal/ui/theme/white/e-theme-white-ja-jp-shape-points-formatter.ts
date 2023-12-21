import { EThemeWhiteShapePointsFormatter } from "./e-theme-white-shape-points-formatter";

export class EThemeWhiteJaJpShapePointsFormatter extends EThemeWhiteShapePointsFormatter {
	override getCurveLabel(): string {
		return "曲線";
	}
}
