/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkText } from "../d-theme-dark-text";

export const loadThemeDarkText = (): void => {
	DThemeDark.set("DText", DThemeDarkText);
};
