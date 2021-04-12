/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputAndLabel } from "../d-theme-dark-input-and-label";

export const loadThemeDarkInputAndLabel = (): void => {
	DThemeDark.set("DInputAndLabel", DThemeDarkInputAndLabel);
};
