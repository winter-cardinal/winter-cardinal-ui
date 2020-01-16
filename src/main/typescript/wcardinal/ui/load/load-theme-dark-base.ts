/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkBase } from "../theme/dark/d-theme-dark-base";

export const loadThemeDarkBase = () => {
	DThemeDark.set( "DBase", DThemeDarkBase );
};
