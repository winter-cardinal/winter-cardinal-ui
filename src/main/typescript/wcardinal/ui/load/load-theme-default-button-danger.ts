/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonDanger } from "../theme/default/d-theme-default-button-danger";

export const loadThemeWhiteButtonDanger = () => {
	DThemeWhite.set( "DButtonDanger", DThemeWhiteButtonDanger );
};
