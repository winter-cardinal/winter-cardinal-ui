/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuCloseable } from "./d-menu-closeable";
import { DMenuContext } from "./d-menu-context";
import { DMenuItemBase, DMenuItemBaseOptions, DThemeMenuItemBase } from "./d-menu-item-base";

export interface DMenuItemOptions<VALUE = unknown, THEME extends DThemeMenuItem = DThemeMenuItem>
	extends DMenuItemBaseOptions<VALUE, THEME> {}

export interface DThemeMenuItem extends DThemeMenuItemBase {}

export class DMenuItem<
	VALUE = unknown,
	THEME extends DThemeMenuItem = DThemeMenuItem,
	OPTIONS extends DMenuItemOptions<VALUE, THEME> = DMenuItemOptions<VALUE, THEME>
> extends DMenuItemBase<VALUE, THEME, OPTIONS> {
	getContext(): DMenuContext | null {
		let parent = this.parent as any;
		while (parent) {
			if (parent.getContext) {
				return parent.getContext();
			}
			parent = parent.parent;
		}
		return null;
	}

	getCloseable(): DMenuCloseable | null {
		let parent = this.parent as any;
		while (parent) {
			if (parent.getCloseable) {
				return parent.getCloseable();
			}
			parent = parent.parent;
		}
		return null;
	}

	protected getType(): string {
		return "DMenuItem";
	}
}
