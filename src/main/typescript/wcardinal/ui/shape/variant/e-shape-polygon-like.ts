/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePolygonTriangulatedLike } from "./e-shape-polygon-triangulated-like";

export interface EShapePolygonLike {
	readonly triangulated: EShapePolygonTriangulatedLike;
}
