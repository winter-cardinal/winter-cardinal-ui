/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadMenuItem } from "./load-menu-item";
import { loadMenuItemExpandable } from "./load-menu-item-expandable";
import { loadMenuSidedItem } from "./load-menu-sided-item";
import { loadMenuSidedItemExpandable } from "./load-menu-sided-item-expandable";

export const loadMenuItemAll = (): void => {
	loadMenuItem();
	loadMenuItemExpandable();
	loadMenuSidedItem();
	loadMenuSidedItemExpandable();
};
