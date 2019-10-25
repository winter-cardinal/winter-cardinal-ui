/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DBase } from "./d-base";
import { DMapCoordinate } from "./d-map-coordinate";
import { DMapTileMapping } from "./d-map-tile-mapping";
import { DMapTileUrlBuilder } from "./d-map-tile-url-builder";

export interface DMapTilePyramidOptions {
	canvas: DBase;
	mapping: DMapTileMapping;
	builder: DMapTileUrlBuilder;
	coordinate: DMapCoordinate;
	plane: {
		min: number;
		max: number;
		throttle: number;
	};
}

export interface DMapTilePyramid extends utils.EventEmitter {
	readonly coordinate: DMapCoordinate;
	mapping: DMapTileMapping;
	move( z: number, lon0: number, lat0: number, lon1: number, lat1: number ): this;
	fit(): this;
	destroy(): this;
}
