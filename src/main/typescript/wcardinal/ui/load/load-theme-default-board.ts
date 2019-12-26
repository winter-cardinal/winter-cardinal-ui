/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteBoard } from "../theme/white/d-theme-white-board";

export const loadThemeWhiteBoard = () => {
	DThemeWhite.set( "DBoard", DThemeWhiteBoard );
};
