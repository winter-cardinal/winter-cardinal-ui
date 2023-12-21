import { EThemeDarkShapePointsFormatter } from "./e-theme-dark-shape-points-formatter";

export class EThemeDarkJaJpShapePointsFormatter extends EThemeDarkShapePointsFormatter {
	override getCurveLabel(): string {
		return "曲線";
	}
}
