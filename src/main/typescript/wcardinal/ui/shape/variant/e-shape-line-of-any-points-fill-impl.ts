/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";
import { isStatic } from "./is-static";
import { toComputed } from "./to-computed";

export interface EShapeLineOfAnyPointsFillImplParent {
	updateUploaded(): void;
}

export class EShapeLineOfAnyPointsFillImpl implements EShapeLineOfAnyPointsFill {
	protected _parent: EShapeLineOfAnyPointsFillImplParent;
	protected _id: number;
	protected _color: EShapeLineOfAnyValue;
	protected _alpha: EShapeLineOfAnyValue;

	constructor( parent: EShapeLineOfAnyPointsFillImplParent ) {
		this._parent = parent;
		this._id = 0;
		this._color = null;
		this._alpha = null;
	}

	get id(): number {
		return this._id;
	}

	get color(): EShapeLineOfAnyValue {
		return this._color;
	}

	set color( color: EShapeLineOfAnyValue ) {
		this.set( color, undefined );
	}

	get alpha(): EShapeLineOfAnyValue {
		return this._alpha;
	}

	set alpha( alpha: EShapeLineOfAnyValue ) {
		this.set( undefined, alpha );
	}

	set( color?: EShapeLineOfAnyValue, alpha?: EShapeLineOfAnyValue ): void {
		let isChanged = false;

		if( color !== undefined && this._color !== color ) {
			isChanged = true;
			this._color = color;
		}

		if( alpha !== undefined && this._alpha !== alpha ) {
			isChanged = true;
			this._alpha = alpha;
		}

		if( isChanged ) {
			this._id += 1;
			this._parent.updateUploaded();
		}
	}

	getColor( index: number, def: number ): number {
		return toComputed( index, this._color, def );
	}

	getAlpha( index: number, def: number ): number {
		return toComputed( index, this._alpha, def );
	}

	isStaticColor(): boolean {
		return isStatic( this._color );
	}

	isStaticAlpha(): boolean {
		return isStatic( this._alpha );
	}

	toDirty(): void {
		this._id += 1;
	}
}
