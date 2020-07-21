/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionGridlineContainer } from "./d-chart-selection-gridline-container";
import { DChartSelectionGridlineContainerImpl } from "./d-chart-selection-gridline-container-impl";
import { DChartSelectionMarker } from "./d-chart-selection-marker";
import { DChartSelectionSub, DChartSelectionSubOptions } from "./d-chart-selection-sub";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";

export class DChartSelectionSubImpl extends utils.EventEmitter implements DChartSelectionSub {
	protected _container: DChartSeriesContainer | null;
	protected _isEnabled: boolean;
	protected _series: DChartSeries | null;
	protected _coordinateX: DChartCoordinate | null;
	protected _coordinateY: DChartCoordinate | null;
	protected _position: Point;
	protected _point: DChartSelectionPoint;
	protected _work: Point;
	protected _gridline: DChartSelectionGridlineContainer;
	protected _marker: DChartSelectionMarker;
	protected _state: DBaseState;

	constructor( options: DChartSelectionSubOptions ) {
		super();

		this._container = null;
		this._series = null;
		this._isEnabled = ( options.enable != null ? options.enable : true );
		this._gridline = new DChartSelectionGridlineContainerImpl( options.gridline );
		this._marker = new DChartSelectionMarker( options.marker );
		this._state = ( options.state != null ? options.state : DBaseState.HOVERED );
		this._coordinateX = null;
		this._coordinateY = null;
		this._position = new Point();
		this._point = ( options.point != null ? options.point : DChartSelectionPoint.CLOSER );
		this._work = new Point();

		// Events
		const on = options.on;
		if( on ) {
			for( const name in on ) {
				const handler = on[ name ];
				if( handler ) {
					this.on( name, handler );
				}
			}
		}
	}

	bind( container: DChartSeriesContainer ): void {
		if( this._isEnabled ) {
			this._container = container;
			this._gridline.bind( container );
			this._marker.bind( container );
		}
	}

	unbind(): void {
		this._marker.unbind();
		this._gridline.unbind();
		this._container = null;
		this._coordinateX = null;
		this._coordinateY = null;
	}

	get series(): DChartSeries | null {
		return this._series;
	}

	get position(): Point {
		return this._position;
	}

	get gridline(): DChartSelectionGridlineContainer {
		return this._gridline;
	}

	get marker(): DChartSelectionMarker {
		return this._marker;
	}

	set( series: DChartSeries, result: DChartSeriesHitResult | DChartSelectionSub ): void {
		const container = this._container;
		const coordinateX = this._coordinateX = series.coordinate.x;
		const coordinateY = this._coordinateY = series.coordinate.y;
		if( container && coordinateX && coordinateY ) {
			const transform = container.plotArea.container.localTransform;
			const position = this._position;
			const work = this._work;
			if( result instanceof DChartSeriesHitResult ) {
				let x = result.x;
				let y = result.y;
				switch( this._point ) {
				case DChartSelectionPoint.PREVIOUS:
					x = result.p0x;
					y = result.p0y;
					break;
				case DChartSelectionPoint.NEXT:
					x = result.p1x;
					y = result.p1y;
					break;
				case DChartSelectionPoint.CLOSER:
					if( Math.abs( result.p0x - result.x ) < Math.abs( result.p1x - result.x ) ) {
						x = result.p0x;
						y = result.p0y;
					} else {
						x = result.p1x;
						y = result.p1y;
					}
				}

				work.set( x, y );
				transform.apply( work, work );
				position.set(
					coordinateX.unmap( coordinateX.transform.unmap( x ) ),
					coordinateY.unmap( coordinateY.transform.unmap( y ) )
				);
			} else {
				position.copyFrom( result.position );
				work.set(
					coordinateX.transform.map( coordinateX.map( position.x ) ),
					coordinateY.transform.map( coordinateY.map( position.y ) )
				);
				transform.apply( work, work );
			}

			this._gridline.set( container, work, series );
			this._marker.set( container, work, series );

			DApplications.update( container.plotArea );
		}

		const oldSeries = this._series;
		if( oldSeries !== series ) {
			const state = this._state;
			if( oldSeries ) {
				oldSeries.state.remove( state );
			}

			this._series = series;
			series.state.add( state );
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

			series.state.remove( this._state );

			this._gridline.unset();
			this._marker.unset();

			this.emit( "change", this );
		}
	}

	update(): void {
		const container = this._container;
		const coordinateX = this._coordinateX;
		const coordinateY = this._coordinateY;
		if( container && coordinateX && coordinateY ) {
			const position = this._position;
			const work = this._work;
			work.set(
				coordinateX.transform.map( coordinateX.map( position.x ) ),
				coordinateY.transform.map( coordinateY.map( position.y ) )
			);
			container.plotArea.container.localTransform.apply( work, work );

			this._gridline.update( container, work );
			this._marker.update( container, work );
		}
	}
}
