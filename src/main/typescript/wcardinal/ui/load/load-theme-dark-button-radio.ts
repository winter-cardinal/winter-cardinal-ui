/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonRadio } from "../theme/dark/d-theme-dark-button-radio";

export const loadThemeDarkButtonRadio = () => {
	DThemeDark.set( "DButtonRadio", DThemeDarkButtonRadio );
};
