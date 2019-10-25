/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point } from "pixi.js";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeParent } from "./e-shape-group-size-parent";

export class EShapeGroupSizeShadowed implements EShapeGroupSize {
	protected _parent: EShapeGroupSizeParent;
	protected _size: Point;

	constructor( parent: EShapeGroupSizeParent, x: number, y: number ) {
		this._parent = parent;
		this._size = new Point( x, y );
	}

	init(): void {
		// DO NOTHING
	}

	get x(): number {
		return this._size.x;
	}

	set x( x: number ) {
		const size = this._size;
		if( size.x !== x ) {
			const ox = size.x;
			size.x = x;
			this.onChange( ox, size.y );
		}
	}

	get y(): number {
		return this._size.y;
	}

	set y( y: number ) {
		const size = this._size;
		if( size.y !== y ) {
			const oy = size.y;
			size.y = y;
			this.onChange( size.x, oy );
		}
	}

	set( x?: number | undefined, y?: number | undefined ): void {
		let isChanged = false;
		const size = this._size;
		const ox = size.x;
		const oy = size.y;
		if( x != null && ox !== x ) {
			isChanged = true;
			size.x = x;
		}
		if( y != null && oy !== y ) {
			isChanged = true;
			size.y = y;
		}
		if( isChanged ) {
			this.onChange( ox, oy );
		}
	}

	clone(): EShapeGroupSizeShadowed {
		const size = this._size;
		return new EShapeGroupSizeShadowed( this._parent, size.x, size.y );
	}

	copy(): void {
		// DO NOTHING
	}

	copyFrom( point: IPoint ): this {
		const x = point.x;
		const y = point.y;
		const size = this._size;
		const ox = size.x;
		const oy = size.y;
		if( ox !== x || oy !== y ) {
			size.x = x;
			size.y = y;
			this.onChange( ox, oy );
		}
		return this;
	}

	copyTo( point: IPoint ): IPoint {
		return this._size.copyTo( point );
	}

	equals( point: IPoint ): boolean {
		return this._size.equals( point );
	}

	fit(): void {
		// DO NOTHING
	}

	protected onChange( ox: number, oy: number ): void {
		this._parent.onSizeChange();
	}
}
