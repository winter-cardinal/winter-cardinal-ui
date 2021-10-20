/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DButtonPrimaryOptions<
	VALUE = unknown,
	THEME extends DThemeButtonPrimary<VALUE> = DThemeButtonPrimary<VALUE>
> extends DButtonOptions<VALUE, THEME> {}

export interface DThemeButtonPrimary<VALUE = unknown> extends DThemeButton<VALUE> {}

export class DButtonPrimary<
	VALUE = unknown,
	THEME extends DThemeButtonPrimary<VALUE> = DThemeButtonPrimary<VALUE>,
	OPTIONS extends DButtonPrimaryOptions<VALUE, THEME> = DButtonPrimaryOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonPrimary";
	}
}
