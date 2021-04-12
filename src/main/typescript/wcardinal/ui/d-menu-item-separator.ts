/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DListItemSeparator,
	DListItemSeparatorOptions,
	DThemeListItemSeparator
} from "./d-list-item-separator";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export interface DMenuItemSeparatorOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator
> extends DListItemSeparatorOptions<VALUE, THEME> {}

export interface DThemeMenuItemSeparator extends DThemeListItemSeparator {}

export class DMenuItemSeparator<
	VALUE = unknown,
	THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator,
	OPTIONS extends DMenuItemSeparatorOptions<VALUE, THEME> = DMenuItemSeparatorOptions<
		VALUE,
		THEME
	>
> extends DListItemSeparator<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuItemSeparator";
	}

	static isCompatible<VALUE>(
		options: DMenuItemOptionsUnion<VALUE>
	): options is DMenuItemSeparatorOptions<VALUE> {
		return "separator" in options;
	}
}
