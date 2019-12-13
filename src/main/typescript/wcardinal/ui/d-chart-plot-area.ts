/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DChart } from "./d-chart";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DChartCoordinateContainer, DChartCoordinateContainerOptions } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerImpl } from "./d-chart-coordinate-container-impl";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import { EShapeContainer } from "./shape/e-shape-container";

export enum DChartPlotAreaFitTarget {
	NONE	= 0,
	DOMAIN	= 1,
	RANGE	= 2,
	BOTH	= DOMAIN | RANGE
}

export interface DChartPlotAreaOptions<
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea
> extends DBaseOptions<THEME> {
	coordinate?: DChartCoordinateContainerOptions;
	series?: DChartSeriesContainerOptions;
	axis?: DChartAxisContainerOptions;
}

export interface DThemeChartPlotArea extends DThemeBase {

}

export class DChartPlotArea<
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea,
	OPTIONS extends DChartPlotAreaOptions<THEME> = DChartPlotAreaOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _chart: DChart;
	protected _container: EShapeContainer;
	protected _series: DChartSeriesContainerImpl;
	protected _coordinate: DChartCoordinateContainer;
	protected _axis: DChartAxisContainerImpl;

	constructor( chart: DChart, options?: OPTIONS ) {
		super( options );

		this._chart = chart;
		this._container = new EShapeContainer();
		this._coordinate = new DChartCoordinateContainerImpl( this, options && options.coordinate );
		this._series = new DChartSeriesContainerImpl( this, options && options.series );
		this._axis = new DChartAxisContainerImpl( this, options && options.axis );

		this.addChild( this._container );
		this.addChild( this._axis.container );
	}

	get coordinate(): DChartCoordinateContainer {
		return this._coordinate;
	}

	get chart(): DChart {
		return this._chart;
	}

	get series(): DChartSeriesContainer {
		return this._series;
	}

	get container(): EShapeContainer {
		return this._container;
	}

	get axis(): DChartAxisContainer {
		return this._axis;
	}

	protected getType(): string {
		return "DChartPlotArea";
	}

	destroy(): void {
		this._container.destroy();
		this._series.destroy();
		this._axis.destroy();
	}
}
