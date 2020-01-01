/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

export interface DTableCategoryCellOptions<
	THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell
> extends DImageOptions<string | null, THEME> {

}

export interface DThemeTableCategoryCell extends DThemeImage {
	getTextFormatter(): ( value: string | null, caller: DTableCategoryCell ) => string;
	getTextValue( state: DBaseState ): string | null;
	newTextValue(): DStateAwareOrValueMightBe<string | null>;
}

export class DTableCategoryCell<
	THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell,
	OPTIONS extends DTableCategoryCellOptions<THEME> = DTableCategoryCellOptions<THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DTableCategoryCell";
	}
}
