/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartRegion } from "./d-chart-region";
import { utilIsNaN } from "./util/util-is-nan";

export class DChartRegionImplObservable implements DChartRegion {
	protected _from: number;
	protected _to: number;
	protected _onChange: () => void;

	constructor( from: number, to: number, onChange: () => void ) {
		this._from = from;
		this._to = to;
		this._onChange = onChange;
	}

	get from(): number {
		return this._from;
	}

	set from( from: number ) {
		this.set( from, undefined );
	}

	get to(): number {
		return this._to;
	}

	set to( to: number ) {
		this.set( undefined, to );
	}

	set( from?: number, to?: number ): this {
		let isChanged = false;

		if( from != null && this._from !== from ) {
			if( ! utilIsNaN( this._from ) || ! utilIsNaN(from) ) {
				this._from = from;
				isChanged = true;
			}
		}

		if( to != null && this._to !== to ) {
			if( ! utilIsNaN( this._to ) || ! utilIsNaN(to) ) {
				this._to = to;
				isChanged = true;
			}
		}

		if( isChanged ) {
			this._onChange();
		}
		return this;
	}

	add( from: number, to: number ): this {
		let newFrom: number | undefined;
		if( ! utilIsNaN( from ) ) {
			newFrom = ( utilIsNaN( this.from ) ?
				from : Math.min( this.from, from )
			);
		}

		let newTo: number | undefined;
		if( ! utilIsNaN( to ) ) {
			newTo = ( utilIsNaN( this.to ) ?
				to : Math.max( this.to, to )
			);
		}

		return this.set( newFrom, newTo );
	}

	clear(): this {
		return this.set( NaN, NaN );
	}
}
