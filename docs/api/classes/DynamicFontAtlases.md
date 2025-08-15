[Winter Cardinal UI - v0.457.0](../index.md) / DynamicFontAtlases

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

• **new DynamicFontAtlases**(`layer`): [`DynamicFontAtlases`](DynamicFontAtlases.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md) |

#### Returns

[`DynamicFontAtlases`](DynamicFontAtlases.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L30)

## Properties

### \_atlases

• `Protected` **\_atlases**: `Map`\<`string`, `Map`\<`number`, [`DynamicFontAtlas`](DynamicFontAtlas.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L27)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L28)

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

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L39)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L81)

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

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L64)

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

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L54)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlases.ts#L77)
