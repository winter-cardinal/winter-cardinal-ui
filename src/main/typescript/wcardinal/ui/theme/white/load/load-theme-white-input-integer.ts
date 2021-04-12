/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputInteger } from "../d-theme-white-input-integer";

export const loadThemeWhiteInputInteger = (): void => {
	DThemeWhite.set("DInputInteger", DThemeWhiteInputInteger);
};
