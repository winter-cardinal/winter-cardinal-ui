/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputLabel } from "../d-theme-dark-input-label";

export const loadThemeDarkInputLabel = () => {
	DThemeDark.set( "DInputLabel", DThemeDarkInputLabel );
};
