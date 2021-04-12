/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputReal } from "../d-theme-white-input-real";

export const loadThemeWhiteInputReal = (): void => {
	DThemeWhite.set("DInputReal", DThemeWhiteInputReal);
};
