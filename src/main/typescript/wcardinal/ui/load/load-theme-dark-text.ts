/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkText } from "../theme/dark/d-theme-dark-text";

export const loadThemeDarkText = () => {
	DThemeDark.set( "DText", DThemeDarkText );
};
