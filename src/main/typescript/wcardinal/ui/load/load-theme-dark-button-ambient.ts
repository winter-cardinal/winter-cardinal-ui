/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonAmbient } from "../theme/dark/d-theme-dark-button-ambient";

export const loadThemeDarkButtonAmbient = () => {
	DThemeDark.set( "DButtonAmbient", DThemeDarkButtonAmbient );
};
