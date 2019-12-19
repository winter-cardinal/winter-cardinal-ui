/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";

export interface DThemeChartCoordinateLogTick {
	toStepScale( scale: number ): number;
}

export class DChartCoordinateLogTick {
	protected _theme: DThemeChartCoordinateLogTick;

	constructor( theme: DThemeChartCoordinateLogTick ) {
		this._theme = theme;
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

	calculate(
		domainFrom: number, domainTo: number,
		majorCount: number,
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array,
		coordinate: DChartCoordinate
	): void {
		if( majorCount <= 0 ) {
			return;
		}

		const transform = coordinate.transform;

		const domainFromMapped = coordinate.map( domainFrom );
		const domainToMapped = coordinate.map( domainTo );

		const domainMinMapped = Math.min( domainFromMapped, domainToMapped );
		const domainMaxMapped = Math.max( domainFromMapped, domainToMapped );

		const majorStepMapped = this.calcStepMajor( domainMinMapped, domainMaxMapped, majorCount );
		if( majorStepMapped <= 0 ) {
			const domainMin = Math.min( domainFrom, domainTo );
			majorResult[ 0 ] = domainMin;
			majorResult[ 1 ] = transform.map( coordinate.map( domainMin ) );
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
		const idomainStartMapped = Math.floor( domainMinMapped / majorStepMapped ) - 1;
		const idomainEndMapped = Math.ceil( domainMaxMapped / majorStepMapped ) + 1;

		// Major / minor tick positions
		const minorStepMapped = this.calcStepMinor( majorStepMapped, minorCountPerMajor );
		let imajor = 0;
		let iminor = 0;
		for( let i = idomainStartMapped; i <= idomainEndMapped; ++i ) {
			const majorPositionMapped = i * majorStepMapped;
			if( imajor < majorCount ) {
				if( domainMinMapped <= majorPositionMapped && majorPositionMapped <= domainMaxMapped ) {
					const majorPosition = coordinate.unmap( majorPositionMapped );
					const majorProjectedPosition = transform.map( majorPositionMapped );
					const majorStep = coordinate.unmap( majorPositionMapped - 1 );
					const imajorResult = imajor * 3;
					majorResult[ imajorResult + 0 ] = majorPosition;
					majorResult[ imajorResult + 1 ] = majorProjectedPosition;
					majorResult[ imajorResult + 2 ] = majorStep;
					imajor += 1;
				}
			}

			for( let j = 0; j < minorCountPerMajor; j += 1 ) {
				if( iminor < minorCount ) {
					const minorPositionMapped = majorPositionMapped + (j + 1) * minorStepMapped;
					if( domainMinMapped <= minorPositionMapped && minorPositionMapped <= domainMaxMapped ) {
						const minorPosition = coordinate.unmap( minorPositionMapped );
						const minorProjectedPosition = transform.map( minorPositionMapped );
						const minorStep = coordinate.unmap( minorPositionMapped - 1 );
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
