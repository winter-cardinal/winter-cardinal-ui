/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadShapeBar } from "./load-shape-bar";
import { loadShapeCircle } from "./load-shape-circle";
import { loadShapeGroup } from "./load-shape-group";
import { loadShapeGroupShadowed } from "./load-shape-group-shadowed";
import { loadShapeImage } from "./load-shape-image";
import { loadShapeLabel } from "./load-shape-label";
import { loadShapeLine } from "./load-shape-line";
import { loadShapeNull } from "./load-shape-null";
import { loadShapeRectangle } from "./load-shape-rectangle";
import { loadShapeRectangleRounded } from "./load-shape-rectangle-rounded";
import { loadShapeTriangle } from "./load-shape-triangle";
import { loadShapeTriangleRounded } from "./load-shape-triangle-rounded";

export const loadShapeAll = () => {
	loadShapeBar();
	loadShapeCircle();
	loadShapeGroupShadowed();
	loadShapeGroup();
	loadShapeImage();
	loadShapeLabel();
	loadShapeLine();
	loadShapeNull();
	loadShapeRectangleRounded();
	loadShapeRectangle();
	loadShapeTriangleRounded();
	loadShapeTriangle();
};
