/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonPrimary } from "../theme/dark/d-theme-dark-button-primary";

export const loadThemeDarkButtonPrimary = () => {
	DThemeDark.set( "DButtonPrimary", DThemeDarkButtonPrimary );
};
