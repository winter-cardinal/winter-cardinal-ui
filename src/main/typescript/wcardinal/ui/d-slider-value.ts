/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DSliderValueOptions<
	VALUE = unknown,
	THEME extends DThemeSliderValue = DThemeSliderValue
> extends DTextBaseOptions<VALUE, THEME> {
	value?: number;
	precision?: number;
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
	VALUE = unknown,
	THEME extends DThemeSliderValue = DThemeSliderValue,
	OPTIONS extends DSliderValueOptions<VALUE, THEME> = DSliderValueOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _value!: number;

	protected init( options?: OPTIONS ) {

		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );

		this._value = options && options.value || 0;
	}

	set value(value: number) {
		this._value = value;
	}

	get value(): number {
		return this._value;
	}

	get precision(): number {
		return toPrecision(this.theme, this._options);
	}

	protected getType(): string {
		return "DSliderValue";
	}
}
