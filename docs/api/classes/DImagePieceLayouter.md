[Winter Cardinal UI - v0.407.0](../index.md) / DImagePieceLayouter

# Class: DImagePieceLayouter

## Table of contents

### Constructors

- [constructor](DImagePieceLayouter.md#constructor)

### Properties

- [border](DImagePieceLayouter.md#border)
- [padding](DImagePieceLayouter.md#padding)
- [text](DImagePieceLayouter.md#text)

### Accessors

- [height](DImagePieceLayouter.md#height)
- [width](DImagePieceLayouter.md#width)

### Methods

- [add](DImagePieceLayouter.md#add)
- [clear](DImagePieceLayouter.md#clear)
- [execute](DImagePieceLayouter.md#execute)
- [set](DImagePieceLayouter.md#set)

## Constructors

### constructor

• **new DImagePieceLayouter**(): [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Returns

[`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L13)

## Properties

### border

• **border**: [`DImagePieceLayouterPartContainer`](DImagePieceLayouterPartContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L11)

___

### padding

• **padding**: [`DImagePieceLayouterPartContainer`](DImagePieceLayouterPartContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L10)

___

### text

• **text**: [`DImagePieceLayouterPartContainer`](DImagePieceLayouterPartContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L9)

## Accessors

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L71)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L67)

## Methods

### add

▸ **add**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`DImagePiece`](../interfaces/DImagePiece.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L25)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L19)

___

### execute

▸ **execute**(`padding`, `textAlign`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | [`DPadding`](../interfaces/DPadding.md) |
| `textAlign` | [`DTextPieceAlign`](../interfaces/DTextPieceAlign.md) |
| `width` | ``null`` \| `number` |
| `height` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L46)

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

[src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-piece-layouter.ts#L42)
