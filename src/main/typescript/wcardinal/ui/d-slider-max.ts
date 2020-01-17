/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DSliderMaxOptions<
	VALUE = unknown,
	THEME extends DSliderMaxText = DSliderMaxText
> extends DTextBaseOptions<VALUE, THEME> {

}

export interface DSliderMaxText extends DThemeTextBase {

}

export class DSliderMax<
	VALUE = unknown,
	THEME extends DSliderMaxText = DSliderMaxText,
	OPTIONS extends DSliderMaxOptions<VALUE, THEME> = DSliderMaxOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _value?: number

	protected init( options?: OPTIONS ) {
		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );

		this._value = 1;
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
		return "DSliderMax";
	}
}
