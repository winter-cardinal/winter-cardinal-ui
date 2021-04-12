/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonAmbient } from "../d-theme-dark-button-ambient";

export const loadThemeDarkButtonAmbient = (): void => {
	DThemeDark.set("DButtonAmbient", DThemeDarkButtonAmbient);
};
