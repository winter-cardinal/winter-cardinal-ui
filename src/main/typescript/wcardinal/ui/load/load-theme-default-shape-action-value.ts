/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { EThemeDefaultShapeActionValue } from "../theme/default/e-theme-default-shape-action-value";

export const loadThemeDefaultShapeActionValue = () => {
	DThemeDefault.set( "EShapeActionValue", EThemeDefaultShapeActionValue );
};
