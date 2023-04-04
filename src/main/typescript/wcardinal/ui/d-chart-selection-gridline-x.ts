/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";

export class DChartSelectionGridlineX<
	CHART extends DBase = DBase
> extends DChartSelectionShapeBase<CHART> {
	override update(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint
	): boolean {
		const shape = this._shape;
		if (shape) {
			const mappedX = mappedPosition.x;
			const height = container.plotArea.height;
			shape.transform.position.set(mappedX, height * 0.5);
			shape.size.set(0, height);
			shape.visible = this.isVisible(container, position, mappedPosition);
			return true;
		}
		return false;
	}

	protected isVisible(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint
	): boolean {
		const x = mappedPosition.x;
		return 0 <= x && x <= container.plotArea.width;
	}

	protected getType(): string {
		return "DChartSelectionGridlineX";
	}
}
