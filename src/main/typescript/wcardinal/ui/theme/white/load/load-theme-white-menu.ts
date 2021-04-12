/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteMenu } from "../d-theme-white-menu";
import { DThemeWhiteMenuItem } from "../d-theme-white-menu-item";
import { DThemeWhiteMenuItemCheck } from "../d-theme-white-menu-item-check";
import { DThemeWhiteMenuItemExpandable } from "../d-theme-white-menu-item-expandable";
import { DThemeWhiteMenuItemExpandableBody } from "../d-theme-white-menu-item-expandable-body";
import { DThemeWhiteMenuItemExpandableHeader } from "../d-theme-white-menu-item-expandable-header";
import { DThemeWhiteMenuItemExpandableItemCheck } from "../d-theme-white-menu-item-expandable-item-check";
import { DThemeWhiteMenuItemExpandableItemLink } from "../d-theme-white-menu-item-expandable-item-link";
import { DThemeWhiteMenuItemExpandableItemMenu } from "../d-theme-white-menu-item-expandable-item-menu";
import { DThemeWhiteMenuItemExpandableItemSeparator } from "../d-theme-white-menu-item-expandable-item-separator";
import { DThemeWhiteMenuItemExpandableItemSpace } from "../d-theme-white-menu-item-expandable-item-space";
import { DThemeWhiteMenuItemExpandableItemText } from "../d-theme-white-menu-item-expandable-item-text";
import { DThemeWhiteMenuItemLink } from "../d-theme-white-menu-item-link";
import { DThemeWhiteMenuItemMenu } from "../d-theme-white-menu-item-menu";
import { DThemeWhiteMenuItemSeparator } from "../d-theme-white-menu-item-separator";
import { DThemeWhiteMenuItemSpace } from "../d-theme-white-menu-item-space";
import { DThemeWhiteMenuItemText } from "../d-theme-white-menu-item-text";

export const loadThemeWhiteMenu = (): void => {
	DThemeWhite.set("DMenu", DThemeWhiteMenu);

	DThemeWhite.set("DMenuItem", DThemeWhiteMenuItem);
	DThemeWhite.set("DMenuItemCheck", DThemeWhiteMenuItemCheck);
	DThemeWhite.set("DMenuItemLink", DThemeWhiteMenuItemLink);
	DThemeWhite.set("DMenuItemMenu", DThemeWhiteMenuItemMenu);
	DThemeWhite.set("DMenuItemSeparator", DThemeWhiteMenuItemSeparator);
	DThemeWhite.set("DMenuItemSpace", DThemeWhiteMenuItemSpace);
	DThemeWhite.set("DMenuItemText", DThemeWhiteMenuItemText);

	DThemeWhite.set("DMenuItemExpandableBody", DThemeWhiteMenuItemExpandableBody);
	DThemeWhite.set("DMenuItemExpandableHeader", DThemeWhiteMenuItemExpandableHeader);
	DThemeWhite.set("DMenuItemExpandableItemCheck", DThemeWhiteMenuItemExpandableItemCheck);
	DThemeWhite.set("DMenuItemExpandableItemLink", DThemeWhiteMenuItemExpandableItemLink);
	DThemeWhite.set("DMenuItemExpandableItemMenu", DThemeWhiteMenuItemExpandableItemMenu);
	DThemeWhite.set("DMenuItemExpandableItemSeparator", DThemeWhiteMenuItemExpandableItemSeparator);
	DThemeWhite.set("DMenuItemExpandableItemSpace", DThemeWhiteMenuItemExpandableItemSpace);
	DThemeWhite.set("DMenuItemExpandableItemText", DThemeWhiteMenuItemExpandableItemText);
	DThemeWhite.set("DMenuItemExpandable", DThemeWhiteMenuItemExpandable);
};
