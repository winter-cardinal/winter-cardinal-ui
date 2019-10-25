/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";

export interface DButtonOptions<
	VALUE = unknown,
	THEME extends DThemeButton = DThemeButton
> extends DButtonBaseOptions<VALUE, THEME> {

}

export interface DThemeButton extends DThemeButtonBase {

}

export class DButton<
	VALUE = unknown,
	THEME extends DThemeButton = DThemeButton,
	OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButton";
	}
}
