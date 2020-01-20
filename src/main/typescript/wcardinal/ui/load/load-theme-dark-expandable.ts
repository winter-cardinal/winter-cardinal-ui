/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkExpandable } from "../theme/dark/d-theme-dark-expandable";
import { DThemeDarkExpandableHeader } from "../theme/dark/d-theme-dark-expandable-header";

export const loadThemeDarkExpandable = () => {
	DThemeDark.set( "DExpandableHeader", DThemeDarkExpandableHeader );
	DThemeDark.set( "DExpandable", DThemeDarkExpandable );
};
