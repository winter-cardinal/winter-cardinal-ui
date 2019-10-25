/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteNote } from "../theme/white/d-theme-white-note";

export const loadThemeWhiteNote = () => {
	DThemeWhite.set( "DNote", DThemeWhiteNote );
};
