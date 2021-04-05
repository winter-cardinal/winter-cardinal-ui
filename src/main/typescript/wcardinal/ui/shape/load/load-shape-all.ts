/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadShapeBar } from "./load-shape-bar";
import { loadShapeCircle } from "./load-shape-circle";
import { loadShapeEmbedded } from "./load-shape-embedded";
import { loadShapeGroup } from "./load-shape-group";
import { loadShapeGroupShadowed } from "./load-shape-group-shadowed";
import { loadShapeImage } from "./load-shape-image";
import { loadShapeImageSdf } from "./load-shape-image-sdf";
import { loadShapeLabel } from "./load-shape-label";
import { loadShapeLine } from "./load-shape-line";
import { loadShapeLineOfCircles } from "./load-shape-line-of-circles";
import { loadShapeLineOfRectangleRoundeds } from "./load-shape-line-of-rectangle-roundeds";
import { loadShapeLineOfRectangles } from "./load-shape-line-of-rectangles";
import { loadShapeLineOfTriangleRoundeds } from "./load-shape-line-of-triangle-roundeds";
import { loadShapeLineOfTriangles } from "./load-shape-line-of-triangles";
import { loadShapeNull } from "./load-shape-null";
import { loadShapeRectangle } from "./load-shape-rectangle";
import { loadShapeRectangleRounded } from "./load-shape-rectangle-rounded";
import { loadShapeTriangle } from "./load-shape-triangle";
import { loadShapeTriangleRounded } from "./load-shape-triangle-rounded";

export const loadShapeAll = (): void => {
	loadShapeBar();
	loadShapeCircle();
	loadShapeEmbedded();
	loadShapeGroupShadowed();
	loadShapeGroup();
	loadShapeImage();
	loadShapeImageSdf();
	loadShapeLabel();
	loadShapeLine();
	loadShapeNull();
	loadShapeRectangleRounded();
	loadShapeRectangle();
	loadShapeTriangleRounded();
	loadShapeTriangle();
	loadShapeLineOfCircles();
	loadShapeLineOfRectangleRoundeds();
	loadShapeLineOfRectangles();
	loadShapeLineOfTriangleRoundeds();
	loadShapeLineOfTriangles();
};
