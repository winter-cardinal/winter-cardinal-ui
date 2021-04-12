/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";

export interface DButtonRadioOptions<
	VALUE = unknown,
	THEME extends DThemeButtonRadio<VALUE> = DThemeButtonRadio<VALUE>
> extends DButtonBaseOptions<VALUE, THEME> {}

export interface DThemeButtonRadio<VALUE = unknown> extends DThemeButtonBase<VALUE> {}

export class DButtonRadio<
	VALUE = unknown,
	THEME extends DThemeButtonRadio<VALUE> = DThemeButtonRadio<VALUE>,
	OPTIONS extends DButtonRadioOptions<VALUE, THEME> = DButtonRadioOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonRadio";
	}
}
