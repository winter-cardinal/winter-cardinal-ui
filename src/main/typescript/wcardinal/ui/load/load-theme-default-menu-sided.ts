/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultMenuSided } from "../theme/default/d-theme-default-menu-sided";
import { DThemeDefaultMenuSidedContent } from "../theme/default/d-theme-default-menu-sided-content";
import { DThemeDefaultMenuSidedItemCheck } from "../theme/default/d-theme-default-menu-sided-item-check";
import { DThemeDefaultMenuSidedItemExpandable } from "../theme/default/d-theme-default-menu-sided-item-expandable";
import {
	DThemeDefaultMenuSidedItemExpandableItemCheck
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-check";
import {
	DThemeDefaultMenuSidedItemExpandableItemLink
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-link";
import {
	DThemeDefaultMenuSidedItemExpandableItemMenu
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-menu";
import {
	DThemeDefaultMenuSidedItemExpandableItemSeparator
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-separator";
import {
	DThemeDefaultMenuSidedItemExpandableItemSpace
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-space";
import {
	DThemeDefaultMenuSidedItemExpandableItemText
} from "../theme/default/d-theme-default-menu-sided-item-expandable-item-text";
import { DThemeDefaultMenuSidedItemLink } from "../theme/default/d-theme-default-menu-sided-item-link";
import { DThemeDefaultMenuSidedItemMenu } from "../theme/default/d-theme-default-menu-sided-item-menu";
import { DThemeDefaultMenuSidedItemSeparator } from "../theme/default/d-theme-default-menu-sided-item-separator";
import { DThemeDefaultMenuSidedItemSpace } from "../theme/default/d-theme-default-menu-sided-item-space";
import { DThemeDefaultMenuSidedItemText } from "../theme/default/d-theme-default-menu-sided-item-text";

export const loadThemeDefaultMenuSided = () => {
	DThemeDefault.set( "DMenuSided", DThemeDefaultMenuSided );
	DThemeDefault.set( "DMenuSidedContent", DThemeDefaultMenuSidedContent );

	DThemeDefault.set( "DMenuSidedItemCheck", DThemeDefaultMenuSidedItemCheck );
	DThemeDefault.set( "DMenuSidedItemLink", DThemeDefaultMenuSidedItemLink );
	DThemeDefault.set( "DMenuSidedItemMenu", DThemeDefaultMenuSidedItemMenu );
	DThemeDefault.set( "DMenuSidedItemSeparator", DThemeDefaultMenuSidedItemSeparator );
	DThemeDefault.set( "DMenuSidedItemSpace", DThemeDefaultMenuSidedItemSpace );
	DThemeDefault.set( "DMenuSidedItemText", DThemeDefaultMenuSidedItemText );

	DThemeDefault.set( "DMenuSidedItemExpandable", DThemeDefaultMenuSidedItemExpandable );
	DThemeDefault.set( "DMenuSidedItemExpandableItemCheck", DThemeDefaultMenuSidedItemExpandableItemCheck );
	DThemeDefault.set( "DMenuSidedItemExpandableItemLink", DThemeDefaultMenuSidedItemExpandableItemLink );
	DThemeDefault.set( "DMenuSidedItemExpandableItemMenu", DThemeDefaultMenuSidedItemExpandableItemMenu );
	DThemeDefault.set( "DMenuSidedItemExpandableItemSeparator", DThemeDefaultMenuSidedItemExpandableItemSeparator );
	DThemeDefault.set( "DMenuSidedItemExpandableItemSpace", DThemeDefaultMenuSidedItemExpandableItemSpace );
	DThemeDefault.set( "DMenuSidedItemExpandableItemText", DThemeDefaultMenuSidedItemExpandableItemText );
};
