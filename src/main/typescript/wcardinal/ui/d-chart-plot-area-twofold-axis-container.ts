/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartPlotArea } from "./d-chart-plot-area";
import { EShapeContainer } from "./shape/e-shape-container";

export class DChartPlotAreaTwofoldAxisContainer<CHART extends DBase = DBase>
	implements DChartAxisContainer<CHART>
{
	protected _plotArea: DChartPlotArea<CHART>;
	protected _primary: DChartAxisContainer<CHART>;
	protected _secondary: DChartAxisContainer<CHART>;

	constructor(
		plotArea: DChartPlotArea<CHART>,
		primary: DChartAxisContainer<CHART>,
		secondary: DChartAxisContainer<CHART>
	) {
		this._plotArea = plotArea;
		this._primary = primary;
		this._secondary = secondary;
	}

	get container(): EShapeContainer {
		return this._secondary.container;
	}

	get plotArea(): DChartPlotArea<CHART> {
		return this._plotArea;
	}

	add(axis: DChartAxis<CHART>): void {
		this._secondary.add(axis);
	}

	get(
		position: DChartAxisPosition | keyof typeof DChartAxisPosition,
		index: number
	): DChartAxis<CHART> | null {
		const primary = this._primary;
		const primarySize = primary.size(position);
		if (0 <= index && index < primarySize) {
			return primary.get(position, index);
		}
		const secondary = this._secondary;
		const secondarySize = secondary.size(position);
		if (primarySize <= index && index < primarySize + secondarySize) {
			return secondary.get(position, index);
		}
		return null;
	}

	indexOf(axis: DChartAxis<CHART>): number {
		const primary = this._primary;
		let result = primary.indexOf(axis);
		if (0 <= result) {
			return result;
		}
		result = this._secondary.indexOf(axis);
		if (0 <= result) {
			return primary.size(axis.position) + result;
		}
		return -1;
	}

	clear(position: DChartAxisPosition | keyof typeof DChartAxisPosition): this {
		this._primary.clear(position);
		this._secondary.clear(position);
		return this;
	}

	size(position: DChartAxisPosition | keyof typeof DChartAxisPosition): number {
		return this._primary.size(position) + this._secondary.size(position);
	}

	update(): void {
		this._primary.update();
		this._secondary.update();
	}

	onRender(): void {
		this._primary.onRender();
		this._secondary.onRender();
	}

	destroy(): void {
		this._primary.destroy();
		this._secondary.destroy();
	}
}
