/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultBoard } from "../theme/default/d-theme-default-board";

export const loadThemeDefaultBoard = () => {
	DThemeDefault.set( "DBoard", DThemeDefaultBoard );
};
