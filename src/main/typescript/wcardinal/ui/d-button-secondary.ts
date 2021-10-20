/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DButtonSecondaryOptions<
	VALUE = unknown,
	THEME extends DThemeButtonSecondary<VALUE> = DThemeButtonSecondary<VALUE>
> extends DButtonOptions<VALUE, THEME> {}

export interface DThemeButtonSecondary<VALUE = unknown> extends DThemeButton<VALUE> {}

export class DButtonSecondary<
	VALUE = unknown,
	THEME extends DThemeButtonSecondary<VALUE> = DThemeButtonSecondary<VALUE>,
	OPTIONS extends DButtonSecondaryOptions<VALUE, THEME> = DButtonSecondaryOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonSecondary";
	}
}
