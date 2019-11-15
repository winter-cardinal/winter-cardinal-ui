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
import { DChartSeriesCoordinateOptions } from "./d-chart-series-coordinate";
import {
	DChartSeriesLinearParameters,
	DChartSeriesLinearParametersOptions
} from "./d-chart-series-linear-parameters";
import { DChartSeriesExpressionParametersImpl } from "./d-chart-series-linear-parameters-impl";
import { DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { DChartSeriesStrokeComputedImpl } from "./d-chart-series-stroke-computed-impl";
import { EShapeLine } from "./shape/variant/e-shape-line";

/**
 * {@link DChartSeriesLinear} options.
 */
export interface DChartSeriesLinearOptions extends DChartSeriesLinearParametersOptions {
	stroke?: DChartSeriesStrokeComputedOptions;
	coordinate?: DChartSeriesCoordinateOptions;
}

/**
 * A series represents a linear equation `a (x - x0) === b (y - y0)`.
 */
export class DChartSeriesLinear implements DChartSeries {
	protected _line?: EShapeLine;
	protected _coordinateIndexX: number;
	protected _coordinateIndexY: number;
	protected _coordinateIdUpdatedX: number;
	protected _coordinateIdUpdatedY: number;
	protected _plotAreaSizeXUpdated: number;
	protected _plotAreaSizeYUpdated: number;

	protected _parameters: DChartSeriesExpressionParametersImpl;

	protected _container?: DChartSeriesContainer;

	protected _domain: DChartRegionImpl;
	protected _range: DChartRegionImpl;
	protected _regionPointId: number;

	protected _options?: DChartSeriesLinearOptions;

	constructor( options?: DChartSeriesLinearOptions ) {
		const coordinate = options && options.coordinate;
		this._coordinateIndexX = ( coordinate && coordinate.x != null ? coordinate.x : 0 );
		this._coordinateIndexY = ( coordinate && coordinate.y != null ? coordinate.y : 0 );
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
		this._plotAreaSizeXUpdated = NaN;
		this._plotAreaSizeYUpdated = NaN;

		this._parameters = DChartSeriesExpressionParametersImpl.from( options );

		this._domain = new DChartRegionImpl( NaN, NaN );
		this._range = new DChartRegionImpl( NaN, NaN );
		this._regionPointId = NaN;

		this._options = options;
	}

	bind( container: DChartSeriesContainer, index: number ): void {
		let line = this._line;
		if( ! line ) {
			const options = this._options;
			const stroke = DChartSeriesStrokeComputedImpl.from( container, index, options && options.stroke );
			line = this._line = new EShapeLine([], [], stroke.width, stroke.style);
			line.stroke.color = stroke.color;
			line.stroke.alpha = stroke.alpha;
		}
		this._container = container;
		line.attach( container.plotArea.container, index );
		this._parameters.toDirty();
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
		this._plotAreaSizeXUpdated = NaN;
		this._plotAreaSizeYUpdated = NaN;
	}

	unbind(): void {
		const line = this._line;
		if( line ) {
			line.detach();
		}
		this._container = undefined;
	}

	get parameters(): DChartSeriesLinearParameters {
		return this._parameters;
	}

	toDirty(): void {
		this._parameters.toDirty();
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
				const plotAreaSize = plotArea.size;
				const plotAreaSizeX = plotAreaSize.x;
				const plotAreaSizeY = plotAreaSize.y;

				const parameters = this._parameters;
				const isParametersChanged = parameters.isDirty();
				const isCoordinateXChanged = ( coordinateIdX !== this._coordinateIdUpdatedX );
				const isCoordinateYChanged = ( coordinateIdY !== this._coordinateIdUpdatedY );
				const isPlotAreaSizeChagned = ( plotAreaSizeX !== this._plotAreaSizeXUpdated ||
					plotAreaSizeY !== this._plotAreaSizeYUpdated );
				if( isParametersChanged || isCoordinateXChanged || isCoordinateYChanged || isPlotAreaSizeChagned ) {
					parameters.toClean();
					this._coordinateIdUpdatedX = coordinateIdX;
					this._coordinateIdUpdatedY = coordinateIdY;
					this._plotAreaSizeXUpdated = plotAreaSizeX;
					this._plotAreaSizeYUpdated = plotAreaSizeY;
					this.updateLine( line, coordinateX, coordinateY, plotAreaSizeX, plotAreaSizeY );
				}
			}
		}
	}

	protected updateLine(
		line: EShapeLine,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate,
		plotAreaSizeX: number,
		plotAreaSizeY: number
	): void {
		const values = line.points.values;
		const segments = line.points.segments;

		const parameters = this._parameters;
		const a = parameters.a;
		const b = parameters.b;
		const x0 = parameters.x0;
		const y0 = parameters.y0;
		const aabs = Math.abs( a );
		const babs = Math.abs( b );

		let p0x = NaN;
		let p0y = NaN;
		let p1x = NaN;
		let p1y = NaN;

		const threshold = 0.00001;
		if( babs <= aabs ) {
			const xfrom0 = xcoordinate.unmap( 0 );
			const xto0 = xcoordinate.unmap( plotAreaSizeX );
			p0x = Math.min( xfrom0, xto0 );
			p1x = Math.max( xfrom0, xto0 );

			if( threshold < aabs ) {
				const yfrom = ycoordinate.unmap( 0 );
				const yto = ycoordinate.unmap( plotAreaSizeY );
				const xfrom1 = b * (yfrom - y0) / a + x0;
				const xto1 = b * (yto - y0) / a + x0;
				const p2x = Math.min( xfrom1, xto1 );
				const p3x = Math.max( xfrom1, xto1 );

				if( p0x < p2x ) {
					p0x = p2x;
				}

				if( p3x < p1x ) {
					p1x = p3x;
				}
			}

			p0y = a * (p0x - x0) + b * y0;
			p1y = a * (p1x - x0) + b * y0;
		} else {
			const yfrom0 = ycoordinate.unmap( 0 );
			const yto0 = ycoordinate.unmap( plotAreaSizeY );
			p0y = Math.min( yfrom0, yto0 );
			p1y = Math.max( yfrom0, yto0 );

			if( threshold < babs ) {
				const xfrom = xcoordinate.unmap( 0 );
				const xto = xcoordinate.unmap( plotAreaSizeX );
				const yfrom1 = a * (xfrom - x0) / b + y0;
				const yto1 = a * (xto - x0) / b + y0;
				const p2y = Math.min( yfrom1, yto1 );
				const p3y = Math.max( yfrom1, yto1 );

				if( p0y < p2y ) {
					p0y = p2y;
				}

				if( p3y < p1y ) {
					p1y = p3y;
				}
			}

			p0x = b * (p0y - y0) + a * x0;
			p1x = b * (p1y - y0) + a * x0;
		}

		p0x = xcoordinate.map( p0x );
		p0y = ycoordinate.map( p0y );
		p1x = xcoordinate.map( p1x );
		p1y = ycoordinate.map( p1y );

		if( values.length !== 4 ) {
			values.length = 0;
			values.push( p0x, p0y, p1x, p1y );
		} else {
			values[ 0 ] = p0x;
			values[ 1 ] = p0y;
			values[ 2 ] = p1x;
			values[ 3 ] = p1y;
		}
		if( segments.length !== 0 ) {
			segments.length = 0;
		}
		line.points.set( values, segments );
		DApplications.update( line );
	}

	get domain(): DChartRegionImmutable {
		return this._domain;
	}

	get range(): DChartRegionImmutable {
		return this._range;
	}

	destroy(): void {
		const line = this._line;
		if( line ) {
			this._line = undefined;
			line.detach();
			line.destroy();
		}

		this._container = undefined;
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
	}
}
