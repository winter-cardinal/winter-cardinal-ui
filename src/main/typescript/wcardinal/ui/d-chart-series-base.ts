/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseOnOptions } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetImpl } from "./d-base-state-set-impl";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBaseCoordinateContainer } from "./d-chart-series-base-coordinate-container";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer, DChartSeriesCoordinateOptions } from "./d-chart-series-coordinate";
import { EShape } from "./shape/e-shape";

/**
 * {@link DChartSeriesBase} options.
 */
export interface DChartSeriesBaseOptions<EMITTER = any> {
	coordinate?: DChartSeriesCoordinateOptions;
	on?: DBaseOnOptions<EMITTER>;
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

	protected _state: DBaseStateSet;

	abstract readonly shape: EShape | null;

	constructor( options?: DChartSeriesBaseOptions ) {
		super();

		this._coordinate = new DChartSeriesBaseCoordinateContainer( this, options && options.coordinate );
		this._index = 0;
		this._domain = new DChartRegionImpl( NaN, NaN );
		this._range = new DChartRegionImpl( NaN, NaN );
		this._regionPointId = NaN;

		this._state = new DBaseStateSetImpl(( newState, oldState ): void => {
			this.onStateChange( newState, oldState );
		});

		// Events
		if( options ) {
			const on = options.on;
			if( on != null ) {
				for( const name in on ) {
					const handler = on[ name ];
					if( handler ) {
						this.on( name, handler );
					}
				}
			}
		}
	}

	bind( container: DChartSeriesContainer, index: number ): void {
		this._container = container;
		this._coordinate.reset();
		this._index = index;

		const chart = container.plotArea.chart;
		if( chart ) {
			this.state.update( chart.state );
		}
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

	get state(): DBaseStateSet {
		return this._state;
	}

	protected abstract updateRegion(): void;

	destroy(): void {
		this._container = undefined;
		this._coordinate.destroy();
	}

	hitTest( global: IPoint ): boolean {
		return false;
	}

	calcHitPoint( global: IPoint, result: DChartSeriesHitResult ): boolean {
		return false;
	}

	protected onStateChange( newState: DBaseStateSet, oldState: DBaseStateSet ): void {
		this.toDirty();
		const container = this._container;
		const chart = container && container.plotArea.chart;
		DApplications.update( chart );
		this.emit( "statechange", newState, oldState, this );
	}
}
