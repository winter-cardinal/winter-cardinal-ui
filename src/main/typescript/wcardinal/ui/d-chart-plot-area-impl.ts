/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point, Rectangle, Renderer } from "pixi.js";
import { DAnimationTimings } from "./d-animation-timings";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerImpl } from "./d-chart-coordinate-container-impl";
import { DChartPlotArea, DThemeChartPlotArea, DChartPlotAreaOptions } from "./d-chart-plot-area";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import { DView } from "./d-view";
import { DViewImpl } from "./d-view-impl";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

export class DChartPlotAreaImpl<
		CHART extends DBase = DBase,
		THEME extends DThemeChartPlotArea = DThemeChartPlotArea,
		OPTIONS extends DChartPlotAreaOptions<CHART, THEME> = DChartPlotAreaOptions<CHART, THEME>
	>
	extends DBase<THEME, OPTIONS>
	implements DChartPlotArea<CHART>
{
	protected _chart: CHART;
	protected _container!: DChartPlotAreaContainer;
	protected _series!: DChartSeriesContainerImpl<CHART>;
	protected _coordinate!: DChartCoordinateContainer<CHART>;
	protected _axis!: DChartAxisContainerImpl<CHART>;
	protected _view!: DViewImpl;
	protected _isViewDirty!: boolean;
	protected _isBoundsInContainerDirty!: boolean;
	protected _boundsInContainer!: Rectangle;
	protected _overflowMask?: DBaseOverflowMask | null;
	protected _workPoint!: Point;
	protected _blendStartTime: number;
	protected _blendDuration: number;
	protected _blendTimeout: number | null;
	protected _onBlendBound: () => void;

	constructor(chart: CHART, options?: OPTIONS) {
		super(options);
		this._chart = chart;
		this._blendStartTime = 0;
		this._blendDuration = 1000;
		this._blendTimeout = null;
		this._onBlendBound = () => {
			this.onBlend();
		};
	}

	protected init(options?: OPTIONS): void {
		super.init(options);

		this._isBoundsInContainerDirty = true;
		this._boundsInContainer = new Rectangle();
		this._workPoint = new Point();

		// Container
		const container = new DChartPlotAreaContainer((): void => {
			this._isViewDirty = true;
			this._isBoundsInContainerDirty = true;
			DApplications.update(this);
		});
		this._container = container;
		this.addChild(container);

		// View
		this._isViewDirty = true;
		this._view = new DViewImpl(this, () => container, options?.view);

		// Coordinate container
		this._coordinate = new DChartCoordinateContainerImpl(this, options?.coordinate);

		// Series container
		const series = new DChartSeriesContainerImpl(this, options?.series);
		this._series = series;

		// Axis container
		const axis = new DChartAxisContainerImpl(this, options?.axis);
		this._axis = axis;
		this.addChild(axis.container);

		// Overflow mask
		const mask = options?.mask ?? this.theme.isOverflowMaskEnabled();
		if (mask) {
			container.mask = this.getOverflowMask();
		}

		// Add series and axes
		if (options != null) {
			// Series
			const s = options.series;
			if (s != null) {
				const list = s.list;
				if (list) {
					const listLength = list.length;
					if (0 < listLength) {
						for (let i = 0; i < listLength; ++i) {
							series.add(list[i]);
						}
						series.update();
					}
				}
			}

			// Axes
			const a = options.axis;
			if (a != null) {
				const list = a.list;
				if (list) {
					for (let i = 0, imax = list.length; i < imax; ++i) {
						axis.add(list[i]);
					}
				}
			}
		}

		// Selection
		const selection = series.selection;
		if (selection) {
			selection.bind(series);
		}
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		this._isViewDirty = true;
		this._isBoundsInContainerDirty = true;
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
	}

	protected getOverflowMask(): DBaseOverflowMask {
		if (this._overflowMask == null) {
			this._overflowMask = new DBaseOverflowMask(this);
			this.reflowable.add(this._overflowMask);
			this.toDirty();
		}
		return this._overflowMask;
	}

	get chart(): CHART {
		return this._chart;
	}

	get coordinate(): DChartCoordinateContainer<CHART> {
		return this._coordinate;
	}

	get series(): DChartSeriesContainer<CHART> {
		return this._series;
	}

	get container(): DChartPlotAreaContainer {
		return this._container;
	}

	get axis(): DChartAxisContainer<CHART> {
		return this._axis;
	}

	get view(): DView {
		return this._view;
	}

	protected onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean {
		const vresult = this._view.onWheel(e, deltas, global);
		const sresult = super.onWheel(e, deltas, global);
		return vresult || sresult;
	}

	protected onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		const vresult = this._view.onDblClick(e, interactionManager);
		const sresult = super.onDblClick(e, interactionManager);
		return vresult || sresult;
	}

	protected onDown(e: interaction.InteractionEvent): void {
		this._view.onDown(e);
		super.onDown(e);
	}

	render(renderer: Renderer): void {
		if (this._isViewDirty) {
			this._isViewDirty = false;
			this._coordinate.fit();
			this._axis.onRender();
			this._series.onRender();
		}
		super.render(renderer);
	}

	destroy(): void {
		this._container.destroy();
		this._series.destroy();
		this._axis.destroy();
	}

	protected getType(): string {
		return "DChartPlotArea";
	}

	getBoundsInContainer(): Rectangle {
		const result = this._boundsInContainer;
		if (this._isBoundsInContainerDirty) {
			this._isBoundsInContainerDirty = false;

			const container = this.container;
			container.updateTransform();
			const transform = container.transform.localTransform;

			const work = this._workPoint;

			work.set(0, 0);
			transform.applyInverse(work, work);
			result.x = work.x;
			result.y = work.y;

			work.set(this.width, this.height);
			transform.applyInverse(work, work);
			result.width = work.x - result.x;
			result.height = work.y - result.y;
		}
		return result;
	}

	fit(
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

	protected onBlend(): void {
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
}
