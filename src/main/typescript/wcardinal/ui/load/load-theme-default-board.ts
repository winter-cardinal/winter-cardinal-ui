/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteBoard } from "../theme/default/d-theme-default-board";

export const loadThemeWhiteBoard = () => {
	DThemeWhite.set( "DBoard", DThemeWhiteBoard );
};
