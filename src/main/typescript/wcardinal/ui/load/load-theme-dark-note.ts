/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkNote } from "../theme/dark/d-theme-dark-note";

export const loadThemeDarkNote = () => {
	DThemeDark.set( "DNote", DThemeDarkNote );
};
