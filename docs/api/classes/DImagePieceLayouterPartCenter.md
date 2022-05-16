[Winter Cardinal UI - v0.165.0](../index.md) / DImagePieceLayouterPartCenter

# Class: DImagePieceLayouterPartCenter

## Hierarchy

- [`DImagePieceLayouterPart`](DImagePieceLayouterPart.md)

  ↳ **`DImagePieceLayouterPartCenter`**

## Table of contents

### Constructors

- [constructor](DImagePieceLayouterPartCenter.md#constructor)

### Properties

- [\_margin](DImagePieceLayouterPartCenter.md#_margin)
- [\_pieces](DImagePieceLayouterPartCenter.md#_pieces)
- [\_size](DImagePieceLayouterPartCenter.md#_size)
- [\_text](DImagePieceLayouterPartCenter.md#_text)

### Accessors

- [size](DImagePieceLayouterPartCenter.md#size)

### Methods

- [add](DImagePieceLayouterPartCenter.md#add)
- [clear](DImagePieceLayouterPartCenter.md#clear)
- [execute](DImagePieceLayouterPartCenter.md#execute)
- [set](DImagePieceLayouterPartCenter.md#set)

## Constructors

### constructor

• **new DImagePieceLayouterPartCenter**()

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[constructor](DImagePieceLayouterPart.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L11)

## Properties

### \_margin

• `Protected` **\_margin**: `number`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_margin](DImagePieceLayouterPart.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L7)

___

### \_pieces

• `Protected` **\_pieces**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_pieces](DImagePieceLayouterPart.md#_pieces)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L5)

___

### \_size

• `Protected` **\_size**: `number`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_size](DImagePieceLayouterPart.md#_size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L6)

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_text](DImagePieceLayouterPart.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L9)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

DImagePieceLayouterPart.size

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-center.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-center.ts#L5)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[clear](DImagePieceLayouterPart.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L17)

___

### execute

▸ **execute**(`pleft`, `pright`, `width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pleft` | `number` |
| `pright` | `number` |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-center.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-center.ts#L11)

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

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L31)
