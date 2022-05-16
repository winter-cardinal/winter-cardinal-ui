[Winter Cardinal UI - v0.165.0](../index.md) / DynamicSDFFontAtlases

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

• **new DynamicSDFFontAtlases**()

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L13)

## Properties

### \_atlases

• `Protected` **\_atlases**: `Record`<`string`, [`DynamicSDFFontAtlas`](DynamicSDFFontAtlas.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L11)

## Methods

### add

▸ **add**(`family`, `targets`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `family` | `string` |
| `targets` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L40)

___

### begin

▸ **begin**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L17)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L83)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L25)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L51)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlases.ts#L59)
