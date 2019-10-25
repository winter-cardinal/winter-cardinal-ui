/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import { DChartSeriesStroke } from "./d-chart-series-stroke";
import { DChartSeriesStrokeImpl } from "./d-chart-series-stroke-impl";
import { utilIsNumber } from "./util";

export class DChartSeriesContainerImpl implements DChartSeriesContainer {
	protected _plotArea: DChartPlotArea;
	protected _list: DChartSeries[];
	protected _domain: DChartRegionImpl;
	protected _range: DChartRegionImpl;
	protected _stroke: DChartSeriesStrokeImpl;

	constructor( plotArea: DChartPlotArea, options?: DChartSeriesContainerOptions ) {
		this._plotArea = plotArea;
		this._domain = new DChartRegionImpl( NaN, NaN );
		this._range = new DChartRegionImpl( NaN, NaN );
		this._stroke = new DChartSeriesStrokeImpl( options && options.stroke );

		this._list = [];
		const list = options && options.list;
		if( list ) {
			const listLength = list.length;
			if( 0 < listLength ) {
				for( let i = 0; i < listLength; ++i ) {
					this.add( list[ i ] );
				}
				this.update();
			}
		}
	}

	get plotArea(): DChartPlotArea {
		return this._plotArea;
	}

	get stroke(): DChartSeriesStroke {
		return this._stroke;
	}

	update(): void {
		const list = this._list;
		for( let i = 0, imax = list.length; i < imax; ++i ) {
			list[ i ].update();
		}
	}

	add( series: DChartSeries ): void {
		const list = this._list;
		series.bind( this, list.length );
		list.push( series );
	}

	get( index: number ): DChartSeries | null {
		const list = this._list;
		if( 0 <= index && index < list.length ) {
			return list[ index ];
		}
		return null;
	}

	indexOf( series: DChartSeries ): number {
		return this._list.indexOf( series );
	}

	remove( series: DChartSeries ): DChartSeries | null;
	remove( index: number ): DChartSeries | null;
	remove( seriesOrIndex: DChartSeries | number ): DChartSeries | null {
		const list = this._list;
		if( utilIsNumber( seriesOrIndex ) ) {
			const index = seriesOrIndex;
			if( 0 <= index && index < list.length ) {
				const removed = list.splice( index, 1 )[ 0 ];
				removed.unbind();
				removed.destroy();
				return removed;
			}
		} else {
			const series = seriesOrIndex;
			const index = list.indexOf( series );
			if( 0 <= index ) {
				list.splice( index, 1 );
				series.unbind();
				series.destroy();
				return series;
			}
		}
		return null;
	}

	clear(): this {
		const list = this._list;
		for( let i = 0, imax = list.length; i < imax; ++i ) {
			list[ i ].destroy();
		}
		list.length = 0;
		return this;
	}

	size(): number {
		return this._list.length;
	}

	destroy(): void {
		this.clear();
	}

	get domain(): DChartRegion {
		const result = this._domain;
		result.clear();

		const list = this._list;
		for( let i = 0, imax = list.length; i < imax; ++i ) {
			const domain = list[ i ].domain;
			result.add( domain.from, domain.to );
		}

		return result;
	}

	get range(): DChartRegion {
		const result = this._range;
		result.clear();

		const list = this._list;
		for( let i = 0, imax = list.length; i < imax; ++i ) {
			const range = list[ i ].range;
			result.add( range.from, range.to );
		}

		return result;
	}
}
