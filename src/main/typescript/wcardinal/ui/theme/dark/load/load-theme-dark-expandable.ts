/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkExpandable } from "../d-theme-dark-expandable";
import { DThemeDarkExpandableHeader } from "../d-theme-dark-expandable-header";

export const loadThemeDarkExpandable = () => {
	DThemeDark.set( "DExpandableHeader", DThemeDarkExpandableHeader );
	DThemeDark.set( "DExpandable", DThemeDarkExpandable );
};
