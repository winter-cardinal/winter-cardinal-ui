/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputText } from "../d-theme-dark-input-text";

export const loadThemeDarkInputText = (): void => {
	DThemeDark.set("DInputText", DThemeDarkInputText);
};
