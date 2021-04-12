/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DInputBooleanButtonOffOptions<
	THEME extends DThemeInputBooleanButtonOff = DThemeInputBooleanButtonOff,
	EMITTER = any
> extends DButtonOptions<string, THEME, EMITTER> {}

export interface DThemeInputBooleanButtonOff extends DThemeButton<string> {}

export class DInputBooleanButtonOff<
	THEME extends DThemeInputBooleanButtonOff = DThemeInputBooleanButtonOff,
	OPTIONS extends DInputBooleanButtonOffOptions<THEME> = DInputBooleanButtonOffOptions<THEME>
> extends DButton<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DInputBooleanButtonOff";
	}
}
