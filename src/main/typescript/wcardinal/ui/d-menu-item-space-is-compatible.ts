/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuItemSpaceOptions } from "./d-menu-item-space";

export const DMenuItemSpaceIsCompatible = <VALUE>(
	options: DMenuItemOptionsUnion<VALUE>
): options is DMenuItemSpaceOptions => {
	return "space" in options;
};
