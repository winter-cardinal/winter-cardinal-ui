/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DInput, DInputOptions, DThemeInput } from "./d-input";
import { DStateAware } from "./d-state-aware";

export interface DInputTextOptions<
	THEME extends DThemeInputText = DThemeInputText
> extends DInputOptions<string, THEME> {

}

export interface DThemeInputText extends DThemeInput {
	getEditingFormatter(): ( value: string, caller: DInputText ) => string;
	getEditingUnformatter(): ( text: string, caller: DInputText ) => string;
	getEditingValidator(): ( value: string, caller: DInputText ) => unknown;
	getTextFormatter(): ( value: string, caller: DInputText ) => string;
	getTextValue( state: DBaseState ): string;
	newTextValue(): DStateAware<string | undefined> | string | undefined;
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
