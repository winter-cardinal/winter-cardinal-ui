/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseOnOptions, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";

export interface DButtonOnOptions<VALUE, SELF> extends DButtonBaseOnOptions<VALUE, SELF> {

}

export interface DButtonOptions<
	VALUE = unknown,
	THEME extends DThemeButton = DThemeButton,
	SELF = any
> extends DButtonBaseOptions<VALUE, THEME, SELF> {
	on?: DButtonOnOptions<VALUE, SELF>;
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
