/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DThemeChartPlotArea, DChartPlotAreaOptions } from "./d-chart-plot-area";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartPlotAreaBase } from "./d-chart-plot-area-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DAnimationTimings } from "./d-animation-timings";
import { DChartPlotAreaTwofoldCoorinateContainer } from "./d-chart-plot-area-twofold-coordinate-container";
import { DChartPlotAreaTwofoldSeriesContainer } from "./d-chart-plot-area-twofold-series-container";
import { DChartPlotAreaTwofoldAxisContainer } from "./d-chart-plot-area-twofold-axis-container";
import { DChartSelection } from "./d-chart-selection";
import { DChartPlotAreaTwofoldSubOptions } from "./d-chart-plot-area-twofold-sub";
import { DChartPlotAreaTwofoldSubPrimary } from "./d-chart-plot-area-twofold-sub-primary";
import { DChartPlotAreaTwofoldSubSecondary } from "./d-chart-plot-area-twofold-sub-secondary";
import { DChartSeries } from "./d-chart-series";
import { DChartAxis } from "./d-chart-axis";
import { DViewImpl } from "./d-view-impl";
import { DChartPlotAreaTwofoldViewTarget } from "./d-chart-plot-area-twofold-view-target";
import { EShapeContainer } from "./shape";

export interface DChartPlotAreaTwofoldOptions<
	CHART extends DBase = DBase,
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea
> extends DChartPlotAreaOptions<CHART, THEME> {
	primary?: DChartPlotAreaTwofoldSubOptions<CHART>;
	secondary?: DChartPlotAreaTwofoldSubOptions<CHART>;
	selection?: DChartSelection<CHART>;
	axis?: DChartAxisContainerOptions<CHART>;
	margin?: number;
}

export class DChartPlotAreaTwofold<
	CHART extends DBase = DBase,
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea,
	OPTIONS extends DChartPlotAreaTwofoldOptions<CHART, THEME> = DChartPlotAreaTwofoldOptions<
		CHART,
		THEME
	>
> extends DChartPlotAreaBase<CHART, THEME, OPTIONS> {
	protected _primary: DChartPlotAreaTwofoldSubPrimary<CHART>;
	protected _secondary: DChartPlotAreaTwofoldSubSecondary<CHART>;
	protected _margin: number;

	protected _coordinate: DChartCoordinateContainer<CHART>;
	protected _series: DChartPlotAreaTwofoldSeriesContainer<CHART>;
	protected _axis: DChartPlotAreaTwofoldAxisContainer<CHART>;

	constructor(chart: CHART, options?: OPTIONS) {
		super(chart, options);

		// Margin
		const theme = this.theme;
		const margin = options?.margin ?? theme.getMargin();
		this._margin = margin;

		// Primary
		const axisShapeContainer = new EShapeContainer();
		const onContainerChangeBound = (): void => {
			this.onContainerChange();
		};
		const mask = options?.mask ?? theme.isOverflowMaskEnabled();
		const primaryOptions = options?.primary;
		const primary = new DChartPlotAreaTwofoldSubPrimary<CHART>(
			this,
			onContainerChangeBound,
			mask,
			margin,
			axisShapeContainer,
			primaryOptions
		);
		this._primary = primary;

		// Secondary
		const secondaryOptions = options?.secondary;
		const secondary = new DChartPlotAreaTwofoldSubSecondary<CHART>(
			this,
			onContainerChangeBound,
			mask,
			margin,
			axisShapeContainer,
			secondaryOptions
		);
		this._secondary = secondary;

		// Container
		this.addChild(primary.container);
		this.addChild(secondary.container);

		// Coordinate
		this._coordinate = new DChartPlotAreaTwofoldCoorinateContainer<CHART>(
			this,
			primary.coordinate,
			secondary.coordinate
		);

		// Series
		const primarySeries = primary.series;
		const secondarySeries = secondary.series;
		const series = new DChartPlotAreaTwofoldSeriesContainer<CHART>(
			this,
			primarySeries,
			secondarySeries
		);
		this._series = series;

		// Axis
		const primaryAxis = primary.axis;
		const secondaryAxis = secondary.axis;
		this.addChild(axisShapeContainer);
		const axis = new DChartPlotAreaTwofoldAxisContainer<CHART>(
			this,
			axisShapeContainer,
			primaryAxis,
			secondaryAxis
		);
		this._axis = axis;

		// Add Series
		this.addSeries(primarySeries, primaryOptions?.series?.list);
		this.addSeries(secondarySeries, secondaryOptions?.series?.list);

		// Add Axes
		this.addAxes(primaryAxis, primaryOptions?.axis?.list);
		this.addAxes(secondaryAxis, secondaryOptions?.axis?.list);
		this.addAxes(axis, options?.axis?.list);

		// Selection
		const selection = options?.selection;
		if (selection != null) {
			primarySeries.selection = selection;
			secondarySeries.selection = selection;
			selection.bind(series);
		}
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

	get primary(): DChartPlotAreaTwofoldSubPrimary<CHART> {
		return this._primary;
	}

	get secondary(): DChartPlotAreaTwofoldSubSecondary<CHART> {
		return this._secondary;
	}

	override get container(): DChartPlotAreaContainer {
		return this.secondary.container;
	}

	protected onContainerChange(): void {
		this._isViewDirty = true;
		this._isContainerBoundsDirty = true;
		this._primary.toBoundsDirty();
		this._secondary.toBoundsDirty();
		DApplications.update(this);
	}

	override get coordinate(): DChartCoordinateContainer<CHART> {
		return this._coordinate;
	}

	override get series(): DChartSeriesContainer<CHART> {
		return this._series;
	}

	override get axis(): DChartAxisContainer<CHART> {
		return this._axis;
	}

	override newView(options?: OPTIONS): DViewImpl {
		let viewTarget: DChartPlotAreaTwofoldViewTarget<CHART> | undefined;
		const toViewTarget = () => {
			return (viewTarget ??= new DChartPlotAreaTwofoldViewTarget<CHART>(
				this._primary.container,
				this._secondary.container
			));
		};
		return new DViewImpl(this, toViewTarget, options?.view);
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
		if (duration != null && duration <= 0) {
			const primary = this.primary;
			primary.coordinate.fit(domainFrom, domainTo, rangeFrom, rangeTo);
			primary.axis.update();
			primary.series.update();

			const secondary = this.secondary;
			secondary.coordinate.fit(domainFrom, domainTo, rangeFrom, rangeTo);
			secondary.axis.update();
			secondary.series.update();
		} else {
			this._blendDuration = duration != null ? duration : 200;
			this._blendStartTime = Date.now();
			this.primary.coordinate.mark(domainFrom, domainTo, rangeFrom, rangeTo);
			this.secondary.coordinate.mark(domainFrom, domainTo, rangeFrom, rangeTo);
			const blendTimeout = this._blendTimeout;
			if (blendTimeout != null) {
				window.clearTimeout(blendTimeout);
			}
			this._blendTimeout = window.setTimeout(this._onBlendBound, 0);
		}
		return this;
	}

	protected onBlend(): void {
		const now = Date.now();
		let ratio = (now - this._blendStartTime) / this._blendDuration;
		if (ratio < 1) {
			this._blendTimeout = window.setTimeout(this._onBlendBound, 0);
		} else {
			this._blendTimeout = null;
			ratio = 1;
		}

		const t = DAnimationTimings.ELASTIC(ratio);
		const primary = this.primary;
		primary.coordinate.blend(t);
		primary.axis.update();
		primary.series.update();

		const secondary = this.secondary;
		secondary.coordinate.blend(t);
		secondary.axis.update();
		secondary.series.update();
	}

	override destroy(): void {
		this._primary?.destroy();
		this._secondary?.destroy();
		this._axis.destroy();
	}
}
