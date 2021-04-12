/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonCheck } from "../d-theme-dark-button-check";

export const loadThemeDarkButtonCheck = (): void => {
	DThemeDark.set("DButtonCheck", DThemeDarkButtonCheck);
};
