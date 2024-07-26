[Winter Cardinal UI - v0.442.0](../index.md) / DynamicSDFFontAtlas

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
- [\_isTouched](DynamicSDFFontAtlas.md#_istouched)
- [\_life](DynamicSDFFontAtlas.md#_life)
- [\_width](DynamicSDFFontAtlas.md#_width)

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
- [begin](DynamicSDFFontAtlas.md#begin)
- [destroy](DynamicSDFFontAtlas.md#destroy)
- [end](DynamicSDFFontAtlas.md#end)
- [get](DynamicSDFFontAtlas.md#get)
- [newChar](DynamicSDFFontAtlas.md#newchar)
- [toJson](DynamicSDFFontAtlas.md#tojson)
- [toPowerOf2](DynamicSDFFontAtlas.md#topowerof2)
- [toString](DynamicSDFFontAtlas.md#tostring)
- [update](DynamicSDFFontAtlas.md#update)

## Constructors

### constructor

• **new DynamicSDFFontAtlas**(`fontFamily`): [`DynamicSDFFontAtlas`](DynamicSDFFontAtlas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` |

#### Returns

[`DynamicSDFFontAtlas`](DynamicSDFFontAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L33)

## Properties

### \_canvas

• `Protected` **\_canvas**: ``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L24)

___

### \_characters

• `Protected` **\_characters**: [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L26)

___

### \_font

• `Protected` **\_font**: [`DynamicSDFFontAtlasFont`](DynamicSDFFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L25)

___

### \_generator

• `Protected` **\_generator**: ``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L23)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L28)

___

### \_id

• `Protected` **\_id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L22)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L29)

___

### \_isTouched

• `Protected` **\_isTouched**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L30)

___

### \_life

• `Protected` **\_life**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L31)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L27)

## Accessors

### canvas

• `get` **canvas**(): ``null`` \| `HTMLCanvasElement`

#### Returns

``null`` \| `HTMLCanvasElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L86)

___

### characters

• `get` **characters**(): [`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Returns

[`DynamicFontAtlasCharacters`](../index.md#dynamicfontatlascharacters)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L94)

___

### font

• `get` **font**(): [`DynamicSDFFontAtlasFont`](DynamicSDFFontAtlasFont.md)

#### Returns

[`DynamicSDFFontAtlasFont`](DynamicSDFFontAtlasFont.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L68)

• `set` **font**(`font`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `font` | [`DynamicSDFFontAtlasFont`](DynamicSDFFontAtlasFont.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L72)

___

### generator

• `get` **generator**(): ``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Returns

``null`` \| [`DynamicSDFFontGenerator`](DynamicSDFFontGenerator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L90)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L82)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L64)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L249)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L78)

## Methods

### add

▸ **add**(`characters`, `nacharacters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `characters` | `string`[] |
| `nacharacters` | `string`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L139)

___

### begin

▸ **begin**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L98)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L266)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L107)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L157)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L132)

___

### toJson

▸ **toJson**(): [`DynamicSDFFontAtlasJson`](../interfaces/DynamicSDFFontAtlasJson.md)

#### Returns

[`DynamicSDFFontAtlasJson`](../interfaces/DynamicSDFFontAtlasJson.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L253)

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

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L280)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L262)

___

### update

▸ **update**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/dynamic-sdf-font-atlas.ts#L161)
