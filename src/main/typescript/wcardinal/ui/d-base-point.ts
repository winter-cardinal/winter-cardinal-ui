/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";

export type DBasePointCallback = ( newX: number, newY: number, oldX: number, oldY: number ) => any;

export class DBasePoint {
	protected _point: IPoint;
	protected _onChange: DBasePointCallback;

	constructor( point: IPoint, onChange: DBasePointCallback ) {
		this._point = point;
		this._onChange = onChange;
	}

	get x() {
		return this._point.x;
	}

	set x( x: number ) {
		const point = this._point;
		const oldX = point.x;
		if( oldX !== x ) {
			point.x = x;
			const y = point.y;
			this._onChange( x, y, oldX, y );
		}
	}

	get y() {
		return this._point.y;
	}

	set y( y: number ) {
		const point = this._point;
		const oldY = point.y;
		if( oldY !== y ) {
			point.y = y;
			const x = point.x;
			this._onChange( x, y, x, oldY );
		}
	}

	set( x: number, y: number ): this {
		const point = this._point;
		const oldX = point.x;
		const oldY = point.y;
		if( oldX !== x || oldY !== y ) {
			point.set( x, y );
			this._onChange( x, y, oldX, oldY );
		}
		return this;
	}

	copyFrom( target: IPoint ): this {
		const x = target.x;
		const y = target.y;
		const point = this._point;
		const oldX = point.x;
		const oldY = point.y;
		if( oldX !== x || oldY !== y ) {
			point.copyFrom( target );
			this._onChange( x, y, oldX, oldY );
		}
		return this;
	}

	copyTo( target: IPoint ): IPoint {
		return target.copyFrom( this._point );
	}

	copy(): this {
		return this.copyFrom( arguments[ 0 ] );
	}

	clone( onChange?: DBasePointCallback ): DBasePoint {
		onChange = onChange || this._onChange;
		return new DBasePoint( this._point, onChange );
	}

	equals( p: IPoint ): boolean {
		return this._point.equals( p );
	}
}
