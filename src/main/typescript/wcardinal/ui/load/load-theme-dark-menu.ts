/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkMenu } from "../theme/dark/d-theme-dark-menu";
import { DThemeDarkMenuItem } from "../theme/dark/d-theme-dark-menu-item";
import { DThemeDarkMenuItemCheck } from "../theme/dark/d-theme-dark-menu-item-check";
import { DThemeDarkMenuItemExpandable } from "../theme/dark/d-theme-dark-menu-item-expandable";
import { DThemeDarkMenuItemExpandableBody } from "../theme/dark/d-theme-dark-menu-item-expandable-body";
import { DThemeDarkMenuItemExpandableHeader } from "../theme/dark/d-theme-dark-menu-item-expandable-header";
import { DThemeDarkMenuItemExpandableItemCheck } from "../theme/dark/d-theme-dark-menu-item-expandable-item-check";
import { DThemeDarkMenuItemExpandableItemLink } from "../theme/dark/d-theme-dark-menu-item-expandable-item-link";
import { DThemeDarkMenuItemExpandableItemMenu } from "../theme/dark/d-theme-dark-menu-item-expandable-item-menu";
import {
	DThemeDarkMenuItemExpandableItemSeparator
} from "../theme/dark/d-theme-dark-menu-item-expandable-item-separator";
import { DThemeDarkMenuItemExpandableItemSpace } from "../theme/dark/d-theme-dark-menu-item-expandable-item-space";
import { DThemeDarkMenuItemExpandableItemText } from "../theme/dark/d-theme-dark-menu-item-expandable-item-text";
import { DThemeDarkMenuItemLink } from "../theme/dark/d-theme-dark-menu-item-link";
import { DThemeDarkMenuItemMenu } from "../theme/dark/d-theme-dark-menu-item-menu";
import { DThemeDarkMenuItemSeparator } from "../theme/dark/d-theme-dark-menu-item-separator";
import { DThemeDarkMenuItemSpace } from "../theme/dark/d-theme-dark-menu-item-space";
import { DThemeDarkMenuItemText } from "../theme/dark/d-theme-dark-menu-item-text";

export const loadThemeDarkMenu = () => {
	DThemeDark.set( "DMenu", DThemeDarkMenu );

	DThemeDark.set( "DMenuItem", DThemeDarkMenuItem );
	DThemeDark.set( "DMenuItemCheck", DThemeDarkMenuItemCheck );
	DThemeDark.set( "DMenuItemLink", DThemeDarkMenuItemLink );
	DThemeDark.set( "DMenuItemMenu", DThemeDarkMenuItemMenu );
	DThemeDark.set( "DMenuItemSeparator", DThemeDarkMenuItemSeparator );
	DThemeDark.set( "DMenuItemSpace", DThemeDarkMenuItemSpace );
	DThemeDark.set( "DMenuItemText", DThemeDarkMenuItemText );

	DThemeDark.set( "DMenuItemExpandableBody", DThemeDarkMenuItemExpandableBody );
	DThemeDark.set( "DMenuItemExpandableHeader", DThemeDarkMenuItemExpandableHeader );
	DThemeDark.set( "DMenuItemExpandableItemCheck", DThemeDarkMenuItemExpandableItemCheck );
	DThemeDark.set( "DMenuItemExpandableItemLink", DThemeDarkMenuItemExpandableItemLink );
	DThemeDark.set( "DMenuItemExpandableItemMenu", DThemeDarkMenuItemExpandableItemMenu );
	DThemeDark.set( "DMenuItemExpandableItemSeparator", DThemeDarkMenuItemExpandableItemSeparator );
	DThemeDark.set( "DMenuItemExpandableItemSpace", DThemeDarkMenuItemExpandableItemSpace );
	DThemeDark.set( "DMenuItemExpandableItemText", DThemeDarkMenuItemExpandableItemText );
	DThemeDark.set( "DMenuItemExpandable", DThemeDarkMenuItemExpandable );
};
