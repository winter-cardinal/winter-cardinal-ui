/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputReal } from "../d-theme-dark-input-real";

export const loadThemeDarkInputReal = (): void => {
	DThemeDark.set("DInputReal", DThemeDarkInputReal);
};
