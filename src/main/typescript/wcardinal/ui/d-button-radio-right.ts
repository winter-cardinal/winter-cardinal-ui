/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonRadio, DButtonRadioOptions, DThemeButtonRadio } from "./d-button-radio";

export interface DButtonRadioRightOptions<
	VALUE = unknown,
	THEME extends DThemeButtonRadioRight = DThemeButtonRadioRight
> extends DButtonRadioOptions<VALUE, THEME> {

}

export interface DThemeButtonRadioRight extends DThemeButtonRadio {

}

export class DButtonRadioRight<
	VALUE = unknown,
	THEME extends DThemeButtonRadioRight = DThemeButtonRadioRight,
	OPTIONS extends DButtonRadioRightOptions<VALUE, THEME> = DButtonRadioRightOptions<VALUE, THEME>
> extends DButtonRadio<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonRadioRight";
	}
}
