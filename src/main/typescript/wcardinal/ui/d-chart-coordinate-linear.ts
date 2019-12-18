/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateTransform, DThemeChartCoordinateTransform } from "./d-chart-coordinate-transform";
import { DChartCoordinateTransformImpl } from "./d-chart-coordinate-transform-impl";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DThemes } from "./theme/d-themes";
import { utilIsNaN } from "./util/util-is-nan";

export interface DThemeChartCoordinateLinear extends DThemeChartCoordinateTransform {
	toStepScale( scale: number ): number;
}

export interface DChartCoordinateLinearDomainOptions {
	from?: number;
	to?: number;
}

export interface DChartCoordinateLinearRangeOptions {
	from?: number;
	to?: number;
}

export interface DChartCoordinateLinearOptions {
	domain?: DChartCoordinateLinearDomainOptions;
	range?: DChartCoordinateLinearRangeOptions;
	theme?: DThemeChartCoordinateLinear;
}

export class DChartCoordinateLinear implements DChartCoordinate {
	protected _id: number;
	protected _transform: DChartCoordinateTransform;
	protected _container?: DChartCoordinateContainerSub;
	protected _direction: DChartCoordinateDirection;
	protected _theme: DThemeChartCoordinateLinear;
	protected _work: DChartRegionImpl;

	constructor( options?: DChartCoordinateLinearOptions ) {
		this._id = 0;

		// Direction
		this._direction = DChartCoordinateDirection.X;

		// Theme
		const theme = ( options && options.theme ) || this.getThemeDefault();
		this._theme = theme;

		// Transform
		this._transform = new DChartCoordinateTransformImpl( theme );

		this._work = new DChartRegionImpl( NaN, NaN );
	}

	protected getThemeDefault(): DThemeChartCoordinateLinear {
		return DThemes.getInstance().get( this.getType() );
	}

	protected getType(): string {
		return "DChartCoordinateLinear";
	}

	bind( container: DChartCoordinateContainerSub, direction: DChartCoordinateDirection ): void {
		this._container = container;
		this._direction = direction;
	}

	unbind(): void {
		this._container = undefined;
	}

	fit(): void {
		const container = this._container;
		if( container ) {
			const plotArea = container.container.plotArea;
			const padding = plotArea.padding;
			switch( this._direction ) {
			case DChartCoordinateDirection.X:
				this.fit_(
					plotArea.width,
					padding.getLeft(),
					padding.getRight(),
					plotArea.series.getDomain( this, this._work )
				);
				break;
			case DChartCoordinateDirection.Y:
				this.fit_(
					plotArea.height,
					padding.getBottom(),
					padding.getTop(),
					plotArea.series.getRange( this, this._work )
				);
				break;
			}
		}
	}

	protected fit_( size: number, paddingFrom: number, paddingTo: number, region: DChartRegion ): void {
		const regionFrom = region.from;
		const regionTo = region.to;
		if( ! (utilIsNaN( regionFrom ) || utilIsNaN( regionTo )) ) {
			// Scale
			let newScale = 1;
			const rangeSize = Math.abs( regionTo - regionFrom );
			if( ! this._theme.isZero( rangeSize ) ) {
				const pixelSize = Math.max( 0, size - paddingFrom - paddingTo );
				newScale = pixelSize / rangeSize;
			}

			// Translation
			const newTranslation = paddingFrom - regionFrom * newScale;

			// Done
			this._transform.set( newTranslation, newScale );
		}
	}

	get id(): number {
		return this._id;
	}

	get transform(): DChartCoordinateTransform {
		return this._transform;
	}

	map( value: number ): number {
		if( this._direction === DChartCoordinateDirection.Y ) {
			return -value;
		}
		return value;
	}

	mapAll( values: number[], ifrom: number, iend: number, stride: number, offset: number ): void {
		if( this._direction === DChartCoordinateDirection.Y ) {
			for( let i = ifrom + offset; i < iend; i += stride ) {
				values[ i ] = -values[ i ];
			}
		}
	}

	unmap( value: number ): number {
		return this.map( value );
	}

	unmapAll( values: number[], ifrom: number, iend: number, stride: number, offset: number ): void {
		this.mapAll( values, ifrom, iend, stride, offset );
	}

	protected calcStepMajor( domainMin: number, domainMax: number, count: number ): number {
		if( 0 < count ) {
			const span = Math.abs( domainMax - domainMin ) / count;
			const power = Math.floor( Math.log( span ) / Math.LN10 );
			const base = Math.pow( 10, power );
			return this._theme.toStepScale( span / base ) * base;
		}
		return -1;
	}

	protected calcStepMinor( step: number, minorCount: number ): number {
		if( 0 <= step ) {
			return step / ( minorCount + 1 );
		} else {
			return -1;
		}
	}

	protected calcTickMinorPositions(
		step: number, count: number, majorPosition: number,
		rangeMin: number, rangeMax: number,
		iresult: number, result: Float64Array
	): void {
		for( let i = 0; i < count; i += 1 ) {
			const minorPosition = majorPosition + (i + 1) * step;
			if( rangeMin <= minorPosition && minorPosition <= rangeMax ) {
				result[ iresult++ ] = minorPosition;
			}
		}
	}

	protected getRangeMax(): number {
		const container = this._container;
		if( container ) {
			const plotArea = container.container.plotArea;
			switch( this._direction ) {
			case DChartCoordinateDirection.X:
				return plotArea.width;
			case DChartCoordinateDirection.Y:
				return plotArea.height;
			}
		}
		return 0;
	}

	ticks(
		domainFrom: number, domainTo: number,
		majorCount: number,
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array
	): void {
		if( majorCount <= 0 ) {
			return;
		}

		const transform = this._transform;

		const domainMin = Math.min( domainFrom, domainTo );
		const domainMax = Math.max( domainFrom, domainTo );

		const majorStep = this.calcStepMajor( domainMin, domainMax, majorCount );
		if( majorStep <= 0 ) {
			majorResult[ 0 ] = domainMin;
			majorResult[ 1 ] = transform.map( this.map( domainMin ) );
			majorResult[ 2 ] = 0;
			for( let i = 1; i < majorCount; ++i ) {
				const imajorResult = i * 3;
				majorResult[ imajorResult + 0 ] = NaN;
				majorResult[ imajorResult + 1 ] = NaN;
				majorResult[ imajorResult + 2 ] = NaN;
			}
			for( let i = 0; i < minorCount; ++i ) {
				const iminorResult = i * 3;
				minorResult[ iminorResult + 0 ] = NaN;
				minorResult[ iminorResult + 1 ] = NaN;
				minorResult[ iminorResult + 2 ] = NaN;
			}
			return;
		}

		// Major tick start position
		const idomainStart = Math.floor( domainMin / majorStep ) - 1;
		const idomainEnd = Math.ceil( domainMax / majorStep ) + 1;

		// Major / minor tick positions
		const minorStep = this.calcStepMinor( majorStep, minorCountPerMajor );
		let imajor = 0;
		let iminor = 0;
		for( let i = idomainStart; i <= idomainEnd; ++i ) {
			const majorPosition = i * majorStep;
			if( imajor < majorCount ) {
				if( domainMin <= majorPosition && majorPosition <= domainMax ) {
					const majorProjectedPosition = transform.map( this.map( majorPosition ) );
					const imajorResult = imajor * 3;
					majorResult[ imajorResult + 0 ] = majorPosition;
					majorResult[ imajorResult + 1 ] = majorProjectedPosition;
					majorResult[ imajorResult + 2 ] = majorStep;
					imajor += 1;
				}
			}

			for( let j = 0; j < minorCountPerMajor; j += 1 ) {
				if( iminor < minorCount ) {
					const minorPosition = majorPosition + (j + 1) * minorStep;
					if( domainMin <= minorPosition && minorPosition <= domainMax ) {
						const minorProjectedPosition = transform.map( this.map( minorPosition ) );
						const iminorResult = iminor * 3;
						minorResult[ iminorResult + 0 ] = minorPosition;
						minorResult[ iminorResult + 1 ] = minorProjectedPosition;
						minorResult[ iminorResult + 2 ] = minorStep;
						iminor += 1;
					}
				}
			}
		}
		for( let i = imajor; i < majorCount; ++i ) {
			const imajorResult = i * 3;
			majorResult[ imajorResult + 0 ] = NaN;
			majorResult[ imajorResult + 1 ] = NaN;
			majorResult[ imajorResult + 2 ] = NaN;
		}
		for( let i = iminor; i < minorCount; ++i ) {
			const iminorResult = i * 3;
			minorResult[ iminorResult + 0 ] = NaN;
			minorResult[ iminorResult + 1 ] = NaN;
			minorResult[ iminorResult + 2 ] = NaN;
		}
	}
}
