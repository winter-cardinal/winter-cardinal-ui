/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point, Rectangle, Renderer } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChart } from "./d-chart";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DChartCoordinateContainer, DChartCoordinateContainerOptions } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerImpl } from "./d-chart-coordinate-container-impl";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import { DView, DViewOptions } from "./d-view";
import { DViewImpl } from "./d-view-impl";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

export enum DChartPlotAreaFitTarget {
	NONE	= 0,
	DOMAIN	= 1,
	RANGE	= 2,
	BOTH	= DOMAIN | RANGE
}

export interface DChartPlotAreaOptions<
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea
> extends DBaseOptions<THEME> {
	mask?: boolean;
	coordinate?: DChartCoordinateContainerOptions;
	series?: DChartSeriesContainerOptions;
	axis?: DChartAxisContainerOptions;
	view?: DViewOptions;
}

export interface DThemeChartPlotArea extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
}

const isOverflowMaskEnabled = <
	THEME extends DThemeChartPlotArea
>( theme: THEME, options?: DChartPlotAreaOptions<THEME> ): boolean => {
	if( options && options.mask != null ) {
		return options.mask;
	}
	return theme.isOverflowMaskEnabled();
};

export class DChartPlotArea<
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea,
	OPTIONS extends DChartPlotAreaOptions<THEME> = DChartPlotAreaOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _chart: DChart;
	protected _container!: DChartPlotAreaContainer;
	protected _series!: DChartSeriesContainerImpl;
	protected _coordinate!: DChartCoordinateContainer;
	protected _axis!: DChartAxisContainerImpl;
	protected _view!: DViewImpl;
	protected _isViewDirty!: boolean;
	protected _isBoundsInContainerDirty!: boolean;
	protected _boundsInContainer!: Rectangle;
	protected _overflowMask!: DBaseOverflowMask | null;

	constructor( chart: DChart, options?: OPTIONS ) {
		super( options );
		this._chart = chart;
	}

	protected init( options?: OPTIONS ): void {
		super.init( options );

		this._container = new DChartPlotAreaContainer( (): void => {
			this._isViewDirty = true;
			this._isBoundsInContainerDirty = true;
			DApplications.update( this );
		});
		this._coordinate = new DChartCoordinateContainerImpl( this, options && options.coordinate );
		const series = new DChartSeriesContainerImpl( this, options && options.series );
		this._series = series;
		this._axis = new DChartAxisContainerImpl( this, options && options.axis );
		this._isViewDirty = true;
		this._isBoundsInContainerDirty = true;
		this._boundsInContainer = new Rectangle();

		this.addChild( this._container );
		this.addChild( this._axis.container );

		this._view = new DViewImpl( this, () => this._container, options && options.view );

		const selection = series.selection;
		if( selection ) {
			selection.bind( series );
		}

		// Overflow mask
		this._overflowMask = null;
		if( isOverflowMaskEnabled( this.theme, options ) ) {
			this._container.mask = this.getOrCreateOverflowMask();
		}
	}

	protected getOrCreateOverflowMask(): DBaseOverflowMask {
		if( this._overflowMask == null ) {
			this._overflowMask = new DBaseOverflowMask( this );
			this.addReflowable( this._overflowMask );
			this.toDirty();
		}
		return this._overflowMask;
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

	get container(): DChartPlotAreaContainer {
		return this._container;
	}

	get axis(): DChartAxisContainer {
		return this._axis;
	}

	get view(): DView {
		return this._view;
	}

	onWheel( e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point ): boolean {
		const vresult = this._view.onWheel( e, deltas, global );
		const sresult = super.onWheel( e, deltas, global );
		return vresult || sresult;
	}

	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean {
		const vresult = this._view.onDblClick( e, interactionManager );
		const sresult = super.onDblClick( e, interactionManager );
		return vresult || sresult;
	}

	protected onDown( e: interaction.InteractionEvent ): void {
		this._view.onDown( e );
		super.onDown( e );
	}

	render( renderer: Renderer ): void {
		if( this._isViewDirty ) {
			this._isViewDirty = false;

			this._axis.update();

			const selection = this._series.selection;
			if( selection ) {
				selection.update();
			}
		}
		super.render( renderer );
	}

	destroy(): void {
		this._container.destroy();
		this._series.destroy();
		this._axis.destroy();
	}

	protected getType(): string {
		return "DChartPlotArea";
	}

	getBoundsInContainer(): Rectangle {
		const result = this._boundsInContainer;
		if( this._isBoundsInContainerDirty ) {
			this._isBoundsInContainerDirty = false;

			const container = this.container;
			container.updateTransform();
			const transform = container.transform.localTransform;

			const work = new Point();
			work.set( 0, 0 );
			transform.applyInverse( work, work );
			result.x = work.x;
			result.y = work.y;
			work.set( this.width, this.height );
			transform.applyInverse( work, work );
			result.width = work.x - result.x;
			result.height = work.y - result.y;
		}
		return result;
	}
}
