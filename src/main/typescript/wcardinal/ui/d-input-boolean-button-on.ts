/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DInputBooleanButtonOnOptions<
	THEME extends DThemeInputBooleanButtonOn = DThemeInputBooleanButtonOn,
	EMITTER = any
> extends DButtonOptions<string, THEME, EMITTER> {

}

export interface DThemeInputBooleanButtonOn extends DThemeButton<string> {

}

export class DInputBooleanButtonOn<
	THEME extends DThemeInputBooleanButtonOn = DThemeInputBooleanButtonOn,
	OPTIONS extends DInputBooleanButtonOnOptions<THEME> = DInputBooleanButtonOnOptions<THEME>
> extends DButton<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DInputBooleanButtonOn";
	}
}
