/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataValue } from "./shape/e-shape-data-value";

export interface DDiagramCanvasDataMap {
	[id: string]: EShapeDataValue[] | undefined;
}
