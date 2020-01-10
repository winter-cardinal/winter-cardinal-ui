/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonFile } from "../theme/dark/d-theme-dark-button-file";

export const loadThemeDarkButtonFile = () => {
	DThemeDark.set( "DButtonFile", DThemeDarkButtonFile );
};
