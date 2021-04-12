/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkNote } from "../d-theme-dark-note";

export const loadThemeDarkNote = (): void => {
	DThemeDark.set("DNote", DThemeDarkNote);
};
