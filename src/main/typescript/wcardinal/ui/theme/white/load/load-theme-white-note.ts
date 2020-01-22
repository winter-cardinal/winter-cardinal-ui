/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteNote } from "../d-theme-white-note";

export const loadThemeWhiteNote = () => {
	DThemeWhite.set( "DNote", DThemeWhiteNote );
};
