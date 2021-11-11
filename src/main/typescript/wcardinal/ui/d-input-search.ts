/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";

export interface DInputSearchOptions<THEME extends DThemeInputSearch = DThemeInputSearch>
	extends DInputTextOptions<THEME> {}

export interface DThemeInputSearch extends DThemeInputText {}

export class DInputSearch<
	THEME extends DThemeInputSearch = DThemeInputSearch,
	OPTIONS extends DInputSearchOptions<THEME> = DInputSearchOptions<THEME>
> extends DInputText<THEME, OPTIONS> {
	protected getType(): string {
		return "DInputSearch";
	}
}
