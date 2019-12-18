import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesStrokeStyleOption } from "./d-chart-series-stroke";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { utilIsNumber } from "./util";
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

	static toStyle( style: DChartSeriesStrokeStyleOption ): EShapePointsStyle {
		if( utilIsString( style ) ) {
			return EShapePointsStyle[ style ];
		} else if( utilIsNumber( style ) ) {
			return style;
		} else {
			let result = EShapePointsStyle.NONE;
			for( let i = 0, imax = style.length; i < imax; ++i ) {
				result |= EShapePointsStyle[ style[ i ] ];
			}
			return result;
		}
	}

	static from(
		container: DChartSeriesContainer, index: number,
		stroke?: DChartSeriesStrokeComputedOptions
	): DChartSeriesStrokeComputed {
		const containerStroke = container.stroke;
		if( stroke ) {
			return new DChartSeriesStrokeComputedImpl(
				( stroke.width != null ? stroke.width : containerStroke.width( index ) ),
				( stroke.color != null ? stroke.color : containerStroke.color( index ) ),
				( stroke.alpha != null ? stroke.alpha : containerStroke.alpha( index ) ),
				this.toStyle( stroke.style != null ? stroke.style : containerStroke.style( index ) )
			);
		} else {
			return new DChartSeriesStrokeComputedImpl(
				containerStroke.width( index ),
				containerStroke.color( index ),
				containerStroke.alpha( index ),
				this.toStyle( containerStroke.style( index ) )
			);
		}
	}
}
