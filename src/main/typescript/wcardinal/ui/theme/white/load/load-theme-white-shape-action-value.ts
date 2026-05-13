/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { EThemeWhiteShapeActionValue } from "../e-theme-white-shape-action-value";
import { EThemeWhiteShapeActionValueOpen } from "../e-theme-white-shape-action-value-open";

export const loadThemeWhiteShapeActionValue = (): void => {
	DThemeWhite.set("EShapeActionValue", EThemeWhiteShapeActionValue);
	DThemeWhite.set("EShapeActionValueOpen", EThemeWhiteShapeActionValueOpen);
};
