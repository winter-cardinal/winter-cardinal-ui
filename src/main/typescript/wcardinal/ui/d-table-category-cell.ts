/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImage, DImageOptions, DThemeImage } from "./d-image";

export interface DTableCategoryCellOptions<
	THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell
> extends DImageOptions<string | null, THEME> {

}

export interface DThemeTableCategoryCell extends DThemeImage<string | null> {

}

export class DTableCategoryCell<
	THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell,
	OPTIONS extends DTableCategoryCellOptions<THEME> = DTableCategoryCellOptions<THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableCategoryCell";
	}
}
