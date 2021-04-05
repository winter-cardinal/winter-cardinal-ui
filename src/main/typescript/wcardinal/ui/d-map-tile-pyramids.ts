/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DMapCoordinate } from "./d-map-coordinate";
import { DMapCoordinates } from "./d-map-coordinates";
import { DMapTilePyramid, DMapTilePyramidPlaneOptions } from "./d-map-tile-pyramid";
import { DMapTilePyramidImpl } from "./d-map-tile-pyramid-impl";
import { DMapTileUrlBuilder } from "./d-map-tile-url-builder";

export const DMapTileUrlBuilderKokudo: DMapTileUrlBuilder = ( tz: number, tx: number, ty: number ): string => {
	if( 5 <= tz ) {
		return `https://cyberjapandata.gsi.go.jp/xyz/pale/${tz}/${tx}/${ty}.png`;
	} else if( 2 <= tz ) {
		return `https://cyberjapandata.gsi.go.jp/xyz/std/${tz}/${tx}/${ty}.png`;
	} else {
		return `https://cyberjapandata.gsi.go.jp/xyz/earthhillshade/${tz}/${tx}/${ty}.png`;
	}
};

export const DMapTileUrlBuilderOsm: DMapTileUrlBuilder = ( tz: number, tx: number, ty: number ): string => {
	return `https://${"abc"[( tx + ty ) % 3]}.tile.openstreetmap.org/${tz}/${tx}/${ty}.png`;
};

export const DMapTileUrlBuilderOsmfj: DMapTileUrlBuilder = ( tz: number, tx: number, ty: number ): string => {
	return `https://j.tile.openstreetmap.jp/${tz}/${tx}/${ty}.png`;
};

export interface DMapTilePyramidsFromOptions {
	canvas: DDiagramCanvasBase<any, any>;
	builder?: DMapTileUrlBuilder;
	coordinate?: DMapCoordinate;
	plane?: Partial<DMapTilePyramidPlaneOptions>;
}

export class DMapTilePyramids {
	protected static MIN: number = 0;
	protected static MAX: number = 18;
	protected static THROTTLE: number = 333;

	protected static toPlaneOptions( options: DMapTilePyramidsFromOptions ): DMapTilePyramidPlaneOptions {
		const plane = options.plane;
		if( plane ) {
			return {
				min: ( plane.min != null ? plane.min : this.MIN ),
				max: ( plane.max != null ? plane.max : this.MAX ),
				throttle: ( plane.throttle != null ? plane.throttle : this.THROTTLE )
			};
		} else {
			return {
				min: this.MIN,
				max: this.MAX,
				throttle: this.THROTTLE
			};
		}
	}

	static from( options: DMapTilePyramidsFromOptions ): DMapTilePyramid {
		return new DMapTilePyramidImpl({
			canvas: options.canvas,
			builder: options.builder || DMapTileUrlBuilderOsmfj,
			mapping: options.canvas.tile.mapping,
			coordinate: options.coordinate || DMapCoordinates.DEFAULT,
			plane: this.toPlaneOptions( options )
		});
	}
}
