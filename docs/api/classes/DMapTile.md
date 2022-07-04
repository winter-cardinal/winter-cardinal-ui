[Winter Cardinal UI - v0.194.0](../index.md) / DMapTile

# Class: DMapTile

## Table of contents

### Constructors

- [constructor](DMapTile.md#constructor)

### Properties

- [\_sprite](DMapTile.md#_sprite)
- [tx](DMapTile.md#tx)
- [ty](DMapTile.md#ty)

### Accessors

- [loaded](DMapTile.md#loaded)

### Methods

- [destroy](DMapTile.md#destroy)
- [load](DMapTile.md#load)
- [render](DMapTile.md#render)
- [transform](DMapTile.md#transform)

## Constructors

### constructor

• **new DMapTile**(`parent`, `tx`, `ty`, `px`, `py`, `scale`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Container` |
| `tx` | `number` |
| `ty` | `number` |
| `px` | `number` |
| `py` | `number` |
| `scale` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L14)

## Properties

### \_sprite

• `Protected` **\_sprite**: `Sprite`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L12)

___

### tx

• **tx**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L9)

___

### ty

• **ty**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L10)

## Accessors

### loaded

• `get` **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L40)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L50)

___

### load

▸ **load**(`url`, `onLoaded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `onLoaded` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L24)

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

[src/main/typescript/wcardinal/ui/d-map-tile.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L44)

___

### transform

▸ **transform**(`px`, `py`, `scale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `px` | `number` |
| `py` | `number` |
| `scale` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-map-tile.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-map-tile.ts#L34)
