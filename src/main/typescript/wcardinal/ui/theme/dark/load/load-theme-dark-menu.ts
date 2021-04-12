/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkMenu } from "../d-theme-dark-menu";
import { DThemeDarkMenuItem } from "../d-theme-dark-menu-item";
import { DThemeDarkMenuItemCheck } from "../d-theme-dark-menu-item-check";
import { DThemeDarkMenuItemExpandable } from "../d-theme-dark-menu-item-expandable";
import { DThemeDarkMenuItemExpandableBody } from "../d-theme-dark-menu-item-expandable-body";
import { DThemeDarkMenuItemExpandableHeader } from "../d-theme-dark-menu-item-expandable-header";
import { DThemeDarkMenuItemExpandableItemCheck } from "../d-theme-dark-menu-item-expandable-item-check";
import { DThemeDarkMenuItemExpandableItemLink } from "../d-theme-dark-menu-item-expandable-item-link";
import { DThemeDarkMenuItemExpandableItemMenu } from "../d-theme-dark-menu-item-expandable-item-menu";
import { DThemeDarkMenuItemExpandableItemSeparator } from "../d-theme-dark-menu-item-expandable-item-separator";
import { DThemeDarkMenuItemExpandableItemSpace } from "../d-theme-dark-menu-item-expandable-item-space";
import { DThemeDarkMenuItemExpandableItemText } from "../d-theme-dark-menu-item-expandable-item-text";
import { DThemeDarkMenuItemLink } from "../d-theme-dark-menu-item-link";
import { DThemeDarkMenuItemMenu } from "../d-theme-dark-menu-item-menu";
import { DThemeDarkMenuItemSeparator } from "../d-theme-dark-menu-item-separator";
import { DThemeDarkMenuItemSpace } from "../d-theme-dark-menu-item-space";
import { DThemeDarkMenuItemText } from "../d-theme-dark-menu-item-text";

export const loadThemeDarkMenu = (): void => {
	DThemeDark.set("DMenu", DThemeDarkMenu);

	DThemeDark.set("DMenuItem", DThemeDarkMenuItem);
	DThemeDark.set("DMenuItemCheck", DThemeDarkMenuItemCheck);
	DThemeDark.set("DMenuItemLink", DThemeDarkMenuItemLink);
	DThemeDark.set("DMenuItemMenu", DThemeDarkMenuItemMenu);
	DThemeDark.set("DMenuItemSeparator", DThemeDarkMenuItemSeparator);
	DThemeDark.set("DMenuItemSpace", DThemeDarkMenuItemSpace);
	DThemeDark.set("DMenuItemText", DThemeDarkMenuItemText);

	DThemeDark.set("DMenuItemExpandableBody", DThemeDarkMenuItemExpandableBody);
	DThemeDark.set("DMenuItemExpandableHeader", DThemeDarkMenuItemExpandableHeader);
	DThemeDark.set("DMenuItemExpandableItemCheck", DThemeDarkMenuItemExpandableItemCheck);
	DThemeDark.set("DMenuItemExpandableItemLink", DThemeDarkMenuItemExpandableItemLink);
	DThemeDark.set("DMenuItemExpandableItemMenu", DThemeDarkMenuItemExpandableItemMenu);
	DThemeDark.set("DMenuItemExpandableItemSeparator", DThemeDarkMenuItemExpandableItemSeparator);
	DThemeDark.set("DMenuItemExpandableItemSpace", DThemeDarkMenuItemExpandableItemSpace);
	DThemeDark.set("DMenuItemExpandableItemText", DThemeDarkMenuItemExpandableItemText);
	DThemeDark.set("DMenuItemExpandable", DThemeDarkMenuItemExpandable);
};
