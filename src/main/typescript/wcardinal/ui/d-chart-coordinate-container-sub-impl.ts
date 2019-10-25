/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { utilIsNumber } from "./util";

export class DChartCoordinateContainerSubImpl implements DChartCoordinateContainerSub {
	protected _list: DChartCoordinate[];
	protected _direction: DChartCoordinateDirection;
	protected _container: DChartCoordinateContainer;

	constructor( container: DChartCoordinateContainer, direction: DChartCoordinateDirection ) {
		this._container = container;
		this._direction = direction;
		this._list = [];
	}

	get container(): DChartCoordinateContainer {
		return this._container;
	}

	add( coordinate: DChartCoordinate, index?: number ): this {
		const list = this._list;
		if( index == null ) {
			list.push( coordinate );
		} else if( 0 <= index && index < list.length ) {
			list.splice( index, 0, coordinate );
		} else {
			list.push( coordinate );
		}
		coordinate.bind( this, this._direction );
		return this;
	}

	get( index: number ): DChartCoordinate | null {
		const list = this._list;
		if( 0 <= index && index < list.length ) {
			return list[ index ];
		}
		return null;
	}

	indexOf( coordinate: DChartCoordinate ): number {
		return this._list.indexOf( coordinate );
	}

	remove( coordinate: DChartCoordinate ): DChartCoordinate | null;
	remove( index: number ): DChartCoordinate | null;
	remove( coordinateOrIndex: DChartCoordinate | number ): DChartCoordinate | null {
		const list = this._list;
		if( utilIsNumber( coordinateOrIndex ) ) {
			const index = coordinateOrIndex;
			if( 0 <= index && index < list.length ) {
				const removed = list.splice( index, 1 )[ 0 ];
				removed.unbind();
				return removed;
			}
		} else {
			const coordinate = coordinateOrIndex;
			const index = list.indexOf( coordinate );
			if( 0 <= index ) {
				list.splice( index, 1 );
				coordinate.unbind();
				return coordinate;
			}
		}
		return null;
	}

	clear(): this {
		const list = this._list;
		for( let i = 0, imax = list.length; i < imax; ++i ) {
			list[ i ].unbind();
		}
		list.length = 0;
		return this;
	}

	destroy(): this {
		return this.clear();
	}

	size(): number {
		return this._list.length;
	}

	fit(): this {
		const list = this._list;
		for( let i = 0, imax = list.length; i < imax; ++i ) {
			list[ i ].fit();
		}
		return this;
	}
}
