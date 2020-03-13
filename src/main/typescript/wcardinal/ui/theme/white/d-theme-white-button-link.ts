/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeButtonLink } from "../../d-button-link";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
import { DThemeWhiteLinks } from "./d-theme-white-links";

DThemeWhiteLinks.init();

export class DThemeWhiteButtonLink extends DThemeWhiteButtonAmbient implements DThemeButtonLink {
	getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeWhiteLinks.getLinkMenuOptions();
	}
}
