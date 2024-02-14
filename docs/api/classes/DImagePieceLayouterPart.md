[Winter Cardinal UI - v0.407.0](../index.md) / DImagePieceLayouterPart

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

- [\_bounds](DImagePieceLayouterPart.md#_bounds)
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

• **new DImagePieceLayouterPart**(): [`DImagePieceLayouterPart`](DImagePieceLayouterPart.md)

#### Returns

[`DImagePieceLayouterPart`](DImagePieceLayouterPart.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L13)

## Properties

### \_bounds

• `Protected` **\_bounds**: `Rectangle`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L7)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L9)

___

### \_pieces

• `Protected` **\_pieces**: [`DImagePiece`](../interfaces/DImagePiece.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L6)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L8)

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L11)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L34)

## Methods

### add

▸ **add**(`image`, `bound`, `margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`DImagePiece`](../interfaces/DImagePiece.md) |
| `bound` | `Rectangle` |
| `margin` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L28)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L20)

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

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L30)
