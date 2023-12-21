import type { EThemeShapePointsFormatter } from "../../shape/e-shape-points-formatters";

export abstract class EThemeWhiteShapePointsFormatter implements EThemeShapePointsFormatter {
	abstract getCurveLabel(): string;
}
