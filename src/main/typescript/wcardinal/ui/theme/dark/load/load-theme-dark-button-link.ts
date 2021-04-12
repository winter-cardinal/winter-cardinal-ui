/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonLink } from "../d-theme-dark-button-link";

export const loadThemeDarkButtonLink = (): void => {
	DThemeDark.set("DButtonLink", DThemeDarkButtonLink);
};
