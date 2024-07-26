[Winter Cardinal UI - v0.442.0](../index.md) / DImagePieceLayouterPartMiddle

# Class: DImagePieceLayouterPartMiddle

## Hierarchy

- [`DImagePieceLayouterPart`](DImagePieceLayouterPart.md)

  ↳ **`DImagePieceLayouterPartMiddle`**

## Table of contents

### Constructors

- [constructor](DImagePieceLayouterPartMiddle.md#constructor)

### Properties

- [\_bounds](DImagePieceLayouterPartMiddle.md#_bounds)
- [\_margin](DImagePieceLayouterPartMiddle.md#_margin)
- [\_pieces](DImagePieceLayouterPartMiddle.md#_pieces)
- [\_size](DImagePieceLayouterPartMiddle.md#_size)
- [\_text](DImagePieceLayouterPartMiddle.md#_text)

### Accessors

- [size](DImagePieceLayouterPartMiddle.md#size)

### Methods

- [add](DImagePieceLayouterPartMiddle.md#add)
- [clear](DImagePieceLayouterPartMiddle.md#clear)
- [execute](DImagePieceLayouterPartMiddle.md#execute)
- [set](DImagePieceLayouterPartMiddle.md#set)

## Constructors

### constructor

• **new DImagePieceLayouterPartMiddle**(): [`DImagePieceLayouterPartMiddle`](DImagePieceLayouterPartMiddle.md)

#### Returns

[`DImagePieceLayouterPartMiddle`](DImagePieceLayouterPartMiddle.md)

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[constructor](DImagePieceLayouterPart.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L13)

## Properties

### \_bounds

• `Protected` **\_bounds**: `Rectangle`[]

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_bounds](DImagePieceLayouterPart.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L7)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_margin](DImagePieceLayouterPart.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L9)

___

### \_pieces

• `Protected` **\_pieces**: [`DImagePiece`](../interfaces/DImagePiece.md)[]

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_pieces](DImagePieceLayouterPart.md#_pieces)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L6)

___

### \_size

• `Protected` **\_size**: `number`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_size](DImagePieceLayouterPart.md#_size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L8)

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[_text](DImagePieceLayouterPart.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L11)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

DImagePieceLayouterPart.size

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L34)

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

#### Overrides

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[add](DImagePieceLayouterPart.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts#L6)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[DImagePieceLayouterPart](DImagePieceLayouterPart.md).[clear](DImagePieceLayouterPart.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L20)

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

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-middle.ts#L12)

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

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part.ts#L30)
