[Winter Cardinal UI - v0.160.0](../index.md) / DImagePieceLayouterPartContainer

# Class: DImagePieceLayouterPartContainer

## Table of contents

### Constructors

- [constructor](DImagePieceLayouterPartContainer.md#constructor)

### Properties

- [bottom](DImagePieceLayouterPartContainer.md#bottom)
- [center](DImagePieceLayouterPartContainer.md#center)
- [left](DImagePieceLayouterPartContainer.md#left)
- [middle](DImagePieceLayouterPartContainer.md#middle)
- [right](DImagePieceLayouterPartContainer.md#right)
- [text](DImagePieceLayouterPartContainer.md#text)
- [top](DImagePieceLayouterPartContainer.md#top)

### Accessors

- [height](DImagePieceLayouterPartContainer.md#height)
- [width](DImagePieceLayouterPartContainer.md#width)

### Methods

- [add](DImagePieceLayouterPartContainer.md#add)
- [clear](DImagePieceLayouterPartContainer.md#clear)
- [execute](DImagePieceLayouterPartContainer.md#execute)
- [set](DImagePieceLayouterPartContainer.md#set)

## Constructors

### constructor

• **new DImagePieceLayouterPartContainer**()

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L23)

## Properties

### bottom

• **bottom**: [`DImagePieceLayouterPartBottom`](DImagePieceLayouterPartBottom.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L19)

___

### center

• **center**: [`DImagePieceLayouterPartCenter`](DImagePieceLayouterPartCenter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L15)

___

### left

• **left**: [`DImagePieceLayouterPartLeft`](DImagePieceLayouterPartLeft.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L14)

___

### middle

• **middle**: [`DImagePieceLayouterPartMiddle`](DImagePieceLayouterPartMiddle.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L18)

___

### right

• **right**: [`DImagePieceLayouterPartRight`](DImagePieceLayouterPartRight.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L16)

___

### text

• `Optional` **text**: [`DDynamicText`](DDynamicText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L21)

___

### top

• **top**: [`DImagePieceLayouterPartTop`](DImagePieceLayouterPartTop.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L17)

## Accessors

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L95)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L83)

## Methods

### add

▸ **add**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`DImagePiece`](DImagePiece.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L42)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L32)

___

### execute

▸ **execute**(`pleft`, `ptop`, `pright`, `pbottom`, `textAlign`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pleft` | `number` |
| `ptop` | `number` |
| `pright` | `number` |
| `pbottom` | `number` |
| `textAlign` | [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md) |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L107)

___

### set

▸ **set**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter-part-container.ts#L79)
