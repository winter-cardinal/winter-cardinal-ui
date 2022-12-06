/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartPlotArea } from "./d-chart-plot-area";
import { EShapeContainer } from "./shape/e-shape-container";

export class DChartAxisContainerImpl<CHART extends DBase = DBase>
	implements DChartAxisContainer<CHART>
{
	protected _plotArea: DChartPlotArea<CHART>;
	protected _container: EShapeContainer;
	protected _list: Map<DChartAxisPosition, DChartAxis<CHART>[]>;

	constructor(plotArea: DChartPlotArea<CHART>, options?: DChartAxisContainerOptions<CHART>) {
		this._plotArea = plotArea;
		this._container = new EShapeContainer();

		this._list = new Map<DChartAxisPosition, DChartAxis<CHART>[]>();
		const list = options && options.list;
		if (list) {
			for (let i = 0, imax = list.length; i < imax; ++i) {
				this.add(list[i]);
			}
		}
	}

	get container(): EShapeContainer {
		return this._container;
	}

	get plotArea(): DChartPlotArea<CHART> {
		return this._plotArea;
	}

	add(axis: DChartAxis<CHART>): void {
		const list = this._list;
		let axes = list.get(axis.position);
		if (axes == null) {
			axes = [];
			list.set(axis.position, axes);
		}
		axes.push(axis);
		axis.bind(this, axes.length - 1);
	}

	get(position: DChartAxisPosition, index: number): DChartAxis<CHART> | null {
		const list = this._list;
		const axes = list.get(position);
		if (axes) {
			if (0 <= index && index < axes.length) {
				return axes[index];
			}
		}
		return null;
	}

	indexOf(axis: DChartAxis<CHART>): number {
		const list = this._list;
		const axes = list.get(axis.position);
		if (axes) {
			return axes.indexOf(axis);
		}
		return -1;
	}

	clear(position: DChartAxisPosition): this {
		const list = this._list;
		const axes = list.get(position);
		if (axes) {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].destroy();
			}
			axes.length = 0;
		}
		return this;
	}

	size(position: DChartAxisPosition): number {
		const list = this._list;
		const axes = list.get(position);
		if (axes) {
			return axes.length;
		}
		return 0;
	}

	update(): void {
		this._list.forEach((axes: DChartAxis<CHART>[]): void => {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].update();
			}
		});
	}

	onRender(): void {
		this._list.forEach((axes: DChartAxis<CHART>[]): void => {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].onRender();
			}
		});
	}

	destroy(): void {
		this._list.forEach((axes: DChartAxis<CHART>[]): void => {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].destroy();
			}
			axes.length = 0;
		});
	}
}
