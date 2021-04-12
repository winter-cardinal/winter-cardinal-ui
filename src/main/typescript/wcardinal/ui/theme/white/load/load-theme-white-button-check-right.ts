/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonCheckRight } from "../d-theme-white-button-check-right";

export const loadThemeWhiteButtonCheckRight = (): void => {
	DThemeWhite.set("DButtonCheckRight", DThemeWhiteButtonCheckRight);
};
