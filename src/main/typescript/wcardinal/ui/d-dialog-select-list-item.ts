/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItem, DListItemOptions, DThemeListItem } from "./d-list-item";

export interface DDialogSelectListItemOptions<
	VALUE = unknown,
	THEME extends DThemeDialogSelecListItem = DThemeDialogSelecListItem
> extends DListItemOptions<VALUE, THEME> {

}

export interface DThemeDialogSelecListItem extends DThemeListItem {

}

export class DDialogSelectListItem<
	VALUE = unknown,
	THEME extends DThemeDialogSelecListItem = DThemeDialogSelecListItem,
	OPTIONS extends DDialogSelectListItemOptions<VALUE, THEME> = DDialogSelectListItemOptions<VALUE, THEME>
> extends DListItem<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogSelectListItem";
	}
}
