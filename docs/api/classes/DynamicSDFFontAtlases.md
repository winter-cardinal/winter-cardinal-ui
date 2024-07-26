[Winter Cardinal UI - v0.442.0](../index.md) / DynamicSDFFontAtlases

# Class: DynamicSDFFontAtlases

## Table of contents

### Constructors

- [constructor](DynamicSDFFontAtlases.md#constructor)

### Properties

- [\_atlases](DynamicSDFFontAtlases.md#_atlases)

### Methods

- [add](DynamicSDFFontAtlases.md#add)
- [begin](DynamicSDFFontAtlases.md#begin)
- [destroy](DynamicSDFFontAtlases.md#destroy)
- [end](DynamicSDFFontAtlases.md#end)
- [get](DynamicSDFFontAtlases.md#get)
- [update](DynamicSDFFontAtlases.md#update)

## Constructors

### constructor

• **new DynamicSDFFontAtlases**(): [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Returns

[`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L13)

## Properties

### \_atlases

• `Protected` **\_atlases**: `Map`\<`string`, [`DynamicSDFFontAtlas`](DynamicSDFFontAtlas.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L11)

## Methods

### add

▸ **add**(`family`, `characters`, `nacharacters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `family` | `string` |
| `characters` | `string`[] |
| `nacharacters` | `string`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L34)

___

### begin

▸ **begin**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L17)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L76)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L23)

___

### get

▸ **get**(`family`): ``null`` \| [`DynamicSDFFontAtlas`](DynamicSDFFontAtlas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `family` | `string` |

#### Returns

``null`` \| [`DynamicSDFFontAtlas`](DynamicSDFFontAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L46)

___

### update

▸ **update**(`baseAtlas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseAtlas` | [`DynamicAtlas`](DynamicAtlas.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L54)
