import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { utilIsString } from "./util/util-is-string";

export class DChartSeriesStrokeComputedImpl implements DChartSeriesStrokeComputed {
	width: number;
	color: number;
	alpha: number;
	style: EShapePointsStyle;

	constructor( width: number, color: number, alpha: number, style: EShapePointsStyle ) {
		this.width = width;
		this.color = color;
		this.alpha = alpha;
		this.style = style;
	}

	static from(
		container: DChartSeriesContainer, index: number,
		stroke?: DChartSeriesStrokeComputedOptions
	): DChartSeriesStrokeComputed {
		const containerStroke = container.stroke;
		if( stroke ) {
			const style = ( stroke.style != null ? stroke.style : containerStroke.style( index ) );
			return new DChartSeriesStrokeComputedImpl(
				( stroke.width != null ? stroke.width : containerStroke.width( index ) ),
				( stroke.color != null ? stroke.color : containerStroke.color( index ) ),
				( stroke.alpha != null ? stroke.alpha : containerStroke.alpha( index ) ),
				( utilIsString( style ) ? EShapePointsStyle[ style ] : style )
			);
		} else {
			const style = containerStroke.style( index );
			return new DChartSeriesStrokeComputedImpl(
				containerStroke.width( index ),
				containerStroke.color( index ),
				containerStroke.alpha( index ),
				( utilIsString( style ) ? EShapePointsStyle[ style ] : style )
			);
		}
	}
}
