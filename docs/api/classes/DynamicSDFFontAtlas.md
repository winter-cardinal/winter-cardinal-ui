[Winter Cardinal UI - v0.199.0](../index.md) / DynamicSDFFontAtlas

# Class: DynamicSDFFontAtlas

## Table of contents

### Constructors

- [constructor](DynamicSDFFontAtlas.md#constructor)

### Properties

- [\_canvas](DynamicSDFFontAtlas.md#_canvas)
- [\_characters](DynamicSDFFontAtlas.md#_characters)
- [\_font](DynamicSDFFontAtlas.md#_font)
- [\_generator](DynamicSDFFontAtlas.md#_generator)
- [\_height](DynamicSDFFontAtlas.md#_height)
- [\_id](DynamicSDFFontAtlas.md#_id)
- [\_isDirty](DynamicSDFFontAtlas.md#_isdirty)
- [\_length](DynamicSDFFontAtlas.md#_length)
- [\_width](DynamicSDFFontAtlas.md#_width)
- [FONT\_FAMILY\_AUTO](DynamicSDFFontAtlas.md#font_family_auto)

### Accessors

- [canvas](DynamicSDFFontAtlas.md#canvas)
- [characters](DynamicSDFFontAtlas.md#characters)
- [font](DynamicSDFFontAtlas.md#font)
- [generator](DynamicSDFFontAtlas.md#generator)
- [height](DynamicSDFFontAtlas.md#height)
- [id](DynamicSDFFontAtlas.md#id)
- [length](DynamicSDFFontAtlas.md#length)
- [width](DynamicSDFFontAtlas.md#width)

### Methods

- [add](DynamicSDFFontAtlas.md#add)
- [addAscii](DynamicSDFFontAtlas.md#addascii)
- [addChar](DynamicSDFFontAtlas.md#addchar)
- [begin](DynamicSDFFontAtlas.md#begin)
- [destroy](DynamicSDFFontAtlas.md#destroy)
- [end](DynamicSDFFontAtlas.md#end)
- [get](DynamicSDFFontAtlas.md#get)
- [isIgnored](DynamicSDFFontAtlas.md#isignored)
- [toJson](DynamicSDFFontAtlas.md#tojson)
- [toString](DynamicSDFFontAtlas.md#tostring)
- [update](DynamicSDFFontAtlas.md#update)
- [getAutoFontFamily](DynamicSDFFontAtlas.md#getautofontfamily)
- [toFontFamily](DynamicSDFFontAtlas.md#tofontfamily)
- [toPowerOf2](DynamicSDFFontAtlas.md#topowerof2)

## Constructors

### constructor

• **new DynamicSDFFontAtlas**(`fontFamily`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L40)

## Properties

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L32)

___

### \_characters

• `Protected` **\_characters**: [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L34)

___

### \_font

• `Protected` **\_font**: [`DynamicSDFFontAtlasFont`](../interfaces/DynamicSDFFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L33)

___

### \_generator

• `Protected` **\_generator**: ``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L31)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L37)

___

### \_id

• `Protected` **\_id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L30)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L38)

___

### \_length

• `Protected` **\_length**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L35)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L36)

___

### FONT\_FAMILY\_AUTO

▪ `Static` `Protected` **FONT\_FAMILY\_AUTO**: ``null`` \| `string` = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L28)

## Accessors

### canvas

• `get` **canvas**(): ``null`` \| `HTMLCanvasElement`

#### Returns

``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L78)

___

### characters

• `get` **characters**(): [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Returns

[`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L86)

___

### font

• `get` **font**(): [`DynamicSDFFontAtlasFont`](../interfaces/DynamicSDFFontAtlasFont.md)

#### Returns

[`DynamicSDFFontAtlasFont`](../interfaces/DynamicSDFFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L60)

• `set` **font**(`font`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `font` | [`DynamicSDFFontAtlasFont`](../interfaces/DynamicSDFFontAtlasFont.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L64)

___

### generator

• `get` **generator**(): ``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L82)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L74)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L56)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L255)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L70)

## Methods

### add

▸ **add**(`characters`, `type?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `characters` | `string` | `undefined` |
| `type` | `number` | `DynamicFontAtlasCharacterType.LETTER` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L155)

___

### addAscii

▸ **addAscii**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L112)

___

### addChar

▸ **addChar**(`id`, `character`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `character` | `string` |
| `type` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L122)

___

### begin

▸ **begin**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L90)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L272)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L98)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L166)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L139)

___

### toJson

▸ **toJson**(): [`DynamicSDFFontAtlasJson`](../interfaces/DynamicSDFFontAtlasJson.md)

#### Returns

[`DynamicSDFFontAtlasJson`](../interfaces/DynamicSDFFontAtlasJson.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L259)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L268)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L170)

___

### getAutoFontFamily

▸ `Static` **getAutoFontFamily**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L301)

___

### toFontFamily

▸ `Static` **toFontFamily**(`fontFamily`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:289](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L289)

___

### toPowerOf2

▸ `Static` **toPowerOf2**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L293)
