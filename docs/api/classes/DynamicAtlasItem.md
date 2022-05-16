[Winter Cardinal UI - v0.165.0](../index.md) / DynamicAtlasItem

# Class: DynamicAtlasItem

## Hierarchy

- **`DynamicAtlasItem`**

  ↳ [`DynamicAtlasItemEmpty`](DynamicAtlasItemEmpty.md)

  ↳ [`DynamicAtlasItemFontAtlas`](DynamicAtlasItemFontAtlas.md)

  ↳ [`DynamicAtlasItemImage`](DynamicAtlasItemImage.md)

  ↳ [`DynamicAtlasItemText`](DynamicAtlasItemText.md)

  ↳ [`DynamicAtlasItemWhite`](DynamicAtlasItemWhite.md)

## Table of contents

### Constructors

- [constructor](DynamicAtlasItem.md#constructor)

### Properties

- [frame](DynamicAtlasItem.md#frame)
- [height](DynamicAtlasItem.md#height)
- [id](DynamicAtlasItem.md#id)
- [ref](DynamicAtlasItem.md#ref)
- [strokeWidth](DynamicAtlasItem.md#strokewidth)
- [texture](DynamicAtlasItem.md#texture)
- [width](DynamicAtlasItem.md#width)

### Methods

- [applyFrame](DynamicAtlasItem.md#applyframe)
- [destroy](DynamicAtlasItem.md#destroy)
- [render](DynamicAtlasItem.md#render)

## Constructors

### constructor

• **new DynamicAtlasItem**(`id`, `width`, `height`, `strokeWidth`, `baseTexture`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `width` | `number` |
| `height` | `number` |
| `strokeWidth` | `number` |
| `baseTexture` | `BaseTexture` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L18)

## Properties

### frame

• **frame**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L11)

___

### height

• **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L15)

___

### id

• **id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L9)

___

### ref

• **ref**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L10)

___

### strokeWidth

• **strokeWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L16)

___

### texture

• **texture**: `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L12)

___

### width

• **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L14)

## Methods

### applyFrame

▸ **applyFrame**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L38)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L48)

___

### render

▸ `Abstract` **render**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L36)
