/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemCheckOptions } from "./d-menu-item-check";
import { DMenuItemExpandableOptions } from "./d-menu-item-expandable";
import { DMenuItemLinkOptions } from "./d-menu-item-link";
import { DMenuItemMenuOptions } from "./d-menu-item-menu";
import { DMenuItemSeparatorOptions } from "./d-menu-item-separator";
import { DMenuItemSpaceOptions } from "./d-menu-item-space";
import { DMenuItemTextOptions } from "./d-menu-item-text";

export type DMenuItemOptionsUnion<VALUE> =
	| DMenuItemTextOptions<VALUE>
	| DMenuItemCheckOptions<VALUE>
	| DMenuItemMenuOptions<VALUE>
	| DMenuItemSeparatorOptions<VALUE>
	| DMenuItemExpandableOptions<VALUE>
	| DMenuItemLinkOptions<VALUE>
	| DMenuItemSpaceOptions;
