/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDiagram } from "../d-theme-dark-diagram";
import { DThemeDarkDiagramCanvas } from "../d-theme-dark-diagram-canvas";
import { loadThemeDarkShape } from "./load-theme-dark-shape";

export const loadThemeDarkDiagram = () => {
	DThemeDark.set( "DDiagram", DThemeDarkDiagram );
	DThemeDark.set( "DDiagramCanvas", DThemeDarkDiagramCanvas );
	loadThemeDarkShape();
};
