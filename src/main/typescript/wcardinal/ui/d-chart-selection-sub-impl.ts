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

export class DChartSelectionSubImpl<CHART extends DBase = DBase>
	extends utils.EventEmitter
	implements DChartSelectionSub<CHART>
{
	protected _container: DChartSeriesContainer<CHART> | null;
	protected _isEnabled: boolean;
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
		this._gridline = new DChartSelectionContainerImpl(
			new DChartSelectionGridlineX(options.gridline?.x),
			new DChartSelectionGridlineY(options.gridline?.y)
		);
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

	set(
		series: DChartSeries<CHART>,
		result: DChartSeriesHitResult | DChartSelectionSub<CHART>
	): void {
		const container = this._container;
		const coordinateX = (this._coordinateX = series.coordinate.x);
		const coordinateY = (this._coordinateY = series.coordinate.y);
		if (container && coordinateX && coordinateY) {
			const transform = container.plotArea.container.localTransform;
			const position = this._position;
			const work = this._work;
			if (result instanceof DChartSeriesHitResult) {
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
				transform.apply(work, work);
				position.set(
					coordinateX.unmap(coordinateX.transform.unmap(x)),
					coordinateY.unmap(coordinateY.transform.unmap(y))
				);
			} else {
				position.copyFrom(result.position);
				work.set(
					coordinateX.transform.map(coordinateX.map(position.x)),
					coordinateY.transform.map(coordinateY.map(position.y))
				);
				transform.apply(work, work);
			}

			this._gridline.set(container, position, work, series);
			this._marker.set(container, position, work, series);

			DApplications.update(container.plotArea);
		}

		const oldSeries = this._series;
		if (oldSeries !== series) {
			const state = this._state;
			if (oldSeries) {
				oldSeries.state.remove(state);
			}

			this._series = series;
			series.state.add(state);
		}

		this.emit("change", this);
	}

	unset(): void {
		const series = this._series;
		if (series) {
			this._series = null;
			this._coordinateX = null;
			this._coordinateY = null;

			series.state.remove(this._state);

			this._gridline.unset();
			this._marker.unset();

			this.emit("change", this);
		}
	}

	update(): boolean {
		const container = this._container;
		const coordinateX = this._coordinateX;
		const coordinateY = this._coordinateY;
		if (container && coordinateX && coordinateY) {
			const position = this._position;
			const work = this._work;
			work.set(
				coordinateX.transform.map(coordinateX.map(position.x)),
				coordinateY.transform.map(coordinateY.map(position.y))
			);
			container.plotArea.container.localTransform.apply(work, work);

			const series = this._series;
			const isGridlineUpdated = this._gridline.update(container, position, work, series);
			const isMarkerUpdated = this._marker.update(container, position, work, series);
			return isGridlineUpdated || isMarkerUpdated;
		}
		return false;
	}
}
