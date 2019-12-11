import { DBaseState } from "./d-base-state";
import { DChartSeriesSelectionPoint } from "./d-chart-series-selection";
import { DChartSeriesSelectionSimpleSubOptions } from "./d-chart-series-selection-simple-sub";
import { DChartSeriesSelectionSimpleSubBase } from "./d-chart-series-selection-simple-sub-base";
import { EShape } from "./shape/e-shape";
import { EShapeCircle } from "./shape/variant/e-shape-circle";

export class DChartSeriesSelectionSimpleSubHovered extends DChartSeriesSelectionSimpleSubBase {
	constructor( point: DChartSeriesSelectionPoint, options?: DChartSeriesSelectionSimpleSubOptions ) {
		super( point, options );
	}

	protected newShape(): EShape {
		const result = new EShapeCircle();
		result.size.set( 14, 14 );
		return result;
	}

	protected getSeriesState(): DBaseState {
		return DBaseState.HOVERED;
	}
}
