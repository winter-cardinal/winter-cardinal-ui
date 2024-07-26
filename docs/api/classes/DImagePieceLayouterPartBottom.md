[Winter Cardinal UI - v0.442.0](../index.md) / DImagePieceLayouterPartBottom

# Class: DImagePieceLayouterPartBottom

## Hierarchy

- [`DImagePieceLayouterPart`](DImagePieceLayouterPart.md)

  ↳ **`DImagePieceLayouterPartBottom`**

## Table of contents

### Constructors

- [constructor](DImagePieceLayouterPartBottom.md#constructor)

### Properties

- [\_bounds](DImagePieceLayouterPartBottom.md#_bounds)
- [\_margin](DImagePieceLayouterPartBottom.md#_margin)
- [\_pieces](DImagePieceLayouterPartBottom.md#_pieces)
- [\_size](DImagePieceLayouterPartBottom.md#_size)
- [\_text](DImagePieceLayouterPartBottom.md#_text)

### Accessors

- [size](DImagePieceLayouterPartBottom.md#size)

### Methods

- [add](DImagePieceLayouterPartBottom.md#add)
- [clear](DImagePieceLayouterPartBottom.md#clear)
- [execute](DImagePieceLayouterPartBottom.md#execute)
- [set](DImagePieceLayouterPartBottom.md#set)

## Constructors

### constructor

• **new DImagePieceLayouterPartBottom**(): [`DImagePieceLayouterPartBottom`](DImagePieceLayouterPartBottom.md)

#### Returns

[`DImagePieceLayouterPartBottom`](DImagePieceLayouterPartBottom.md)

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

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-bottom.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-bottom.ts#L6)

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

▸ **execute**(`pbottom`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pbottom` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-bottom.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-bottom.ts#L13)

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
