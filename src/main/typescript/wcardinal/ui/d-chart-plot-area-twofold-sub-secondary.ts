/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rectangle } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseOverflowMaskSimple } from "./d-base-overflow-mask-simple";
import { DChartPlotAreaTwofoldOverflowMaskSecondary } from "./d-chart-plot-area-twofold-overflow-mask-secondary";
import { DChartPlotAreaTwofoldSubBase } from "./d-chart-plot-area-twofold-sub-base";
import { DChartRegion } from "./d-chart-region";

export class DChartPlotAreaTwofoldSubSecondary<
	CHART extends DBase = DBase
> extends DChartPlotAreaTwofoldSubBase<CHART> {
	protected getOverflowMask(): DBaseOverflowMaskSimple {
		if (this._overflowMask == null) {
			const plotArea = this._plotArea;
			this._overflowMask = new DChartPlotAreaTwofoldOverflowMaskSecondary(plotArea);
			plotArea.reflowable.add(this._overflowMask);
			plotArea.toDirty();
		}
		return this._overflowMask;
	}

	override getPixelRange(result: DChartRegion): DChartRegion {
		const plotArea = this._plotArea;
		const padding = plotArea.padding;
		const paddingBottom = padding.getBottom();
		const height = plotArea.height;
		return result.set(height - paddingBottom, (height + this._margin) * 0.5);
	}

	override getPixelBounds(): Rectangle {
		const result = this._plotArea.getPixelBounds();
		result.height *= 0.5;
		result.y = result.height;
		return result;
	}

	override getContainerBounds(): PIXI.Rectangle {
		const result = this._containerBounds;
		if (this._isContainerBoundsDirty) {
			this._isContainerBoundsDirty = false;
			const bounds = this._plotArea.getContainerBounds();
			result.width = bounds.width;
			result.height = bounds.height * 0.5;
			result.x = bounds.x;
			result.y = bounds.y + result.height;
		}
		return result;
	}
}
