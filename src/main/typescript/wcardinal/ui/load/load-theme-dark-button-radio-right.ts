/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonRadioRight } from "../theme/dark/d-theme-dark-button-radio-right";

export const loadThemeDarkButtonRadioRight = () => {
	DThemeDark.set( "DButtonRadioRight", DThemeDarkButtonRadioRight );
};
