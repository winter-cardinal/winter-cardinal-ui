[Winter Cardinal UI - v0.194.0](../index.md) / DImagePieceLayouterPartLeft

# Class: DImagePieceLayouterPartLeft

## Hierarchy

- [`DImagePieceLayouterPart`](DImagePieceLayouterPart.md)

  ↳ **`DImagePieceLayouterPartLeft`**

## Table of contents

### Constructors

- [constructor](DImagePieceLayouterPartLeft.md#constructor)

### Properties

- [\_margin](DImagePieceLayouterPartLeft.md#_margin)
- [\_pieces](DImagePieceLayouterPartLeft.md#_pieces)
- [\_size](DImagePieceLayouterPartLeft.md#_size)
- [\_text](DImagePieceLayouterPartLeft.md#_text)

### Accessors

- [size](DImagePieceLayouterPartLeft.md#size)

### Methods

- [add](DImagePieceLayouterPartLeft.md#add)
- [clear](DImagePieceLayouterPartLeft.md#clear)
- [execute](DImagePieceLayouterPartLeft.md#execute)
- [set](DImagePieceLayouterPartLeft.md#set)

## Constructors

### constructor

• **new DImagePieceLayouterPartLeft**()

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[constructor](DImagePieceLayouterPart.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L11)

## Properties

### \_margin

• `Protected` **\_margin**: `number`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_margin](DImagePieceLayouterPart.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L7)

___

### \_pieces

• `Protected` **\_pieces**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_pieces](DImagePieceLayouterPart.md#_pieces)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L5)

___

### \_size

• `Protected` **\_size**: `number`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_size](DImagePieceLayouterPart.md#_size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L6)

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_text](DImagePieceLayouterPart.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L9)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

DImagePieceLayouterPart.size

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L35)

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

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[add](DImagePieceLayouterPart.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L24)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[clear](DImagePieceLayouterPart.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L17)

___

### execute

▸ **execute**(`pleft`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pleft` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-left.ts:4](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-left.ts#L4)

___

### set

▸ **set**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | ``null`` \| [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[set](DImagePieceLayouterPart.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L31)
