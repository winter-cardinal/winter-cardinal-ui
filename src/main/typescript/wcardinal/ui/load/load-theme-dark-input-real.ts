/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkInputReal } from "../theme/dark/d-theme-dark-input-real";

export const loadThemeDarkInputReal = () => {
	DThemeDark.set( "DInputReal", DThemeDarkInputReal );
};
