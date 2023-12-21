import { EThemeDarkShapePointsFormatter } from "./e-theme-dark-shape-points-formatter";

export class EThemeDarkEnUsShapePointsFormatter extends EThemeDarkShapePointsFormatter {
	override getCurveLabel(): string {
		return "Curve";
	}
}
