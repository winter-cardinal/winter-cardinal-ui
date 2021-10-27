/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { isNumber } from "./util/is-number";

export class DChartCoordinateContainerSubImpl<CHART extends DBase = DBase>
	implements DChartCoordinateContainerSub<CHART>
{
	protected _list: DChartCoordinate<CHART>[];
	protected _direction: DChartCoordinateDirection;
	protected _container: DChartCoordinateContainer<CHART>;

	constructor(container: DChartCoordinateContainer<CHART>, direction: DChartCoordinateDirection) {
		this._container = container;
		this._direction = direction;
		this._list = [];
	}

	get container(): DChartCoordinateContainer<CHART> {
		return this._container;
	}

	add(coordinate: DChartCoordinate<CHART>, index?: number): this {
		const list = this._list;
		if (index == null) {
			list.push(coordinate);
		} else if (0 <= index && index < list.length) {
			list.splice(index, 0, coordinate);
		} else {
			list.push(coordinate);
		}
		coordinate.bind(this, this._direction);
		return this;
	}

	get(index: number): DChartCoordinate<CHART> | null {
		const list = this._list;
		if (0 <= index && index < list.length) {
			return list[index];
		}
		return null;
	}

	indexOf(coordinate: DChartCoordinate<CHART>): number {
		return this._list.indexOf(coordinate);
	}

	remove(coordinate: DChartCoordinate<CHART>): DChartCoordinate<CHART> | null;
	remove(index: number): DChartCoordinate<CHART> | null;
	remove(coordinateOrIndex: DChartCoordinate<CHART> | number): DChartCoordinate<CHART> | null {
		const list = this._list;
		if (isNumber(coordinateOrIndex)) {
			const index = coordinateOrIndex;
			if (0 <= index && index < list.length) {
				const removed = list.splice(index, 1)[0];
				removed.unbind();
				return removed;
			}
		} else {
			const coordinate = coordinateOrIndex;
			const index = list.indexOf(coordinate);
			if (0 <= index) {
				list.splice(index, 1);
				coordinate.unbind();
				return coordinate;
			}
		}
		return null;
	}

	clear(): this {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].unbind();
		}
		list.length = 0;
		return this;
	}

	destroy(): this {
		return this.clear();
	}

	size(): number {
		return this._list.length;
	}

	fit(from?: number, to?: number): this {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].fit(from, to);
		}
		return this;
	}

	mark(from?: number, to?: number): this {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].mark(from, to);
		}
		return this;
	}

	blend(ratio: number): this {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].blend(ratio);
		}
		return this;
	}
}
