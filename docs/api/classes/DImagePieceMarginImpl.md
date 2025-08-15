[Winter Cardinal UI - v0.457.0](../index.md) / DImagePieceMarginImpl

# Class: DImagePieceMarginImpl

## Implements

- [`DImagePieceMargin`](../interfaces/DImagePieceMargin.md)

## Table of contents

### Constructors

- [constructor](DImagePieceMarginImpl.md#constructor)

### Properties

- [\_horizontal](DImagePieceMarginImpl.md#_horizontal)
- [\_parent](DImagePieceMarginImpl.md#_parent)
- [\_vertical](DImagePieceMarginImpl.md#_vertical)

### Accessors

- [horizontal](DImagePieceMarginImpl.md#horizontal)
- [vertical](DImagePieceMarginImpl.md#vertical)

### Methods

- [onChange](DImagePieceMarginImpl.md#onchange)
- [set](DImagePieceMarginImpl.md#set)

## Constructors

### constructor

• **new DImagePieceMarginImpl**(`parent`, `theme`, `options?`): [`DImagePieceMarginImpl`](DImagePieceMarginImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DImagePieceMarginImplParent`](../interfaces/DImagePieceMarginImplParent.md) |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceMarginOptions`](../interfaces/DImagePieceMarginOptions.md) |

#### Returns

[`DImagePieceMarginImpl`](DImagePieceMarginImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L13)

## Properties

### \_horizontal

• `Protected` **\_horizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L11)

___

### \_parent

• `Protected` **\_parent**: [`DImagePieceMarginImplParent`](../interfaces/DImagePieceMarginImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L9)

___

### \_vertical

• `Protected` **\_vertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L10)

## Accessors

### horizontal

• `get` **horizontal**(): `number`

#### Returns

`number`

#### Implementation of

[DImagePieceMargin](../interfaces/DImagePieceMargin.md).[horizontal](../interfaces/DImagePieceMargin.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L34)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | `number` |

#### Returns

`void`

#### Implementation of

[DImagePieceMargin](../interfaces/DImagePieceMargin.md).[horizontal](../interfaces/DImagePieceMargin.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L38)

___

### vertical

• `get` **vertical**(): `number`

#### Returns

`number`

#### Implementation of

[DImagePieceMargin](../interfaces/DImagePieceMargin.md).[vertical](../interfaces/DImagePieceMargin.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L23)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | `number` |

#### Returns

`void`

#### Implementation of

[DImagePieceMargin](../interfaces/DImagePieceMargin.md).[vertical](../interfaces/DImagePieceMargin.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L27)

## Methods

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L61)

___

### set

▸ **set**(`vertical?`, `horizontal?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical?` | `number` |
| `horizontal?` | `number` |

#### Returns

`this`

#### Implementation of

[DImagePieceMargin](../interfaces/DImagePieceMargin.md).[set](../interfaces/DImagePieceMargin.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-piece-margin-impl.ts#L45)
