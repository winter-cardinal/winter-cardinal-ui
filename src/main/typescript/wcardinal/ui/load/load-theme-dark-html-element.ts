/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkHTMLElement } from "../theme/dark/d-theme-dark-html-element";

export const loadThemeDarkHTMLElement = () => {
	DThemeDark.set( "DHTMLElement", DThemeDarkHTMLElement );
};
