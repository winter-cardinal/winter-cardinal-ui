/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DChartPlotArea, DChartPlotAreaOptions} from "./d-chart-plot-area";
import { DChartPlotAreaImpl } from "./d-chart-plot-area-impl";

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

	protected init( options?: OPTIONS ): void {
		super.init( options );

		const plotArea = new DChartPlotAreaImpl( options && options.plotArea );
		this._plotArea = plotArea;
		this.addChild( plotArea.container );
		this.addChild( plotArea.axis.container );
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
