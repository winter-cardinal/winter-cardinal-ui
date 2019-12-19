import { EShapePointsStyle } from "./shape/e-shape-points";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";

export interface DChartSeriesStrokeComputedOptions {
	width?: number;
	color?: number;
	alpha?: number;
	style?: EShapePointsStyleOption;
}

export interface DChartSeriesStrokeComputed {
	width: number;
	color: number;
	alpha: number;
	style: EShapePointsStyle;
}
