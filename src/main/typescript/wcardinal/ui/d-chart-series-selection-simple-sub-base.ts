import { Point, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesSelectionPoint, DChartSeriesSelectionStyle } from "./d-chart-series-selection";
import {
	DChartSeriesSelectionSimpleSub, DChartSeriesSelectionSimpleSubOptions
} from "./d-chart-series-selection-simple-sub";
import { EShape } from "./shape/e-shape";

export abstract class DChartSeriesSelectionSimpleSubBase extends utils.EventEmitter
	implements DChartSeriesSelectionSimpleSub {
	protected _container: DChartSeriesContainer | null;
	protected _series: DChartSeries | null;
	protected _shape?: EShape;
	protected _coordinateX: DChartCoordinate | null;
	protected _coordinateY: DChartCoordinate | null;
	protected _position: Point;
	protected _point: DChartSeriesSelectionPoint;
	protected _style: DChartSeriesSelectionStyle;

	constructor( point: DChartSeriesSelectionPoint, options?: DChartSeriesSelectionSimpleSubOptions ) {
		super();

		this._container = null;
		this._series = null;
		this._shape = options && options.shape;
		this._coordinateX = null;
		this._coordinateY = null;
		this._position = new Point();
		this._point = point;
		this._style = (options && options.style) || this.setStyle;

		// Events
		if( options ) {
			const on = options.on;
			if( on != null ) {
				for( const name in on ) {
					this.on( name, on[ name ] );
				}
			}
		}
	}

	bind( container: DChartSeriesContainer ): void {
		this._container = container;
		const shape = this._shape = (this._shape || this.newShape());
		shape.attach( container.plotArea.container );
		shape.visible = false;
	}

	unbind(): void {
		this._container = null;

		const shape = this._shape;
		if( shape ) {
			shape.detach();
		}

		this._coordinateX = null;
		this._coordinateY = null;
	}

	protected abstract newShape(): EShape;
	protected abstract getSeriesState(): DBaseState;

	get series(): DChartSeries | null {
		return this._series;
	}

	get position(): Point {
		return this._position;
	}

	set( series: DChartSeries, result: DChartSeriesHitResult | Point ): void {
		const shape = this._shape;
		const coordinateX = this._coordinateX = series.coordinate.x;
		const coordinateY = this._coordinateY = series.coordinate.y;
		if( shape && coordinateX && coordinateY ) {
			const position = this._position;
			if( result instanceof Point ) {
				position.copyFrom( result );
				shape.transform.position.set(
					coordinateX.map( result.x ),
					coordinateY.map( result.y )
				);
			} else {
				let x = result.x;
				let y = result.y;
				switch( this._point ) {
				case DChartSeriesSelectionPoint.PREVIOUS:
					x = result.p0x;
					y = result.p0y;
					break;
				case DChartSeriesSelectionPoint.NEXT:
					x = result.p1x;
					y = result.p1y;
					break;
				case DChartSeriesSelectionPoint.CLOSER:
					if( Math.abs( result.p0x - result.x ) < Math.abs( result.p1x - result.x ) ) {
						x = result.p0x;
						y = result.p0y;
					} else {
						x = result.p1x;
						y = result.p1y;
					}
				}
				position.set(
					coordinateX.unmap( x ),
					coordinateY.unmap( y )
				);
				shape.transform.position.set( x, y );
			}
			this._style( shape, series );
			shape.visible = true;
			DApplications.update( shape );
		}

		const oldSeries = this._series;
		if( oldSeries !== series ) {
			const state = this.getSeriesState();
			if( oldSeries ) {
				oldSeries.setState( state, false );
			}

			this._series = series;
			series.setState( state, true );
		}

		this.emit( "change", this );
	}

	protected setStyle( this: unknown, shape: EShape, series: DChartSeries ): void {
		const seriesShape = series.shape;
		if( seriesShape ) {
			shape.stroke.color = seriesShape.stroke.color;
		}
	}

	unset(): void {
		const series = this._series;
		if( series ) {
			this._series = null;
			this._coordinateX = null;
			this._coordinateY = null;

			series.setState( this.getSeriesState(), false );

			const shape = this._shape;
			if( shape ) {
				shape.visible = false;
			}

			this.emit( "change", this );
		}
	}

	update(): void {
		const shape = this._shape;
		const coordinateX = this._coordinateX;
		const coordinateY = this._coordinateY;
		if( shape && coordinateX && coordinateY ) {
			const position = this._position;
			const x = coordinateX.map( position.x );
			const y = coordinateY.map( position.y );

			let visible = true;
			const container = this._container;
			if( container ) {
				const plotArea = container.plotArea;
				const plotAreaSize = plotArea.size;
				if( x < 0 || plotAreaSize.x < x || y < 0 || plotAreaSize.y < y ) {
					visible = false;
				}
			}
			shape.transform.position.set( x, y );
			shape.visible = visible;
		}
	}
}
