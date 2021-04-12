/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DMapPoint {
	x: number;
	y: number;
}

export interface DMapCoordinate {
	getTileSize(): number;

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
	lonLatToMeters(lonlat: DMapPoint, meters: DMapPoint): DMapPoint;

	/**
	 * The `lonlat` can be the same instance that is passed in as the `meters`.
	 *
	 * @param meters
	 * @param lonlat
	 */
	metersToLonLat(meters: DMapPoint, lonlat: DMapPoint): DMapPoint;

	/**
	 * Converts pixel coordinates in given zoom level of pyramid to EPSG:900913.
	 * The origin of the `pixels` is the top-left corner.
	 * The `meters` can be the same instance that is passed in as the `pixels`.
	 */
	pixelsToMeters(pixels: DMapPoint, tz: number, tileSize: number, meters: DMapPoint): DMapPoint;

	/**
	 * Converts EPSG:900913 to pyramid pixel coordinates in given zoom level.
	 * The origin of the pixels is the top-left corner.
	 * The `pixels` can be the same instance that is passed in as the `meters`.
	 */
	metersToPixels(meters: DMapPoint, tz: number, tileSize: number, pixels: DMapPoint): DMapPoint;

	/**
	 * Returns a tile covering region in given pixel coordinates.
	 * The origin of the tile is the top-left corner.
	 * The `tile` can be the same instance that is passed in as the `pixels`.
	 */
	pixelsToTile(pixels: DMapPoint, tileSize: number, tile: DMapPoint): DMapPoint;

	/**
	 * The origin of the tile is the top-left corner.
	 * The `tile` can be the same instance that is passed in as the `meters`.
	 */
	metersToTile(meters: DMapPoint, tz: number, tile: DMapPoint): DMapPoint;

	lonLatToTile(lonlat: DMapPoint, tz: number, tile: DMapPoint): DMapPoint;

	lonLatToPixels(lonlat: DMapPoint, tz: number, tileSize: number, pixels: DMapPoint): DMapPoint;

	pixelsToLonLat(pixels: DMapPoint, tz: number, tileSize: number, lonlat: DMapPoint): DMapPoint;

	/**
	 * The `pixels` can be the same instance that is passed in as the `tile`.
	 */
	tileToPixels(tile: DMapPoint, tileSize: number, pixels: DMapPoint): DMapPoint;

	/**
	 * Returns bounds of the given tile in EPSG:900913 coordinates
	 * The `meters` can be the same instance that is passed in as the `tile`.
	 */
	tileToMeters(tile: DMapPoint, tz: number, meters: DMapPoint): DMapPoint;

	toTileCount(tz: number): number;

	toTileCode(tz: number, tx: number, ty: number): number;
}
