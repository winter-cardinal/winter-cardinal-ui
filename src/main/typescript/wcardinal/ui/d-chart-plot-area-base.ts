/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Point, Rectangle, Renderer } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartPlotArea, DThemeChartPlotArea, DChartPlotAreaOptions } from "./d-chart-plot-area";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DView } from "./d-view";
import { DViewImpl } from "./d-view-impl";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
import { DChartRegion } from "./d-chart-region";
import { DChartAxisPosition } from "./d-chart-axis-position";

export abstract class DChartPlotAreaBase<
		CHART extends DBase = DBase,
		THEME extends DThemeChartPlotArea = DThemeChartPlotArea,
		OPTIONS extends DChartPlotAreaOptions<CHART, THEME> = DChartPlotAreaOptions<CHART, THEME>
	>
	extends DBase<THEME, OPTIONS>
	implements DChartPlotArea<CHART>
{
	protected _isContainerBoundsDirty: boolean;
	protected _containerBounds: Rectangle;
	protected _workPoint: Point;

	protected _pixelBounds: Rectangle;

	protected _chart: CHART;

	protected _view: DViewImpl;
	protected _isViewDirty: boolean;
	protected _overflowMask?: DBaseOverflowMask | null;

	protected _blendStartTime: number;
	protected _blendDuration: number;
	protected _blendTimeout: number | null;
	protected _onBlendBound: () => void;

	constructor(chart: CHART, options?: OPTIONS) {
		super(options);

		this._isContainerBoundsDirty = true;
		this._containerBounds = new Rectangle();
		this._workPoint = new Point();

		this._pixelBounds = new Rectangle();

		this._chart = chart;

		this._blendStartTime = 0;
		this._blendDuration = 1000;
		this._blendTimeout = null;
		this._onBlendBound = () => {
			this.onBlend();
		};

		this._isViewDirty = true;
		this._view = this.newView(options);
	}

	override onResize(
		newWidth: number,
		newHeight: number,
		oldWidth: number,
		oldHeight: number
	): void {
		this._isViewDirty = true;
		this._isContainerBoundsDirty = true;
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
	}

	get chart(): CHART {
		return this._chart;
	}

	abstract get coordinate(): DChartCoordinateContainer<CHART>;

	abstract get series(): DChartSeriesContainer<CHART>;

	abstract get container(): DChartPlotAreaContainer;

	abstract get axis(): DChartAxisContainer<CHART>;

	get view(): DView {
		return this._view;
	}

	abstract newView(options?: OPTIONS): DViewImpl;

	protected onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean {
		const vresult = this._view.onWheel(e, deltas, global);
		const sresult = super.onWheel(e, deltas, global);
		return vresult || sresult;
	}

	protected onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): boolean {
		const vresult = this._view.onDblClick(e, interactionManager);
		const sresult = super.onDblClick(e, interactionManager);
		return vresult || sresult;
	}

	protected onDown(e: InteractionEvent): void {
		this._view.onDown(e);
		super.onDown(e);
	}

	render(renderer: Renderer): void {
		if (this._isViewDirty) {
			this._isViewDirty = false;
			this.onViewDirty();
		}
		super.render(renderer);
	}

	protected abstract onViewDirty(): void;

	abstract destroy(): void;

	getPixelDomain(result: DChartRegion): DChartRegion {
		const padding = this.padding;
		return result.set(padding.getLeft(), this.width - padding.getRight());
	}

	getPixelRange(result: DChartRegion): DChartRegion {
		const padding = this.padding;
		return result.set(this.height - padding.getBottom(), padding.getTop());
	}

	getPixelBounds(): Rectangle {
		const result = this._pixelBounds;
		result.x = 0;
		result.y = 0;
		result.width = this.width;
		result.height = this.height;
		return result;
	}

	getAxisBounds(position: DChartAxisPosition): Rectangle {
		return this.getPixelBounds();
	}

	getSelectionBoundsX(): Rectangle {
		return this.getPixelBounds();
	}

	getSelectionBoundsY(): Rectangle {
		return this.getPixelBounds();
	}

	getContainerBounds(): Rectangle {
		const result = this._containerBounds;
		if (this._isContainerBoundsDirty) {
			this._isContainerBoundsDirty = false;

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

	abstract fit(
		duration?: number,
		domainFrom?: number,
		domainTo?: number,
		rangeFrom?: number,
		rangeTo?: number
	): this;

	protected abstract onBlend(): void;

	protected getType(): string {
		return "DChartPlotArea";
	}
}
