/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";

export class DChartSelectionGridlineY extends DChartSelectionShapeBase {
	update(container: DChartSeriesContainer, mappedPosition: IPoint): void {
		const shape = this._shape;
		if (shape) {
			const mappedY = mappedPosition.y;
			const width = container.plotArea.width;
			shape.transform.position.set(width * 0.5, mappedY);
			shape.size.set(width, 0);
			shape.visible = this.isVisible(container, mappedY);
		}
	}

	protected isVisible(container: DChartSeriesContainer, mappedY: number): boolean {
		return 0 <= mappedY && mappedY <= container.plotArea.height;
	}

	protected getType(): string {
		return "DChartSelectionGridlineY";
	}
}
