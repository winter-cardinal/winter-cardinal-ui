/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItem, DListItemOptions, DThemeListItem } from "./d-list-item";

export interface DListItemAmbientOptions<
	VALUE = unknown,
	THEME extends DThemeListItemAmbient = DThemeListItemAmbient
> extends DListItemOptions<VALUE, THEME> {}

export interface DThemeListItemAmbient extends DThemeListItem {}

export class DListItemAmbient<
	VALUE = unknown,
	THEME extends DThemeListItemAmbient = DThemeListItemAmbient,
	OPTIONS extends DListItemAmbientOptions<VALUE, THEME> = DListItemAmbientOptions<VALUE, THEME>
> extends DListItem<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DListItemAmbient";
	}
}
