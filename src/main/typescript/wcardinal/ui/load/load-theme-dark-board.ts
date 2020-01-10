/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkBoard } from "../theme/dark/d-theme-dark-board";

export const loadThemeDarkBoard = () => {
	DThemeDark.set( "DBoard", DThemeDarkBoard );
};
