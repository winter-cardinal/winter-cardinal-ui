/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkBoard } from "../d-theme-dark-board";

export const loadThemeDarkBoard = (): void => {
	DThemeDark.set( "DBoard", DThemeDarkBoard );
};
