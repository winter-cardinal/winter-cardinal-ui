/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultExpandable } from "../theme/default/d-theme-default-expandable";
import { DThemeDefaultExpandableHeader } from "../theme/default/d-theme-default-expandable-header";

export const loadThemeDefaultExpandable = () => {
	DThemeDefault.set( "DExpandableHeader", DThemeDefaultExpandableHeader );
	DThemeDefault.set( "DExpandable", DThemeDefaultExpandable );
};
