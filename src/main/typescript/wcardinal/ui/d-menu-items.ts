/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemMenu } from "./d-menu-item-menu";

export class DMenuItems {
	static each<VALUE>(
		menu: DMenu<VALUE>,
		iteratee: (item: DMenuItem<VALUE>) => boolean | void
	): DMenuItem<VALUE> | null {
		const children = menu.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DMenuItemMenu) {
				const result = this.each(child.menu, iteratee);
				if (result != null) {
					return result;
				}
			} else if (child instanceof DMenuItem) {
				if (iteratee(child)) {
					return child;
				}
			}
		}
		return null;
	}

	static find<VALUE>(menu: DMenu<VALUE>, value: VALUE | null): DMenuItem<VALUE> | null {
		return this.each(menu, (item: DMenuItem<VALUE>): boolean => {
			return item.value === value;
		});
	}
}
