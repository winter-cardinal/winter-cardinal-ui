/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInput, DInputOptions, DThemeInput } from "./d-input";

export interface DInputTextOptions<
	THEME extends DThemeInputText = DThemeInputText
> extends DInputOptions<string, THEME> {

}

export interface DThemeInputText extends DThemeInput<string> {

}

export class DInputText<
	THEME extends DThemeInputText = DThemeInputText,
	OPTIONS extends DInputTextOptions<THEME> = DInputTextOptions<THEME>
> extends DInput<string, THEME, OPTIONS> {
	protected toValue( valueAsString: string ): string {
		return this._editingUnformatter( valueAsString, this );
	}

	protected getInputType(): string {
		return "text";
	}

	protected getType(): string {
		return "DInputText";
	}
}
