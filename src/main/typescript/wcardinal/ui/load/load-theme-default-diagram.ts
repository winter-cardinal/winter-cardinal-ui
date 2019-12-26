/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDiagram } from "../theme/white/d-theme-white-diagram";
import { DThemeWhiteDiagramCanvas } from "../theme/white/d-theme-white-diagram-canvas";

export const loadThemeWhiteDiagram = () => {
	DThemeWhite.set( "DDiagram", DThemeWhiteDiagram );
	DThemeWhite.set( "DDiagramCanvas", DThemeWhiteDiagramCanvas );
};
