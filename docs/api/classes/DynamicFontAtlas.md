[Winter Cardinal UI - v0.199.0](../index.md) / DynamicFontAtlas

# Class: DynamicFontAtlas

## Table of contents

### Constructors

- [constructor](DynamicFontAtlas.md#constructor)

### Properties

- [\_canvas](DynamicFontAtlas.md#_canvas)
- [\_characters](DynamicFontAtlas.md#_characters)
- [\_context](DynamicFontAtlas.md#_context)
- [\_font](DynamicFontAtlas.md#_font)
- [\_height](DynamicFontAtlas.md#_height)
- [\_id](DynamicFontAtlas.md#_id)
- [\_length](DynamicFontAtlas.md#_length)
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
- [add\_](DynamicFontAtlas.md#add_)
- [cleanup\_](DynamicFontAtlas.md#cleanup_)
- [destroy](DynamicFontAtlas.md#destroy)
- [get](DynamicFontAtlas.md#get)
- [getAdvance](DynamicFontAtlas.md#getadvance)
- [getContext](DynamicFontAtlas.md#getcontext)
- [getRevision](DynamicFontAtlas.md#getrevision)
- [getRevisionUpdate](DynamicFontAtlas.md#getrevisionupdate)
- [isIgnored](DynamicFontAtlas.md#isignored)
- [remove](DynamicFontAtlas.md#remove)
- [remove\_](DynamicFontAtlas.md#remove_)
- [toPadding](DynamicFontAtlas.md#topadding)
- [toPowerOf2](DynamicFontAtlas.md#topowerof2)
- [update](DynamicFontAtlas.md#update)

## Constructors

### constructor

• **new DynamicFontAtlas**(`fontId`, `fontSize`, `fontColor`, `resolution`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontId` | `string` |
| `fontSize` | `number` |
| `fontColor` | `number` |
| `resolution` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L29)

## Properties

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L16)

___

### \_characters

• `Protected` **\_characters**: [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L19)

___

### \_context

• `Protected` **\_context**: ``null`` \| `CanvasRenderingContext2D`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L17)

___

### \_font

• `Protected` **\_font**: [`DynamicFontAtlasFont`](DynamicFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L18)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L23)

___

### \_id

• `Protected` **\_id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L15)

___

### \_length

• `Protected` **\_length**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L20)

___

### \_padding

• `Protected` **\_padding**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L27)

___

### \_revision

• `Protected` **\_revision**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L24)

___

### \_revisionUpdated

• `Protected` **\_revisionUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L25)

___

### \_texture

• `Protected` **\_texture**: `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L26)

___

### \_unrefCount

• `Protected` **\_unrefCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L21)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L22)

## Accessors

### canvas

• `get` **canvas**(): ``null`` \| `HTMLCanvasElement`

#### Returns

``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L79)

___

### characters

• `get` **characters**(): [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Returns

[`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L83)

___

### font

• `get` **font**(): [`DynamicFontAtlasFont`](DynamicFontAtlasFont.md)

#### Returns

[`DynamicFontAtlasFont`](DynamicFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L67)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L75)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L63)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L301)

___

### texture

• `get` **texture**(): `Texture`

#### Returns

`Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L87)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L71)

## Methods

### add

▸ **add**(`targets`, `type?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targets` | `string` | `undefined` |
| `type` | `number` | `DynamicFontAtlasCharacterType.LETTER` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L166)

___

### add\_

▸ `Protected` **add_**(`id`, `character`, `characters`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `character` | `string` |
| `characters` | [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters) |
| `type` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L91)

___

### cleanup\_

▸ `Protected` **cleanup_**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L152)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L305)

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

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L186)

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

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L190)

___

### getContext

▸ **getContext**(): ``null`` \| `CanvasRenderingContext2D`

#### Returns

``null`` \| `CanvasRenderingContext2D`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L198)

___

### getRevision

▸ **getRevision**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L293)

___

### getRevisionUpdate

▸ **getRevisionUpdate**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:297](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L297)

___

### isIgnored

▸ `Protected` **isIgnored**(`character`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `character` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L124)

___

### remove

▸ **remove**(`targets`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targets` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L178)

___

### remove\_

▸ `Protected` **remove_**(`id`, `characters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `characters` | [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L140)

___

### toPadding

▸ `Protected` **toPadding**(`fontSize`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L59)

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

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:317](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L317)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-font-atlas.ts#L228)
