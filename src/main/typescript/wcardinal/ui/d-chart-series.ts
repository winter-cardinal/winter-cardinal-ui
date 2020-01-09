/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer } from "./d-chart-series-coordinate";
import { EShape } from "./shape/e-shape";
import { EShapePointsHitThreshold } from "./shape/e-shape-points";

export class DChartSeriesHitResult {
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

	copyFrom( other: DChartSeriesHitResult ): this {
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

export interface DChartSeries {
	readonly domain: DChartRegionImmutable;
	readonly range: DChartRegionImmutable;
	readonly shape: EShape | null;
	readonly container: DChartSeriesContainer | null;
	readonly coordinate: DChartSeriesCoordinateContainer;
	readonly index: number;

	bind( container: DChartSeriesContainer, index: number ): void;
	unbind(): void;

	toDirty(): void;

	update(): void;
	destroy(): void;

	hitTest( global: IPoint ): boolean;
	calcHitPoint( global: IPoint, threshold: EShapePointsHitThreshold, result: DChartSeriesHitResult ): boolean;

	setState( state: DBaseState, isOn: boolean ): void;
}
