import { EShapePointsStyle } from "./shape/e-shape-points";

export interface DChartSeriesStrokeComputedOptions {
	width?: number;
	color?: number;
	alpha?: number;
	style?: EShapePointsStyle | keyof typeof EShapePointsStyle | Array<keyof typeof EShapePointsStyle>;
}

export interface DChartSeriesStrokeComputed {
	width: number;
	color: number;
	alpha: number;
	style: EShapePointsStyle;
}
