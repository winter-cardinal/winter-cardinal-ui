/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DSliderValueOptions<
	VALUE = number,
	THEME extends DThemeSliderValue = DThemeSliderValue
> extends DTextBaseOptions<VALUE, THEME> {
	value?: number;
	precision?: number;
	round?( value: number ): number;
}

export interface DThemeSliderValue extends DThemeTextBase {
	getPrecision(): number;
}

const toPrecision = <VALUE, THEME extends DThemeSliderValue>(
	theme: DThemeSliderValue,
	options: DSliderValueOptions<VALUE, THEME> | undefined
): number => {
	if( options && options.precision ) {
		return options.precision;
	}
	return theme.getPrecision();
};

export class DSliderValue<
	VALUE = number,
	THEME extends DThemeSliderValue = DThemeSliderValue,
	OPTIONS extends DSliderValueOptions<VALUE, THEME> = DSliderValueOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _value!: number;
	protected _precision!: number;
	protected _round!: ( value: number ) => number;

	protected init( options?: OPTIONS ) {

		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );

		this._value = options && options.value || 0;
		this._precision = toPrecision( this.theme, options );
		this._round = this.toRound( options );
	}

	rounding( value: number ): number {
		if ( this._precision > 0 ) {
			return Math.round( ( value ) * Math.pow( 10, this._precision ) ) / Math.pow( 10, this._precision );
		}
		return Math.round( value );
	}

	toRound( options?: OPTIONS ) {
		if( options && options.round ) {
			return options.round;
		}
		return this.rounding;
	}

	set value( value: number ) {
		this._value = value;
	}

	get value(): number {
		return this._value;
	}

	get round(): ( value: number ) => number {
		return this._round;
	}

	get precision(): number {
		return this._precision;
	}

	protected getType(): string {
		return "DSliderValue";
	}
}
