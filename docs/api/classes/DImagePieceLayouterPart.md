[Winter Cardinal UI - v0.167.0](../index.md) / DImagePieceLayouterPart

# Class: DImagePieceLayouterPart

## Hierarchy

- **`DImagePieceLayouterPart`**

  ↳ [`DImagePieceLayouterPartBottom`](DImagePieceLayouterPartBottom.md)

  ↳ [`DImagePieceLayouterPartCenter`](DImagePieceLayouterPartCenter.md)

  ↳ [`DImagePieceLayouterPartLeft`](DImagePieceLayouterPartLeft.md)

  ↳ [`DImagePieceLayouterPartMiddle`](DImagePieceLayouterPartMiddle.md)

  ↳ [`DImagePieceLayouterPartRight`](DImagePieceLayouterPartRight.md)

  ↳ [`DImagePieceLayouterPartTop`](DImagePieceLayouterPartTop.md)

## Table of contents

### Constructors

- [constructor](DImagePieceLayouterPart.md#constructor)

### Properties

- [\_margin](DImagePieceLayouterPart.md#_margin)
- [\_pieces](DImagePieceLayouterPart.md#_pieces)
- [\_size](DImagePieceLayouterPart.md#_size)
- [\_text](DImagePieceLayouterPart.md#_text)

### Accessors

- [size](DImagePieceLayouterPart.md#size)

### Methods

- [add](DImagePieceLayouterPart.md#add)
- [clear](DImagePieceLayouterPart.md#clear)
- [set](DImagePieceLayouterPart.md#set)

## Constructors

### constructor

• **new DImagePieceLayouterPart**()

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L11)

## Properties

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L7)

___

### \_pieces

• `Protected` **\_pieces**: [`DImagePiece`](DImagePiece.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L5)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L6)

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L9)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L35)

## Methods

### add

▸ **add**(`image`, `size`, `margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`DImagePiece`](DImagePiece.md) |
| `size` | `number` |
| `margin` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L24)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L17)

___

### set

▸ **set**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | ``null`` \| [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L31)
