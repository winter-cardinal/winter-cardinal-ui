/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer } from "./d-chart-series-coordinate";
import { EShape } from "./shape/e-shape";

export class DChartSeriesHitResult {
	shape: EShape | null;
	x: number;
	y: number;
	p0x: number;
	p0y: number;
	p1x: number;
	p1y: number;
	index: number;
	t: number;
	distance: number;

	constructor() {
		this.shape = null;
		this.x = 0;
		this.y = 0;
		this.p0x = 0;
		this.p0y = 0;
		this.p1x = 0;
		this.p1y = 0;
		this.index = 0;
		this.t = 0;
		this.distance = 0;
	}

	copyFrom(other: DChartSeriesHitResult): this {
		this.shape = other.shape;
		this.x = other.x;
		this.y = other.y;
		this.p0x = other.p0x;
		this.p0y = other.p0y;
		this.p1x = other.p1x;
		this.p1y = other.p1y;
		this.index = other.index;
		this.t = other.t;
		this.distance = other.distance;
		return this;
	}
}

export interface DChartSeries<CHART extends DBase = DBase> {
	readonly domain: DChartRegionImmutable;
	readonly range: DChartRegionImmutable;
	readonly shape: EShape | null;
	readonly container: DChartSeriesContainer<CHART> | null;
	readonly coordinate: DChartSeriesCoordinateContainer<CHART>;
	readonly index: number;
	readonly state: DBaseStateSet;

	bind(container: DChartSeriesContainer<CHART>, index: number): void;
	unbind(): void;

	toDirty(): void;

	update(): void;
	destroy(): void;

	hitTest(x: number, y: number): boolean;
	calcHitPoint(x: number, y: number, result: DChartSeriesHitResult): boolean;
}
