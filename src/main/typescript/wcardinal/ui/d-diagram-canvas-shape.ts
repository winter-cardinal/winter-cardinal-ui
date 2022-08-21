/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasBaseShape } from "./d-diagram-canvas-base-shape";
import { EShape } from "./shape/e-shape";

export interface DDiagramCanvasShape extends DDiagramCanvasBaseShape {
	add(id: string, shape: EShape): void;
	get(id: string): EShape | null;
	getAll(id: string): EShape[];
}
