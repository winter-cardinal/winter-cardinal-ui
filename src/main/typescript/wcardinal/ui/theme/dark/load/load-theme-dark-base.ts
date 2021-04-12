/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkBase } from "../d-theme-dark-base";

export const loadThemeDarkBase = (): void => {
	DThemeDark.set("DBase", DThemeDarkBase);
};
