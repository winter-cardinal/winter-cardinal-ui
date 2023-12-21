/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { EThemeDarkJaJpShapePointsFormatter } from "../e-theme-dark-ja-jp-shape-points-formatter";

export const loadThemeDarkJaJpShapePointsFormatter = (): void => {
	DThemeDark.set("EShapePointsFormatter", EThemeDarkJaJpShapePointsFormatter);
};
