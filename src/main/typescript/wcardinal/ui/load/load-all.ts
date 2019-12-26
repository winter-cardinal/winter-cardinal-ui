/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadMenuItemAll } from "./load-menu-item-all";
import { loadShapeAll } from "./load-shape-all";
import { loadThemeDefaultAll } from "./load-theme-default-all";

export const loadAll = () => {
	loadMenuItemAll();
	loadThemeDefaultAll();
	loadShapeAll();
};
