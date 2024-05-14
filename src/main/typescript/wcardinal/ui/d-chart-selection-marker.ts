/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeries } from "./d-chart-series";

export class DChartSelectionMarker<
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
			shape.transform.position.copyFrom(mappedPosition);
			shape.visible = this.isVisible(container, position, mappedPosition, series);
			return true;
		}
		return false;
	}

	protected isVisible(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART> | null
	): boolean {
		container = series?.container || container;
		const x = mappedPosition.x;
		const y = mappedPosition.y;
		const bounds = container.plotArea.getPixelBounds();
		return (
			bounds.x <= x &&
			x <= bounds.x + bounds.width &&
			bounds.y <= y &&
			y <= bounds.y + bounds.height
		);
	}

	protected getType(): string {
		return "DChartSelectionMarker";
	}
}
