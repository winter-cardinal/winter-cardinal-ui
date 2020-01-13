/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonColorGradient } from "../theme/dark/d-theme-dark-button-color-gradient";

export const loadThemeDarkButtonColorGradient = () => {
	DThemeDark.set( "DButtonColorGradient", DThemeDarkButtonColorGradient );
};
