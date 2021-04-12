/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";

export class DChartSelectionMarker extends DChartSelectionShapeBase {
	update(container: DChartSeriesContainer, mappedPosition: IPoint): void {
		const shape = this._shape;
		if (shape) {
			shape.transform.position.copyFrom(mappedPosition);
			shape.visible = this.isVisible(container, mappedPosition);
		}
	}

	protected isVisible(container: DChartSeriesContainer, mappedPosition: IPoint): boolean {
		const x = mappedPosition.x;
		const y = mappedPosition.y;
		const plotArea = container.plotArea;
		return 0 <= x && x <= plotArea.width && 0 <= y && y <= plotArea.height;
	}

	protected getType(): string {
		return "DChartSelectionMarker";
	}
}
