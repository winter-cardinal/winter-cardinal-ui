/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSelection } from "./d-chart-selection";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import {
	DChartSeriesFillComputed,
	DChartSeriesFillComputedOptions
} from "./d-chart-series-fill-computed";
import {
	DChartSeriesPaddingComputed,
	DChartSeriesPaddingComputedOptions
} from "./d-chart-series-padding-computed";
import {
	DChartSeriesPointComputed,
	DChartSeriesPointComputedOptions
} from "./d-chart-series-point-computed";
import {
	DChartSeriesStrokeComputed,
	DChartSeriesStrokeComputedOptions
} from "./d-chart-series-stroke-computed";

export class DChartPlotAreaTwofoldSeriesContainer<CHART extends DBase = DBase>
	implements DChartSeriesContainer<CHART>
{
	protected static WORK_CALCHITPOINT: DChartSeriesHitResult | undefined;

	protected _plotArea: DChartPlotArea<CHART>;
	protected _primary: DChartSeriesContainerImpl<CHART>;
	protected _secondary: DChartSeriesContainerImpl<CHART>;

	protected _domain: DChartRegionImpl;
	protected _range: DChartRegionImpl;

	constructor(
		plotArea: DChartPlotArea<CHART>,
		primary: DChartSeriesContainerImpl<CHART>,
		secondary: DChartSeriesContainerImpl<CHART>
	) {
		this._plotArea = plotArea;
		this._primary = primary;
		this._secondary = secondary;

		this._domain = new DChartRegionImpl(NaN, NaN);
		this._range = new DChartRegionImpl(NaN, NaN);
	}

	newFill(
		index: number,
		options: DChartSeriesFillComputedOptions | undefined
	): DChartSeriesFillComputed {
		return this._secondary.newFill(index, options);
	}

	newStroke(
		index: number,
		options: DChartSeriesStrokeComputedOptions | undefined
	): DChartSeriesStrokeComputed {
		return this._secondary.newStroke(index, options);
	}

	newSize(
		index: number,
		options: DChartSeriesPointComputedOptions | undefined,
		x: number,
		y: number
	): DChartSeriesPointComputed {
		return this._secondary.newSize(index, options, x, y);
	}

	newOffset(
		index: number,
		options: DChartSeriesPointComputedOptions | undefined,
		x: number,
		y: number
	): DChartSeriesPointComputed {
		return this._secondary.newOffset(index, options, x, y);
	}

	newPadding(
		index: number,
		options: DChartSeriesPaddingComputedOptions | undefined
	): DChartSeriesPaddingComputed {
		return this._secondary.newPadding(index, options);
	}

	get plotArea(): DChartPlotArea<CHART> {
		return this._plotArea;
	}

	get selection(): DChartSelection<CHART> | null {
		return this._secondary.selection;
	}

	update(): void {
		this._primary.update();
		this._secondary.update();
		const selection = this._secondary.selection;
		if (selection) {
			selection.update();
		}
	}

	onRender(): void {
		this._primary.onRender();
		this._secondary.onRender();
		const selection = this._secondary.selection;
		if (selection) {
			selection.onRender();
		}
	}

	add(series: DChartSeries<CHART>): void {
		this._secondary.add(series);
	}

	get(index: number): DChartSeries<CHART> | null {
		const primary = this._primary;
		const primarySize = primary.size();
		if (0 <= index && index < primarySize) {
			return primary.get(index);
		}
		const secondary = this._secondary;
		const secondarySize = secondary.size();
		if (primarySize <= index && index < primarySize + secondarySize) {
			return secondary.get(index - primarySize);
		}
		return null;
	}

	indexOf(series: DChartSeries<CHART>): number {
		const primary = this._primary;
		let result = primary.indexOf(series);
		if (0 <= result) {
			return result;
		}
		result = this._secondary.indexOf(series);
		if (0 <= result) {
			return primary.size() + result;
		}
		return -1;
	}

	clear(): this {
		this._primary.clear();
		this._secondary.clear();
		return this;
	}

	size(): number {
		return this._primary.size() + this._secondary.size();
	}

	destroy(): void {
		this.clear();
		const selection = this._secondary.selection;
		if (selection) {
			selection.unbind();
		}
	}

	getDomain(coordinate: DChartCoordinate<CHART>, result: DChartRegion): DChartRegion {
		this._primary.getDomain(coordinate, result);
		const from = result.from;
		const to = result.to;

		this._secondary.getDomain(coordinate, result);
		result.add(from, to);
		return result;
	}

	getRange(coordinate: DChartCoordinate<CHART>, result: DChartRegion): DChartRegion {
		result.clear();

		this._primary.getRange(coordinate, result);
		const from = result.from;
		const to = result.to;

		this._secondary.getRange(coordinate, result);
		result.add(from, to);
		return result;
	}

	get domain(): DChartRegion {
		const result = this._domain;
		result.clear();

		const pdomain = this._primary.domain;
		result.add(pdomain.from, pdomain.to);

		const sdomain = this._secondary.domain;
		result.add(sdomain.from, sdomain.to);

		return result;
	}

	get range(): DChartRegion {
		const result = this._domain;
		result.clear();

		const prange = this._primary.range;
		result.add(prange.from, prange.to);

		const srange = this._secondary.range;
		result.add(srange.from, srange.to);

		return result;
	}

	hitTest(x: number, y: number): DChartSeries<CHART> | null {
		const result = this._secondary.hitTest(x, y);
		if (result != null) {
			return result;
		}
		return this._primary.hitTest(x, y);
	}

	calcHitPoint(x: number, y: number, result: DChartSeriesHitResult): DChartSeries<CHART> | null {
		const result1 = result;
		const result2 = (DChartPlotAreaTwofoldSeriesContainer.WORK_CALCHITPOINT ??=
			new DChartSeriesHitResult());
		const series2 = this._secondary.calcHitPoint(x, y, result2);
		const series1 = this._primary.calcHitPoint(x, y, result1);
		if (series1 != null) {
			if (series2 != null) {
				if (result1.distance <= result2.distance) {
					return series1;
				} else {
					result1.copyFrom(result2);
					return series2;
				}
			} else {
				return series1;
			}
		} else {
			if (series2 != null) {
				result1.copyFrom(result2);
				return series2;
			} else {
				return null;
			}
		}
	}
}
