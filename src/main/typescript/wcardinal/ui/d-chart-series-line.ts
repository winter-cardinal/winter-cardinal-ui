/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke";
import { EShapePointsStyle } from "./shape";
import { EShapeLine } from "./shape/variant/e-shape-line";
import { utilIsString } from "./util/util-is-string";

export interface DChartSeriesLineOptions {
	points?: Array<number | null>;
	stroke?: DChartSeriesStrokeComputedOptions;
	coordinate?: {
		x?: number;
		y?: number;
	};
}

export class DChartSeriesLine implements DChartSeries {
	protected _line?: EShapeLine;
	protected _coordinateIndexX: number;
	protected _coordinateIndexY: number;

	protected _points: Array<number | null>;
	protected _pointId: number;
	protected _pointIdUpdated: number;

	protected _coordinateIdUpdatedX: number;
	protected _coordinateIdUpdatedY: number;

	protected _container?: DChartSeriesContainer;

	protected _domain: DChartRegionImpl;
	protected _range: DChartRegionImpl;
	protected _regionPointId: number;

	protected _options?: DChartSeriesLineOptions;

	constructor( options?: DChartSeriesLineOptions ) {
		const coordinate = options && options.coordinate;
		this._coordinateIndexX = ( coordinate && coordinate.x != null ? coordinate.x : 0 );
		this._coordinateIndexY = ( coordinate && coordinate.y != null ? coordinate.y : 0 );

		this._points = (options && options.points) || [];
		this._pointId = 0;
		this._pointIdUpdated = NaN;

		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;

		this._domain = new DChartRegionImpl( NaN, NaN );
		this._range = new DChartRegionImpl( NaN, NaN );
		this._regionPointId = NaN;

		this._options = options;
	}

	protected toStroke( container: DChartSeriesContainer, index: number ): DChartSeriesStrokeComputed {
		const options = this._options;
		const stroke = options && options.stroke;
		const containerStroke = container.stroke;
		if( stroke ) {
			const style = ( stroke.style != null ? stroke.style : containerStroke.style( index ) );
			return {
				width: ( stroke.width != null ? stroke.width : containerStroke.width( index ) ),
				color: ( stroke.color != null ? stroke.color : containerStroke.color( index ) ),
				alpha: ( stroke.alpha != null ? stroke.alpha : containerStroke.alpha( index ) ),
				style: ( utilIsString( style ) ? EShapePointsStyle[ style ] : style )
			};
		} else {
			const style = containerStroke.style( index );
			return {
				width: containerStroke.width( index ),
				color: containerStroke.color( index ),
				alpha: containerStroke.alpha( index ),
				style: ( utilIsString( style ) ? EShapePointsStyle[ style ] : style )
			};
		}
	}

	bind( container: DChartSeriesContainer, index: number ): void {
		let line = this._line;
		if( ! line ) {
			const stroke = this.toStroke( container, index );
			line = this._line = new EShapeLine([], [], stroke.width, stroke.style);
			line.stroke.color = stroke.color;
			line.stroke.alpha = stroke.alpha;
		}
		this._container = container;
		line.attach( container.plotArea.container, index );
		this._pointIdUpdated = NaN;
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
	}

	unbind(): void {
		const line = this._line;
		if( line ) {
			line.detach();
		}
		this._container = undefined;
	}

	get points(): Array<number | null> {
		return this._points;
	}

	set points( points: Array<number | null> ) {
		this._points = points;
		this._pointId += 1;
	}

	toDirty(): void {
		this._pointId += 1;
	}

	update(): void {
		const line = this._line;
		const container = this._container;
		if( line && container ) {
			const plotArea = container.plotArea;
			const coordinate = plotArea.coordinate;
			const coordinateX = coordinate.x.get( this._coordinateIndexX );
			const coordinateY = coordinate.y.get( this._coordinateIndexY );
			if( coordinateX && coordinateY ) {
				const coordinateIdX = coordinateX.id;
				const coordinateIdY = coordinateY.id;

				const pointId = this._pointId;
				const isPointChanged = ( pointId !== this._pointIdUpdated );
				const isCoordinateXChanged = ( coordinateIdX !== this._coordinateIdUpdatedX );
				const isCoordinateYChanged = ( coordinateIdY !== this._coordinateIdUpdatedY );
				if( isPointChanged || isCoordinateXChanged || isCoordinateYChanged ) {
					this._pointIdUpdated = pointId;
					this._coordinateIdUpdatedX = coordinateIdX;
					this._coordinateIdUpdatedY = coordinateIdY;
					this.updateLine( line, coordinateX, coordinateY );
				}
			}
		}
	}

	protected updateLine(
		line: EShapeLine,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate
	): void {
		const values = line.points.values;
		const segments = line.points.segments;
		const valuesLength = values.length;
		const segmentsLength = segments.length;
		let ivalues = 0;
		let isegments = 0;
		const points = this._points;
		for( let i = 0, imax = points.length; i < imax; i += 2 ) {
			const xraw = points[ i ];
			const yraw = points[ i + 1 ];
			if( xraw != null && yraw != null ) {
				const x = xcoordinate.map( xraw );
				const y = ycoordinate.map( yraw );
				if( ivalues < valuesLength ) {
					values[ ivalues ] = x;
					values[ ivalues + 1 ] = y;
				} else {
					values.push( x, y );
				}
				ivalues += 2;
			} else {
				const segment = (i >> 1) - isegments;
				if( isegments < segmentsLength ) {
					segments[ isegments ] = segment;
				} else {
					segments.push( segment );
				}
				isegments += 1;
			}
		}
		if( values.length !== ivalues ) {
			values.length = ivalues;
		}
		if( segments.length !== isegments ) {
			segments.length = isegments;
		}
		line.points.set( values, segments );
		DApplications.update( line );
	}

	get domain(): DChartRegionImmutable {
		this.updateRegion();
		return this._domain;
	}

	get range(): DChartRegionImmutable {
		this.updateRegion();
		return this._range;
	}

	protected updateRegion(): void {
		const pointId = this._pointId;
		if( this._regionPointId !== pointId ) {
			this._regionPointId = pointId;

			const points = this._points;
			const domain = this._domain;
			const range = this._range;
			domain.clear();
			range.clear();
			if( points != null ) {
				for( let i = 0, imax = points.length; i < imax; i += 2 ) {
					const xraw = points[ i ];
					if( xraw != null ) {
						domain.add( xraw, xraw );
					}
					const yraw = points[ i + 1 ];
					if( yraw != null ) {
						range.add( yraw, yraw );
					}
				}
			}
		}
	}

	destroy(): void {
		const line = this._line;
		if( line ) {
			this._line = undefined;
			line.detach();
			line.destroy();
		}

		this._container = undefined;
		this._points.length = 0;
		this._pointId = 0;
		this._pointIdUpdated = NaN;
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
	}
}
