/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";

export interface DTableBodyCellInputTreeInputOptions<
	THEME extends DThemeTableBodyCellInputTreeInput = DThemeTableBodyCellInputTreeInput
> extends DInputTextOptions<THEME> {

}

export interface DThemeTableBodyCellInputTreeInput extends DThemeInputText {

}

export class DTableBodyCellInputTreeInput<
	THEME extends DThemeTableBodyCellInputTreeInput = DThemeTableBodyCellInputTreeInput,
	OPTIONS extends DTableBodyCellInputTreeInputOptions<THEME> = DTableBodyCellInputTreeInputOptions<THEME>
> extends DInputText<THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellInputTreeInput";
	}
}
