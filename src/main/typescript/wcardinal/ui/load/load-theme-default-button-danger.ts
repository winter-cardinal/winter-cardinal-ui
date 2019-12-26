/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonDanger } from "../theme/default/d-theme-default-button-danger";

export const loadThemeDefaultButtonDanger = () => {
	DThemeDefault.set( "DButtonDanger", DThemeDefaultButtonDanger );
};
