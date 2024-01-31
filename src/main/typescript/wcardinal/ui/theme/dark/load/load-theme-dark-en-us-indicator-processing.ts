/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsIndicatorProcessing } from "../d-theme-dark-en-us-indicator-processing";

export const loadThemeDarkEnUsIndicatorProcessing = (): void => {
	DThemeDark.set("DIndicatorProcessing", DThemeDarkEnUsIndicatorProcessing);
};
