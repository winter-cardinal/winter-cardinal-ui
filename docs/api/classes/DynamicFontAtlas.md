[Winter Cardinal UI - v0.457.0](../index.md) / DynamicFontAtlas

# Class: DynamicFontAtlas

## Table of contents

### Constructors

- [constructor](DynamicFontAtlas.md#constructor)

### Properties

- [\_canvas](DynamicFontAtlas.md#_canvas)
- [\_characters](DynamicFontAtlas.md#_characters)
- [\_context](DynamicFontAtlas.md#_context)
- [\_createds](DynamicFontAtlas.md#_createds)
- [\_font](DynamicFontAtlas.md#_font)
- [\_height](DynamicFontAtlas.md#_height)
- [\_id](DynamicFontAtlas.md#_id)
- [\_padding](DynamicFontAtlas.md#_padding)
- [\_revision](DynamicFontAtlas.md#_revision)
- [\_revisionUpdated](DynamicFontAtlas.md#_revisionupdated)
- [\_texture](DynamicFontAtlas.md#_texture)
- [\_unrefCount](DynamicFontAtlas.md#_unrefcount)
- [\_width](DynamicFontAtlas.md#_width)

### Accessors

- [canvas](DynamicFontAtlas.md#canvas)
- [characters](DynamicFontAtlas.md#characters)
- [font](DynamicFontAtlas.md#font)
- [height](DynamicFontAtlas.md#height)
- [id](DynamicFontAtlas.md#id)
- [length](DynamicFontAtlas.md#length)
- [texture](DynamicFontAtlas.md#texture)
- [width](DynamicFontAtlas.md#width)

### Methods

- [add](DynamicFontAtlas.md#add)
- [cleanup](DynamicFontAtlas.md#cleanup)
- [destroy](DynamicFontAtlas.md#destroy)
- [get](DynamicFontAtlas.md#get)
- [getAdvance](DynamicFontAtlas.md#getadvance)
- [getContext](DynamicFontAtlas.md#getcontext)
- [getRevision](DynamicFontAtlas.md#getrevision)
- [getRevisionUpdate](DynamicFontAtlas.md#getrevisionupdate)
- [newChar](DynamicFontAtlas.md#newchar)
- [remove](DynamicFontAtlas.md#remove)
- [toPadding](DynamicFontAtlas.md#topadding)
- [toPowerOf2](DynamicFontAtlas.md#topowerof2)
- [update](DynamicFontAtlas.md#update)

## Constructors

### constructor

• **new DynamicFontAtlas**(`fontId`, `fontSize`, `fontColor`, `resolution`): [`DynamicFontAtlas`](DynamicFontAtlas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontId` | `string` |
| `fontSize` | `number` |
| `fontColor` | `number` |
| `resolution` | `number` |

#### Returns

[`DynamicFontAtlas`](DynamicFontAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L29)

## Properties

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L16)

___

### \_characters

• `Protected` **\_characters**: [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L19)

___

### \_context

• `Protected` **\_context**: ``null`` \| `CanvasRenderingContext2D`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L17)

___

### \_createds

• `Protected` **\_createds**: [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L20)

___

### \_font

• `Protected` **\_font**: [`DynamicFontAtlasFont`](DynamicFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L18)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L23)

___

### \_id

• `Protected` **\_id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L15)

___

### \_padding

• `Protected` **\_padding**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L27)

___

### \_revision

• `Protected` **\_revision**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L24)

___

### \_revisionUpdated

• `Protected` **\_revisionUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L25)

___

### \_texture

• `Protected` **\_texture**: `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L26)

___

### \_unrefCount

• `Protected` **\_unrefCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L21)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L22)

## Accessors

### canvas

• `get` **canvas**(): ``null`` \| `HTMLCanvasElement`

#### Returns

``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L88)

___

### characters

• `get` **characters**(): [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Returns

[`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L92)

___

### font

• `get` **font**(): [`DynamicFontAtlasFont`](DynamicFontAtlasFont.md)

#### Returns

[`DynamicFontAtlasFont`](DynamicFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L76)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L84)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L72)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L328)

___

### texture

• `get` **texture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L96)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L80)

## Methods

### add

▸ **add**(`characters`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `characters` | `string` |
| `type` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L119)

___

### cleanup

▸ **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L197)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L332)

___

### get

▸ **get**(`id`): `undefined` \| [`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L210)

___

### getAdvance

▸ **getAdvance**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L214)

___

### getContext

▸ **getContext**(): ``null`` \| `CanvasRenderingContext2D`

#### Returns

``null`` \| `CanvasRenderingContext2D`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L222)

___

### getRevision

▸ **getRevision**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:320](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L320)

___

### getRevisionUpdate

▸ **getRevisionUpdate**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L324)

___

### newChar

▸ **newChar**(`character`, `type`): [`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `character` | `string` |
| `type` | `number` |

#### Returns

[`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L100)

___

### remove

▸ **remove**(`characters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `characters` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L165)

___

### toPadding

▸ **toPadding**(`fontSize`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L68)

___

### toPowerOf2

▸ **toPowerOf2**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L342)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L252)
