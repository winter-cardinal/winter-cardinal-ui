/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { isNumber } from "./util/is-number";

export class DChartPlotAreaTwofoldCoorinateContainerSub<CHART extends DBase = DBase>
	implements DChartCoordinateContainerSub<CHART>
{
	protected _container: DChartCoordinateContainer<CHART>;
	protected _primary: DChartCoordinateContainerSub<CHART>;
	protected _secondary: DChartCoordinateContainerSub<CHART>;

	constructor(
		container: DChartCoordinateContainer<CHART>,
		primary: DChartCoordinateContainerSub<CHART>,
		secondary: DChartCoordinateContainerSub<CHART>
	) {
		this._container = container;
		this._primary = primary;
		this._secondary = secondary;
	}

	get container(): DChartCoordinateContainer<CHART> {
		return this._container;
	}

	add(coordinate: DChartCoordinate<CHART>, index?: number): this {
		if (index != null) {
			const primary = this._primary;
			const primarySize = primary.size();
			if (index < primarySize) {
				if (0 <= index) {
					primary.add(coordinate, index);
				}
			} else {
				this._secondary.add(coordinate, index - primarySize);
			}
			return this;
		} else {
			this._secondary.add(coordinate);
		}
		return this;
	}

	get(index: number): DChartCoordinate<CHART> | null {
		const primary = this._primary;
		const primarySize = primary.size();
		if (0 <= index && index < primarySize) {
			return primary.get(index);
		}
		const secondary = this._secondary;
		const secondarySize = secondary.size();
		if (primarySize <= index && index < primarySize + secondarySize) {
			secondary.get(index - primarySize);
		}
		return null;
	}

	indexOf(coordinate: DChartCoordinate<CHART>): number {
		let result = this._primary.indexOf(coordinate);
		if (0 <= result) {
			return result;
		}
		result = this._secondary.indexOf(coordinate);
		if (0 <= result) {
			return this._primary.size() + result;
		}
		return -1;
	}

	remove(coordinate: DChartCoordinate<CHART>): DChartCoordinate<CHART> | null;
	remove(index: number): DChartCoordinate<CHART> | null;
	remove(coordinateOrIndex: DChartCoordinate<CHART> | number): DChartCoordinate<CHART> | null {
		if (isNumber(coordinateOrIndex)) {
			const index = coordinateOrIndex;
			const primary = this._primary;
			const primarySize = primary.size();
			if (0 <= index && index < primarySize) {
				return primary.remove(index);
			}
			const secondary = this._secondary;
			const secondarySize = secondary.size();
			if (primarySize <= index && index < primarySize + secondarySize) {
				secondary.remove(index - primarySize);
			}
		} else {
			const coordinate = coordinateOrIndex;
			let result = this._primary.remove(coordinate);
			if (result != null) {
				return result;
			}
			result = this._secondary.remove(coordinate);
			if (result != null) {
				return result;
			}
		}
		return null;
	}

	clear(): this {
		this._primary.clear();
		this._secondary.clear();
		return this;
	}

	destroy(): this {
		return this.clear();
	}

	size(): number {
		return this._primary.size() + this._secondary.size();
	}

	fit(from?: number, to?: number): this {
		this._primary.fit(from, to);
		this._secondary.fit(from, to);
		return this;
	}

	mark(from?: number, to?: number): this {
		this._primary.mark(from, to);
		this._secondary.mark(from, to);
		return this;
	}

	blend(ratio: number): this {
		this._primary.blend(ratio);
		this._secondary.blend(ratio);
		return this;
	}
}
