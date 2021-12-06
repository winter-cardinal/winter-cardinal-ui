/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkLink } from "../d-theme-dark-link";

export const loadThemeDarkLink = (): void => {
	DThemeDark.set("DLink", DThemeDarkLink);
};
