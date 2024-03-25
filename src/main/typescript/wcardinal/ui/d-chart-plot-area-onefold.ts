/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DThemeChartPlotArea, DChartPlotAreaOptions } from "./d-chart-plot-area";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartPlotAreaBase } from "./d-chart-plot-area-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import {
	DChartCoordinateContainer,
	DChartCoordinateContainerOptions
} from "./d-chart-coordinate-container";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartCoordinateContainerImpl } from "./d-chart-coordinate-container-impl";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DAnimationTimings } from "./d-animation-timings";
import { DChartSelection } from "./d-chart-selection";
import { DChartSeries } from "./d-chart-series";
import { DChartAxis } from "./d-chart-axis";
import { DViewImpl } from "./d-view-impl";

export interface DChartPlotAreaSingleSeriesContainerOptions<CHART extends DBase = DBase>
	extends DChartSeriesContainerOptions<CHART> {
	selection?: DChartSelection<CHART>;
}

export interface DChartPlotAreaSingleOptions<
	CHART extends DBase = DBase,
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea
> extends DChartPlotAreaOptions<CHART, THEME> {
	series?: DChartPlotAreaSingleSeriesContainerOptions<CHART>;
	coordinate?: DChartCoordinateContainerOptions<CHART>;
	axis?: DChartAxisContainerOptions<CHART>;
}

export class DChartPlotAreaOnefold<
	CHART extends DBase = DBase,
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea,
	OPTIONS extends DChartPlotAreaSingleOptions<CHART, THEME> = DChartPlotAreaSingleOptions<
		CHART,
		THEME
	>
> extends DChartPlotAreaBase<CHART, THEME, OPTIONS> {
	protected _container: DChartPlotAreaContainer;
	protected _series: DChartSeriesContainerImpl<CHART>;
	protected _coordinate: DChartCoordinateContainer<CHART>;
	protected _axis: DChartAxisContainerImpl<CHART>;

	constructor(chart: CHART, options?: OPTIONS) {
		super(chart, options);

		// Container
		const container = new DChartPlotAreaContainer((): void => {
			this._isViewDirty = true;
			this._isContainerBoundsDirty = true;
			DApplications.update(this);
		});
		this._container = container;
		this.addChild(container);

		// Overflow mask
		const mask = options?.mask ?? this.theme.isOverflowMaskEnabled();
		if (mask) {
			container.mask = this.getOverflowMask();
		}

		// View
		this._isViewDirty = true;
		this._view = new DViewImpl(this, () => container, options?.view);

		// Coordinate
		this._coordinate = new DChartCoordinateContainerImpl(this, options?.coordinate);

		// Series
		const seriesOptions = options?.series;
		const series = new DChartSeriesContainerImpl(this, seriesOptions);
		this._series = series;

		// Axis
		const axisOptions = options?.axis;
		const axis = new DChartAxisContainerImpl(this, axisOptions);
		this._axis = axis;
		this.addChild(axis.container);

		// Add series
		this.addSeries(series, seriesOptions?.list);

		// Add axes
		this.addAxes(axis, axisOptions?.list);

		// Selection
		const selection = seriesOptions?.selection;
		if (selection != null) {
			series.selection = selection;
			selection.bind(series);
		}
	}

	protected getOverflowMask(): DBaseOverflowMask {
		if (this._overflowMask == null) {
			this._overflowMask = new DBaseOverflowMask(this);
			this.reflowable.add(this._overflowMask);
			this.toDirty();
		}
		return this._overflowMask;
	}

	protected addSeries(series: DChartSeriesContainer<CHART>, list?: DChartSeries<CHART>[]): void {
		if (list != null) {
			const listLength = list.length;
			if (0 < listLength) {
				for (let i = 0; i < listLength; ++i) {
					series.add(list[i]);
				}
				series.update();
			}
		}
	}

	protected addAxes(axis: DChartAxisContainer<CHART>, list?: DChartAxis<CHART>[]): void {
		if (list != null) {
			for (let i = 0, imax = list.length; i < imax; ++i) {
				axis.add(list[i]);
			}
		}
	}

	override get coordinate(): DChartCoordinateContainer<CHART> {
		return this._coordinate;
	}

	override get series(): DChartSeriesContainer<CHART> {
		return this._series;
	}

	override get container(): DChartPlotAreaContainer {
		return this._container;
	}

	override get axis(): DChartAxisContainer<CHART> {
		return this._axis;
	}

	override newView(options?: OPTIONS): DViewImpl {
		return new DViewImpl(this, () => this._container, options?.view);
	}

	protected override onViewDirty(): void {
		this._coordinate.fit();
		this._axis.onRender();
		this._series.onRender();
	}

	override fit(
		duration?: number,
		domainFrom?: number,
		domainTo?: number,
		rangeFrom?: number,
		rangeTo?: number
	): this {
		const coordinate = this._coordinate;
		const axis = this._axis;
		const series = this._series;
		if (duration != null && duration <= 0) {
			coordinate.fit(domainFrom, domainTo, rangeFrom, rangeTo);
			axis.update();
			series.update();
		} else {
			this._blendDuration = duration != null ? duration : 200;
			this._blendStartTime = Date.now();
			coordinate.mark(domainFrom, domainTo, rangeFrom, rangeTo);
			const blendTimeout = this._blendTimeout;
			if (blendTimeout != null) {
				window.clearTimeout(blendTimeout);
			}
			this._blendTimeout = window.setTimeout(this._onBlendBound, 0);
		}
		return this;
	}

	protected override onBlend(): void {
		const now = Date.now();
		let ratio = (now - this._blendStartTime) / this._blendDuration;
		if (ratio < 1) {
			this._blendTimeout = window.setTimeout(this._onBlendBound, 0);
		} else {
			this._blendTimeout = null;
			ratio = 1;
		}
		this._coordinate.blend(DAnimationTimings.ELASTIC(ratio));
		this._axis.update();
		this._series.update();
	}

	override destroy(): void {
		this._container.destroy();
		this._series.destroy();
		this._axis.destroy();
	}
}
