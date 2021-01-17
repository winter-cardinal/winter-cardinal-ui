/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonRadio, DButtonRadioOptions, DThemeButtonRadio } from "./d-button-radio";

export interface DButtonRadioRightOptions<
	VALUE = unknown,
	THEME extends DThemeButtonRadioRight<VALUE> = DThemeButtonRadioRight<VALUE>
> extends DButtonRadioOptions<VALUE, THEME> {

}

export interface DThemeButtonRadioRight<VALUE> extends DThemeButtonRadio<VALUE> {

}

export class DButtonRadioRight<
	VALUE = unknown,
	THEME extends DThemeButtonRadioRight<VALUE> = DThemeButtonRadioRight<VALUE>,
	OPTIONS extends DButtonRadioRightOptions<VALUE, THEME> = DButtonRadioRightOptions<VALUE, THEME>
> extends DButtonRadio<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonRadioRight";
	}
}
