/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { EThemeWhiteShape } from "../e-theme-white-shape";

export const loadThemeWhiteShape = (): void => {
	DThemeWhite.set("EShape", EThemeWhiteShape);
};
