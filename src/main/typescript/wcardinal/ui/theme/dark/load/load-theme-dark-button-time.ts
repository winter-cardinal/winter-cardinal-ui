/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonTime } from "../d-theme-dark-button-time";
import { loadThemeDarkDialogTime } from "./load-theme-dark-dialog-time";

export const loadThemeDarkButtonTime = (): void => {
	DThemeDark.set( "DButtonTime", DThemeDarkButtonTime );
	loadThemeDarkDialogTime();
};
