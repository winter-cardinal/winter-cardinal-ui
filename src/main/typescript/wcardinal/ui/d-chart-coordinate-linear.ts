/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateLinearTick, DThemeChartCoordinateLinearTick } from "./d-chart-coordinate-linear-tick";
import { DChartCoordinateTransform, DThemeChartCoordinateTransform } from "./d-chart-coordinate-transform";
import { DChartCoordinateTransformImpl } from "./d-chart-coordinate-transform-impl";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DThemes } from "./theme/d-themes";
import { utilIsNaN } from "./util/util-is-nan";

export interface DThemeChartCoordinateLinear extends DThemeChartCoordinateTransform, DThemeChartCoordinateLinearTick {

}

export interface DChartCoordinateLinearOptions {
	theme?: DThemeChartCoordinateLinear;
}

export class DChartCoordinateLinear implements DChartCoordinate {
	protected _id: number;
	protected _transform: DChartCoordinateTransform;
	protected _container?: DChartCoordinateContainerSub;
	protected _direction: DChartCoordinateDirection;
	protected _theme: DThemeChartCoordinateLinear;
	protected _work: DChartRegionImpl;
	protected _tick: DChartCoordinateLinearTick;

	constructor( options?: DChartCoordinateLinearOptions ) {
		this._id = 0;
		this._direction = DChartCoordinateDirection.X;
		const theme = this.toTheme( options );
		this._theme = theme;
		this._transform = new DChartCoordinateTransformImpl( theme );
		this._tick = new DChartCoordinateLinearTick( theme );
		this._work = new DChartRegionImpl( NaN, NaN );
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
			const work = this._work;
			switch( this._direction ) {
			case DChartCoordinateDirection.X:
				this.fit_(
					plotArea.width,
					padding.getLeft(),
					padding.getRight(),
					plotArea.series.getDomain( this, work )
				);
				break;
			case DChartCoordinateDirection.Y:
				this.fit_(
					plotArea.height,
					padding.getBottom(),
					padding.getTop(),
					plotArea.series.getRange( this, work )
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

	ticks(
		domainFrom: number, domainTo: number,
		majorCount: number,
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array
	): void {
		this._tick.calculate(
			domainFrom, domainTo,
			majorCount,
			minorCountPerMajor,
			minorCount,
			majorResult,
			minorResult,
			this
		);
	}

	protected toTheme( options?: DChartCoordinateLinearOptions ): DThemeChartCoordinateLinear {
		return ( options && options.theme ) || this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartCoordinateLinear {
		return DThemes.getInstance().get( this.getType() );
	}

	protected getType(): string {
		return "DChartCoordinateLinear";
	}
}
