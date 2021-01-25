/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point, Rectangle, Renderer } from "pixi.js";
import { DAnimationTimings } from "./d-animation-timings";
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
	protected _overflowMask?: DBaseOverflowMask | null;
	protected _workPoint!: Point;
	protected _blendStartTime: number;
	protected _blendDuration: number;
	protected _blendTimeout: number | null;
	protected _onBlendBound: () => void;

	constructor( chart: DChart, options?: OPTIONS ) {
		super( options );
		this._chart = chart;
		this._blendStartTime = 0;
		this._blendDuration = 1000;
		this._blendTimeout = null;
		this._onBlendBound = () => {
			this.onBlend();
		};
	}

	protected init( options?: OPTIONS ): void {
		super.init( options );

		const container = new DChartPlotAreaContainer( (): void => {
			this._isViewDirty = true;
			this._isBoundsInContainerDirty = true;
			DApplications.update( this );
		});
		this._container = container;
		this._coordinate = new DChartCoordinateContainerImpl( this, options?.coordinate );
		const series = new DChartSeriesContainerImpl( this, options?.series );
		this._series = series;
		const axis = new DChartAxisContainerImpl( this, options?.axis );
		this._axis = axis;
		this._isViewDirty = true;
		this._isBoundsInContainerDirty = true;
		this._boundsInContainer = new Rectangle();
		this._workPoint = new Point();

		this.addChild( container );
		this.addChild( axis.container );

		this._view = new DViewImpl( this, () => container, options?.view );

		const selection = series.selection;
		if( selection ) {
			selection.bind( series );
		}

		// Overflow mask
		const mask = options?.mask ?? this.theme.isOverflowMaskEnabled();
		if( mask ) {
			container.mask = this.getOverflowMask();
		}
	}

	onResize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		this._isViewDirty = true;
		this._isBoundsInContainerDirty = true;
		super.onResize( newWidth, newHeight, oldWidth, oldHeight );
	}

	protected getOverflowMask(): DBaseOverflowMask {
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

			const work = this._workPoint;

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

	fit( duration?: number, domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number ): this {
		const coordinate = this._coordinate;
		const axis = this._axis;
		const series = this._series;
		if( duration != null && duration <= 0 ) {
			coordinate.fit( domainFrom, domainTo, rangeFrom, rangeTo );
			axis.update();
			series.update();
		} else {
			this._blendDuration = duration != null ? duration : 200;
			this._blendStartTime = Date.now();
			coordinate.mark( domainFrom, domainTo, rangeFrom, rangeTo );
			const blendTimeout = this._blendTimeout;
			if( blendTimeout != null ) {
				window.clearTimeout( blendTimeout );
			}
			this._blendTimeout = window.setTimeout( this._onBlendBound, 0 );
		}
		return this;
	}

	protected onBlend(): void {
		const now = Date.now();
		let ratio = (now - this._blendStartTime) / this._blendDuration;
		if( ratio < 1 ) {
			this._blendTimeout = window.setTimeout( this._onBlendBound, 0 );
		} else {
			this._blendTimeout = null;
			ratio = 1;
		}
		this._coordinate.blend( DAnimationTimings.ELASTIC( ratio ) );
		this._axis.update();
		this._series.update();
	}
}
