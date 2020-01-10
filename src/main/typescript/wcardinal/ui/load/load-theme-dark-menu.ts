/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkMenu } from "../theme/dark/d-theme-dark-menu";

export const loadThemeDarkMenu = () => {
	DThemeDark.set( "DMenu", DThemeDarkMenu );
};
