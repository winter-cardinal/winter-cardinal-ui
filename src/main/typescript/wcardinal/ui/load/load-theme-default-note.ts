/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteNote } from "../theme/default/d-theme-default-note";

export const loadThemeWhiteNote = () => {
	DThemeWhite.set( "DNote", DThemeWhiteNote );
};
