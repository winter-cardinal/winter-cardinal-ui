/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMapCoordinate, DMapPoint } from "./d-map-coordinate";

export class DMapCoordinateEPSG3857 implements DMapCoordinate {
	protected static CIRCUMFERENCE_HALF: number = Math.PI * 6378137 /* Approximate earth radius in meter */;
	protected _tileSize: number;

	constructor( tileSize: number = 256 ) {
		this._tileSize = tileSize;
	}

	getTileSize(): number {
		return this._tileSize;
	}

	/**
	 * Converts the given (lon, lat) point in WGS84 to (x, y) in EPSG:900913.
	 * The origin of the converted point (x, y) is at the middle-left corner.
	 * The `meters` can be the same instance that is passed in as the `lonlat`.
	 *
	 * @param lonlat (lon, lat) point
	 * @param meters (x, y) point in meters converted from the given lonlat.
	 * @return (x, y) point in meters
	 * @see https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/
	 * @see https://qiita.com/MALORGIS/items/1a9114dd090e5b891bf7
	 */
	lonLatToMeters( lonlat: DMapPoint, meters: DMapPoint ): DMapPoint {
		const C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
		meters.x = lonlat.x * C / 180;
		meters.y = Math.log( Math.tan( ( 90 + lonlat.y ) * Math.PI / 360 ) ) * C / Math.PI;
		return meters;
	}

	/**
	 * The `lonlat` can be the same instance that is passed in as the `meters`.
	 *
	 * @param meters
	 * @param lonlat
	 */
	metersToLonLat( meters: DMapPoint, lonlat: DMapPoint ): DMapPoint {
		const C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
		lonlat.x = meters.x / C * 180;
		lonlat.y = Math.atan( Math.exp( meters.y * Math.PI / C ) ) * 360 / Math.PI - 90;
		return lonlat;
	}

	/**
	 * Converts pixel coordinates in given zoom level of pyramid to EPSG:900913.
	 * The origin of the `pixels` is the top-left corner.
	 * The `meters` can be the same instance that is passed in as the `pixels`.
	 */
	pixelsToMeters( pixels: DMapPoint, tz: number, tileSize: number, meters: DMapPoint ): DMapPoint {
		const R = this.toResolution( tz, tileSize );
		const C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
		meters.x = pixels.x * R - C;
		meters.y = C - pixels.y * R;
		return meters;
	}

	/**
	 * Converts EPSG:900913 to pyramid pixel coordinates in given zoom level.
	 * The origin of the pixels is the top-left corner.
	 * The `pixels` can be the same instance that is passed in as the `meters`.
	 */
	metersToPixels( meters: DMapPoint, tz: number, tileSize: number, pixels: DMapPoint ): DMapPoint {
		const R = this.toResolution( tz, tileSize );
		const C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
		pixels.x = ( meters.x + C ) / R;
		pixels.y = ( C - meters.y ) / R;
		return pixels;
	}

	/**
	 * Returns a tile covering region in given pixel coordinates.
	 * The origin of the tile is the top-left corner.
	 * The `tile` can be the same instance that is passed in as the `pixels`.
	 */
	pixelsToTile( pixels: DMapPoint, tileSize: number, tile: DMapPoint ): DMapPoint {
		tile.x = Math.ceil( pixels.x / tileSize ) - 1;
		tile.y = Math.ceil( pixels.y / tileSize ) - 1;
		return tile;
	}

	/**
	 * The origin of the tile is the top-left corner.
	 * The `tile` can be the same instance that is passed in as the `meters`.
	 */
	metersToTile( meters: DMapPoint, tz: number, tile: DMapPoint ): DMapPoint {
		const C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
		const Z = 1 << tz;
		tile.x = Math.ceil( 0.5 * ( meters.x / C + 1 ) * Z ) - 1;
		tile.y = Math.ceil( 0.5 * ( 1 - meters.y / C ) * Z ) - 1;
		return tile;
	}

	lonLatToTile( lonlat: DMapPoint, tz: number, tile: DMapPoint ): DMapPoint {
		return this.metersToTile( this.lonLatToMeters( lonlat, tile ), tz, tile );
	}

	lonLatToPixels( lonlat: DMapPoint, tz: number, tileSize: number, pixels: DMapPoint ): DMapPoint {
		return this.metersToPixels( this.lonLatToMeters( lonlat, pixels ), tz, tileSize, pixels );
	}

	pixelsToLonLat( pixels: DMapPoint, tz: number, tileSize: number, lonlat: DMapPoint ): DMapPoint {
		return this.metersToLonLat( this.pixelsToMeters( pixels, tz, tileSize, lonlat ), lonlat );
	}

	/**
	 * The `pixels` can be the same instance that is passed in as the `tile`.
	 */
	tileToPixels( tile: DMapPoint, tileSize: number, pixels: DMapPoint ): DMapPoint {
		pixels.x = tile.x * tileSize;
		pixels.y = tile.y * tileSize;
		return pixels;
	}

	/**
	 * Returns bounds of the given tile in EPSG:900913 coordinates
	 * The `meters` can be the same instance that is passed in as the `tile`.
	 */
	tileToMeters( tile: DMapPoint, tz: number, meters: DMapPoint ): DMapPoint {
		const R = this.toResolutionMeter( tz );
		const C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
		meters.x = tile.x * R + C;
		meters.y = C - tile.y * R;
		return meters;
	}

	protected toResolutionMeter( tz: number ): number {
		return ( 2 * DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF ) / ( 1 << tz );
	}

	protected toResolution( tz: number, tileSize: number ): number {
		return ( 2 * DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF ) / ( tileSize << tz );
	}

	toTileCount( tz: number ): number {
		return (1 << tz);
	}

	toTileCode( tz: number, tx: number, ty: number ): number {
		return (tx << tz) + ty;
	}
}
