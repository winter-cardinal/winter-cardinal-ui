/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkView } from "../theme/dark/d-theme-dark-view";

export const loadThemeDarkView = () => {
	DThemeDark.set( "DView", DThemeDarkView );
};
