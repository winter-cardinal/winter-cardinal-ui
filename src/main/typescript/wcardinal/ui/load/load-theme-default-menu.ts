/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultMenu } from "../theme/default/d-theme-default-menu";
import { DThemeDefaultMenuItem } from "../theme/default/d-theme-default-menu-item";
import { DThemeDefaultMenuItemCheck } from "../theme/default/d-theme-default-menu-item-check";
import { DThemeDefaultMenuItemExpandable } from "../theme/default/d-theme-default-menu-item-expandable";
import { DThemeDefaultMenuItemExpandableBody } from "../theme/default/d-theme-default-menu-item-expandable-body";
import { DThemeDefaultMenuItemExpandableHeader } from "../theme/default/d-theme-default-menu-item-expandable-header";
import {
	DThemeDefaultMenuItemExpandableItemCheck
} from "../theme/default/d-theme-default-menu-item-expandable-item-check";
import {
	DThemeDefaultMenuItemExpandableItemLink
} from "../theme/default/d-theme-default-menu-item-expandable-item-link";
import {
	DThemeDefaultMenuItemExpandableItemMenu
} from "../theme/default/d-theme-default-menu-item-expandable-item-menu";
import {
	DThemeDefaultMenuItemExpandableItemSeparator
} from "../theme/default/d-theme-default-menu-item-expandable-item-separator";
import {
	DThemeDefaultMenuItemExpandableItemSpace
} from "../theme/default/d-theme-default-menu-item-expandable-item-space";
import {
	DThemeDefaultMenuItemExpandableItemText
} from "../theme/default/d-theme-default-menu-item-expandable-item-text";
import { DThemeDefaultMenuItemLink } from "../theme/default/d-theme-default-menu-item-link";
import { DThemeDefaultMenuItemMenu } from "../theme/default/d-theme-default-menu-item-menu";
import { DThemeDefaultMenuItemSeparator } from "../theme/default/d-theme-default-menu-item-separator";
import { DThemeDefaultMenuItemSpace } from "../theme/default/d-theme-default-menu-item-space";
import { DThemeDefaultMenuItemText } from "../theme/default/d-theme-default-menu-item-text";

export const loadThemeDefaultMenu = () => {
	DThemeDefault.set( "DMenu", DThemeDefaultMenu );

	DThemeDefault.set( "DMenuItem", DThemeDefaultMenuItem );
	DThemeDefault.set( "DMenuItemCheck", DThemeDefaultMenuItemCheck );
	DThemeDefault.set( "DMenuItemLink", DThemeDefaultMenuItemLink );
	DThemeDefault.set( "DMenuItemMenu", DThemeDefaultMenuItemMenu );
	DThemeDefault.set( "DMenuItemSeparator", DThemeDefaultMenuItemSeparator );
	DThemeDefault.set( "DMenuItemSpace", DThemeDefaultMenuItemSpace );
	DThemeDefault.set( "DMenuItemText", DThemeDefaultMenuItemText );

	DThemeDefault.set( "DMenuItemExpandableBody", DThemeDefaultMenuItemExpandableBody );
	DThemeDefault.set( "DMenuItemExpandableHeader", DThemeDefaultMenuItemExpandableHeader );
	DThemeDefault.set( "DMenuItemExpandableItemCheck", DThemeDefaultMenuItemExpandableItemCheck );
	DThemeDefault.set( "DMenuItemExpandableItemLink", DThemeDefaultMenuItemExpandableItemLink );
	DThemeDefault.set( "DMenuItemExpandableItemMenu", DThemeDefaultMenuItemExpandableItemMenu );
	DThemeDefault.set( "DMenuItemExpandableItemSeparator", DThemeDefaultMenuItemExpandableItemSeparator );
	DThemeDefault.set( "DMenuItemExpandableItemSpace", DThemeDefaultMenuItemExpandableItemSpace );
	DThemeDefault.set( "DMenuItemExpandableItemText", DThemeDefaultMenuItemExpandableItemText );
	DThemeDefault.set( "DMenuItemExpandable", DThemeDefaultMenuItemExpandable );
};
