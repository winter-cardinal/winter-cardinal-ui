[Winter Cardinal UI - v0.414.0](../index.md) / DMapCoordinateEPSG3857

# Class: DMapCoordinateEPSG3857

## Implements

- [`DMapCoordinate`](../interfaces/DMapCoordinate.md)

## Table of contents

### Constructors

- [constructor](DMapCoordinateEPSG3857.md#constructor)

### Properties

- [\_tileSize](DMapCoordinateEPSG3857.md#_tilesize)
- [CIRCUMFERENCE\_HALF](DMapCoordinateEPSG3857.md#circumference_half)

### Methods

- [getTileSize](DMapCoordinateEPSG3857.md#gettilesize)
- [lonLatToMeters](DMapCoordinateEPSG3857.md#lonlattometers)
- [lonLatToPixels](DMapCoordinateEPSG3857.md#lonlattopixels)
- [lonLatToTile](DMapCoordinateEPSG3857.md#lonlattotile)
- [metersToLonLat](DMapCoordinateEPSG3857.md#meterstolonlat)
- [metersToPixels](DMapCoordinateEPSG3857.md#meterstopixels)
- [metersToTile](DMapCoordinateEPSG3857.md#meterstotile)
- [pixelsToLonLat](DMapCoordinateEPSG3857.md#pixelstolonlat)
- [pixelsToMeters](DMapCoordinateEPSG3857.md#pixelstometers)
- [pixelsToTile](DMapCoordinateEPSG3857.md#pixelstotile)
- [tileToMeters](DMapCoordinateEPSG3857.md#tiletometers)
- [tileToPixels](DMapCoordinateEPSG3857.md#tiletopixels)
- [toResolution](DMapCoordinateEPSG3857.md#toresolution)
- [toResolutionMeter](DMapCoordinateEPSG3857.md#toresolutionmeter)
- [toTileCode](DMapCoordinateEPSG3857.md#totilecode)
- [toTileCount](DMapCoordinateEPSG3857.md#totilecount)

## Constructors

### constructor

• **new DMapCoordinateEPSG3857**(`tileSize?`): [`DMapCoordinateEPSG3857`](DMapCoordinateEPSG3857.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tileSize` | `number` | `256` |

#### Returns

[`DMapCoordinateEPSG3857`](DMapCoordinateEPSG3857.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L13)

## Properties

### \_tileSize

• `Protected` **\_tileSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L11)

___

### CIRCUMFERENCE\_HALF

▪ `Static` `Protected` **CIRCUMFERENCE\_HALF**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L9)

## Methods

### getTileSize

▸ **getTileSize**(): `number`

#### Returns

`number`

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[getTileSize](../interfaces/DMapCoordinate.md#gettilesize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L17)

___

### lonLatToMeters

▸ **lonLatToMeters**(`lonlat`, `meters`): [`DMapPoint`](../interfaces/DMapPoint.md)

Converts the given (lon, lat) point in WGS84 to (x, y) in EPSG:900913.
The origin of the converted point (x, y) is at the middle-left corner.
The `meters` can be the same instance that is passed in as the `lonlat`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lonlat` | [`DMapPoint`](../interfaces/DMapPoint.md) | (lon, lat) point |
| `meters` | [`DMapPoint`](../interfaces/DMapPoint.md) | (x, y) point in meters converted from the given lonlat. |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

(x, y) point in meters

**`See`**

 - https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/
 - https://qiita.com/MALORGIS/items/1a9114dd090e5b891bf7

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[lonLatToMeters](../interfaces/DMapCoordinate.md#lonlattometers)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L32)

___

### lonLatToPixels

▸ **lonLatToPixels**(`lonlat`, `tz`, `tileSize`, `pixels`): [`DMapPoint`](../interfaces/DMapPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lonlat` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `pixels` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[lonLatToPixels](../interfaces/DMapCoordinate.md#lonlattopixels)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L105)

___

### lonLatToTile

▸ **lonLatToTile**(`lonlat`, `tz`, `tile`): [`DMapPoint`](../interfaces/DMapPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lonlat` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tz` | `number` |
| `tile` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[lonLatToTile](../interfaces/DMapCoordinate.md#lonlattotile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L101)

___

### metersToLonLat

▸ **metersToLonLat**(`meters`, `lonlat`): [`DMapPoint`](../interfaces/DMapPoint.md)

The `lonlat` can be the same instance that is passed in as the `meters`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `meters` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `lonlat` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[metersToLonLat](../interfaces/DMapCoordinate.md#meterstolonlat)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L45)

___

### metersToPixels

▸ **metersToPixels**(`meters`, `tz`, `tileSize`, `pixels`): [`DMapPoint`](../interfaces/DMapPoint.md)

Converts EPSG:900913 to pyramid pixel coordinates in given zoom level.
The origin of the pixels is the top-left corner.
The `pixels` can be the same instance that is passed in as the `meters`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `meters` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `pixels` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[metersToPixels](../interfaces/DMapCoordinate.md#meterstopixels)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L70)

___

### metersToTile

▸ **metersToTile**(`meters`, `tz`, `tile`): [`DMapPoint`](../interfaces/DMapPoint.md)

The origin of the tile is the top-left corner.
The `tile` can be the same instance that is passed in as the `meters`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `meters` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tz` | `number` |
| `tile` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[metersToTile](../interfaces/DMapCoordinate.md#meterstotile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L93)

___

### pixelsToLonLat

▸ **pixelsToLonLat**(`pixels`, `tz`, `tileSize`, `lonlat`): [`DMapPoint`](../interfaces/DMapPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `lonlat` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[pixelsToLonLat](../interfaces/DMapCoordinate.md#pixelstolonlat)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L109)

___

### pixelsToMeters

▸ **pixelsToMeters**(`pixels`, `tz`, `tileSize`, `meters`): [`DMapPoint`](../interfaces/DMapPoint.md)

Converts pixel coordinates in given zoom level of pyramid to EPSG:900913.
The origin of the `pixels` is the top-left corner.
The `meters` can be the same instance that is passed in as the `pixels`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tz` | `number` |
| `tileSize` | `number` |
| `meters` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[pixelsToMeters](../interfaces/DMapCoordinate.md#pixelstometers)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L57)

___

### pixelsToTile

▸ **pixelsToTile**(`pixels`, `tileSize`, `tile`): [`DMapPoint`](../interfaces/DMapPoint.md)

Returns a tile covering region in given pixel coordinates.
The origin of the tile is the top-left corner.
The `tile` can be the same instance that is passed in as the `pixels`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tileSize` | `number` |
| `tile` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[pixelsToTile](../interfaces/DMapCoordinate.md#pixelstotile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L83)

___

### tileToMeters

▸ **tileToMeters**(`tile`, `tz`, `meters`): [`DMapPoint`](../interfaces/DMapPoint.md)

Returns bounds of the given tile in EPSG:900913 coordinates
The `meters` can be the same instance that is passed in as the `tile`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tz` | `number` |
| `meters` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[tileToMeters](../interfaces/DMapCoordinate.md#tiletometers)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L126)

___

### tileToPixels

▸ **tileToPixels**(`tile`, `tileSize`, `pixels`): [`DMapPoint`](../interfaces/DMapPoint.md)

The `pixels` can be the same instance that is passed in as the `tile`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapPoint`](../interfaces/DMapPoint.md) |
| `tileSize` | `number` |
| `pixels` | [`DMapPoint`](../interfaces/DMapPoint.md) |

#### Returns

[`DMapPoint`](../interfaces/DMapPoint.md)

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[tileToPixels](../interfaces/DMapCoordinate.md#tiletopixels)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L116)

___

### toResolution

▸ **toResolution**(`tz`, `tileSize`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |
| `tileSize` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L138)

___

### toResolutionMeter

▸ **toResolutionMeter**(`tz`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L134)

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

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[toTileCode](../interfaces/DMapCoordinate.md#totilecode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L146)

___

### toTileCount

▸ **toTileCount**(`tz`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |

#### Returns

`number`

#### Implementation of

[DMapCoordinate](../interfaces/DMapCoordinate.md).[toTileCount](../interfaces/DMapCoordinate.md#totilecount)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-coordinate-epsg3857.ts#L142)
