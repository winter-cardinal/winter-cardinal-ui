/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteBoard } from "../d-theme-white-board";

export const loadThemeWhiteBoard = (): void => {
	DThemeWhite.set("DBoard", DThemeWhiteBoard);
};
