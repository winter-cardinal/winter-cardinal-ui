/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChartPlotArea, DChartPlotAreaOptions } from "./d-chart-plot-area";
import { DChartPlotAreaImpl } from "./d-chart-plot-area-impl";

export interface DChartOptions<THEME extends DThemeChart> extends DBaseOptions<THEME> {
	plotArea: DChartPlotAreaOptions<DChart>;
	mask?: boolean;
}

export interface DThemeChart extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
}

export class DChart<
	THEME extends DThemeChart = DThemeChart,
	OPTIONS extends DChartOptions<THEME> = DChartOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _plotArea?: DChartPlotArea<DChart>;
	protected _overflowMask?: DBaseOverflowMask | null;

	protected init(options?: OPTIONS): void {
		super.init(options);

		// Plot area
		const plotArea = this.plotArea;
		this.addChild(plotArea);

		// Overflow mask
		const mask = options?.mask ?? this.theme.isOverflowMaskEnabled();
		if (mask) {
			plotArea.axis.container.mask = this.getOverflowMask();
		}

		// State
		this.state.isFocusable = false;
	}

	protected getOverflowMask(): DBaseOverflowMask {
		if (this._overflowMask == null) {
			this._overflowMask = new DBaseOverflowMask(this);
			this.reflowable.add(this._overflowMask);
			this.toDirty();
		}
		return this._overflowMask;
	}

	get plotArea(): DChartPlotArea<DChart> {
		let result = this._plotArea;
		if (result == null) {
			result = this.newPlotArea();
			this._plotArea = result;
		}
		return result;
	}

	protected newPlotArea(): DChartPlotArea<DChart> {
		return new DChartPlotAreaImpl<DChart>(this, this._options?.plotArea);
	}

	protected getType(): string {
		return "DChart";
	}

	destroy(): void {
		if (!this._destroyed) {
			this._plotArea?.destroy();
			super.destroy();
		}
	}
}
