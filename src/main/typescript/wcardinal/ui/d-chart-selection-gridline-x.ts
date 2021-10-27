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
	update(container: DChartSeriesContainer<CHART>, mappedPosition: IPoint): void {
		const shape = this._shape;
		if (shape) {
			const mappedX = mappedPosition.x;
			const height = container.plotArea.height;
			shape.transform.position.set(mappedX, height * 0.5);
			shape.size.set(0, height);
			shape.visible = this.isVisible(container, mappedX);
		}
	}

	protected isVisible(container: DChartSeriesContainer<CHART>, mappedX: number): boolean {
		return 0 <= mappedX && mappedX <= container.plotArea.width;
	}

	protected getType(): string {
		return "DChartSelectionGridlineX";
	}
}
