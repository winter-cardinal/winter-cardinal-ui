/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsLink } from "../d-theme-dark-en-us-link";

export const loadThemeDarkEnUsLink = (): void => {
	DThemeDark.set("DLink", DThemeDarkEnUsLink);
};
