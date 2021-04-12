/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonSecondary } from "../d-theme-dark-button-secondary";

export const loadThemeDarkButtonSecondary = (): void => {
	DThemeDark.set("DButtonSecondary", DThemeDarkButtonSecondary);
};
