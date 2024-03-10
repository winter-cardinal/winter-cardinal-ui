[Winter Cardinal UI - v0.414.0](../index.md) / DMapTilePlane

# Class: DMapTilePlane

## Table of contents

### Constructors

- [constructor](DMapTilePlane.md#constructor)

### Properties

- [\_builder](DMapTilePlane.md#_builder)
- [\_coordinate](DMapTilePlane.md#_coordinate)
- [\_deleteTileBound](DMapTilePlane.md#_deletetilebound)
- [\_destroyTileBound](DMapTilePlane.md#_destroytilebound)
- [\_isLoaded](DMapTilePlane.md#_isloaded)
- [\_isOnLoadedAllowed](DMapTilePlane.md#_isonloadedallowed)
- [\_isOnLoadedCalled](DMapTilePlane.md#_isonloadedcalled)
- [\_lat0](DMapTilePlane.md#_lat0)
- [\_lat1](DMapTilePlane.md#_lat1)
- [\_lon0](DMapTilePlane.md#_lon0)
- [\_lon1](DMapTilePlane.md#_lon1)
- [\_mapping](DMapTilePlane.md#_mapping)
- [\_onLoaded](DMapTilePlane.md#_onloaded)
- [\_onLoadedBound](DMapTilePlane.md#_onloadedbound)
- [\_parent](DMapTilePlane.md#_parent)
- [\_renderTileBound](DMapTilePlane.md#_rendertilebound)
- [\_renderer](DMapTilePlane.md#_renderer)
- [\_tileCount](DMapTilePlane.md#_tilecount)
- [\_tileScale](DMapTilePlane.md#_tilescale)
- [\_tileScaleRelative](DMapTilePlane.md#_tilescalerelative)
- [\_tileSize](DMapTilePlane.md#_tilesize)
- [\_tiles](DMapTilePlane.md#_tiles)
- [\_txmax](DMapTilePlane.md#_txmax)
- [\_txmin](DMapTilePlane.md#_txmin)
- [\_tymax](DMapTilePlane.md#_tymax)
- [\_tymin](DMapTilePlane.md#_tymin)
- [\_tz](DMapTilePlane.md#_tz)
- [\_updateLoadingStateForEach](DMapTilePlane.md#_updateloadingstateforeach)
- [WORK](DMapTilePlane.md#work)

### Accessors

- [loaded](DMapTilePlane.md#loaded)
- [mapping](DMapTilePlane.md#mapping)
- [tz](DMapTilePlane.md#tz)

### Methods

- [deleteTile](DMapTilePlane.md#deletetile)
- [destroy](DMapTilePlane.md#destroy)
- [destroyTile](DMapTilePlane.md#destroytile)
- [loadTile](DMapTilePlane.md#loadtile)
- [loadTilesX](DMapTilePlane.md#loadtilesx)
- [loadTilesY](DMapTilePlane.md#loadtilesy)
- [move](DMapTilePlane.md#move)
- [newTile](DMapTilePlane.md#newtile)
- [onLoaded](DMapTilePlane.md#onloaded)
- [render](DMapTilePlane.md#render)
- [renderTile](DMapTilePlane.md#rendertile)
- [toOffset](DMapTilePlane.md#tooffset)
- [toTilePosition](DMapTilePlane.md#totileposition)
- [updateLoadingState](DMapTilePlane.md#updateloadingstate)

## Constructors

### constructor

• **new DMapTilePlane**(`parent`, `builder`, `tz`, `mapping`, `coordinate`, `onLoaded`): [`DMapTilePlane`](DMapTilePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `builder` | [`DMapTileUrlBuilder`](../index.md#dmaptileurlbuilder) |
| `tz` | `number` |
| `mapping` | [`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md) |
| `coordinate` | [`DMapCoordinate`](../interfaces/DMapCoordinate.md) |
| `onLoaded` | () => `void` |

#### Returns

[`DMapTilePlane`](DMapTilePlane.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L49)

## Properties

### \_builder

• `Protected` `Readonly` **\_builder**: [`DMapTileUrlBuilder`](../index.md#dmaptileurlbuilder)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L17)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DMapCoordinate`](../interfaces/DMapCoordinate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L41)

___

### \_deleteTileBound

• `Protected` `Readonly` **\_deleteTileBound**: (`tile`: [`DMapTile`](DMapTile.md), `tileCode`: `number`, `tiles`: `Map`\<`number`, [`DMapTile`](DMapTile.md)\>) => `void`

#### Type declaration

▸ (`tile`, `tileCode`, `tiles`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapTile`](DMapTile.md) |
| `tileCode` | `number` |
| `tiles` | `Map`\<`number`, [`DMapTile`](DMapTile.md)\> |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L30)

___

### \_destroyTileBound

• `Protected` `Readonly` **\_destroyTileBound**: (`tile`: [`DMapTile`](DMapTile.md)) => `void`

#### Type declaration

▸ (`tile`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapTile`](DMapTile.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L35)

___

### \_isLoaded

• `Protected` **\_isLoaded**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L42)

___

### \_isOnLoadedAllowed

• `Protected` **\_isOnLoadedAllowed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L47)

___

### \_isOnLoadedCalled

• `Protected` **\_isOnLoadedCalled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L46)

___

### \_lat0

• `Protected` **\_lat0**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L20)

___

### \_lat1

• `Protected` **\_lat1**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L22)

___

### \_lon0

• `Protected` **\_lon0**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L19)

___

### \_lon1

• `Protected` **\_lon1**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L21)

___

### \_mapping

• `Protected` **\_mapping**: [`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L40)

___

### \_onLoaded

• `Protected` `Readonly` **\_onLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L44)

___

### \_onLoadedBound

• `Protected` `Readonly` **\_onLoadedBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L45)

___

### \_parent

• `Protected` `Readonly` **\_parent**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L16)

___

### \_renderTileBound

• `Protected` `Readonly` **\_renderTileBound**: (`tile`: [`DMapTile`](DMapTile.md)) => `void`

#### Type declaration

▸ (`tile`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapTile`](DMapTile.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L25)

___

### \_renderer

• `Protected` `Optional` **\_renderer**: `Renderer`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L24)

___

### \_tileCount

• `Protected` **\_tileCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L36)

___

### \_tileScale

• `Protected` **\_tileScale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L37)

___

### \_tileScaleRelative

• `Protected` **\_tileScaleRelative**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L38)

___

### \_tileSize

• `Protected` **\_tileSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L39)

___

### \_tiles

• `Protected` `Readonly` **\_tiles**: `Map`\<`number`, [`DMapTile`](DMapTile.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L23)

___

### \_txmax

• `Protected` **\_txmax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L27)

___

### \_txmin

• `Protected` **\_txmin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L26)

___

### \_tymax

• `Protected` **\_tymax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L29)

___

### \_tymin

• `Protected` **\_tymin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L28)

___

### \_tz

• `Protected` `Readonly` **\_tz**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L18)

___

### \_updateLoadingStateForEach

• `Protected` `Readonly` **\_updateLoadingStateForEach**: (`tile`: [`DMapTile`](DMapTile.md)) => `void`

#### Type declaration

▸ (`tile`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapTile`](DMapTile.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L43)

___

### WORK

▪ `Static` `Protected` **WORK**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L14)

## Accessors

### loaded

• `get` **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L343)

___

### mapping

• `get` **mapping**(): [`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md)

#### Returns

[`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L350)

• `set` **mapping**(`mapping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | [`DMapTileMappingInternal`](../interfaces/DMapTileMappingInternal.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L354)

___

### tz

• `get` **tz**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L110)

## Methods

### deleteTile

▸ **deleteTile**(`tile`, `tileCode`, `tiles`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapTile`](DMapTile.md) |
| `tileCode` | `number` |
| `tiles` | `Map`\<`number`, [`DMapTile`](DMapTile.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L311)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:320](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L320)

___

### destroyTile

▸ **destroyTile**(`tile`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapTile`](DMapTile.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L326)

___

### loadTile

▸ **loadTile**(`tz`, `tx`, `ty`, `ox`, `oy`, `work`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |
| `tx` | `number` |
| `ty` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `work` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L270)

___

### loadTilesX

▸ **loadTilesX**(`tz`, `ctx`, `ltx`, `txmin`, `txmax`, `ty`, `ox`, `oy`, `work`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |
| `ctx` | `number` |
| `ltx` | `number` |
| `txmin` | `number` |
| `txmax` | `number` |
| `ty` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `work` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L222)

___

### loadTilesY

▸ **loadTilesY**(`tz`, `tx`, `cty`, `lty`, `tymin`, `tymax`, `ox`, `oy`, `work`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tz` | `number` |
| `tx` | `number` |
| `cty` | `number` |
| `lty` | `number` |
| `tymin` | `number` |
| `tymax` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `work` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L246)

___

### move

▸ **move**(`lon0`, `lat0`, `lon1`, `lat1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lon0` | `number` |
| `lat0` | `number` |
| `lon1` | `number` |
| `lat1` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L119)

___

### newTile

▸ **newTile**(`tx`, `ty`, `px`, `py`, `scale`): [`DMapTile`](DMapTile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `number` |
| `ty` | `number` |
| `px` | `number` |
| `py` | `number` |
| `scale` | `number` |

#### Returns

[`DMapTile`](DMapTile.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L102)

___

### onLoaded

▸ **onLoaded**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L335)

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L114)

___

### renderTile

▸ **renderTile**(`tile`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | [`DMapTile`](DMapTile.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L106)

___

### toOffset

▸ **toOffset**(`result`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `Point` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L300)

___

### toTilePosition

▸ **toTilePosition**(`tx`, `ty`, `ox`, `oy`, `result`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `number` |
| `ty` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `result` | `Point` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L291)

___

### updateLoadingState

▸ **updateLoadingState**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile-plane.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-map-tile-plane.ts#L330)
