/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemCheckOptions } from "./d-menu-item-check";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export const DMenuItemCheckIsCompatible = <VALUE>(
	options: DMenuItemOptionsUnion<VALUE>
): options is DMenuItemCheckOptions<VALUE> => {
	return "check" in options;
};
