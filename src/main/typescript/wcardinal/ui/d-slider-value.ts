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

}

export interface DThemeSliderValue extends DThemeTextBase {

}

export class DSliderValue<
	VALUE = unknown,
	THEME extends DThemeSliderValue = DThemeSliderValue,
	OPTIONS extends DSliderValueOptions<VALUE, THEME> = DSliderValueOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _value?: number;
	protected init( options?: OPTIONS ) {

		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );

		this._value = 0;
	}

	set value(value: number) {
		this._value = value;
	}

	get value() : number {
		if (this._value) {
			return this._value;
		}
		return 0;
	}

	protected getType(): string {
		return "DSliderValue";
	}
}
