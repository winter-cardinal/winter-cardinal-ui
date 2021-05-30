/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemSeparatorReflowable } from "./d-menu-item-separator-reflowable";
import { DMenuItemBase, DMenuItemBaseOptions, DThemeMenuItemBase } from "./d-menu-item-base";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export interface DMenuItemSeparatorOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator
> extends DMenuItemBaseOptions<VALUE, THEME> {
	separator?: true;
}

export interface DThemeMenuItemSeparator extends DThemeMenuItemBase {}

export const DMenuItemSeparatorIsCompatible = (
	options: DMenuItemOptionsUnion<unknown>
): options is DMenuItemSeparatorOptions<unknown> => {
	return "separator" in options;
};

export class DMenuItemSeparator<
	VALUE = unknown,
	THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator,
	OPTIONS extends DMenuItemSeparatorOptions<VALUE, THEME> = DMenuItemSeparatorOptions<
		VALUE,
		THEME
	>
> extends DMenuItemBase<VALUE, THEME, OPTIONS> {
	protected init(options?: OPTIONS): void {
		super.init(options);
		this.state.isFocusable = false;
	}

	protected initReflowable(): void {
		new DMenuItemSeparatorReflowable(this);
	}

	protected getType(): string {
		return "DMenuItemSeparator";
	}
}
