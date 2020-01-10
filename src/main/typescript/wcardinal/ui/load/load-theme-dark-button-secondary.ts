/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonSecondary } from "../theme/dark/d-theme-dark-button-secondary";

export const loadThemeDarkButtonSecondary = () => {
	DThemeDark.set( "DButtonSecondary", DThemeDarkButtonSecondary );
};
