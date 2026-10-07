/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBoundary } from "../e-shape-boundary";

export interface EShapePolygonTriangulatedLike {
	readonly id: number;
	readonly vertices: number[];
	readonly nvertices: number;
	readonly distances: number[];
	readonly lengths: number[];
	readonly clippings: number[];
	/** Per-vertex stroke widths. When omitted, the shape's stroke width is used. */
	readonly strokeWidths?: number[];
	readonly uvs: number[];
	readonly indices: number[];
	readonly nindices: number;
	readonly boundary: EShapeBoundary;
}
