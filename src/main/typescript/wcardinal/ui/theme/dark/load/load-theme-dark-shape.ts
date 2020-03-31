/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { EThemeDarkShape } from "../e-theme-dark-shape";

export const loadThemeDarkShape = () => {
	DThemeDark.set( "EShape", EThemeDarkShape );
};
