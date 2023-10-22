/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DTableBodyCellText,
	DTableBodyCellTextOptions,
	DThemeTableBodyCellText
} from "./d-table-body-cell-text";

export interface DTableBodyCellTextAreaOptions<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellTextArea<VALUE> = DThemeTableBodyCellTextArea<VALUE>
> extends DTableBodyCellTextOptions<ROW, VALUE, THEME> {}

export interface DThemeTableBodyCellTextArea<VALUE = unknown>
	extends DThemeTableBodyCellText<VALUE> {}

export class DTableBodyCellTextArea<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellTextArea<VALUE> = DThemeTableBodyCellTextArea<VALUE>,
	OPTIONS extends DTableBodyCellTextAreaOptions<
		ROW,
		VALUE,
		THEME
	> = DTableBodyCellTextAreaOptions<ROW, VALUE, THEME>
> extends DTableBodyCellText<ROW, VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellTextArea";
	}
}
