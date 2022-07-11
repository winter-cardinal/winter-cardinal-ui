[Winter Cardinal UI - v0.200.0](../index.md) / DynamicAtlas

# Class: DynamicAtlas

## Table of contents

### Constructors

- [constructor](DynamicAtlas.md#constructor)

### Properties

- [\_baseTexture](DynamicAtlas.md#_basetexture)
- [\_canvas](DynamicAtlas.md#_canvas)
- [\_idToDatum](DynamicAtlas.md#_idtodatum)
- [\_isDirty](DynamicAtlas.md#_isdirty)
- [\_predefined](DynamicAtlas.md#_predefined)
- [\_sortedData](DynamicAtlas.md#_sorteddata)
- [INSTANCE](DynamicAtlas.md#instance)

### Methods

- [applyFrames](DynamicAtlas.md#applyframes)
- [begin](DynamicAtlas.md#begin)
- [calcCanvasWidth](DynamicAtlas.md#calccanvaswidth)
- [cleanup](DynamicAtlas.md#cleanup)
- [end](DynamicAtlas.md#end)
- [get](DynamicAtlas.md#get)
- [getBaseTexture](DynamicAtlas.md#getbasetexture)
- [getDefaultTexture](DynamicAtlas.md#getdefaulttexture)
- [release](DynamicAtlas.md#release)
- [renderFrames](DynamicAtlas.md#renderframes)
- [repack](DynamicAtlas.md#repack)
- [set](DynamicAtlas.md#set)
- [toDirty](DynamicAtlas.md#todirty)
- [updateFrames](DynamicAtlas.md#updateframes)
- [ITEM\_COMPARATOR](DynamicAtlas.md#item_comparator)

## Constructors

### constructor

• **new DynamicAtlas**(`resolution`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L23)

## Properties

### \_baseTexture

• `Protected` **\_baseTexture**: `BaseTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L19)

___

### \_canvas

• `Protected` **\_canvas**: `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L16)

___

### \_idToDatum

• `Protected` **\_idToDatum**: `Record`<`string`, [`DynamicAtlasItem`](DynamicAtlasItem.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L18)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L20)

___

### \_predefined

• `Protected` **\_predefined**: `Record`<`string`, [`DynamicAtlasItem`](DynamicAtlasItem.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L21)

___

### \_sortedData

• `Protected` **\_sortedData**: [`DynamicAtlasItem`](DynamicAtlasItem.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L17)

___

### INSTANCE

▪ `Static` `Protected` **INSTANCE**: ``null`` \| [`DynamicAtlas`](DynamicAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L14)

## Methods

### applyFrames

▸ **applyFrames**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DynamicAtlasItem`](DynamicAtlasItem.md)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L81)

___

### begin

▸ **begin**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L112)

___

### calcCanvasWidth

▸ **calcCanvasWidth**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DynamicAtlasItem`](DynamicAtlasItem.md)[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L88)

___

### cleanup

▸ **cleanup**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DynamicAtlasItem`](DynamicAtlasItem.md)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L100)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L122)

___

### get

▸ **get**(`id`): ``null`` \| [`DynamicAtlasItem`](DynamicAtlasItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`DynamicAtlasItem`](DynamicAtlasItem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L150)

___

### getBaseTexture

▸ **getBaseTexture**(): `BaseTexture`

#### Returns

`BaseTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L183)

___

### getDefaultTexture

▸ **getDefaultTexture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L179)

___

### release

▸ **release**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L187)

___

### renderFrames

▸ **renderFrames**(`width`, `height`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `data` | [`DynamicAtlasItem`](DynamicAtlasItem.md)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L68)

___

### repack

▸ **repack**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L137)

___

### set

▸ **set**(`id`, `item`): `undefined` \| [`DynamicAtlasItem`](DynamicAtlasItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `item` | [`DynamicAtlasItem`](DynamicAtlasItem.md) |

#### Returns

`undefined` \| [`DynamicAtlasItem`](DynamicAtlasItem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L166)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L175)

___

### updateFrames

▸ **updateFrames**(`width`, `data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `data` | [`DynamicAtlasItem`](DynamicAtlasItem.md)[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L42)

___

### ITEM\_COMPARATOR

▸ `Static` **ITEM_COMPARATOR**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DynamicAtlasItem`](DynamicAtlasItem.md) |
| `b` | [`DynamicAtlasItem`](DynamicAtlasItem.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L202)
