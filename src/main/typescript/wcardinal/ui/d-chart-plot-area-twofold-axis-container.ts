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
import { toEnum } from "./util/to-enum";

export class DChartPlotAreaTwofoldAxisContainer<CHART extends DBase = DBase>
	implements DChartAxisContainer<CHART>
{
	protected _plotArea: DChartPlotArea<CHART>;
	protected _container: EShapeContainer;
	protected _list: Map<DChartAxisPosition, DChartAxis<CHART>[]>;

	protected _primary: DChartAxisContainer<CHART>;
	protected _secondary: DChartAxisContainer<CHART>;

	constructor(
		plotArea: DChartPlotArea<CHART>,
		container: EShapeContainer,
		primary: DChartAxisContainer<CHART>,
		secondary: DChartAxisContainer<CHART>
	) {
		this._plotArea = plotArea;
		this._container = container;
		this._list = new Map<DChartAxisPosition, DChartAxis<CHART>[]>();
		this._primary = primary;
		this._secondary = secondary;
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
		const list = this._list;
		const axes = list.get(toEnum(position, DChartAxisPosition));
		if (axes) {
			if (
				primarySize + secondarySize <= index &&
				index < primarySize + secondarySize + axes.length
			) {
				return axes[index];
			}
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
		const list = this._list;
		const axes = list.get(axis.position);
		if (axes) {
			return axes.indexOf(axis);
		}
		return -1;
	}

	clear(position: DChartAxisPosition | keyof typeof DChartAxisPosition): this {
		this._primary.clear(position);
		this._secondary.clear(position);
		const list = this._list;
		const axes = list.get(toEnum(position, DChartAxisPosition));
		if (axes) {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].destroy();
			}
			axes.length = 0;
		}
		return this;
	}

	size(position: DChartAxisPosition | keyof typeof DChartAxisPosition): number {
		const list = this._list;
		const axes = list.get(toEnum(position, DChartAxisPosition));
		return (
			this._primary.size(position) +
			this._secondary.size(position) +
			(axes != null ? axes.length : 0)
		);
	}

	update(): void {
		this._primary.update();
		this._secondary.update();
		this._list.forEach((axes: DChartAxis<CHART>[]): void => {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].update();
			}
		});
	}

	onRender(): void {
		this._primary.onRender();
		this._secondary.onRender();
		this._list.forEach((axes: DChartAxis<CHART>[]): void => {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].onRender();
			}
		});
	}

	destroy(): void {
		this._primary.destroy();
		this._secondary.destroy();
		this._list.forEach((axes: DChartAxis<CHART>[]): void => {
			for (let i = 0, imax = axes.length; i < imax; ++i) {
				axes[i].destroy();
			}
			axes.length = 0;
		});
	}
}
