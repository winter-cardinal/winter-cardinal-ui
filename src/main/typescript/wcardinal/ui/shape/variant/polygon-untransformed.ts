/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { PolygonCenter } from "./polygon-center";

export type PolygonUntransformedBoundary = [number, number, number, number];

export interface PolygonUntransformed {
	vertices: number[];
	normals: number[];
	boundary: PolygonUntransformedBoundary;
	center: PolygonCenter;
}
