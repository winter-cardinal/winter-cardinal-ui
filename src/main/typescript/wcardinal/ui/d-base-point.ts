/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";

type Callback = () => any;

export class DBasePoint {
	protected _point: IPoint;
	cb: Callback;
	scope: any;

	constructor( point: IPoint, cb: Callback, scope?: any ) {
		this._point = point;
		this.cb = cb;
	}

	get x() {
		return this._point.x;
	}

	set x( x: number ) {
		const point = this._point;
		if( point.x !== x ) {
			point.x = x;
			this.cb.call( this.scope );
		}
	}

	get y() {
		return this._point.y;
	}

	set y( y: number ) {
		const point = this._point;
		if( point.y !== y ) {
			point.y = y;
			this.cb.call( this.scope );
		}
	}

	set( x: number, y: number ): this {
		const point = this._point;
		if( point.x !== x || point.y !== y ) {
			point.set( x, y );
			this.cb.call( this.scope );
		}
		return this;
	}

	copyFrom( target: IPoint ): this {
		const point = this._point;
		if( point.x !== target.x || point.y !== target.y ) {
			point.copyFrom( target );
			this.cb.call( this.scope );
		}
		return this;
	}

	copyTo( target: IPoint ): IPoint {
		return target.copyFrom( this._point );
	}

	copy(): this {
		return this.copyFrom( arguments[ 0 ] );
	}

	clone( cb?: Function, scope?: any ): DBasePoint {
		cb = cb || this.cb;
		scope = scope || this.scope;
		return new DBasePoint( this._point, cb as Callback, scope );
	}

	equals( p: IPoint ): boolean {
		return this._point.equals( p );
	}
}
