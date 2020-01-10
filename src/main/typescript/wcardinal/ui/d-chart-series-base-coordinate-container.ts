/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer, DChartSeriesCoordinateOptions } from "./d-chart-series-coordinate";

interface DChartSeriesBaseCoordinateContainerParent {
	container: DChartSeriesContainer | null;
}

export class DChartSeriesBaseCoordinateContainer implements DChartSeriesCoordinateContainer {
	protected _parent: DChartSeriesBaseCoordinateContainerParent;
	protected _coordinateIndexX: number;
	protected _coordinateIndexY: number;
	protected _coordinateIdUpdatedX: number;
	protected _coordinateIdUpdatedY: number;
	protected _coordinateTransformIdUpdatedX: number;
	protected _coordinateTransformIdUpdatedY: number;

	constructor( parent: DChartSeriesBaseCoordinateContainerParent, options?: DChartSeriesCoordinateOptions ) {
		this._parent = parent;
		this._coordinateIndexX = ( options && options.x != null ? options.x : 0 );
		this._coordinateIndexY = ( options && options.y != null ? options.y : 0 );
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
		this._coordinateTransformIdUpdatedX = NaN;
		this._coordinateTransformIdUpdatedY = NaN;
	}

	get x(): DChartCoordinate | null {
		const container = this._parent.container;
		if( container ) {
			return container.plotArea.coordinate.x.get(
				this._coordinateIndexX
			);
		}
		return null;
	}

	get y(): DChartCoordinate | null {
		const container = this._parent.container;
		if( container ) {
			return container.plotArea.coordinate.y.get(
				this._coordinateIndexY
			);
		}
		return null;
	}

	isDirty( coordinateX: DChartCoordinate, coordinateY: DChartCoordinate ): boolean {
		const coordinateIdX = coordinateX.id;
		const coordinateIdY = coordinateY.id;
		const isCoordinateXChanged = ( coordinateIdX !== this._coordinateIdUpdatedX );
		const isCoordinateYChanged = ( coordinateIdY !== this._coordinateIdUpdatedY );
		this._coordinateIdUpdatedX = coordinateIdX;
		this._coordinateIdUpdatedY = coordinateIdY;

		const coordinateTransformIdX = coordinateX.transform.id;
		const coordinateTransformIdY = coordinateY.transform.id;
		const isCoordinateTransformXChanged = ( coordinateTransformIdX !== this._coordinateTransformIdUpdatedX );
		const isCoordinateTransformYChanged = ( coordinateTransformIdY !== this._coordinateTransformIdUpdatedY );
		this._coordinateTransformIdUpdatedX = coordinateTransformIdX;
		this._coordinateTransformIdUpdatedY = coordinateTransformIdY;

		return ( isCoordinateXChanged || isCoordinateYChanged ||
			isCoordinateTransformXChanged || isCoordinateTransformYChanged );
	}

	reset(): void {
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
	}

	destroy(): void {
		this.reset();
	}
}
