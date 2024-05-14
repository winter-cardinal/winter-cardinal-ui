/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeries } from "./d-chart-series";

export class DChartSelectionGridlineY<
	CHART extends DBase = DBase
> extends DChartSelectionShapeBase<CHART> {
	override update(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART>
	): boolean {
		const shape = this._shape;
		if (shape) {
			const mappedY = mappedPosition.y;
			const bounds = container.plotArea.getSelectionBoundsY();
			shape.transform.position.set(bounds.x + bounds.width * 0.5, mappedY);
			shape.size.set(bounds.width, 0);
			shape.visible = bounds.y <= mappedY && mappedY <= bounds.y + bounds.height;
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DChartSelectionGridlineY";
	}
}
