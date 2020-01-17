/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonTime } from "../theme/dark/d-theme-dark-button-time";
import { loadThemeDarkDialogTime } from "./load-theme-dark-dialog-time";

export const loadThemeDarkButtonTime = () => {
	DThemeDark.set( "DButtonTime", DThemeDarkButtonTime );
	loadThemeDarkDialogTime();
};
