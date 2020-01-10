/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonCheckRight } from "../theme/dark/d-theme-dark-button-check-right";

export const loadThemeDarkButtonCheckRight = () => {
	DThemeDark.set( "DButtonCheckRight", DThemeDarkButtonCheckRight );
};
