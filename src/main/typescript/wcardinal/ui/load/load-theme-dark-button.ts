/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkButton } from "../theme/dark/d-theme-dark-button";

export const loadThemeDarkButton = () => {
	DThemeDark.set( "DButton", DThemeDarkButton );
};
