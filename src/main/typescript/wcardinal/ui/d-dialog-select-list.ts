/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DDialogSelectListItemUpdater } from "./d-dialog-select-list-item-updater";
import { DList, DListOptions, DThemeList } from "./d-list";
import { DListData } from "./d-list-data";

export interface DDialogSelectListOptions<
	VALUE = unknown,
	DATA extends DListData<VALUE> = DListData<VALUE>,
	THEME extends DThemeDialogSelecList = DThemeDialogSelecList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DListOptions<VALUE, DATA, THEME, CONTENT_OPTIONS> {}

export interface DThemeDialogSelecList extends DThemeList {}

export class DDialogSelectList<
	VALUE = unknown,
	DATA extends DListData<VALUE> = DListData<VALUE>,
	THEME extends DThemeDialogSelecList = DThemeDialogSelecList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DDialogSelectListOptions<
		VALUE,
		DATA,
		THEME,
		CONTENT_OPTIONS
	> = DDialogSelectListOptions<VALUE, DATA, THEME, CONTENT_OPTIONS>
> extends DList<VALUE, DATA, THEME, CONTENT_OPTIONS, OPTIONS> {
	constructor(options?: OPTIONS) {
		super(options);
		this.state.isFocusable = false;
	}

	protected newUpdater(
		data: DATA,
		content: DBase,
		options?: OPTIONS
	): DDialogSelectListItemUpdater<VALUE> {
		return new DDialogSelectListItemUpdater<VALUE>(data, content, content, options?.updater);
	}

	protected getType(): string {
		return "DDialogSelectList";
	}
}
