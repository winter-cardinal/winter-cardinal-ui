/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpIndicatorProcessing } from "../d-theme-white-ja-jp-indicator-processing";

export const loadThemeWhiteJaJpIndicatorProcessing = (): void => {
	DThemeWhite.set("DIndicatorProcessing", DThemeWhiteJaJpIndicatorProcessing);
};
