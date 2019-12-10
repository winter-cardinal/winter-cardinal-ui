/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import InteractionEvent = interaction.InteractionEvent;
import { DBaseStates } from "./d-base-states";
import { DChartPlotArea, DChartPlotAreaOptions} from "./d-chart-plot-area";
import { DChartPlotAreaImpl } from "./d-chart-plot-area-impl";
import { UtilPointerEvent } from "./util";

export interface DChartOptions<THEME extends DThemeChart> extends DBaseOptions<THEME> {
	plotArea: DChartPlotAreaOptions;
}

export interface DThemeChart extends DThemeBase {
}

export class DChart<
	THEME extends DThemeChart = DThemeChart,
	OPTIONS extends DChartOptions<THEME> = DChartOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _plotArea!: DChartPlotArea;
	protected _onMoveBound!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ): void {
		super.init( options );

		const plotArea = new DChartPlotAreaImpl( this, options && options.plotArea );
		this._plotArea = plotArea;
		this.addChild( plotArea.container );
		this.addChild( plotArea.axis.container );

		this._onMoveBound = ( e: InteractionEvent ): void => {
			this.onMove( e );
		};
	}

	protected onStateChange( newState: number, oldState: number ) {
		if( DBaseStates.isHovered( newState ) ) {
			if( ! DBaseStates.isHovered( oldState ) ) {
				this.on( UtilPointerEvent.move, this._onMoveBound );
			}
		} else {
			if( DBaseStates.isHovered( oldState ) ) {
				this.off( UtilPointerEvent.move, this._onMoveBound );
			}
		}
	}

	protected onMove( e: InteractionEvent ): void {
		this._plotArea.series.select( e.data.global );
	}

	get plotArea(): DChartPlotArea {
		return this._plotArea;
	}

	protected getType(): string {
		return "DChart";
	}

	destroy(): void {
		if( ! this._destroyed ) {
			this._plotArea.destroy();
			super.destroy();
		}
	}
}
