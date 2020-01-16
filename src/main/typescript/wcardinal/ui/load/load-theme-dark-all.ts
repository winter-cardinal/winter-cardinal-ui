/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { loadThemeDark } from "./load-theme-dark";
import { loadThemeDarkBase } from "./load-theme-dark-base";

export const loadThemeDarkAll = () => {
	loadThemeDark();
	loadThemeDarkBase();
};
