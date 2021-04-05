/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point } from "pixi.js";
import { EShapeGroupSize } from "./e-shape-group-size";

export interface EShapeGroupSizeViewerParentTransform {
	scale: IPoint;
}

export interface EShapeGroupSizeViewerParent {
	readonly transform: EShapeGroupSizeViewerParentTransform;
}

export class EShapeGroupSizeViewer implements EShapeGroupSize {
	protected _x: number;
	protected _y: number;
	protected _parent: EShapeGroupSizeViewerParent;
	protected _base: Point;

	constructor( parent: EShapeGroupSizeViewerParent, x: number, y: number, bx: number, by: number ) {
		this._parent = parent;
		this._x = x;
		this._y = y;
		this._base = new Point( bx, by );
	}

	get x(): number {
		return this._x;
	}

	set x( x: number ) {
		if( this._x !== x ) {
			this._x = x;
			this.onChange();
		}
	}

	get y(): number {
		return this._y;
	}

	set y( y: number ) {
		if (this._y !== y) {
			this._y = y;
			this.onChange();
		}
	}

	get base(): IPoint {
		return this._base;
	}

	init(): void {
		this._base.copyFrom( this );
		this.onChange();
	}

	clone(): EShapeGroupSizeViewer {
		const base = this._base;
		return new EShapeGroupSizeViewer( this._parent, this._x, this._y, base.x, base.y );
	}

	set( x?: number, y?: number ): this {
		let isChanged = false;
		if( x != null && this._x !== x ) {
			this._x = x;
			isChanged = true;
		}
		if( y != null && this._y !== y) {
			this._y = y;
			isChanged = true;
		}
		if( isChanged ) {
			this.onChange();
		}
		return this;
	}

	copyFrom( p: IPoint ): this {
		if( p instanceof EShapeGroupSizeViewer ) {
			this._base.copyFrom( p.base );
		}
		if( this._x !== p.x || this._y !== p.y ) {
			this._x = p.x;
			this._y = p.y;
			this.onChange();
		}
		return this;
	}

	copyTo( p: IPoint ): IPoint {
		if( p instanceof EShapeGroupSizeViewer ) {
			this._base.copyTo( p.base );
		}
		p.set(this._x, this._y);
		return p;
	}

	equals( p: IPoint ): boolean {
		return (p.x === this._x) && (p.y === this._y);
	}

	fit(): void {
		// DO NOTHING
	}

	protected onChange(): void {
		const base = this._base;
		this._parent.transform.scale.set(
			this._x / base.x,
			this._y / base.y
		);
	}
}
