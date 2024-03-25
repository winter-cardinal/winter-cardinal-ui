/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartPlotAreaOnefold, DChartPlotAreaSingleOptions } from "./d-chart-plot-area-onefold";
import {
	DChartPlotAreaTwofold,
	DChartPlotAreaTwofoldOptions
} from "./d-chart-plot-area-twofold";

export interface DChartOptions<THEME extends DThemeChart> extends DBaseOptions<THEME> {
	plotArea: DChartPlotAreaSingleOptions<DChart> | DChartPlotAreaTwofoldOptions<DChart>;
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

		// Overflow mask
		const plotArea = this.plotArea;
		const mask = options?.mask ?? this.theme.isOverflowMaskEnabled();
		if (mask) {
			plotArea.axis.container.mask = this.getOverflowMask();
		}
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
		return (this._plotArea ??= this.newPlotArea());
	}

	protected newPlotArea(): DChartPlotArea<DChart> {
		const plotArea = this._options?.plotArea;
		if (plotArea != null && ("primary" in plotArea || "secondary" in plotArea)) {
			const result = new DChartPlotAreaTwofold<DChart>(this, plotArea);
			this.addChild(result);
			return result;
		} else {
			const result = new DChartPlotAreaOnefold<DChart>(this, plotArea);
			this.addChild(result);
			return result;
		}
	}

	destroy(): void {
		if (!this._destroyed) {
			this._plotArea?.destroy();
			super.destroy();
		}
	}

	protected getType(): string {
		return "DChart";
	}
}
