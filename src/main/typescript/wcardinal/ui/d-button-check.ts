/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";

export interface DButtonCheckOptions<
	VALUE = unknown,
	THEME extends DThemeButtonCheck<VALUE> = DThemeButtonCheck<VALUE>
> extends DButtonBaseOptions<VALUE, THEME> {

}

export interface DThemeButtonCheck<VALUE> extends DThemeButtonBase<VALUE> {

}

export class DButtonCheck<
	VALUE = unknown,
	THEME extends DThemeButtonCheck<VALUE> = DThemeButtonCheck<VALUE>,
	OPTIONS extends DButtonCheckOptions<VALUE, THEME> = DButtonCheckOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonCheck";
	}
}
