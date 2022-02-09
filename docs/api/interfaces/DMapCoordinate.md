[Winter Cardinal UI](../README.md) / DMapCoordinate

# Interface: DMapCoordinate

## Implemented by

- [`DMapCoordinateEPSG3857`](../classes/DMapCoordinateEPSG3857.md)

## Table of contents

### Methods

- [getTileSize](DMapCoordinate.md#gettilesize)
- [lonLatToMeters](DMapCoordinate.md#lonlattometers)
- [lonLatToPixels](DMapCoordinate.md#lonlattopixels)
- [lonLatToTile](DMapCoordinate.md#lonlattotile)
- [metersToLonLat](DMapCoordinate.md#meterstolonlat)
- [metersToPixels](DMapCoordinate.md#meterstopixels)
- [metersToTile](DMapCoordinate.md#meterstotile)
- [pixelsToLonLat](DMapCoordinate.md#pixelstolonlat)
- [pixelsToMeters](DMapCoordinate.md#pixelstometers)
- [pixelsToTile](DMapCoordinate.md#pixelstotile)
- [tileToMeters](DMapCoordinate.md#tiletometers)
- [tileToPixels](DMapCoordinate.md#tiletopixels)
- [toTileCode](DMapCoordinate.md#totilecode)
- [toTileCount](DMapCoordinate.md#totilecount)

## Methods

### getTileSize

▸ **getTileSize**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L12)

___

### lonLatToMeters

▸ **lonLatToMeters**(`lonlat`, `meters`): [`DMapPoint`](DMapPoint.md)

Converts the given (lon, lat) point in WGS84 to (x, y) in EPSG:900913.
The origin of the converted point (x, y) is at the middle-left corner.
The `meters` can be the same instance that is passed in as the `lonlat`.

**`see`** https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/

**`see`** https://qiita.com/MALORGIS/items/1a9114dd090e5b891bf7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lonlat` | [`DMapPoint`](DMapPoint.md) | (lon, lat) point |
| `meters` | [`DMapPoint`](DMapPoint.md) | (x, y) point in meters converted from the given lonlat. |

#### Returns

[`DMapPoint`](DMapPoint.md)

(x, y) point in meters

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L25)

___

### lonLatToPixels

▸ **lonLatToPixels**(`lonlat`, `tz`, `tileSize`, `pixels`): [`DMapPoint`](DMapPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lonlat` | [`DMapPoint`](DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `pixels` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L64)

___

### lonLatToTile

▸ **lonLatToTile**(`lonlat`, `tz`, `tile`): [`DMapPoint`](DMapPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lonlat` | [`DMapPoint`](DMapPoint.md) |
| `tz` | `number` |
| `tile` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L62)

___

### metersToLonLat

▸ **metersToLonLat**(`meters`, `lonlat`): [`DMapPoint`](DMapPoint.md)

The `lonlat` can be the same instance that is passed in as the `meters`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `meters` | [`DMapPoint`](DMapPoint.md) |
| `lonlat` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L33)

___

### metersToPixels

▸ **metersToPixels**(`meters`, `tz`, `tileSize`, `pixels`): [`DMapPoint`](DMapPoint.md)

Converts EPSG:900913 to pyramid pixel coordinates in given zoom level.
The origin of the pixels is the top-left corner.
The `pixels` can be the same instance that is passed in as the `meters`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `meters` | [`DMapPoint`](DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `pixels` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L47)

___

### metersToTile

▸ **metersToTile**(`meters`, `tz`, `tile`): [`DMapPoint`](DMapPoint.md)

The origin of the tile is the top-left corner.
The `tile` can be the same instance that is passed in as the `meters`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `meters` | [`DMapPoint`](DMapPoint.md) |
| `tz` | `number` |
| `tile` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L60)

___

### pixelsToLonLat

▸ **pixelsToLonLat**(`pixels`, `tz`, `tileSize`, `lonlat`): [`DMapPoint`](DMapPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`DMapPoint`](DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `lonlat` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L66)

___

### pixelsToMeters

▸ **pixelsToMeters**(`pixels`, `tz`, `tileSize`, `meters`): [`DMapPoint`](DMapPoint.md)

Converts pixel coordinates in given zoom level of pyramid to EPSG:900913.
The origin of the `pixels` is the top-left corner.
The `meters` can be the same instance that is passed in as the `pixels`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`DMapPoint`](DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `meters` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L40)

___

### pixelsToTile

▸ **pixelsToTile**(`pixels`, `tileSize`, `tile`): [`DMapPoint`](DMapPoint.md)

Returns a tile covering region in given pixel coordinates.
The origin of the tile is the top-left corner.
The `tile` can be the same instance that is passed in as the `pixels`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`DMapPoint`](DMapPoint.md) |
| `tileSize` | `number` |
| `tile` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L54)

___

### tileToMeters

▸ **tileToMeters**(`tile`, `tz`, `meters`): [`DMapPoint`](DMapPoint.md)

Returns bounds of the given tile in EPSG:900913 coordinates
The `meters` can be the same instance that is passed in as the `tile`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapPoint`](DMapPoint.md) |
| `tz` | `number` |
| `meters` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L77)

___

### tileToPixels

▸ **tileToPixels**(`tile`, `tileSize`, `pixels`): [`DMapPoint`](DMapPoint.md)

The `pixels` can be the same instance that is passed in as the `tile`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapPoint`](DMapPoint.md) |
| `tileSize` | `number` |
| `pixels` | [`DMapPoint`](DMapPoint.md) |

#### Returns

[`DMapPoint`](DMapPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L71)

___

### toTileCode

▸ **toTileCode**(`tz`, `tx`, `ty`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |
| `tx` | `number` |
| `ty` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L81)

___

### toTileCount

▸ **toTileCount**(`tz`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-map-coordinate.ts#L79)
