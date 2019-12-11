/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBaseCoordinateContainer } from "./d-chart-series-base-coordinate-container";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer, DChartSeriesCoordinateOptions } from "./d-chart-series-coordinate";
import { EShape, EShapeLineHitThreshold } from "./shape";

/**
 * {@link DChartSeriesBase} options.
 */
export interface DChartSeriesBaseOptions {
	coordinate?: DChartSeriesCoordinateOptions;
	on?: DBaseOnOptions;
}

/**
 * A series represents a polyline.
 */
export abstract class DChartSeriesBase extends utils.EventEmitter implements DChartSeries {
	protected _coordinate: DChartSeriesBaseCoordinateContainer;

	protected _container?: DChartSeriesContainer;
	protected _index: number;

	protected _domain: DChartRegionImpl;
	protected _range: DChartRegionImpl;
	protected _regionPointId: number;

	protected _state: DBaseState;
	protected _stateLocal: DBaseState;

	abstract readonly shape: EShape | null;

	constructor( options?: DChartSeriesBaseOptions ) {
		super();

		this._coordinate = new DChartSeriesBaseCoordinateContainer( this, options && options.coordinate );
		this._index = 0;
		this._domain = new DChartRegionImpl( NaN, NaN );
		this._range = new DChartRegionImpl( NaN, NaN );
		this._regionPointId = NaN;

		this._state = DBaseState.NONE;
		this._stateLocal = DBaseState.NONE;

		// Events
		if( options ) {
			const on = options.on;
			if( on != null ) {
				for( const name in on ) {
					this.on( name, on[ name ] );
				}
			}
		}
	}

	bind( container: DChartSeriesContainer, index: number ): void {
		this._container = container;
		this._coordinate.reset();
		this._index = index;
	}

	unbind(): void {
		this._container = undefined;
	}

	abstract toDirty(): void;
	abstract update(): void;

	get domain(): DChartRegionImmutable {
		this.updateRegion();
		return this._domain;
	}

	get range(): DChartRegionImmutable {
		this.updateRegion();
		return this._range;
	}

	get container(): DChartSeriesContainer | null {
		return this._container || null;
	}

	get index(): number {
		return this._index;
	}

	get coordinate(): DChartSeriesCoordinateContainer {
		return this._coordinate;
	}

	protected abstract updateRegion(): void;

	destroy(): void {
		this._container = undefined;
		this._coordinate.destroy();
	}

	hitTest( global: IPoint ): boolean {
		return false;
	}

	calcHitPoint( global: IPoint, threshold: EShapeLineHitThreshold, result: DChartSeriesHitResult ): boolean {
		return false;
	}

	setState( state: DBaseState, isOn: boolean ): void {
		const oldStateLocal = this._stateLocal;
		const newStateLocal = ( isOn ? (oldStateLocal | state) : (oldStateLocal & ~state) );
		if( oldStateLocal !== newStateLocal ) {
			this._stateLocal = newStateLocal;
			this.updateState();
		}
	}

	protected updateState(): void {
		const container = this._container;
		const chart = container && container.plotArea.chart;
		const stateLocal = this._stateLocal;
		const newState = ( chart ?
			this.mergeState( stateLocal, chart.state ) :
			stateLocal
		);
		const oldState = this._state;
		if( oldState !== newState ) {
			this._state = newState;
			this.onStateChange( newState, oldState );
		}
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return stateLocal | ( stateParent & DBaseState.DISABLED ) |
			( stateParent & (DBaseState.FOCUSED | DBaseState.FOCUSED_IN) ? DBaseState.FOCUSED_IN : DBaseState.NONE ) |
			( stateParent & (DBaseState.ACTIVE | DBaseState.ACTIVE_IN) ? DBaseState.ACTIVE_IN : DBaseState.NONE );
	}

	protected onStateChange( newState: number, oldState: number ) {
		this.toDirty();
		const container = this._container;
		const chart = container && container.plotArea.chart;
		DApplications.update( chart );
		this.emit( "statechange", newState, oldState, this );
	}
}
