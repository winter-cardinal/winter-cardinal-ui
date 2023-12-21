/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { EThemeWhiteEnUsShapePointsFormatter } from "../e-theme-white-en-us-shape-points-formatter";

export const loadThemeWhiteEnUsShapePointsFormatter = (): void => {
	DThemeWhite.set("EShapePointsFormatter", EThemeWhiteEnUsShapePointsFormatter);
};
