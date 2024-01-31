/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsIndicatorProcessing } from "../d-theme-white-en-us-indicator-processing";

export const loadThemeWhiteEnUsIndicatorProcessing = (): void => {
	DThemeWhite.set("DIndicatorProcessing", DThemeWhiteEnUsIndicatorProcessing);
};
