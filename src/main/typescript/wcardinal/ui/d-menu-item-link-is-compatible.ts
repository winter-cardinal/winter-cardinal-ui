/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemLinkOptions } from "./d-menu-item-link";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export const DMenuItemLinkIsCompatible = <VALUE>(
	options: DMenuItemOptionsUnion<VALUE>
): options is DMenuItemLinkOptions<VALUE> => {
	return "url" in options;
};
