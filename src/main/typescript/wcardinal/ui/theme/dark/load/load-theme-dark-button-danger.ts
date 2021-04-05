/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonDanger } from "../d-theme-dark-button-danger";

export const loadThemeDarkButtonDanger = (): void => {
	DThemeDark.set( "DButtonDanger", DThemeDarkButtonDanger );
};
