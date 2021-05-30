/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemMenuOptions } from "./d-menu-item-menu";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export const DMenuItemMenuIsCompatible = <VALUE>(
	options: DMenuItemOptionsUnion<VALUE>
): options is DMenuItemMenuOptions<VALUE> => {
	return "menu" in options;
};
