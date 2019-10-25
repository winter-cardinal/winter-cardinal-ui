/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DButtonAmbientOptions<
	VALUE = unknown,
	THEME extends DThemeButtonAmbient = DThemeButtonAmbient
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeButtonAmbient extends DThemeButton {

}

export class DButtonAmbient<
	VALUE = unknown,
	THEME extends DThemeButtonAmbient = DThemeButtonAmbient,
	OPTIONS extends DButtonAmbientOptions<VALUE, THEME> = DButtonAmbientOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonAmbient";
	}
}
