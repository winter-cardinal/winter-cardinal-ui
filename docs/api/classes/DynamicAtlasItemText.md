[Winter Cardinal UI - v0.167.0](../index.md) / DynamicAtlasItemText

# Class: DynamicAtlasItemText

## Hierarchy

- [`DynamicAtlasItem`](DynamicAtlasItem.md)

  ↳ **`DynamicAtlasItemText`**

## Table of contents

### Constructors

- [constructor](DynamicAtlasItemText.md#constructor)

### Properties

- [\_text](DynamicAtlasItemText.md#_text)
- [frame](DynamicAtlasItemText.md#frame)
- [height](DynamicAtlasItemText.md#height)
- [id](DynamicAtlasItemText.md#id)
- [ref](DynamicAtlasItemText.md#ref)
- [strokeWidth](DynamicAtlasItemText.md#strokewidth)
- [texture](DynamicAtlasItemText.md#texture)
- [width](DynamicAtlasItemText.md#width)

### Methods

- [applyFrame](DynamicAtlasItemText.md#applyframe)
- [destroy](DynamicAtlasItemText.md#destroy)
- [render](DynamicAtlasItemText.md#render)

## Constructors

### constructor

• **new DynamicAtlasItemText**(`id`, `text`, `baseTexture`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `Text` |
| `baseTexture` | `BaseTexture` |

#### Overrides

[DynamicAtlasItem](DynamicAtlasItem.md).[constructor](DynamicAtlasItem.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item-text.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item-text.ts#L12)

## Properties

### \_text

• `Protected` **\_text**: `Text`

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item-text.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item-text.ts#L10)

___

### frame

• **frame**: `Rectangle`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[frame](DynamicAtlasItem.md#frame)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L11)

___

### height

• **height**: `number`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[height](DynamicAtlasItem.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L15)

___

### id

• **id**: `string`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[id](DynamicAtlasItem.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L9)

___

### ref

• **ref**: `number`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[ref](DynamicAtlasItem.md#ref)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L10)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[strokeWidth](DynamicAtlasItem.md#strokewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L16)

___

### texture

• **texture**: `Texture`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[texture](DynamicAtlasItem.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L12)

___

### width

• **width**: `number`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[width](DynamicAtlasItem.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L14)

## Methods

### applyFrame

▸ **applyFrame**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[applyFrame](DynamicAtlasItem.md#applyframe)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L38)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicAtlasItem](DynamicAtlasItem.md).[destroy](DynamicAtlasItem.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item.ts#L48)

___

### render

▸ **render**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[DynamicAtlasItem](DynamicAtlasItem.md).[render](DynamicAtlasItem.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/util/dynamic-atlas-item-text.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/dynamic-atlas-item-text.ts#L17)
