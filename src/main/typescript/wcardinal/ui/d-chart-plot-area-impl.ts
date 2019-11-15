/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point } from "pixi.js";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerImpl } from "./d-chart-coordinate-container-impl";
import { DChartPlotArea, DChartPlotAreaOptions } from "./d-chart-plot-area";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import { EShapeContainer } from "./shape/e-shape-container";

export class DChartPlotAreaImpl implements DChartPlotArea {
	protected _container: EShapeContainer;
	protected _series: DChartSeriesContainerImpl;
	protected _coordinate: DChartCoordinateContainer;
	protected _size: Point;
	protected _axis: DChartAxisContainerImpl;

	constructor( options?: DChartPlotAreaOptions ) {
		this._size = new Point(
			options && options.width != null ? options.width : 100,
			options && options.height != null ? options.height : 100
		);
		this._container = new EShapeContainer();
		this._coordinate = new DChartCoordinateContainerImpl( this, options && options.coordinate );
		this._series = new DChartSeriesContainerImpl( this, options && options.series );
		this._axis = new DChartAxisContainerImpl( this, options && options.axis );
	}

	get coordinate(): DChartCoordinateContainer {
		return this._coordinate;
	}

	get series(): DChartSeriesContainer {
		return this._series;
	}

	get container(): EShapeContainer {
		return this._container;
	}

	get size(): IPoint {
		return this._size;
	}

	get axis(): DChartAxisContainer {
		return this._axis;
	}

	destroy(): void {
		this._container.destroy();
		this._series.destroy();
	}
}
