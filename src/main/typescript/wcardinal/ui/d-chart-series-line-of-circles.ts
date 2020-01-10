/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseStates } from "./d-base-states";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBase, DChartSeriesBaseOptions } from "./d-chart-series-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesFillComputed, DChartSeriesFillComputedOptions } from "./d-chart-series-fill-computed";
import { DChartSeriesFillComputedImpl } from "./d-chart-series-fill-computed-impl";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { DChartSeriesStrokeComputedImpl } from "./d-chart-series-stroke-computed-impl";
import { EShapePointsToHitThreshold } from "./shape/e-shape-points";
import { EShapeLineOfCircles } from "./shape/variant/e-shape-line-of-circles";
import { utilCeilingIndex } from "./util/util-ceiling-index";
import { utilIsNumber } from "./util/util-is-number";

/**
 * {@link DChartSeriesLineOfCircles} options.
 */
export interface DChartSeriesLineOfCirclesOptions extends DChartSeriesBaseOptions {
	points?: Array<number | null>;
	fill?: DChartSeriesFillComputedOptions;
	stroke?: DChartSeriesStrokeComputedOptions;
	size?: number | { x?: number, y?: number };
}

/**
 * A series represents a line of circles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfCircles extends DChartSeriesBase {
	protected static WORK: Point = new Point();

	protected _line: EShapeLineOfCircles | null;
	protected _options?: DChartSeriesLineOfCirclesOptions;
	protected _points: Array<number | null>;
	protected _pointId: number;
	protected _pointIdUpdated: number;
	protected _stroke?: DChartSeriesStrokeComputed;
	protected _fill?: DChartSeriesFillComputed;
	protected _size: { x: number, y: number };

	constructor( options?: DChartSeriesLineOfCirclesOptions ) {
		super( options );
		this._line = null;
		this._options = options;
		this._points = (options && options.points) || [];
		this._pointId = 0;
		this._pointIdUpdated = NaN;
		this._size = this.toSize( options );
	}

	protected toSize( options?: DChartSeriesLineOfCirclesOptions ): { x: number, y: number } {
		const result = { x: 10, y: 10 };
		const size = options && options.size;
		if( utilIsNumber( size ) ) {
			result.x = result.y = size;
		} else if( size != null ) {
			if( size.x != null ) {
				result.x = size.x;
			}
			if( size.y != null ) {
				result.y = size.y;
			}
		}
		return result;
	}

	bind( container: DChartSeriesContainer, index: number ): void {
		let line = this._line;
		if( ! line ) {
			line = this._line = new EShapeLineOfCircles( [] );

			const options = this._options;

			const fill = DChartSeriesFillComputedImpl.from( container, index, options && options.fill );
			line.fill.copy( fill );
			this._fill = fill;

			const stroke = DChartSeriesStrokeComputedImpl.from( container, index, options && options.stroke );
			line.stroke.copy( stroke );
			this._stroke = stroke;

			const size = this._size;
			line.size.set( size.x, size.y );
		}
		line.attach( container.plotArea.container, index );
		this._pointIdUpdated = NaN;
		super.bind( container, index );
	}

	unbind(): void {
		const line = this._line;
		if( line ) {
			line.detach();
		}
		super.unbind();
	}

	get shape(): EShapeLineOfCircles | null {
		return this._line;
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
		if( line ) {
			const coordinate = this._coordinate;
			const coordinateX = coordinate.x;
			const coordinateY = coordinate.y;
			if( coordinateX && coordinateY ) {
				const pointId = this._pointId;
				const isPointChanged = ( pointId !== this._pointIdUpdated );
				const isCoordinateChanged = coordinate.isDirty( coordinateX, coordinateY );
				if( isPointChanged || isCoordinateChanged ) {
					this._pointIdUpdated = pointId;
					this.updateLine( line, coordinateX, coordinateY );
				}
			}
		}
	}

	protected updateLine(
		line: EShapeLineOfCircles,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate
	): void {
		const values = line.points.values;
		const valuesLength = values.length;
		let ivalues = 0;
		const points = this._points;
		let xmin = NaN;
		let xmax = NaN;
		let ymin = NaN;
		let ymax = NaN;
		for( let i = 0, imax = points.length; i < imax; i += 2 ) {
			const x = points[ i ];
			const y = points[ i + 1 ];
			if( x != null && y != null ) {
				if( ivalues < valuesLength ) {
					values[ ivalues ] = x;
					values[ ivalues + 1 ] = y;
				} else {
					values.push( x, y );
				}
				ivalues += 2;
				if( xmin !== xmin ) {
					xmin = x;
					xmax = x;
					ymin = y;
					ymax = y;
				} else {
					xmin = Math.min( xmin, x );
					xmax = Math.max( xmax, x );
					ymin = Math.min( ymin, y );
					ymax = Math.max( ymax, y );
				}
			}
		}
		if( values.length !== ivalues ) {
			values.length = ivalues;
		}

		xcoordinate.mapAll( values, 0, ivalues, 2, 0 );
		ycoordinate.mapAll( values, 0, ivalues, 2, 1 );
		xcoordinate.transform.mapAll( values, 0, ivalues, 2, 0 );
		ycoordinate.transform.mapAll( values, 0, ivalues, 2, 1 );

		if( xmin !== xmin ) {
			xmin = 0;
			xmax = 0;
			ymin = 0;
			ymax = 0;
		}

		xmin = xcoordinate.transform.map( xcoordinate.map( xmin ) );
		xmax = xcoordinate.transform.map( xcoordinate.map( xmax ) );
		ymin = ycoordinate.transform.map( ycoordinate.map( ymin ) );
		ymax = ycoordinate.transform.map( ycoordinate.map( ymax ) );

		const cx = ( xmin + xmax ) * 0.5;
		const cy = ( ymin + ymax ) * 0.5;
		for( let i = 0, imax = values.length; i < imax; i += 2 ) {
			values[ i + 0 ] -= cx;
			values[ i + 1 ] -= cy;
		}
		line.points.set( values );
		line.transform.position.set( cx, cy );
		DApplications.update( line );
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
			this._line = null;
			line.detach();
			line.destroy();
		}

		this._points.length = 0;
		this._pointId = 0;
		this._pointIdUpdated = NaN;
		super.destroy();
	}

	hitTest( global: IPoint ): boolean {
		const line = this._line;
		if( line ) {
			const work = DChartSeriesLineOfCircles.WORK;
			const local = line.toLocal( global, undefined, work );
			return line.contains( local ) != null;
		}
		return false;
	}

	calcHitPoint( global: IPoint, threshold: EShapePointsToHitThreshold, result: DChartSeriesHitResult ): boolean {
		const line = this._line;
		if( line ) {
			const work = DChartSeriesLineOfCircles.WORK;
			const local = line.toLocal( global, undefined, work );
			result.shape = line;
			return line.calcHitPoint( local, threshold, this.calcHitPointTestRange, this.calcHitPointHitTester, result );
		}
		return false;
	}

	calcHitPointTestRange(
		this: unknown,
		x: number, y: number,
		ax: number, ay: number,
		threshold: number,
		values: number[],
		result: [ number, number ]
	): [ number, number ] {
		const to = utilCeilingIndex( values, x + ax, 2, 0 );
		let from = to;
		for( let i = to - 1, iv = i << 1; 0 <= i; i -= 2, iv -= 2 ) {
			if( values[ iv ] <= x - ax ) {
				from = i;
				break;
			}
		}
		result[ 0 ] = from;
		result[ 1 ] = to;
		return result;
	}

	calcHitPointHitTester(
		this: unknown,
		x: number, y: number,
		ax: number, ay: number,
		px: number, py: number,
		ux: number, uy: number,
		index: number,
		threshold: number,
		result: DChartSeriesHitResult
	): boolean {
		const shape = result.shape as EShapeLineOfCircles;
		if( shape.containsPointAbs( x, y, ax, ay, px, py ) ) {
			const position = shape.transform.position;
			result.x = result.p0x = result.p1x = position.x + px;
			result.y = result.p0y = result.p1y = position.y + py;
			result.t = threshold;
			result.index = index;
			result.distance = 0;
			return true;
		}
		return false;
	}

	protected onStateChange( newState: number, oldState: number ) {
		const isActive = DBaseStates.isActive( newState );
		const wasActive = DBaseStates.isActive( oldState );
		if( isActive !== wasActive ) {
			const line = this._line;
			const stroke = this._stroke;
			if( line && stroke ) {
				line.stroke.set(
					undefined,
					undefined,
					undefined,
					stroke.width * ( isActive ? 2 : 1 ),
					stroke.align + ( isActive ? 0.5 : 0 )
				);
			}
		}
		super.onStateChange( newState, oldState );
	}
}
