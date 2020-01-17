/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkInputLabel } from "../theme/dark/d-theme-dark-input-label";

export const loadThemeDarkInputLabel = () => {
	DThemeDark.set( "DInputLabel", DThemeDarkInputLabel );
};
