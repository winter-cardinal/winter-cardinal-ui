/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultHTMLElement } from "../theme/default/d-theme-default-html-element";

export const loadThemeDefaultHTMLElement = () => {
	DThemeDefault.set( "DHTMLElement", DThemeDefaultHTMLElement );
};
