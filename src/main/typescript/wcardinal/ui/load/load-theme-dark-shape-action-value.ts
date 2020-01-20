/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { EThemeDarkShapeActionValue } from "../theme/dark/e-theme-dark-shape-action-value";

export const loadThemeDarkShapeActionValue = () => {
	DThemeDark.set( "EShapeActionValue", EThemeDarkShapeActionValue );
};
