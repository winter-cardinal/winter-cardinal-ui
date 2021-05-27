/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemExpandableOptions } from "./d-menu-item-expandable";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export const DMenuItemExpandableIsCompatible = <VALUE>(
	options: DMenuItemOptionsUnion<VALUE>
): options is DMenuItemExpandableOptions<VALUE> => {
	return "header" in options;
};
