/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DSliderLabelOptions<
	VALUE = unknown,
	THEME extends DThemeSliderLabel<VALUE> = DThemeSliderLabel<VALUE>
> extends DTextBaseOptions<VALUE, THEME> {
	value?: number;
}

export interface DThemeSliderLabel<VALUE = unknown> extends DThemeTextBase<VALUE> {

}

export class DSliderLabel<
	VALUE = unknown,
	THEME extends DThemeSliderLabel<VALUE> = DThemeSliderLabel<VALUE>,
	OPTIONS extends DSliderLabelOptions<VALUE, THEME> = DSliderLabelOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _value!: number;

	protected init( options?: OPTIONS ) {
		super.init( options );
		this.state.isFocusable = false;

		this._value = options && options.value || 0;
	}

	set value( value: number ) {
		this._value = value;
	}

	get value(): number {
		return this._value;
	}

	protected getType(): string {
		return "DSliderLabel";
	}
}
