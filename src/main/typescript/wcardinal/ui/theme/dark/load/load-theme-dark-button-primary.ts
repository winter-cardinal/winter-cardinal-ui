/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonPrimary } from "../d-theme-dark-button-primary";

export const loadThemeDarkButtonPrimary = (): void => {
	DThemeDark.set( "DButtonPrimary", DThemeDarkButtonPrimary );
};
