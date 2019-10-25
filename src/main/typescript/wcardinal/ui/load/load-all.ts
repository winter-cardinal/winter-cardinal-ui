/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadMenuItemAll } from "./load-menu-item-all";
import { loadShapeAll } from "./load-shape-all";
import { loadThemeWhiteAll } from "./load-theme-white-all";

export const loadAll = () => {
	loadMenuItemAll();
	loadThemeWhiteAll();
	loadShapeAll();
};
