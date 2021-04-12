/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonRadio } from "../d-theme-white-button-radio";

export const loadThemeWhiteButtonRadio = (): void => {
	DThemeWhite.set("DButtonRadio", DThemeWhiteButtonRadio);
};
