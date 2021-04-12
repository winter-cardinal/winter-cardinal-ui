/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";

export interface DButtonCheckRightOptions<
	VALUE = unknown,
	THEME extends DThemeButtonCheckRight<VALUE> = DThemeButtonCheckRight<VALUE>
> extends DButtonCheckOptions<VALUE, THEME> {}

export interface DThemeButtonCheckRight<VALUE = unknown> extends DThemeButtonCheck<VALUE> {}

export class DButtonCheckRight<
	VALUE = unknown,
	THEME extends DThemeButtonCheck<VALUE> = DThemeButtonCheck<VALUE>,
	OPTIONS extends DButtonCheckOptions<VALUE, THEME> = DButtonCheckOptions<VALUE, THEME>
> extends DButtonCheck<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButtonCheckRight";
	}
}
