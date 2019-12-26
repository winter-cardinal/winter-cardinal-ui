/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonSecondary } from "../theme/default/d-theme-default-button-secondary";

export const loadThemeDefaultButtonSecondary = () => {
	DThemeDefault.set( "DButtonSecondary", DThemeDefaultButtonSecondary );
};
