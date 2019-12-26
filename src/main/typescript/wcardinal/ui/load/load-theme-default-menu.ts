/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteMenu } from "../theme/default/d-theme-default-menu";
import { DThemeWhiteMenuItem } from "../theme/default/d-theme-default-menu-item";
import { DThemeWhiteMenuItemCheck } from "../theme/default/d-theme-default-menu-item-check";
import { DThemeWhiteMenuItemExpandable } from "../theme/default/d-theme-default-menu-item-expandable";
import { DThemeWhiteMenuItemExpandableBody } from "../theme/default/d-theme-default-menu-item-expandable-body";
import { DThemeWhiteMenuItemExpandableHeader } from "../theme/default/d-theme-default-menu-item-expandable-header";
import { DThemeWhiteMenuItemExpandableItemCheck } from "../theme/default/d-theme-default-menu-item-expandable-item-check";
import { DThemeWhiteMenuItemExpandableItemLink } from "../theme/default/d-theme-default-menu-item-expandable-item-link";
import { DThemeWhiteMenuItemExpandableItemMenu } from "../theme/default/d-theme-default-menu-item-expandable-item-menu";
import {
	DThemeWhiteMenuItemExpandableItemSeparator
} from "../theme/default/d-theme-default-menu-item-expandable-item-separator";
import { DThemeWhiteMenuItemExpandableItemSpace } from "../theme/default/d-theme-default-menu-item-expandable-item-space";
import { DThemeWhiteMenuItemExpandableItemText } from "../theme/default/d-theme-default-menu-item-expandable-item-text";
import { DThemeWhiteMenuItemLink } from "../theme/default/d-theme-default-menu-item-link";
import { DThemeWhiteMenuItemMenu } from "../theme/default/d-theme-default-menu-item-menu";
import { DThemeWhiteMenuItemSeparator } from "../theme/default/d-theme-default-menu-item-separator";
import { DThemeWhiteMenuItemSpace } from "../theme/default/d-theme-default-menu-item-space";
import { DThemeWhiteMenuItemText } from "../theme/default/d-theme-default-menu-item-text";

export const loadThemeWhiteMenu = () => {
	DThemeWhite.set( "DMenu", DThemeWhiteMenu );

	DThemeWhite.set( "DMenuItem", DThemeWhiteMenuItem );
	DThemeWhite.set( "DMenuItemCheck", DThemeWhiteMenuItemCheck );
	DThemeWhite.set( "DMenuItemLink", DThemeWhiteMenuItemLink );
	DThemeWhite.set( "DMenuItemMenu", DThemeWhiteMenuItemMenu );
	DThemeWhite.set( "DMenuItemSeparator", DThemeWhiteMenuItemSeparator );
	DThemeWhite.set( "DMenuItemSpace", DThemeWhiteMenuItemSpace );
	DThemeWhite.set( "DMenuItemText", DThemeWhiteMenuItemText );

	DThemeWhite.set( "DMenuItemExpandableBody", DThemeWhiteMenuItemExpandableBody );
	DThemeWhite.set( "DMenuItemExpandableHeader", DThemeWhiteMenuItemExpandableHeader );
	DThemeWhite.set( "DMenuItemExpandableItemCheck", DThemeWhiteMenuItemExpandableItemCheck );
	DThemeWhite.set( "DMenuItemExpandableItemLink", DThemeWhiteMenuItemExpandableItemLink );
	DThemeWhite.set( "DMenuItemExpandableItemMenu", DThemeWhiteMenuItemExpandableItemMenu );
	DThemeWhite.set( "DMenuItemExpandableItemSeparator", DThemeWhiteMenuItemExpandableItemSeparator );
	DThemeWhite.set( "DMenuItemExpandableItemSpace", DThemeWhiteMenuItemExpandableItemSpace );
	DThemeWhite.set( "DMenuItemExpandableItemText", DThemeWhiteMenuItemExpandableItemText );
	DThemeWhite.set( "DMenuItemExpandable", DThemeWhiteMenuItemExpandable );
};
