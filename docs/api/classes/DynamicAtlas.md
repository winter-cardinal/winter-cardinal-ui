[Winter Cardinal UI - v0.442.0](../index.md) / DynamicAtlas

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
- [destroy](DynamicAtlas.md#destroy)
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

• **new DynamicAtlas**(`resolution`): [`DynamicAtlas`](DynamicAtlas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Returns

[`DynamicAtlas`](DynamicAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L23)

## Properties

### \_baseTexture

• `Protected` **\_baseTexture**: `BaseTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L19)

___

### \_canvas

• `Protected` **\_canvas**: `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L16)

___

### \_idToDatum

• `Protected` **\_idToDatum**: `Record`\<`string`, [`DynamicAtlasItem`](DynamicAtlasItem.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L18)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L20)

___

### \_predefined

• `Protected` **\_predefined**: `Record`\<`string`, [`DynamicAtlasItem`](DynamicAtlasItem.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L21)

___

### \_sortedData

• `Protected` **\_sortedData**: [`DynamicAtlasItem`](DynamicAtlasItem.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L17)

___

### INSTANCE

▪ `Static` `Protected` **INSTANCE**: ``null`` \| [`DynamicAtlas`](DynamicAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L14)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L82)

___

### begin

▸ **begin**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L113)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L89)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L101)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L203)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L123)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L151)

___

### getBaseTexture

▸ **getBaseTexture**(): `BaseTexture`

#### Returns

`BaseTexture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L184)

___

### getDefaultTexture

▸ **getDefaultTexture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L180)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L188)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L69)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L138)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L167)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L176)

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

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L43)

___

### ITEM\_COMPARATOR

▸ **ITEM_COMPARATOR**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DynamicAtlasItem`](DynamicAtlasItem.md) |
| `b` | [`DynamicAtlasItem`](DynamicAtlasItem.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas.ts#L210)
