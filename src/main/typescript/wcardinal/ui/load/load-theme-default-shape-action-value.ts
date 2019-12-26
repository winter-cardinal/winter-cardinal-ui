/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { EThemeWhiteShapeActionValue } from "../theme/white/e-theme-white-shape-action-value";

export const loadThemeWhiteShapeActionValue = () => {
	DThemeWhite.set( "EShapeActionValue", EThemeWhiteShapeActionValue );
};
