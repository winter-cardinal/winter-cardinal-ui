/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartSelection, DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionSub, DChartSelectionSubOptions } from "./d-chart-selection-sub";
import { DChartSelectionSubImpl } from "./d-chart-selection-sub-impl";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { isString } from "./util/is-string";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DChartSelectionSimpleOptions {
	selected?: DChartSelectionSubOptions;
	hovered?: DChartSelectionSubOptions;
	point?: DChartSelectionPoint | (keyof typeof DChartSelectionPoint);
	on?: DBaseOnOptions;
}

export class DChartSelectionSimple extends utils.EventEmitter implements DChartSelection {
	protected static WORK_SELECT: DChartSeriesHitResult = new DChartSeriesHitResult();

	protected _container: DChartSeriesContainer | null;
	protected _selected: DChartSelectionSub;
	protected _hovered: DChartSelectionSub;

	protected _onClickBound!: ( e: interaction.InteractionEvent ) => void;
	protected _onMoveBound!: ( e: interaction.InteractionEvent ) => void;

	constructor( options?: DChartSelectionSimpleOptions ) {
		super();

		this._container = null;
		const point = ( options && options.point != null ?
			( isString( options.point ) ? DChartSelectionPoint[ options.point ] : options.point ) :
			DChartSelectionPoint.CLOSER
		);

		this._selected = this.newSelected( point, options && options.selected );
		this._hovered = this.newHovered( point, options && options.hovered );

		// Events
		if( options ) {
			const on = options.on;
			if( on != null ) {
				for( const name in on ) {
					this.on( name, on[ name ] );
				}
			}
		}

		//
		this._onMoveBound = ( e: interaction.InteractionEvent ): void => {
			this.onMove( e );
		};

		this._onClickBound = ( e: interaction.InteractionEvent ): void => {
			this.onClick( e );
		};
	}

	protected newSelected(
		point: DChartSelectionPoint,
		options?: DChartSelectionSubOptions
	): DChartSelectionSub {
		return new DChartSelectionSubImpl(
			this.toSubOptions(
				point,
				options,
				DBaseState.ACTIVE
			)
		);
	}

	protected newHovered(
		point: DChartSelectionPoint,
		options?: DChartSelectionSubOptions
	): DChartSelectionSub {
		return new DChartSelectionSubImpl(
			this.toSubOptions(
				point,
				options,
				DBaseState.HOVERED
			)
		);
	}

	protected toSubOptions(
		point: DChartSelectionPoint,
		options: DChartSelectionSubOptions | undefined,
		state: DBaseState
	): DChartSelectionSubOptions {
		options = options || {};

		if( options.point == null ) {
			options.point = point;
		}

		if( options.state == null ) {
			options.state = state;
		}

		const gridline = options.gridline || {};
		const gridlineX = gridline.x || {};
		if( gridlineX.state == null ) {
			gridlineX.state = state;
		}

		const gridlineY = gridline.y || {};
		if( gridlineY.state == null ) {
			gridlineY.state = state;
		}

		const marker = options.marker || {};
		if( marker.state == null ) {
			marker.state = state;
		}

		return options;
	}

	protected onClick( e: interaction.InteractionEvent ): void {
		const container = this._container;
		if( container && e.target === container.plotArea ) {
			const hovered = this._hovered;
			const series = hovered.series;
			const selected = this._selected;
			if( series ) {
				selected.set( series, hovered );
			} else {
				selected.unset();
			}
		}
	}

	protected onMove( e: interaction.InteractionEvent ): void {
		const container = this._container;
		if( container ) {
			const hovered = this._hovered;
			if( e.target === container.plotArea ) {
				const result = DChartSelectionSimple.WORK_SELECT;
				const series = container.calcHitPoint( e.data.global, result );
				if( series ) {
					hovered.set( series, result );
				} else {
					hovered.unset();
				}
			} else {
				hovered.unset();
			}
		}
	}

	bind( container: DChartSeriesContainer ): void {
		this._container = container;
		this._selected.bind( container );
		this._hovered.bind( container );
		const plotArea = container.plotArea;
		plotArea.on( UtilPointerEvent.move, this._onMoveBound );
		UtilPointerEvent.onClick( plotArea, this._onClickBound );
	}

	unbind(): void {
		const container = this._container;
		this._container = null;
		if( container ) {
			const plotArea = container.plotArea;
			plotArea.off( UtilPointerEvent.move, this._onMoveBound );
		}

		this._selected.unbind();
		this._hovered.unbind();
	}

	get selected(): DChartSelectionSub {
		return this._selected;
	}

	get hovered(): DChartSelectionSub {
		return this._hovered;
	}

	update(): void {
		this._selected.update();
		this._hovered.update();
	}
}
