/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DButtonAmbientOptions<
	VALUE = unknown,
	THEME extends DThemeButtonAmbient<VALUE> = DThemeButtonAmbient<VALUE>
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeButtonAmbient<VALUE = unknown> extends DThemeButton<VALUE> {

}

export class DButtonAmbient<
	VALUE = unknown,
	THEME extends DThemeButtonAmbient<VALUE> = DThemeButtonAmbient<VALUE>,
	OPTIONS extends DButtonAmbientOptions<VALUE, THEME> = DButtonAmbientOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonAmbient";
	}
}
