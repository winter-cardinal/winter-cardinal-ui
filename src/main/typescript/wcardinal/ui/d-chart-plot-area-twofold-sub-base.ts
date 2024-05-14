/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DBaseOverflowMaskSimple } from "./d-base-overflow-mask-simple";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DChartCoordinateContainerImpl } from "./d-chart-coordinate-container-impl";
import {
	DChartPlotAreaTwofoldSub,
	DChartPlotAreaTwofoldSubOptions
} from "./d-chart-plot-area-twofold-sub";
import { Point, Rectangle } from "pixi.js";
import { DChartRegion } from "./d-chart-region";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { EShapeContainer } from "./shape/e-shape-container";
import { DView } from "./d-view";
import { DBaseStateSet } from "./d-base-state-set";

export interface DChartPlotAreaTwofoldSubParent<CHART extends DBase = DBase>
	extends DChartPlotArea<CHART> {}

export abstract class DChartPlotAreaTwofoldSubBase<CHART extends DBase = DBase>
	implements DChartPlotAreaTwofoldSub<CHART>
{
	protected _isContainerBoundsDirty: boolean;
	protected _containerBounds: Rectangle;
	protected _workPoint: Point;

	protected _plotArea: DChartPlotAreaTwofoldSubParent<CHART>;
	protected _container: DChartPlotAreaContainer;
	protected _series: DChartSeriesContainerImpl<CHART>;
	protected _coordinate: DChartCoordinateContainer<CHART>;
	protected _axis: DChartAxisContainerImpl<CHART>;
	protected _overflowMask?: DBaseOverflowMaskSimple;
	protected _margin: number;

	constructor(
		plotArea: DChartPlotAreaTwofoldSubParent<CHART>,
		onContainerChange: () => void,
		mask: boolean,
		margin: number,
		axisShapeContainer: EShapeContainer,
		options?: DChartPlotAreaTwofoldSubOptions<CHART>
	) {
		this._isContainerBoundsDirty = true;
		this._containerBounds = new Rectangle();
		this._workPoint = new Point();

		this._margin = margin;

		this._plotArea = plotArea;

		// Container
		const container = new DChartPlotAreaContainer(onContainerChange);
		this._container = container;

		// Coordinate
		this._coordinate = new DChartCoordinateContainerImpl(this, options?.coordinate);

		// Overflow mask
		if (mask) {
			container.mask = this.getOverflowMask();
		}

		// Series
		this._series = new DChartSeriesContainerImpl(this, options?.series);

		// Axis
		this._axis = new DChartAxisContainerImpl(this, axisShapeContainer, options?.axis);
	}

	protected abstract getOverflowMask(): DBaseOverflowMaskSimple;

	get plotArea(): DChartPlotArea<CHART> {
		return this._plotArea;
	}

	get chart(): CHART {
		return this._plotArea.chart;
	}

	get container(): DChartPlotAreaContainer {
		return this._container;
	}

	get series(): DChartSeriesContainerImpl<CHART> {
		return this._series;
	}

	get coordinate(): DChartCoordinateContainer<CHART> {
		return this._coordinate;
	}

	get axis(): DChartAxisContainer<CHART> {
		return this._axis;
	}

	get state(): DBaseStateSet {
		return this._plotArea.state;
	}

	get view(): DView {
		return this._plotArea.view;
	}

	// eslint-disable-next-line @typescript-eslint/ban-types
	on(name: string, callback: Function, context?: any): this {
		this._plotArea.on(name, callback, context);
		return this;
	}

	// eslint-disable-next-line @typescript-eslint/ban-types
	off(name: string, callback?: Function, context?: any): this {
		this._plotArea.off(name, callback, context);
		return this;
	}

	getPixelDomain(result: DChartRegion): DChartRegion {
		const plotArea = this._plotArea;
		const padding = plotArea.padding;
		const width = plotArea.width;
		return result.set(padding.getLeft(), width - padding.getRight());
	}

	abstract getPixelRange(result: DChartRegion): DChartRegion;

	abstract getPixelBounds(): Rectangle;

	getAxisBounds(position: DChartAxisPosition): Rectangle {
		return this.getPixelBounds();
	}

	getSelectionBoundsX(): Rectangle {
		return this.getPixelBounds();
	}

	getSelectionBoundsY(): Rectangle {
		return this.getPixelBounds();
	}

	toBoundsDirty(): void {
		this._isContainerBoundsDirty = true;
	}

	abstract getContainerBounds(): PIXI.Rectangle;

	destroy(): void {
		this._container.destroy();
		this._series.destroy();
		this._axis.destroy();
	}
}
