/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonRadio } from "../d-theme-dark-button-radio";

export const loadThemeDarkButtonRadio = (): void => {
	DThemeDark.set( "DButtonRadio", DThemeDarkButtonRadio );
};
