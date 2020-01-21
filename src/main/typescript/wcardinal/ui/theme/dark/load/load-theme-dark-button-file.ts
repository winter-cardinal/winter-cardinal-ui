/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonFile } from "../d-theme-dark-button-file";

export const loadThemeDarkButtonFile = () => {
	DThemeDark.set( "DButtonFile", DThemeDarkButtonFile );
};
