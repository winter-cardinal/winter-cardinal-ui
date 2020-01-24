/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartRegion } from "./d-chart-region";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBase, DChartSeriesBaseOptions } from "./d-chart-series-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesFillComputed, DChartSeriesFillComputedOptions } from "./d-chart-series-fill-computed";
import { DChartSeriesPaddingComputedOptions } from "./d-chart-series-padding-computed";
import { DChartSeriesPointComputed, DChartSeriesPointComputedOptions } from "./d-chart-series-point-computed";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfCircles } from "./shape/variant/e-shape-line-of-circles";
import { toCeilingIndex } from "./util/to-ceiling-index";

/**
 * {@link DChartSeriesLineOfAny} options.
 */
export interface DChartSeriesLineOfAnyOptions extends DChartSeriesBaseOptions {
	points?: Array<number | null>;
	fill?: DChartSeriesFillComputedOptions;
	stroke?: DChartSeriesStrokeComputedOptions;
	size?: DChartSeriesPointComputedOptions;
	offset?: DChartSeriesPointComputedOptions;
	padding?: DChartSeriesPaddingComputedOptions;
}

export interface DChartSeriesLineOfAnyRegion {
	xmin: number;
	xmax: number;
	ymin: number;
	ymax: number;
}

/**
 * A series represents a line of anything.
 * Data points must be sorted in ascending order on the X axis.
 */
export abstract class DChartSeriesLineOfAny extends DChartSeriesBase {
	protected static WORK: Point = new Point();
	protected static WORK_REGION?: DChartSeriesLineOfAnyRegion;

	protected _line: EShapeLineOfAny | null;
	protected _options?: DChartSeriesLineOfAnyOptions;
	protected _points: Array<number | null>;
	protected _pointId: number;
	protected _pointIdUpdated: number;

	protected _stroke?: DChartSeriesStrokeComputed;
	protected _fill?: DChartSeriesFillComputed;
	protected _size?: DChartSeriesPointComputed;
	protected _offset?: DChartSeriesPointComputed;

	constructor( options?: DChartSeriesLineOfAnyOptions ) {
		super( options );
		this._line = null;
		this._options = options;
		this._points = (options && options.points) || [];
		this._pointId = 0;
		this._pointIdUpdated = NaN;
	}

	protected getSizeDefault(): number {
		return 10;
	}

	protected getOffsetDefault(): number {
		return 0;
	}

	bind( container: DChartSeriesContainer, index: number ): void {
		let line = this._line;
		if( ! line ) {
			line = this._line = this.newLineOfAny();
			const options = this._options;
			this.initLine( line, options, container, index );
		}
		line.attach( container.plotArea.container, index );
		this._pointIdUpdated = NaN;
		super.bind( container, index );
	}

	protected initLine(
		line: EShapeLineOfAny,
		options: DChartSeriesLineOfAnyOptions | undefined,
		container: DChartSeriesContainer,
		index: number
	): void {
		const fill = container.newFill( index, options && options.fill );
		this._fill = fill;
		line.fill.copy( fill );

		const stroke = container.newStroke( index, options && options.stroke );
		this._stroke = stroke;
		line.stroke.copy( stroke );

		const sizeDefault = this.getSizeDefault();
		const size = container.newSize( index, options && options.size, sizeDefault, sizeDefault );
		this._size = size;
		line.points.size.set( size.x, size.y );

		const offsetDefault = this.getOffsetDefault();
		const offset = container.newOffset( index, options && options.offset, offsetDefault, offsetDefault );
		this._offset = offset;
		line.points.offset.set( offset.x, offset.y );
	}

	protected abstract newLineOfAny(): EShapeLineOfAny;

	unbind(): void {
		const line = this._line;
		if( line ) {
			line.detach();
		}
		super.unbind();
	}

	get shape(): EShapeLineOfAny | null {
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
		line: EShapeLineOfAny,
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
		const region = this.adjustLineRegion(
			xmin, xmax,
			ymin, ymax,
			DChartSeriesLineOfAny.WORK_REGION || {
				xmin: 0, xmax: 0,
				ymin: 0, ymax: 0
			}
		);
		xmin = xcoordinate.transform.map( xcoordinate.map( region.xmin ) );
		xmax = xcoordinate.transform.map( xcoordinate.map( region.xmax ) );
		ymin = ycoordinate.transform.map( ycoordinate.map( region.ymin ) );
		ymax = ycoordinate.transform.map( ycoordinate.map( region.ymax ) );

		const sx = Math.abs( xmax - xmin );
		const sy = Math.abs( ymax - ymin );
		const cx = ( xmin + xmax ) * 0.5;
		const cy = ( ymin + ymax ) * 0.5;
		for( let i = 0, imax = values.length; i < imax; i += 2 ) {
			values[ i + 0 ] -= cx;
			values[ i + 1 ] -= cy;
		}

		line.disallowUploadedUpdate();
		this.applyLine( line, xcoordinate, ycoordinate, sx, sy, cx, cy, values );
		line.allowUploadedUpdate();
		DApplications.update( line );
	}

	protected adjustLineRegion(
		xmin: number, xmax: number,
		ymin: number, ymax: number,
		result: DChartSeriesLineOfAnyRegion
	): DChartSeriesLineOfAnyRegion {
		result.xmin = xmin;
		result.xmax = xmax;
		result.ymin = ymin;
		result.ymax = ymax;
		return result;
	}

	protected applyLine(
		line: EShapeLineOfAny,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate,
		sx: number, sy: number,
		cx: number, cy: number,
		values: number[]
	): void {
		line.points.set( values );
		line.size.set( sx, sy );
		line.transform.position.set( cx, cy );
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
			this.calcRegion( points, domain, range );
		}
	}

	protected calcRegion( points: Array<number | null>, domain: DChartRegion, range: DChartRegion ): void {
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
			const work = DChartSeriesLineOfAny.WORK;
			const local = line.toLocal( global, undefined, work );
			return line.contains( local ) != null;
		}
		return false;
	}

	calcHitPoint( global: IPoint, result: DChartSeriesHitResult ): boolean {
		const line = this._line;
		if( line ) {
			const work = DChartSeriesLineOfAny.WORK;
			const local = line.toLocal( global, undefined, work );
			result.shape = line;
			return line.calcHitPoint( local, null, this.calcHitPointTestRange, this.calcHitPointHitTester, result );
		}
		return false;
	}

	calcHitPointTestRange(
		this: unknown,
		x: number, y: number,
		ax: number, ay: number,
		ox: number, oy: number,
		threshold: number,
		values: number[],
		result: [ number, number ]
	): [ number, number ] {
		const to = toCeilingIndex( values, x + ax + ox, 2, 0 );
		let from = 0;
		for( let i = to - 1, iv = i << 1; 0 <= i; i -= 1, iv -= 2 ) {
			if( values[ iv ] <= x - ax ) {
				from = i;
				break;
			}
		}
		result[ 0 ] = from;
		result[ 1 ] = from !== to ? to : Math.min( values.length << 1, to + 1 );
		return result;
	}

	calcHitPointHitTester(
		this: unknown,
		x: number, y: number,
		ax: number, ay: number,
		ox: number, oy: number,
		px: number, py: number,
		index: number,
		threshold: number,
		result: DChartSeriesHitResult
	): boolean {
		const shape = result.shape as EShapeLineOfCircles;
		if( shape.containsPointAbs( x, y, ax, ay, ox, oy, px, py ) ) {
			const position = shape.transform.position;
			result.x = result.p0x = result.p1x = position.x + px;
			result.y = result.p0y = result.p1y = position.y + py;
			result.t = threshold;
			result.index = index;
			const dx = x - (px + ox);
			const dy = y - (py + oy);
			result.distance = Math.sqrt( dx * dx + dy * dy );
			return true;
		}
		return false;
	}
}
