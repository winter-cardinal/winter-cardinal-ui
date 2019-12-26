/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDiagram } from "../theme/default/d-theme-default-diagram";
import { DThemeDefaultDiagramCanvas } from "../theme/default/d-theme-default-diagram-canvas";

export const loadThemeDefaultDiagram = () => {
	DThemeDefault.set( "DDiagram", DThemeDefaultDiagram );
	DThemeDefault.set( "DDiagramCanvas", DThemeDefaultDiagramCanvas );
};
