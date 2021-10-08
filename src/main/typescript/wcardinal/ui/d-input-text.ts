/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputInput, DInputInputOptions, DThemeInputInput } from "./d-input-input";
import { UtilInputText, UtilInputTextOptions, UtilThemeInputText } from "./util/util-input-text";

export interface DInputTextOptions<THEME extends DThemeInputText = DThemeInputText>
	extends DInputInputOptions<string, THEME>,
		UtilInputTextOptions {}

export interface DThemeInputText extends DThemeInputInput<string>, UtilThemeInputText {}

export class DInputText<
	THEME extends DThemeInputText = DThemeInputText,
	OPTIONS extends DInputTextOptions<THEME> = DInputTextOptions<THEME>
> extends DInputInput<string, THEME, OPTIONS, UtilInputText> {
	protected newUtil(): UtilInputText {
		return new UtilInputText(this, this.newOperation(), this.theme, this._options);
	}

	protected getType(): string {
		return "DInputText";
	}
}
