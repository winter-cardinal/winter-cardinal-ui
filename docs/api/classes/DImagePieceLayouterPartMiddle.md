[Winter Cardinal UI - v0.160.0](../index.md) / DImagePieceLayouterPartMiddle

# Class: DImagePieceLayouterPartMiddle

## Hierarchy

- [`DImagePieceLayouterPart`](DImagePieceLayouterPart.md)

  ↳ **`DImagePieceLayouterPartMiddle`**

## Table of contents

### Constructors

- [constructor](DImagePieceLayouterPartMiddle.md#constructor)

### Properties

- [pieces](DImagePieceLayouterPartMiddle.md#pieces)
- [size](DImagePieceLayouterPartMiddle.md#size)

### Methods

- [add](DImagePieceLayouterPartMiddle.md#add)
- [clear](DImagePieceLayouterPartMiddle.md#clear)
- [execute](DImagePieceLayouterPartMiddle.md#execute)

## Constructors

### constructor

• **new DImagePieceLayouterPartMiddle**()

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[constructor](DImagePieceLayouterPart.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L7)

## Properties

### pieces

• **pieces**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[pieces](DImagePieceLayouterPart.md#pieces)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:4](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L4)

___

### size

• **size**: `number`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[size](DImagePieceLayouterPart.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L5)

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

#### Overrides

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[add](DImagePieceLayouterPart.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts#L5)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[clear](DImagePieceLayouterPart.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L12)

___

### execute

▸ **execute**(`ptop`, `pbottom`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ptop` | `number` |
| `pbottom` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts#L11)
