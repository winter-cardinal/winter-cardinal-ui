/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DSliderMinOptions<
	VALUE = unknown,
	THEME extends DSliderMinText = DSliderMinText
> extends DTextBaseOptions<VALUE, THEME> {

}

export interface DSliderMinText extends DThemeTextBase {

}

export class DSliderMin<
	VALUE = unknown,
	THEME extends DSliderMinText = DSliderMinText,
	OPTIONS extends DSliderMinOptions<VALUE, THEME> = DSliderMinOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _value!: number;

	protected init( options?: OPTIONS ) {
		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );

		this._value = 0;
	}

	set value(value: number) {
		this._value = value;
	}

	get value(): number {
		return this._value;
	}

	protected getType(): string {
		return "DSliderMin";
	}
}
