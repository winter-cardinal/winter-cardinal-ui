/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonDanger } from "../d-theme-white-button-danger";

export const loadThemeWhiteButtonDanger = () => {
	DThemeWhite.set( "DButtonDanger", DThemeWhiteButtonDanger );
};
