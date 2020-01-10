/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButtonDanger } from "../theme/dark/d-theme-dark-button-danger";

export const loadThemeDarkButtonDanger = () => {
	DThemeDark.set( "DButtonDanger", DThemeDarkButtonDanger );
};
