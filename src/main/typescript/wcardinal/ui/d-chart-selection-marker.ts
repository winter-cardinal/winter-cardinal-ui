/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";

export class DChartSelectionMarker<
	CHART extends DBase = DBase
> extends DChartSelectionShapeBase<CHART> {
	update(container: DChartSeriesContainer<CHART>, mappedPosition: IPoint): void {
		const shape = this._shape;
		if (shape) {
			shape.transform.position.copyFrom(mappedPosition);
			shape.visible = this.isVisible(container, mappedPosition);
		}
	}

	protected isVisible(container: DChartSeriesContainer<CHART>, mappedPosition: IPoint): boolean {
		const x = mappedPosition.x;
		const y = mappedPosition.y;
		const plotArea = container.plotArea;
		return 0 <= x && x <= plotArea.width && 0 <= y && y <= plotArea.height;
	}

	protected getType(): string {
		return "DChartSelectionMarker";
	}
}
