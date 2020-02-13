/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkSelect } from "../d-theme-dark-select";
import { DThemeDarkSelectBase } from "../d-theme-dark-select-base";
import { DThemeDarkSelectMultiple } from "../d-theme-dark-select-multiple";

export const loadThemeDarkSelect = () => {
	DThemeDark.set( "DSelectBase", DThemeDarkSelectBase );
	DThemeDark.set( "DSelectMultiple", DThemeDarkSelectMultiple );
	DThemeDark.set( "DSelect", DThemeDarkSelect );
};
