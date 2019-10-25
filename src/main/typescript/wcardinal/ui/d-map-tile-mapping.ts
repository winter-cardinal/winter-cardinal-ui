/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DMapTileMappingPoint {
	lon: number;
	lat: number;
}

export interface DMapTileMapping {
	from: DMapTileMappingPoint;
	to: DMapTileMappingPoint;
}
