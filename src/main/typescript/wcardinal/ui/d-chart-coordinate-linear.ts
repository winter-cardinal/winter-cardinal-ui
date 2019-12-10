/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImplObservable } from "./d-chart-region-impl-observable";
import { DThemes } from "./theme/d-themes";
import { utilIsNaN } from "./util/util-is-nan";

export interface DThemeChartCoordinateLinear {
	getPadding(): number;
	isZero( value: number ): boolean;
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
	padding?: number;
	domain?: DChartCoordinateLinearDomainOptions;
	range?: DChartCoordinateLinearRangeOptions;
	theme?: DThemeChartCoordinateLinear;
}

export class DChartCoordinateLinear implements DChartCoordinate {
	protected _id: number;
	protected _padding: number;
	protected _domain: DChartRegionImplObservable;
	protected _range: DChartRegionImplObservable;

	protected _container?: DChartCoordinateContainerSub;
	protected _direction: DChartCoordinateDirection;

	protected _ratio!: number;
	protected _offset!: number;
	protected _iratio!: number;
	protected _ioffset!: number;

	protected _theme: DThemeChartCoordinateLinear;

	constructor( options?: DChartCoordinateLinearOptions ) {
		this._id = 0;

		// Direction
		this._direction = DChartCoordinateDirection.X;

		// Theme
		const theme = ( options && options.theme ) || this.getThemeDefault();
		this._theme = theme;

		// Padding
		const padding = options && options.padding;
		this._padding = ( padding != null ? padding : theme.getPadding() );

		// Domain
		const domain = options && options.domain;
		const domainFrom = ( domain && domain.from != null ? domain.from : 0 );
		const domainTo = ( domain && domain.to != null ? domain.to : 1 );
		this._domain = new DChartRegionImplObservable( domainFrom, domainTo, (): void => {
			this.onRegionChange();
		});

		// Range
		const range = options && options.range;
		const rangeFrom = ( range && range.from != null ? range.from : 0 );
		const rangeTo = ( range && range.to != null ? range.to : 1 );
		this._range = new DChartRegionImplObservable( rangeFrom, rangeTo, (): void => {
			this.onRegionChange();
		});

		this.onRegionChange();
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
			const padding = this._padding;
			switch( this._direction ) {
			case DChartCoordinateDirection.X:
				const domain = plotArea.series.domain;
				const domainFrom = domain.from;
				const domainTo = domain.to;
				if( ! (utilIsNaN( domainFrom ) || utilIsNaN( domainTo )) ) {
					this._domain.set( domainFrom, domainTo );
					let pixelFrom = padding;
					let pixelTo = plotArea.size.x - padding;
					if( pixelTo < pixelFrom ) {
						pixelFrom = plotArea.size.x * 0.5;
						pixelTo = pixelFrom;
					}
					this._range.set( pixelFrom, pixelTo );
				}
				break;
			case DChartCoordinateDirection.Y:
				const range = plotArea.series.range;
				const rangeFrom = range.from;
				const rangeTo = range.to;
				if( ! (utilIsNaN( rangeFrom ) || utilIsNaN( rangeTo )) ) {
					this._domain.set( rangeFrom, rangeTo );
					let pixelFrom = plotArea.size.y - padding;
					let pixelTo = padding;
					if( pixelFrom < pixelTo ) {
						pixelFrom = plotArea.size.y * 0.5;
						pixelTo = pixelFrom;
					}
					this._range.set( pixelFrom, pixelTo );
				}
				break;
			}
		}
	}

	protected onRegionChange(): void {
		this._id += 1;
		const domain = this._domain;
		const range = this._range;
		const domainSpan = domain.to - domain.from;
		const rangeSpan = range.to - range.from;
		const theme = this._theme;
		this._ratio = ( theme.isZero( domainSpan ) ? 0 : rangeSpan / domainSpan );
		this._offset = range.from - this._ratio * domain.from;
		this._iratio = ( theme.isZero( rangeSpan ) ? 0 : domainSpan / rangeSpan );
		this._ioffset = domain.from - this._iratio * range.from;
	}

	get id(): number {
		return this._id;
	}

	get domain(): DChartRegion {
		return this._domain;
	}

	get range(): DChartRegion {
		return this._range;
	}

	map( value: number ): number {
		return this._offset + this._ratio * value;
	}

	unmap( value: number ): number {
		return this._ioffset + this._iratio * value;
	}

	protected calcStepMajor( count: number ): number {
		if( 0 < count ) {
			const domain = this._domain;
			const span = Math.abs( domain.to - domain.from ) / count;
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
			const plotAreaSize = container.container.plotArea.size;
			switch( this._direction ) {
			case DChartCoordinateDirection.X:
				return plotAreaSize.x;
			case DChartCoordinateDirection.Y:
				return plotAreaSize.y;
			}
		}
		return 0;
	}

	ticks(
		majorCount: number,
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array
	): void {
		if( majorCount <= 0 ) {
			return;
		}

		const domain = this._domain;
		const domainMin = Math.min( domain.from, domain.to );
		const domainMax = Math.max( domain.from, domain.to );

		const majorStep = this.calcStepMajor( majorCount );
		if( majorStep <= 0 ) {
			majorResult[ 0 ] = domainMin;
			majorResult[ 1 ] = this.map( domainMin );
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

		// Range
		const rangeMin = 0;
		const rangeMax = this.getRangeMax();

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
				const majorProjectedPosition = this.map( majorPosition );
				if( rangeMin <= majorProjectedPosition && majorProjectedPosition <= rangeMax ) {
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
					const minorProjectedPosition = this.map( minorPosition );
					if( rangeMin <= minorProjectedPosition && minorProjectedPosition <= rangeMax ) {
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
