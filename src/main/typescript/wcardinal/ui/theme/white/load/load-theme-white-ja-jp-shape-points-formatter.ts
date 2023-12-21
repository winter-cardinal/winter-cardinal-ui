/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { EThemeWhiteJaJpShapePointsFormatter } from "../e-theme-white-ja-jp-shape-points-formatter";

export const loadThemeWhiteJaJpShapePointsFormatter = (): void => {
	DThemeWhite.set("EShapePointsFormatter", EThemeWhiteJaJpShapePointsFormatter);
};
