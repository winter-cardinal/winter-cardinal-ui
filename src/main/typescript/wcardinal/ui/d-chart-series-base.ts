/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOnOptions } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetImplObservable } from "./d-base-state-set-impl-observable";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBaseCoordinateContainer } from "./d-chart-series-base-coordinate-container";
import { DChartSeriesContainer } from "./d-chart-series-container";
import {
	DChartSeriesCoordinateContainer,
	DChartSeriesCoordinateContainerOptions
} from "./d-chart-series-coordinate-container";
import { EShape } from "./shape/e-shape";

/**
 * {@link DChartSeriesBase} options.
 */
export interface DChartSeriesBaseOptions<EMITTER = any> {
	coordinate?: DChartSeriesCoordinateContainerOptions;
	on?: DBaseOnOptions<EMITTER>;
}

/**
 * A series represents a polyline.
 */
export abstract class DChartSeriesBase<CHART extends DBase = DBase>
	extends utils.EventEmitter
	implements DChartSeries<CHART>
{
	protected _coordinate: DChartSeriesBaseCoordinateContainer<CHART>;

	protected _container?: DChartSeriesContainer<CHART>;
	protected _index: number;

	protected _domain: DChartRegionImpl;
	protected _range: DChartRegionImpl;
	protected _regionPointId: number;

	protected _state: DBaseStateSet;
	protected _isShown: boolean;

	abstract readonly shape: EShape | null;

	constructor(options?: DChartSeriesBaseOptions) {
		super();

		this._coordinate = new DChartSeriesBaseCoordinateContainer(this, options?.coordinate);
		this._index = 0;
		this._domain = new DChartRegionImpl(NaN, NaN);
		this._range = new DChartRegionImpl(NaN, NaN);
		this._regionPointId = NaN;
		this._isShown = true;

		this._state = new DBaseStateSetImplObservable((newState, oldState): void => {
			this.onStateChange(newState, oldState);
		});

		// Events
		const on = options?.on;
		if (on != null) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}
	}

	bind(container: DChartSeriesContainer<CHART>, index: number): this {
		this._container = container;
		this._coordinate.reset();
		this._index = index;

		const chart = container.plotArea.chart;
		if (chart) {
			this._state.parent = chart.state;
		}
		return this;
	}

	unbind(): this {
		this._container = undefined;
		return this;
	}

	abstract toDirty(): this;
	abstract update(): this;

	get domain(): DChartRegionImmutable {
		this.updateRegion();
		return this._domain;
	}

	get range(): DChartRegionImmutable {
		this.updateRegion();
		return this._range;
	}

	get container(): DChartSeriesContainer<CHART> | null {
		return this._container || null;
	}

	get index(): number {
		return this._index;
	}

	get coordinate(): DChartSeriesCoordinateContainer<CHART> {
		return this._coordinate;
	}

	get state(): DBaseStateSet {
		return this._state;
	}

	show(): this {
		if (this._isShown !== true) {
			this._isShown = true;
			this.onShow();
		}
		return this;
	}

	protected onShow(): void {
		const shape = this.shape;
		if (shape != null) {
			shape.visible = false;
		}
	}

	isShown(): boolean {
		return this._isShown;
	}

	hide(): this {
		if (this._isShown !== false) {
			this._isShown = false;
			this.onHide();
		}
		return this;
	}

	protected onHide(): void {
		const shape = this.shape;
		if (shape != null) {
			shape.visible = false;
		}
	}

	isHidden(): boolean {
		return !this._isShown;
	}

	protected abstract updateRegion(): void;

	destroy(): this {
		this._container = undefined;
		this._coordinate.destroy();
		return this;
	}

	hitTest(x: number, y: number): boolean {
		return false;
	}

	calcHitPoint(x: number, y: number, result: DChartSeriesHitResult): boolean {
		return false;
	}

	protected onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this.toDirty();
		const chart = this._container?.plotArea.chart;
		DApplications.update(chart);
		this.emit("statechange", newState, oldState, this);
	}
}
