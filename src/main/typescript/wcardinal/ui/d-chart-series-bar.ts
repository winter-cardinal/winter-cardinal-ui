/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartRegion } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";
import {
	DChartSeriesLineOfAny, DChartSeriesLineOfAnyOptions, DChartSeriesLineOfAnyRegion
} from "./d-chart-series-line-of-any";
import { DChartSeriesPaddingComputed } from "./d-chart-series-padding-computed";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfRectangles } from "./shape/variant/e-shape-line-of-rectangles";
import { isArray } from "./util/is-array";

/**
 * A series represents bars.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesBar extends DChartSeriesLineOfAny {
	protected _barCountId: number;
	protected _indexId: number;
	protected _xcoordinateId: number;
	protected _xcoordinateTransformId: number;
	protected _padding?: DChartSeriesPaddingComputed;

	constructor( options?: DChartSeriesLineOfAnyOptions ) {
		super( options );
		this._barCountId = 1;
		this._indexId = 0;
		this._xcoordinateId = -1;
		this._xcoordinateTransformId = -1;
	}

	protected initLine(
		line: EShapeLineOfAny,
		options: DChartSeriesLineOfAnyOptions | undefined,
		container: DChartSeriesContainer,
		index: number
	): void {
		super.initLine( line, options, container, index );
		this._padding = container.newPadding( index, options && options.padding );
	}

	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfRectangles();
	}

	protected getSizeDefault(): number {
		return 1;
	}

	protected adjustLineRegion(
		xmin: number, xmax: number,
		ymin: number, ymax: number,
		result: DChartSeriesLineOfAnyRegion
	): DChartSeriesLineOfAnyRegion {
		return super.adjustLineRegion(
			xmin,
			xmax,
			Math.min( 0, ymin ),
			Math.max( 0, ymax ),
			result
		);
	}

	protected applyLine(
		line: EShapeLineOfAny,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate,
		sx: number, sy: number,
		cx: number, cy: number,
		values: number[]
	): void {
		// Offset
		const barCount = this._container?.size() || 1;
		const index = this._index;
		const xcoordinateId = xcoordinate.id;
		const xcoordinateTransformId = xcoordinate.transform.id;
		const size = this._size;
		const offset = this._offset;
		const padding = this._padding;
		if( size && offset && padding ) {
			if( this._barCountId !== barCount || this._indexId !== index || this._xcoordinateId !== xcoordinateId ||
				this._xcoordinateTransformId !== xcoordinateTransformId ) {
				this._barCountId = barCount;
				this._indexId = index;
				this._xcoordinateId = xcoordinateId;
				this._xcoordinateTransformId = xcoordinateTransformId;

				const x0 = xcoordinate.transform.map( xcoordinate.map( 0 ) );
				const x1 = xcoordinate.transform.map( xcoordinate.map( size.x ) );
				const totalBandWidth = Math.abs( x1 - x0 ) * ( 1 - padding.outer );
				if( barCount <= 1 ) {
					line.points.offset.x = offset.x;
					line.points.size.x = totalBandWidth;
				} else {
					const totalBarWidth = totalBandWidth * ( 1 - padding.inner );
					const totalPaddingInner = totalBandWidth - totalBarWidth;
					const barWidth = totalBarWidth / barCount;
					const barPadding = totalPaddingInner / ( barCount - 1 );
					const barX = barWidth * (index + 0.5) + index * barPadding;
					line.points.offset.x = offset.x + barX - totalBandWidth * 0.5;
					line.points.size.x = barWidth;
				}
			}
		}

		// Sizes & Offsets
		let sizes = line.points.size.y;
		if( ! isArray( sizes ) ) {
			sizes = [];
		}
		const sizesLength = sizes.length;

		let offsets = line.points.offset.y;
		if( ! isArray( offsets ) ) {
			offsets = [];
		}
		const offsetsLength = offsets.length;

		let isize = 0;
		const y0 = ycoordinate.transform.map( ycoordinate.map( 0 ) ) - cy;
		for( let i = 0, imax = values.length; i < imax; i += 2, isize += 1 ) {
			const distance = values[ i + 1 ] - y0;

			const s = Math.abs( distance );
			if( isize < sizesLength ) {
				sizes[ isize ] = s;
			} else {
				sizes.push( s );
			}

			const o = -0.5 * distance;
			if( isize < offsetsLength ) {
				offsets[ isize ] = o;
			} else {
				offsets.push( o );
			}
		}
		if( sizes.length !== isize ) {
			sizes.length = isize;
		}
		if( offsets.length !== isize ) {
			offsets.length = isize;
		}

		line.points.size.y = sizes;
		line.points.offset.y = offsets;

		// Others
		super.applyLine( line, xcoordinate, ycoordinate, sx, sy, cx, cy, values );
	}

	protected calcRegion( points: Array<number | null>, domain: DChartRegion, range: DChartRegion ): void {
		super.calcRegion( points, domain, range );

		const size = this._size;
		if( size ) {
			const sx = size.x * 0.5;
			domain.set( domain.from - sx, domain.to + sx );
		}
		range.add( 0, 0 );
	}
}
