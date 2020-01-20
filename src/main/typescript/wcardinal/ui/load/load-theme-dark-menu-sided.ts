/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkMenuSided } from "../theme/dark/d-theme-dark-menu-sided";
import { DThemeDarkMenuSidedContent } from "../theme/dark/d-theme-dark-menu-sided-content";
import { DThemeDarkMenuSidedItemCheck } from "../theme/dark/d-theme-dark-menu-sided-item-check";
import { DThemeDarkMenuSidedItemExpandable } from "../theme/dark/d-theme-dark-menu-sided-item-expandable";
import {
	DThemeDarkMenuSidedItemExpandableItemCheck
} from "../theme/dark/d-theme-dark-menu-sided-item-expandable-item-check";
import {
	DThemeDarkMenuSidedItemExpandableItemLink
} from "../theme/dark/d-theme-dark-menu-sided-item-expandable-item-link";
import {
	DThemeDarkMenuSidedItemExpandableItemMenu
} from "../theme/dark/d-theme-dark-menu-sided-item-expandable-item-menu";
import {
	DThemeDarkMenuSidedItemExpandableItemSeparator
} from "../theme/dark/d-theme-dark-menu-sided-item-expandable-item-separator";
import {
	DThemeDarkMenuSidedItemExpandableItemSpace
} from "../theme/dark/d-theme-dark-menu-sided-item-expandable-item-space";
import {
	DThemeDarkMenuSidedItemExpandableItemText
} from "../theme/dark/d-theme-dark-menu-sided-item-expandable-item-text";
import { DThemeDarkMenuSidedItemLink } from "../theme/dark/d-theme-dark-menu-sided-item-link";
import { DThemeDarkMenuSidedItemMenu } from "../theme/dark/d-theme-dark-menu-sided-item-menu";
import { DThemeDarkMenuSidedItemSeparator } from "../theme/dark/d-theme-dark-menu-sided-item-separator";
import { DThemeDarkMenuSidedItemSpace } from "../theme/dark/d-theme-dark-menu-sided-item-space";
import { DThemeDarkMenuSidedItemText } from "../theme/dark/d-theme-dark-menu-sided-item-text";

export const loadThemeDarkMenuSided = () => {
	DThemeDark.set( "DMenuSided", DThemeDarkMenuSided );
	DThemeDark.set( "DMenuSidedContent", DThemeDarkMenuSidedContent );

	DThemeDark.set( "DMenuSidedItemCheck", DThemeDarkMenuSidedItemCheck );
	DThemeDark.set( "DMenuSidedItemLink", DThemeDarkMenuSidedItemLink );
	DThemeDark.set( "DMenuSidedItemMenu", DThemeDarkMenuSidedItemMenu );
	DThemeDark.set( "DMenuSidedItemSeparator", DThemeDarkMenuSidedItemSeparator );
	DThemeDark.set( "DMenuSidedItemSpace", DThemeDarkMenuSidedItemSpace );
	DThemeDark.set( "DMenuSidedItemText", DThemeDarkMenuSidedItemText );

	DThemeDark.set( "DMenuSidedItemExpandable", DThemeDarkMenuSidedItemExpandable );
	DThemeDark.set( "DMenuSidedItemExpandableItemCheck", DThemeDarkMenuSidedItemExpandableItemCheck );
	DThemeDark.set( "DMenuSidedItemExpandableItemLink", DThemeDarkMenuSidedItemExpandableItemLink );
	DThemeDark.set( "DMenuSidedItemExpandableItemMenu", DThemeDarkMenuSidedItemExpandableItemMenu );
	DThemeDark.set( "DMenuSidedItemExpandableItemSeparator", DThemeDarkMenuSidedItemExpandableItemSeparator );
	DThemeDark.set( "DMenuSidedItemExpandableItemSpace", DThemeDarkMenuSidedItemExpandableItemSpace );
	DThemeDark.set( "DMenuSidedItemExpandableItemText", DThemeDarkMenuSidedItemExpandableItemText );
};
