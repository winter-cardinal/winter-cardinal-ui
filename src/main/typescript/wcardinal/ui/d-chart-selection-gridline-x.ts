/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeries } from "./d-chart-series";

export class DChartSelectionGridlineX<
	CHART extends DBase = DBase
> extends DChartSelectionShapeBase<CHART> {
	override update(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART> | null
	): boolean {
		const shape = this._shape;
		if (shape) {
			const mappedX = mappedPosition.x;
			const bounds = container.plotArea.getSelectionBoundsX();
			shape.transform.position.set(mappedX, bounds.y + bounds.height * 0.5);
			shape.size.set(0, bounds.height);
			shape.visible = bounds.x <= mappedX && mappedX <= bounds.x + bounds.width;
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DChartSelectionGridlineX";
	}
}
