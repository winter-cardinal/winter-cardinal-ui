/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteMenuSided } from "../theme/default/d-theme-default-menu-sided";
import { DThemeWhiteMenuSidedContent } from "../theme/default/d-theme-default-menu-sided-content";
import { DThemeWhiteMenuSidedItemCheck } from "../theme/default/d-theme-default-menu-sided-item-check";
import { DThemeWhiteMenuSidedItemExpandable } from "../theme/default/d-theme-default-menu-sided-item-expandable";
import {
	DThemeWhiteMenuSidedItemExpandableItemCheck
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-check";
import {
	DThemeWhiteMenuSidedItemExpandableItemLink
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-link";
import {
	DThemeWhiteMenuSidedItemExpandableItemMenu
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-menu";
import {
	DThemeWhiteMenuSidedItemExpandableItemSeparator
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-separator";
import {
	DThemeWhiteMenuSidedItemExpandableItemSpace
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-space";
import {
	DThemeWhiteMenuSidedItemExpandableItemText
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-text";
import { DThemeWhiteMenuSidedItemLink } from "../theme/default/d-theme-default-menu-sided-item-link";
import { DThemeWhiteMenuSidedItemMenu } from "../theme/default/d-theme-default-menu-sided-item-menu";
import { DThemeWhiteMenuSidedItemSeparator } from "../theme/default/d-theme-default-menu-sided-item-separator";
import { DThemeWhiteMenuSidedItemSpace } from "../theme/default/d-theme-default-menu-sided-item-space";
import { DThemeWhiteMenuSidedItemText } from "../theme/default/d-theme-default-menu-sided-item-text";

export const loadThemeWhiteMenuSided = () => {
	DThemeWhite.set( "DMenuSided", DThemeWhiteMenuSided );
	DThemeWhite.set( "DMenuSidedContent", DThemeWhiteMenuSidedContent );

	DThemeWhite.set( "DMenuSidedItemCheck", DThemeWhiteMenuSidedItemCheck );
	DThemeWhite.set( "DMenuSidedItemLink", DThemeWhiteMenuSidedItemLink );
	DThemeWhite.set( "DMenuSidedItemMenu", DThemeWhiteMenuSidedItemMenu );
	DThemeWhite.set( "DMenuSidedItemSeparator", DThemeWhiteMenuSidedItemSeparator );
	DThemeWhite.set( "DMenuSidedItemSpace", DThemeWhiteMenuSidedItemSpace );
	DThemeWhite.set( "DMenuSidedItemText", DThemeWhiteMenuSidedItemText );

	DThemeWhite.set( "DMenuSidedItemExpandable", DThemeWhiteMenuSidedItemExpandable );
	DThemeWhite.set( "DMenuSidedItemExpandableItemCheck", DThemeWhiteMenuSidedItemExpandableItemCheck );
	DThemeWhite.set( "DMenuSidedItemExpandableItemLink", DThemeWhiteMenuSidedItemExpandableItemLink );
	DThemeWhite.set( "DMenuSidedItemExpandableItemMenu", DThemeWhiteMenuSidedItemExpandableItemMenu );
	DThemeWhite.set( "DMenuSidedItemExpandableItemSeparator", DThemeWhiteMenuSidedItemExpandableItemSeparator );
	DThemeWhite.set( "DMenuSidedItemExpandableItemSpace", DThemeWhiteMenuSidedItemExpandableItemSpace );
	DThemeWhite.set( "DMenuSidedItemExpandableItemText", DThemeWhiteMenuSidedItemExpandableItemText );
};
