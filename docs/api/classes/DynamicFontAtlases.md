[Winter Cardinal UI - v0.310.1](../index.md) / DynamicFontAtlases

# Class: DynamicFontAtlases

## Table of contents

### Constructors

- [constructor](DynamicFontAtlases.md#constructor)

### Properties

- [\_atlases](DynamicFontAtlases.md#_atlases)
- [\_resolution](DynamicFontAtlases.md#_resolution)

### Methods

- [add](DynamicFontAtlases.md#add)
- [destroy](DynamicFontAtlases.md#destroy)
- [get](DynamicFontAtlases.md#get)
- [remove](DynamicFontAtlases.md#remove)
- [update](DynamicFontAtlases.md#update)

## Constructors

### constructor

• **new DynamicFontAtlases**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L29)

## Properties

### \_atlases

• `Protected` **\_atlases**: `Map`<`string`, `Map`<`number`, [`DynamicFontAtlas`](DynamicFontAtlas.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L26)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L27)

## Methods

### add

▸ **add**(`fontId`, `fontSize`, `fontColor`, `targets`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontId` | `string` |
| `fontSize` | `number` |
| `fontColor` | `number` |
| `targets` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L38)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L80)

___

### get

▸ **get**(`fontId`, `fontColor`): ``null`` \| [`DynamicFontAtlas`](DynamicFontAtlas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontId` | `string` |
| `fontColor` | `number` |

#### Returns

``null`` \| [`DynamicFontAtlas`](DynamicFontAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L63)

___

### remove

▸ **remove**(`fontId`, `fontColor`, `targets`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontId` | `string` |
| `fontColor` | `number` |
| `targets` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L53)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L76)
