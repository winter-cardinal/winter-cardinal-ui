/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesContainer } from "./d-chart-series-container";
import {
	DChartSeriesCoordinateContainer,
	DChartSeriesCoordinateOptions
} from "./d-chart-series-coordinate";

interface DChartSeriesBaseCoordinateContainerParent<CHART extends DBase = DBase> {
	container: DChartSeriesContainer<CHART> | null;
}

export class DChartSeriesBaseCoordinateContainer<CHART extends DBase = DBase>
	implements DChartSeriesCoordinateContainer<CHART>
{
	protected _parent: DChartSeriesBaseCoordinateContainerParent<CHART>;
	protected _coordinateIndexX: number;
	protected _coordinateIndexY: number;
	protected _coordinateIdUpdatedX: number;
	protected _coordinateIdUpdatedY: number;
	protected _coordinateTransformIdUpdatedX: number;
	protected _coordinateTransformIdUpdatedY: number;

	constructor(
		parent: DChartSeriesBaseCoordinateContainerParent<CHART>,
		options?: DChartSeriesCoordinateOptions
	) {
		this._parent = parent;
		this._coordinateIndexX = options?.x ?? 0;
		this._coordinateIndexY = options?.y ?? 0;
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
		this._coordinateTransformIdUpdatedX = NaN;
		this._coordinateTransformIdUpdatedY = NaN;
	}

	get x(): DChartCoordinate<CHART> | null {
		const container = this._parent.container;
		if (container) {
			return container.plotArea.coordinate.x.get(this._coordinateIndexX);
		}
		return null;
	}

	get y(): DChartCoordinate<CHART> | null {
		const container = this._parent.container;
		if (container) {
			return container.plotArea.coordinate.y.get(this._coordinateIndexY);
		}
		return null;
	}

	isDirty(coordinateX: DChartCoordinate<CHART>, coordinateY: DChartCoordinate<CHART>): boolean {
		const coordinateIdX = coordinateX.id;
		const coordinateIdY = coordinateY.id;
		const isCoordinateXChanged = coordinateIdX !== this._coordinateIdUpdatedX;
		const isCoordinateYChanged = coordinateIdY !== this._coordinateIdUpdatedY;
		this._coordinateIdUpdatedX = coordinateIdX;
		this._coordinateIdUpdatedY = coordinateIdY;
		return isCoordinateXChanged || isCoordinateYChanged;
	}

	isTransformDirty(
		coordinateX: DChartCoordinate<CHART>,
		coordinateY: DChartCoordinate<CHART>
	): boolean {
		const coordinateTransformIdX = coordinateX.transform.id;
		const coordinateTransformIdY = coordinateY.transform.id;
		const isCoordinateTransformXChanged =
			coordinateTransformIdX !== this._coordinateTransformIdUpdatedX;
		const isCoordinateTransformYChanged =
			coordinateTransformIdY !== this._coordinateTransformIdUpdatedY;
		this._coordinateTransformIdUpdatedX = coordinateTransformIdX;
		this._coordinateTransformIdUpdatedY = coordinateTransformIdY;
		return isCoordinateTransformXChanged || isCoordinateTransformYChanged;
	}

	reset(): void {
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
	}

	destroy(): void {
		this.reset();
	}
}
