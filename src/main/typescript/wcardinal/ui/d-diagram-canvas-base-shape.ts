/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./shape/e-shape";

export interface DDiagramCanvasBaseShapeLayer {
	children: EShape[];
}

export interface DDiagramCanvasBaseShapeLayerContainer {
	children: DDiagramCanvasBaseShapeLayer[];
}

export interface DDiagramCanvasBaseShapeCanvas {
	layer: DDiagramCanvasBaseShapeLayerContainer;
}

export interface DDiagramCanvasBaseShape {
	each(iteratee: (shape: EShape) => boolean, ignoreCapability?: boolean): this;
}
