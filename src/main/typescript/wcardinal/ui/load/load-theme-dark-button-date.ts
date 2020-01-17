/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonDate } from "../theme/dark/d-theme-dark-button-date";
import { loadThemeDarkDialogDate } from "./load-theme-dark-dialog-date";

export const loadThemeDarkButtonDate = () => {
	DThemeDark.set( "DButtonDate", DThemeDarkButtonDate );
	loadThemeDarkDialogDate();
};
