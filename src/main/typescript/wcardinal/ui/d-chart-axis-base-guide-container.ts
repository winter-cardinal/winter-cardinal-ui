import { DBase } from "./d-base";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisGuide } from "./d-chart-axis-guide";
import { DChartAxisGuideContainer } from "./d-chart-axis-guide-container";

export class DChartAxisBaseGuideContainer<CHART extends DBase = DBase>
	implements DChartAxisGuideContainer<CHART>
{
	protected _axis: DChartAxis<CHART>;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;

	protected _list: DChartAxisGuide<CHART>[];

	constructor(axis: DChartAxis<CHART>) {
		this._axis = axis;
		this._index = 0;
		this._list = [];
	}

	add(guide: DChartAxisGuide<CHART>): this {
		this._list.push(guide);
		const container = this._container;
		const index = this._index;
		if (container != null) {
			guide.bind(container, index, this._axis);
		}
		return this;
	}

	get(index: number): DChartAxisGuide<CHART> | null {
		const list = this._list;
		if (0 <= index && index < list.length) {
			return list[index];
		}
		return null;
	}

	indexOf(guide: DChartAxisGuide<CHART>): number {
		return this._list.indexOf(guide);
	}

	clear(): this {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].destroy();
		}
		list.length = 0;
		return this;
	}

	size(): number {
		return this._list.length;
	}

	bind(container: DChartAxisContainer<CHART>, index: number): void {
		this._container = container;
		this._index = index;
		const axis = this._axis;
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].bind(container, index, axis);
		}
	}

	unbind(): void {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].unbind();
		}
		this._index = 0;
		this._container = undefined;
	}

	update(): boolean {
		let isUpdated = false;
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			if (list[i].update()) {
				isUpdated = true;
			}
		}
		return isUpdated;
	}

	destroy(): void {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].destroy();
		}
		list.length = 0;
		this._index = 0;
		this._container = undefined;
	}
}
