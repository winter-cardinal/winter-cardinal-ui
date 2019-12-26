/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { EThemeWhiteShapeActionValue } from "../theme/default/e-theme-default-shape-action-value";

export const loadThemeWhiteShapeActionValue = () => {
	DThemeWhite.set( "EShapeActionValue", EThemeWhiteShapeActionValue );
};
