/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionContainer } from "./d-chart-selection-container";
import { DChartSelectionContainerImpl } from "./d-chart-selection-container-impl";
import { DChartSelectionMarker } from "./d-chart-selection-marker";
import { DChartSelectionSub, DChartSelectionSubOptions } from "./d-chart-selection-sub";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSelectionGridlineX } from "./d-chart-selection-gridline-x";
import { DChartSelectionGridlineY } from "./d-chart-selection-gridline-y";
import { isNumber } from "./util/is-number";

export class DChartSelectionSubImpl<CHART extends DBase = DBase>
	extends utils.EventEmitter
	implements DChartSelectionSub<CHART>
{
	protected _container: DChartSeriesContainer<CHART> | null;
	protected _isEnabled: boolean;
	protected _isVisible: boolean;
	protected _series: DChartSeries<CHART> | null;
	protected _coordinateX: DChartCoordinate<CHART> | null;
	protected _coordinateY: DChartCoordinate<CHART> | null;
	protected _position: Point;
	protected _point: DChartSelectionPoint;
	protected _work: Point;
	protected _gridline: DChartSelectionContainer<CHART>;
	protected _marker: DChartSelectionMarker<CHART>;
	protected _state: string;

	constructor(options: DChartSelectionSubOptions<CHART>) {
		super();

		this._container = null;
		this._series = null;
		this._isEnabled = options.enable ?? true;
		this._isVisible = false;
		const gridline = options.gridline;
		if (gridline != null) {
			this._gridline = new DChartSelectionContainerImpl(
				new DChartSelectionGridlineX(gridline.x),
				new DChartSelectionGridlineY(gridline.y)
			);
		} else {
			this._gridline = new DChartSelectionContainerImpl(
				new DChartSelectionGridlineX(),
				new DChartSelectionGridlineY()
			);
		}
		this._marker = new DChartSelectionMarker(options.marker);
		this._state = options.state ?? DBaseState.HOVERED;
		this._coordinateX = null;
		this._coordinateY = null;
		this._position = new Point();
		this._point = options.point ?? DChartSelectionPoint.CLOSER;
		this._work = new Point();

		// Events
		const on = options.on;
		if (on) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}
	}

	bind(container: DChartSeriesContainer<CHART>): void {
		if (this._isEnabled) {
			this._container = container;
			this._gridline.bind(container);
			this._marker.bind(container);
		}
	}

	unbind(): void {
		this._marker.unbind();
		this._gridline.unbind();
		this._container = null;
		this._coordinateX = null;
		this._coordinateY = null;
	}

	get visible(): boolean {
		return this._isVisible;
	}

	get series(): DChartSeries<CHART> | null {
		return this._series;
	}

	get position(): Point {
		return this._position;
	}

	get gridline(): DChartSelectionContainer<CHART> {
		return this._gridline;
	}

	get marker(): DChartSelectionMarker<CHART> {
		return this._marker;
	}

	set(x: number, y: number): void;
	set(series: DChartSeries<CHART>, result: DChartSeriesHitResult): void;
	set(series: DChartSeries<CHART> | number, result: DChartSeriesHitResult | number): void {
		if (isNumber(series)) {
			this.set1(series, result as number);
		} else {
			this.set2(series, result as DChartSeriesHitResult);
		}
	}

	protected set1(x: number, y: number): void {
		const container = this._container;
		if (container == null) {
			return;
		}

		const work = this._work;
		work.set(x, y);
		const plotArea = container.plotArea;
		plotArea.container.toLocal(work, undefined, work, true);
		const coordinate = plotArea.coordinate;
		let coordinateX = coordinate.x.get(0);
		let coordinateY = coordinate.y.get(0);
		let newPositionX = work.x;
		let newPositionY = work.y;
		if (coordinateX && coordinateY) {
			newPositionX = coordinateX.unmap(coordinateX.transform.unmap(newPositionX));
			newPositionY = coordinateY.unmap(coordinateY.transform.unmap(newPositionY));
		} else {
			coordinateX = null;
			coordinateY = null;
		}

		const oldSeries = this._series;
		const position = this._position;
		if (
			this._isVisible &&
			oldSeries == null &&
			newPositionX === position.x &&
			newPositionY === position.y
		) {
			return;
		}

		this._isVisible = true;
		position.set(newPositionX, newPositionY);
		this._coordinateX = coordinateX;
		this._coordinateY = coordinateY;
		plotArea.container.localTransform.apply(work, work);
		this._gridline.set(container, position, work, null);
		this._marker.set(container, position, work, null);

		if (oldSeries != null) {
			const state = this._state;
			if (oldSeries) {
				oldSeries.state.remove(state);
			}

			this._series = null;
		}

		this.emit("change", this);
		DApplications.update(plotArea);
	}

	protected set2(series: DChartSeries<CHART>, result: DChartSeriesHitResult): void {
		const container = this._container;
		if (container == null) {
			return;
		}

		const work = this._work;
		let x = result.x;
		let y = result.y;
		switch (this._point) {
			case DChartSelectionPoint.PREVIOUS:
				x = result.p0x;
				y = result.p0y;
				break;
			case DChartSelectionPoint.NEXT:
				x = result.p1x;
				y = result.p1y;
				break;
			case DChartSelectionPoint.CLOSER:
				if (Math.abs(result.p0x - result.x) < Math.abs(result.p1x - result.x)) {
					x = result.p0x;
					y = result.p0y;
				} else {
					x = result.p1x;
					y = result.p1y;
				}
		}
		work.set(x, y);
		const plotArea = container.plotArea;
		plotArea.container.localTransform.apply(work, work);
		let coordinateX = series.coordinate.x;
		let coordinateY = series.coordinate.y;
		let newPositionX = x;
		let newPositionY = y;
		if (coordinateX && coordinateY) {
			newPositionX = coordinateX.unmap(coordinateX.transform.unmap(newPositionX));
			newPositionY = coordinateY.unmap(coordinateY.transform.unmap(newPositionY));
		} else {
			coordinateX = null;
			coordinateY = null;
		}
		const oldSeries = this._series;
		const position = this._position;
		if (
			this._isVisible &&
			oldSeries === series &&
			newPositionX === position.x &&
			newPositionY === position.y
		) {
			return;
		}

		this._isVisible = true;
		position.set(newPositionX, newPositionY);
		this._coordinateX = coordinateX;
		this._coordinateY = coordinateY;
		this._gridline.set(container, position, work, series);
		this._marker.set(container, position, work, series);

		if (oldSeries !== series) {
			const state = this._state;
			if (oldSeries) {
				oldSeries.state.remove(state);
			}

			this._series = series;
			series.state.add(state);
		}

		this.emit("change", this);
		DApplications.update(plotArea);
	}

	unset(): void {
		const container = this._container;
		if (container == null) {
			return;
		}

		const oldSeries = this._series;
		if (!this._isVisible && oldSeries == null) {
			return;
		}

		this._isVisible = false;
		this._coordinateX = null;
		this._coordinateY = null;
		this._gridline.unset();
		this._marker.unset();

		if (oldSeries != null) {
			this._series = null;
			oldSeries.state.remove(this._state);
		}

		this.emit("change", this);
		DApplications.update(container.plotArea);
	}

	update(): boolean {
		const container = this._container;
		if (container == null) {
			return false;
		}
		if (!this._isVisible) {
			return false;
		}
		const position = this._position;
		const work = this._work;
		const coordinateX = this._coordinateX;
		const coordinateY = this._coordinateY;
		if (coordinateX && coordinateY) {
			work.set(
				coordinateX.transform.map(coordinateX.map(position.x)),
				coordinateY.transform.map(coordinateY.map(position.y))
			);
		} else {
			work.copyFrom(position);
		}
		container.plotArea.container.localTransform.apply(work, work);

		const series = this._series;
		const isGridlineUpdated = this._gridline.update(container, position, work, series);
		const isMarkerUpdated = this._marker.update(container, position, work, series);
		return isGridlineUpdated || isMarkerUpdated;
	}
}
