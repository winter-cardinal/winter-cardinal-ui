/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DList, DListOptions, DThemeList } from "./d-list";

export interface DDialogSelectListOptions<
	VALUE = unknown,
	THEME extends DThemeDialogSelecList = DThemeDialogSelecList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DListOptions<VALUE, THEME, CONTENT_OPTIONS> {}

export interface DThemeDialogSelecList extends DThemeList {}

export class DDialogSelectList<
	VALUE = unknown,
	THEME extends DThemeDialogSelecList = DThemeDialogSelecList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DDialogSelectListOptions<
		VALUE,
		THEME,
		CONTENT_OPTIONS
	> = DDialogSelectListOptions<VALUE, THEME, CONTENT_OPTIONS>
> extends DList<VALUE, THEME, CONTENT_OPTIONS, OPTIONS> {
	constructor(options?: OPTIONS) {
		super(options);
		this.state.isFocusable = false;
	}

	protected getType(): string {
		return "DDialogSelectList";
	}
}
