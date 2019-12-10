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

	constructor( parent: DChartSeriesBaseCoordinateContainerParent, options?: DChartSeriesCoordinateOptions ) {
		this._parent = parent;
		this._coordinateIndexX = ( options && options.x != null ? options.x : 0 );
		this._coordinateIndexY = ( options && options.y != null ? options.y : 0 );
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
	}

	get x(): DChartCoordinate | null {
		const container = this._parent.container;
		if( container ) {
			const plotArea = container.plotArea;
			const coordinate = plotArea.coordinate;
			return coordinate.x.get( this._coordinateIndexX );
		}
		return null;
	}

	get y(): DChartCoordinate | null {
		const container = this._parent.container;
		if( container ) {
			const plotArea = container.plotArea;
			const coordinate = plotArea.coordinate;
			return coordinate.y.get( this._coordinateIndexX );
		}
		return null;
	}

	isDirty( coordinateIdX: number, coordinateIdY: number ): boolean {
		const isCoordinateXChanged = ( coordinateIdX !== this._coordinateIdUpdatedX );
		const isCoordinateYChanged = ( coordinateIdY !== this._coordinateIdUpdatedY );
		return ( isCoordinateXChanged || isCoordinateYChanged );
	}

	toClean( coordinateIdX: number, coordinateIdY: number ): void {
		this._coordinateIdUpdatedX = coordinateIdX;
		this._coordinateIdUpdatedY = coordinateIdY;
	}

	reset(): void {
		this._coordinateIdUpdatedX = NaN;
		this._coordinateIdUpdatedY = NaN;
	}

	destroy(): void {
		this.reset();
	}
}
