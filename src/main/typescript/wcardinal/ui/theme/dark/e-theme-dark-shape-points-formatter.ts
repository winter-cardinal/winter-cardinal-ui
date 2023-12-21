import type { EThemeShapePointsFormatter } from "../../shape/e-shape-points-formatters";

export abstract class EThemeDarkShapePointsFormatter implements EThemeShapePointsFormatter {
	abstract getCurveLabel(): string;
}
