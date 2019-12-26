/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonCheckRight } from "../theme/default/d-theme-default-button-check-right";

export const loadThemeWhiteButtonCheckRight = () => {
	DThemeWhite.set( "DButtonCheckRight", DThemeWhiteButtonCheckRight );
};
