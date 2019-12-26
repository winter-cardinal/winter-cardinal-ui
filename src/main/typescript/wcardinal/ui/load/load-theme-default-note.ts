/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultNote } from "../theme/default/d-theme-default-note";

export const loadThemeDefaultNote = () => {
	DThemeDefault.set( "DNote", DThemeDefaultNote );
};
