/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonCheck } from "../theme/dark/d-theme-dark-button-check";

export const loadThemeDarkButtonCheck = () => {
	DThemeDark.set( "DButtonCheck", DThemeDarkButtonCheck );
};
