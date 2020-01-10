/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkInputText } from "../theme/dark/d-theme-dark-input-text";

export const loadThemeDarkInputText = () => {
	DThemeDark.set( "DInputText", DThemeDarkInputText );
};
