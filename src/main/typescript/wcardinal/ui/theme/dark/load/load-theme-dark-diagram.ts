/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDiagram } from "../d-theme-dark-diagram";
import { DThemeDarkDiagramCanvas } from "../d-theme-dark-diagram-canvas";

export const loadThemeDarkDiagram = () => {
	DThemeDark.set( "DDiagram", DThemeDarkDiagram );
	DThemeDark.set( "DDiagramCanvas", DThemeDarkDiagramCanvas );
};
