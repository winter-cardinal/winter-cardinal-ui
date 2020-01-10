/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkInputInteger } from "../theme/dark/d-theme-dark-input-integer";

export const loadThemeDarkInputInteger = () => {
	DThemeDark.set( "DInputInteger", DThemeDarkInputInteger );
};
