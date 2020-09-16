/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorGradientPoint } from "./d-color-gradient";

type Callback = ( target: DColorGradientPointObservable ) => void;

export class DColorGradientPointObservable implements DColorGradientPoint {
	protected _color: number;
	protected _alpha: number;
	protected _position: number;
	protected _callback: Callback;
	protected _selected: boolean;

	constructor( color: number, alpha: number, position: number, selected: boolean, callback: Callback ) {
		this._color = color;
		this._alpha = alpha;
		this._position = position;
		this._callback = callback;
		this._selected = selected;
	}

	set( color: number, alpha: number, position: number, selected: boolean ) {
		if( this._color !== color || this._alpha !== alpha || this._position !== position || this._selected !== selected ) {
			this._color = color;
			this._alpha = alpha;
			this._position = position;
			this._selected = selected;
			this._callback( this );
		}
	}

	get color() {
		return this._color;
	}

	set color( color: number ) {
		if( this._color !== color ) {
			this._color = color;
			this._callback( this );
		}
	}

	get alpha() {
		return this._alpha;
	}

	set alpha( alpha: number ) {
		if( this._alpha !== alpha ) {
			this._alpha = alpha;
			this._callback( this );
		}
	}

	get position() {
		return this._position;
	}

	set position( position: number ) {
		if( this._position !== position ) {
			this._position = position;
			this._callback( this );
		}
	}

	get selected() {
		return this._selected;
	}

	set selected( selected: boolean ) {
		if( this._selected !== selected ) {
			this._selected = selected;
			this._callback( this );
		}
	}

	toObject(): DColorGradientPoint {
		return {
			color: this._color,
			alpha: this._alpha,
			position: this._position
		};
	}
}
