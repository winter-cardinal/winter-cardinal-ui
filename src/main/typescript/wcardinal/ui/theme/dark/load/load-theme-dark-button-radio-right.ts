/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonRadioRight } from "../d-theme-dark-button-radio-right";

export const loadThemeDarkButtonRadioRight = (): void => {
	DThemeDark.set("DButtonRadioRight", DThemeDarkButtonRadioRight);
};
