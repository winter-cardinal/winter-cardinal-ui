/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonCheckRight } from "../d-theme-dark-button-check-right";

export const loadThemeDarkButtonCheckRight = () => {
	DThemeDark.set( "DButtonCheckRight", DThemeDarkButtonCheckRight );
};
