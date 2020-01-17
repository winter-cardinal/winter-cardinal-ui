/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkInputAndLabel } from "../theme/dark/d-theme-dark-input-and-label";

export const loadThemeDarkInputAndLabel = () => {
	DThemeDark.set( "DInputAndLabel", DThemeDarkInputAndLabel );
};
