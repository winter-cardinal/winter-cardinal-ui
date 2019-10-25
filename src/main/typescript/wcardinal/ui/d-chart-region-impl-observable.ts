/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartRegion } from "./d-chart-region";

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
			this._from = from;
			isChanged = true;
		}

		if( to != null && this._to !== to ) {
			this._to = to;
			isChanged = true;
		}

		if( isChanged ) {
			this._onChange();
		}
		return this;
	}
}
