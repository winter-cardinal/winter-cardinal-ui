/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeButtonLink } from "../../d-button-link";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkLinks } from "./d-theme-dark-links";

DThemeDarkLinks.init();

export class DThemeDarkButtonLink<VALUE = unknown> extends DThemeDarkButtonAmbient<VALUE>
	implements DThemeButtonLink<VALUE> {

	getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeDarkLinks.getLinkMenuOptions();
	}
}
