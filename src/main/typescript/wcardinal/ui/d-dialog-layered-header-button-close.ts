/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DDialogLayeredHeaderButtonCloseOptions<
	THEME extends DThemeDialogLayeredHeaderButtonClose = DThemeDialogLayeredHeaderButtonClose
> extends DButtonAmbientOptions<string, THEME> {}

export interface DThemeDialogLayeredHeaderButtonClose extends DThemeButtonAmbient<string> {}

export class DDialogLayeredHeaderButtonClose<
	THEME extends DThemeDialogLayeredHeaderButtonClose = DThemeDialogLayeredHeaderButtonClose,
	OPTIONS extends
		DDialogLayeredHeaderButtonCloseOptions<THEME> = DDialogLayeredHeaderButtonCloseOptions<THEME>
> extends DButtonAmbient<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogLayeredHeaderButtonClose";
	}
}
