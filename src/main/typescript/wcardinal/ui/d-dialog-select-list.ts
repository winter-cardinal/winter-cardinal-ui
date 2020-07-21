/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DList, DListOptions, DThemeList } from "./d-list";

export interface DDialogSelectListOptions<
	THEME extends DThemeDialogSelecList = DThemeDialogSelecList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DListOptions<THEME, CONTENT_OPTIONS> {

}

export interface DThemeDialogSelecList extends DThemeList {

}

export class DDialogSelectList<
	THEME extends DThemeDialogSelecList = DThemeDialogSelecList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DDialogSelectListOptions<THEME, CONTENT_OPTIONS> = DDialogSelectListOptions<THEME, CONTENT_OPTIONS>
> extends DList<THEME, CONTENT_OPTIONS, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );
		this.state.isFocusable = false;
	}

	protected getType(): string {
		return "DDialogSelectList";
	}
}
