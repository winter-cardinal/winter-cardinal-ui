import { Point, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesSelection, DChartSeriesSelectionPoint } from "./d-chart-series-selection";
import { EShape, EShapeCircle } from "./shape";
import { utilIsString } from "./util";

export type DChartSeriesSelectionStyle = ( shape: EShape, series: DChartSeries ) => void;

export interface DChartSeriesSelectionShapeOptions {
	point?: DChartSeriesSelectionPoint | (keyof typeof DChartSeriesSelectionPoint);
	shape?: EShape;
	style?: DChartSeriesSelectionStyle;
	on?: DBaseOnOptions;
}

export class DChartSeriesSelectionShape extends utils.EventEmitter implements DChartSeriesSelection {
	protected _container: DChartSeriesContainer | null;
	protected _selected: DChartSeries | null;
	protected _shape?: EShape;
	protected _coordinateX: DChartCoordinate | null;
	protected _coordinateY: DChartCoordinate | null;
	protected _position: Point;
	protected _point: DChartSeriesSelectionPoint;
	protected _style: DChartSeriesSelectionStyle;

	constructor( options?: DChartSeriesSelectionShapeOptions ) {
		super();

		this._container = null;
		this._selected = null;
		this._shape = options && options.shape;
		this._coordinateX = null;
		this._coordinateY = null;
		this._position = new Point();
		this._point = ( options && options.point != null ?
			( utilIsString( options.point ) ? DChartSeriesSelectionPoint[ options.point ] : options.point ) :
			DChartSeriesSelectionPoint.CLOSER
		);
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
		const shape = this._shape;
		if( shape ) {
			shape.detach();
		}
		this._coordinateX = null;
		this._coordinateY = null;
	}

	protected newShape(): EShape {
		const result = new EShapeCircle();
		result.size.set( 20, 20 );
		return result;
	}

	get series(): DChartSeries | null {
		return this._selected;
	}

	get position(): Point {
		return this._position;
	}

	set( series: DChartSeries, result: DChartSeriesHitResult ): void {
		const oldSelected = this._selected;
		if( oldSelected !== series ) {
			if( oldSelected ) {
				oldSelected.setState( DBaseState.ACTIVE, false );
			}

			this._selected = series;
			series.setState( DBaseState.ACTIVE, true );
		}

		const shape = this._shape;
		const coordinateX = this._coordinateX = series.coordinate.x;
		const coordinateY = this._coordinateY = series.coordinate.y;
		if( shape && coordinateX && coordinateY ) {
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
			const position = this._position;
			position.set(
				coordinateX.unmap( x ),
				coordinateY.unmap( y )
			);
			shape.transform.position.set( x, y );
			this._style( shape, series );
			shape.visible = true;
			DApplications.update( shape );
		}

		this.emit( "change", this );
	}

	protected setStyle( this: unknown, shape: EShape, series: DChartSeries ): void {
		const seriesShape = series.shape;
		if( seriesShape ) {
			const shapeStroke = shape.stroke;
			const seriesShapeStroke = seriesShape.stroke;
			shapeStroke.color = seriesShapeStroke.color;
			shapeStroke.width = seriesShapeStroke.width * 0.5;
		}
	}

	unset(): void {
		// DO NOTHING
	}

	update(): void {
		const shape = this._shape;
		const coordinateX = this._coordinateX;
		const coordinateY = this._coordinateY;
		if( shape && coordinateX && coordinateY ) {
			const position = this._position;
			shape.transform.position.set(
				coordinateX.map( position.x ),
				coordinateY.map( position.y )
			);
		}
	}
}
