/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDiagram } from "../theme/default/d-theme-default-diagram";
import { DThemeWhiteDiagramCanvas } from "../theme/default/d-theme-default-diagram-canvas";

export const loadThemeWhiteDiagram = () => {
	DThemeWhite.set( "DDiagram", DThemeWhiteDiagram );
	DThemeWhite.set( "DDiagramCanvas", DThemeWhiteDiagramCanvas );
};
