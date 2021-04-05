/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButton } from "../d-theme-dark-button";

export const loadThemeDarkButton = (): void => {
	DThemeDark.set( "DButton", DThemeDarkButton );
};
