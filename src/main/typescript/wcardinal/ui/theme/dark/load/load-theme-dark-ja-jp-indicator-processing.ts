/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpIndicatorProcessing } from "../d-theme-dark-ja-jp-indicator-processing";

export const loadThemeDarkJaJpIndicatorProcessing = (): void => {
	DThemeDark.set("DIndicatorProcessing", DThemeDarkJaJpIndicatorProcessing);
};
