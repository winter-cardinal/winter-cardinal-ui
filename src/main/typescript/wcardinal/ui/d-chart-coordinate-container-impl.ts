/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinateDirection } from "./d-chart-coordinate";
import {
	DChartCoordinateContainer,
	DChartCoordinateContainerOptions
} from "./d-chart-coordinate-container";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateContainerSubImpl } from "./d-chart-coordinate-container-sub-impl";
import { DChartPlotArea } from "./d-chart-plot-area";
import { isArray } from "./util/is-array";

export class DChartCoordinateContainerImpl implements DChartCoordinateContainer {
	protected _x: DChartCoordinateContainerSub;
	protected _y: DChartCoordinateContainerSub;
	protected _plotArea: DChartPlotArea;

	constructor(plotArea: DChartPlotArea, options?: DChartCoordinateContainerOptions) {
		this._plotArea = plotArea;
		const x = new DChartCoordinateContainerSubImpl(this, DChartCoordinateDirection.X);
		this._x = x;
		const y = new DChartCoordinateContainerSubImpl(this, DChartCoordinateDirection.Y);
		this._y = y;
		if (options) {
			const cxs = options.x;
			if (cxs) {
				if (isArray(cxs)) {
					for (let i = 0, imax = cxs.length; i < imax; ++i) {
						x.add(cxs[i]);
					}
				} else {
					x.add(cxs);
				}
			}
			const cys = options.y;
			if (cys) {
				if (isArray(cys)) {
					for (let i = 0, imax = cys.length; i < imax; ++i) {
						y.add(cys[i]);
					}
				} else {
					y.add(cys);
				}
			}
		}
	}

	get x(): DChartCoordinateContainerSub {
		return this._x;
	}

	get y(): DChartCoordinateContainerSub {
		return this._y;
	}

	get plotArea(): DChartPlotArea {
		return this._plotArea;
	}

	fit(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this {
		this._x.fit(domainFrom, domainTo);
		this._y.fit(rangeFrom, rangeTo);
		return this;
	}

	mark(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this {
		this._x.mark(domainFrom, domainTo);
		this._y.mark(rangeFrom, rangeTo);
		return this;
	}

	blend(ratio: number): this {
		this._x.blend(ratio);
		this._y.blend(ratio);
		return this;
	}
}
