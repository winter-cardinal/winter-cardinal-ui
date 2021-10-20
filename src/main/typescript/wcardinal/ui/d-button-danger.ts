/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DButtonDangerOptions<
	VALUE = unknown,
	THEME extends DThemeButtonDanger<VALUE> = DThemeButtonDanger<VALUE>
> extends DButtonOptions<VALUE, THEME> {}

export interface DThemeButtonDanger<VALUE = unknown> extends DThemeButton<VALUE> {}

export class DButtonDanger<
	VALUE = unknown,
	THEME extends DThemeButtonDanger<VALUE> = DThemeButtonDanger<VALUE>,
	OPTIONS extends DButtonDangerOptions<VALUE, THEME> = DButtonDangerOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonDanger";
	}
}
