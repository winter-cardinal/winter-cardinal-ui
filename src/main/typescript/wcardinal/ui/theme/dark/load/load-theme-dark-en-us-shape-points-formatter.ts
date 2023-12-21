/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { EThemeDarkEnUsShapePointsFormatter } from "../e-theme-dark-en-us-shape-points-formatter";

export const loadThemeDarkEnUsShapePointsFormatter = (): void => {
	DThemeDark.set("EShapePointsFormatter", EThemeDarkEnUsShapePointsFormatter);
};
